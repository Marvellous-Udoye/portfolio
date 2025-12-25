import { HydratedView } from "@/components/custom/hydrated-view";
import { GlobalGlowEffect } from "@/components/custom/global-glow-effect";
import { FirstGrid } from "@/components/layout/first-grid";
import { SecondGrid } from "@/components/layout/second-grid";
import { ThirdGrid } from "@/components/layout/third-grid";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <GlobalGlowEffect>
      <HydratedView fallback={<Loading />}>
        <Suspense fallback={<Loading />}>
          <div className="max-sm:px-4 p-5">
            <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_1.57fr_2fr] gap-3 max-w-[1440px] mx-auto">
              <div className="order-2 lg:order-1">
                <FirstGrid />
              </div>
              <div className="order-1 lg:order-2">
                <SecondGrid />
              </div>
              <div className="order-3 lg:col-span-2 xl:col-span-1">
                <ThirdGrid />
              </div>
            </main>
          </div>
        </Suspense>
      </HydratedView>
    </GlobalGlowEffect>
  );
}

