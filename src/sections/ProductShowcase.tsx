import ProductImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip relative">
      {/* Content Section */}
      <div className="container max-w-2xl mx-auto text-center px-6">
        <div className="inline-block text-sm border border-gray-300/50 px-3 py-1 rounded-full tracking-tight text-gray-600">
          Boost Your Productivity
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          A more effective way <br /> to track progress
        </h1>
        <p className="text-lg md:text-xl text-[#010D3E] tracking-tight mt-6 leading-relaxed">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
      </div>

      {/* Product Image Section */}
      <div className="relative mt-12 flex justify-center items-center">
        <Image
          src={pyramid}
          alt="Pyramid Shape"
          width={180}
          height={180}
          className="absolute left-0 -translate-x-12 top-20 hidden md:block"
        />

        <Image
          src={ProductImage}
          alt="Product Image"
          className="w-[1080px] relative z-10"
        />

        <Image
          src={tube}
          alt="Tube Shape"
          width={180}
          height={180}
          className="absolute right-0 translate-x-12 bottom-16 hidden md:block"
        />
      </div>
    </div>
  );
};
