export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Método no permitido" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      ok: false,
      fallback: true,
      message: "Envío automático en espera de configuración (RESEND_API_KEY).",
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const briefText = String(body?.briefText ?? "").trim();

    if (!briefText) {
      return res.status(400).json({
        ok: false,
        message: "El brief está vacío. Completa al menos un campo.",
      });
    }

    const projectType = String(body?.projectType ?? "").trim();
    const organization = String(body?.organization ?? "").trim();
    const contact = String(body?.contact ?? "").trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    const toEmail = process.env.BRIEF_TO_EMAIL || "contacto@salviabiot.com";
    const fromEmail =
      process.env.BRIEF_FROM_EMAIL ||
      "Savia · SalviaBIoT <savia@salviabiot.com>";

    const subject = `[Brief SalviaBIoT]${
      projectType ? ` ${projectType}` : " Nueva solicitud de piloto / alianza"
    }${organization ? ` · ${organization}` : ""}`;

    const escapedBrief = briefText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const html = `
      <div style="background:#0B1117;color:#F8FAFC;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;padding:24px;border-radius:12px;border:1px solid #10B98133;">
        <p style="color:#10B981;font-size:12px;margin:0 0 8px 0;letter-spacing:0.1em;text-transform:uppercase;">
          // Nuevo Brief Capturado por Savia · salviabiot.com
        </p>
        <h2 style="margin:0 0 16px 0;font-family:sans-serif;color:#F8FAFC;font-size:18px;">
          ${subject}
        </h2>
        <pre style="background:#111922;color:#CBD5E1;padding:16px;border-radius:8px;white-space:pre-wrap;line-height:1.6;font-size:13px;border:1px solid #ffffff14;">${escapedBrief}</pre>
      </div>
    `;

    const payload = {
      from: fromEmail,
      to: [toEmail],
      subject,
      text: briefText,
      html,
      ...(isEmail ? { reply_to: contact } : {}),
    };

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resendResp.ok) {
      const errDetail = await resendResp.text();
      return res.status(502).json({
        ok: false,
        fallback: true,
        message: "No se pudo entregar el correo vía Resend.",
        detail: errDetail,
      });
    }

    const data = await resendResp.json();
    return res.status(200).json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      fallback: true,
      message: "Error procesando el brief.",
    });
  }
}
