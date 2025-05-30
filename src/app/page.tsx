import { GlobalGlowEffect } from "@/components/custom/global-glow-effect";
import { FirstGrid } from "@/components/layout/first-grid";
import { SecondGrid } from "@/components/layout/second-grid";
import { ThirdGrid } from "@/components/layout/third-grid";

export default function Home() {
  return (
    <GlobalGlowEffect>
      <div className="max-sm:px-4 p-5">
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1.57fr_2fr] gap-3 max-w-[1440px] mx-auto">
          <div className="order-2 md:order-1">
            <FirstGrid />
          </div>
          <div className="order-1 md:order-2">
            <SecondGrid />
          </div>
          <div className="order-3 md:col-span-2 xl:col-span-1">
            <ThirdGrid />
          </div>
        </main>
      </div>
    </GlobalGlowEffect>
  );
}
