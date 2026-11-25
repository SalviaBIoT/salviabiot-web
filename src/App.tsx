import { useState } from "react";
import { PlatformDialog } from "./components/common/PlatformDialog";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AIEcosystemModule } from "./components/sections/AIEcosystemModule";
import { DataCycleSection } from "./components/sections/DataCycleSection";
import { EcosystemOverview } from "./components/sections/EcosystemOverview";
import { HeroSection } from "./components/sections/HeroSection";
import { ManifestoSection } from "./components/sections/ManifestoSection";
import { PlatformGateway } from "./components/sections/PlatformGateway";
import { StationsModule } from "./components/sections/StationsModule";

export function App() {
  const [motionPaused, setMotionPaused] = useState(false);
  const [platformDialogOpen, setPlatformDialogOpen] = useState(false);

  return (
    <div data-motion={motionPaused ? "paused" : "running"} className="min-h-dvh">
      <Navbar onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <HeroSection onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />
        <EcosystemOverview />
        <StationsModule />
        <AIEcosystemModule
          motionPaused={motionPaused}
          onToggleMotion={() => setMotionPaused((prev) => !prev)}
        />
        <DataCycleSection />
        <ManifestoSection />
        <PlatformGateway
          onOpenPlatformGateway={() => setPlatformDialogOpen(true)}
        />
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
