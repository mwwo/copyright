import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { Tools } from "@/components/tools";
import { Testimonials } from "@/components/testimonials";
import { Audience } from "@/components/audience";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Tools />
        <Testimonials />
        <Audience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
