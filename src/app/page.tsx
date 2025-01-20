import { Hero } from "@/sections/Hero";
import { Navbar } from "../sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </div>
  );
}
