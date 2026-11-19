# 🌱 SalviaBIoT — Biological Internet of Things (`salviabiot-web`)

> **Infraestructura de inteligencia ambiental y telemetría biológica para dar voz digital a los ecosistemas vivos.**

[![Estado](https://img.shields.io/badge/Estado-En%20Despliegue-00ff88?style=flat-square&labelColor=030a07)](https://salviabiot.com)
[![Web Oficial](https://img.shields.io/badge/Web-salviabiot.com-10b981?style=flat-square&labelColor=030a07)](https://salviabiot.com)
[![Ubicación](https://img.shields.io/badge/Origen-Pereira%2C%20Colombia-f97316?style=flat-square&labelColor=030a07)](https://salviabiot.com)

---

## 🧭 Visión del Ecosistema

**SalviaBIoT** (*Biological Internet of Things*) integra hardware de bajo consumo en campo, procesamiento en el borde (*Edge AI*) e inteligencia artificial modular para escuchar, interpretar y proteger ecosistemas estratégicos como bosques altoandinos, páramos y cuencas hídricas.

---

## 🏗️ Arquitectura del Sistema (La Tríada)

| Componente | Rol en el Ecosistema | Función Principal |
| :--- | :--- | :--- |
| **`TerraBit Station`** | **Percepción (Hardware)** | Nodos autónomos de monitoreo microclimático e hidrológico desplegados en campo con filtrado EMA y almacenamiento *Store-and-Forward*. |
| **`Savia`** | **Cognición (Core AI)** | Motor central de inteligencia ambiental en **`Platform_SalviaBIoT`** que modela series de tiempo y detecta anomalías ecológicas tempranas. |
| **`Mandarín`** | **Interfaz (Subagente)** | Orquestador modular que fragmenta flujos complejos de telemetría (JSON) en *gajos* claros y alertas accionables. |

---

## ⚙️ Arquitectura Web Modular (`v1.0`)

Stack alineado 100% con el frontend de **`Platform_SalviaBIoT`**:
- **Vite 8 + React 19 + TypeScript (modo estricto)**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Fuentes locales empaquetadas** (`@fontsource/plus-jakarta-sans` y `@fontsource/jetbrains-mono`, cero dependencia de CDN externos)
- **Despliegue continuo:** Vercel conectado a `main` -> `https://salviabiot.com` (DNS vía Cloudflare)

### Estructura de Carpetas
```text
src/
├── assets/                  # Avatar oficial de Mandarín y recursos gráficos
├── components/
│   ├── common/              # MandarinoAvatar, SectionHeader, PlatformDialog (<dialog>)
│   ├── layout/              # Navbar, Footer
│   └── sections/            # Hero, EcosystemTriad, MandarinShowcase, DataCycle, PlatformGateway, Manifesto
├── data/                    # Configuración del ecosistema y escenarios de telemetría
└── styles/                  # Tokens Cyberpunk Bio-Tech y animaciones compositor-only
```

### Variables de Entorno (Integración con `Platform_SalviaBIoT`)
| Variable | Valor por defecto | Propósito |
| :--- | :--- | :--- |
| `VITE_PLATFORM_URL` | `https://app.salviabiot.com` | URL pública del software central `Platform_SalviaBIoT`. |
| `VITE_PLATFORM_LIVE` | `false` | Cambiar a `true` en Vercel cuando el subdominio `app.salviabiot.com` esté en línea para habilitar el botón de ingreso directo. |

### Comandos Locales
```bash
npm install
npm run dev       # Servidor de desarrollo local
npm run typecheck # Validación TypeScript estricta
npm run build     # Compilación de producción (dist/)
```

---

## 📬 Contacto y Alianzas

* **Sitio Web:** [salviabiot.com](https://salviabiot.com)
* **Fundador:** Daniel Felipe Duque Lizarralde — [`felipe@salviabiot.com`](mailto:felipe@salviabiot.com)
* **Consultas y Alianzas:** [`contacto@salviabiot.com`](mailto:contacto@salviabiot.com)
* **Notificaciones del Sistema:** [`savia@salviabiot.com`](mailto:savia@salviabiot.com)
