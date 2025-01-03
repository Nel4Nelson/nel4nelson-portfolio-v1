import { About } from "@/components/sections/about";
import { ScrollingBanner } from "@/components/sections/banner";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingBanner />
      <About />
    </main>
  );
}
