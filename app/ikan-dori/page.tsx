import DoriNavbar from "@/components/dori-detail/DoriNavbar";
import DoriHero from "@/components/dori-detail/DoriHero";
import DoriOperations from "@/components/dori-detail/DoriOperations";
import DoriSpecs from "@/components/dori-detail/DoriSpecs";
import DoriOrderForm from "@/components/dori-detail/DoriOrderForm";
import DoriFooter from "@/components/dori-detail/DoriFooter";
import DoriDocumentation from "@/components/dori-detail/DoriDocumentation";

export default function IkanDoriLandingPage() {
  return (
    <>
      <DoriNavbar />
      <main className="min-h-screen bg-white">
        <DoriHero />
        <DoriOperations />
        <DoriDocumentation />
        <DoriSpecs />
        <DoriOrderForm />
      </main>
      <DoriFooter />
    </>
  );
}
