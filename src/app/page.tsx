import { Hero } from "@/sections/Hero";
import { Navbar } from "../sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
    </div>
  );
}
