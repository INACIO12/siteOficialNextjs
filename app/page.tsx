import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import About from "@/components/home/about";
import Team from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}