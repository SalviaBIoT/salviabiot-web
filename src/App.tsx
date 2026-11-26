import { useState } from "react";
import { PlatformDialog } from "./components/common/PlatformDialog";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AIEcosystemModule } from "./components/sections/AIEcosystemModule";
import { BriefBuilderSection } from "./components/sections/BriefBuilderSection";
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

      <main>
        <HeroSection onOpenPlatformGateway={() => setPlatformDialogOpen(true)} />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
          <BriefBuilderSection />
        </div>
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
