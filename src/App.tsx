import { useState } from "react";
import { PlatformDialog } from "./components/common/PlatformDialog";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { DataCycleSection } from "./components/sections/DataCycleSection";
import { EcosystemTriad } from "./components/sections/EcosystemTriad";
import { HeroSection } from "./components/sections/HeroSection";
import { MandarinShowcase } from "./components/sections/MandarinShowcase";
import { ManifestoSection } from "./components/sections/ManifestoSection";
import { PlatformGateway } from "./components/sections/PlatformGateway";

export function App() {
  const [motionPaused, setMotionPaused] = useState(false);
  const [platformDialogOpen, setPlatformDialogOpen] = useState(false);

  return (
    <div data-motion={motionPaused ? "paused" : "running"} className="min-h-dvh">
      <Navbar onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <HeroSection onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />
        <EcosystemTriad />
        <MandarinShowcase
          motionPaused={motionPaused}
          onToggleMotion={() => setMotionPaused((prev) => !prev)}
        />
        <DataCycleSection />
        <PlatformGateway
          onOpenPlatformGateway={() => setPlatformDialogOpen(true)}
        />
        <ManifestoSection />
      </main>

      <Footer onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />

      <PlatformDialog
        open={platformDialogOpen}
        onClose={() => setPlatformDialogOpen(false)}
      />
    </div>
  );
}

export default App;
