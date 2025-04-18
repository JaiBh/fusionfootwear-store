import nikeLogo from "@/assets/Nike_logo.png";
import figmaLogo from "@/assets/Figma_logo.svg";
import kronosLogo from "@/assets/Kronos_logo.svg";

import Image from "next/image";
import Link from "next/link";

function LatestNews() {
  return (
    <div className="text-center space-y-10">
      <h2 className="text-present-2">Latest News</h2>
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
        <Link
          href={"/"}
          className="grid max-lg:grid-rows-2 lg:grid-cols-2 border p-6 bg-white text-grey-900 rounded"
        >
          <div className="p-6">
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={nikeLogo}
                alt="Nike Logo"
                width={150}
                height={52}
              ></Image>
            </div>
          </div>
          <div className="max-w-[180px]">
            <span className="text-present-5">01 Jan, 2025</span>
            <h3 className="text-present-3-bold">Fashion Industry</h3>
            <p className="text-present-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="grid max-lg:grid-rows-2 lg:grid-cols-2 border p-6 bg-white text-grey-900 rounded"
        >
          <div className="p-6">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={figmaLogo}
                alt="Figma Logo"
                width={115}
                height={86.5}
              ></Image>
            </div>
          </div>
          <div className="max-w-[180px]">
            <span className="text-present-5">01 Jan, 2025</span>
            <h3 className="text-present-3-bold">Best Design Tools</h3>
            <p className="text-present-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="grid max-lg:grid-rows-2 lg:grid-cols-2 border p-6 bg-white text-grey-900 rounded"
        >
          <div className="p-6">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={kronosLogo}
                alt="Kronos Logo"
                width={153}
                height={82.6}
              ></Image>
            </div>
          </div>
          <div className="max-w-[180px]">
            <span className="text-present-5">01 Jan, 2025</span>
            <h3 className="text-present-3-bold">HR Community</h3>
            <p className="text-present-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default LatestNews;
