import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden mask-image: linear-gradient(to right, transparent, black, transparent);">
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="Acme Logo" />
            <Image src={quantumLogo} alt="Quantum Logo" />
            <Image src={echoLogo} alt="Echo Logo" />
            <Image src={celestialLogo} alt="Celestial Logo" />
            <Image src={pulseLogo} alt="Pulse Logo" />
            <Image src={apexLogo} alt="Apex Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
