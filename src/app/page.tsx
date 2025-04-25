import { GlobalGlowEffect } from "@/components/custom/global-glow-effect";
import { FirstGrid } from "@/components/layout/first-grid";
import { SecondGrid } from "@/components/layout/second-grid";
import { ThirdGrid } from "@/components/layout/third-grid";

export default function Home() {
  return (
    <GlobalGlowEffect>
      <div className="p-5">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.57fr_2fr] gap-3 max-w-[1440px] mx-auto">
          <FirstGrid />
          <SecondGrid />
          <div className="md:col-span-2 lg:col-span-1">
            <ThirdGrid />
          </div>
        </main>
      </div>
    </GlobalGlowEffect>
  );
}
