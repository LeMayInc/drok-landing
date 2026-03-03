import {
  Navbar,
  Hero,
  StatsBar,
  FeaturesGrid,
  CodeDemo,
  SecuritySection,
  ArchitectureSection,
  PricingSection,
  CTAFooter,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FeaturesGrid />
        <CodeDemo />
        <SecuritySection />
        <ArchitectureSection />
        <PricingSection />
        <CTAFooter />
      </main>
      <Footer />
    </>
  );
}
