"use client";

import { menuCategories } from "@/data/menu";

/**
 * TV menu poster for 48.5" × 28" display.
 * Use /menu/tv in browser and fullscreen on TV, or export at 3840×2216 for a static image.
 */
export default function TVMenuPage() {
  return (
    <div className="fixed inset-0 z-50 min-h-screen w-full bg-[hsl(40,15%,98%)] text-[hsl(28,12%,12%)] p-[3vw]">
      {/* Aspect ratio 48.5:28 ≈ 1.732 — fills width, height follows */}
      <div
        className="mx-auto max-w-[100vw] bg-[hsl(40,15%,98%)] shadow-lg"
        style={{ aspectRatio: "48.5 / 28" }}
      >
        {/* Header */}
        <header className="border-b-4 border-black px-[4%] pt-[2.5%] pb-[1.5%]">
          <h1 className="text-[3.6vw] font-bold tracking-tight text-black">
            Pita Bowl
          </h1>
          <p className="mt-0.5 text-[1.35vw] font-medium text-[hsl(28,8%,45%)]">
            Menu
          </p>
        </header>

        {/* Menu grid: 3 columns */}
        <main className="grid grid-cols-3 gap-[2.5%] px-[4%] py-[2.5%]">
          {menuCategories.map((category) => (
            <section key={category.id} className="flex flex-col">
              <h2 className="mb-[1%] text-[1.45vw] font-bold text-black border-b-2 border-[hsl(36,12%,90%)] pb-[0.5%]">
                {category.name}
              </h2>
              <ul className="space-y-[0.8%]">
                {category.items.map((item) => (
                  <li key={item.id} className="flex flex-col gap-0">
                    <div className="flex items-baseline justify-between gap-[1%]">
                      <span className="text-[1vw] font-semibold leading-tight">
                        {item.name}
                      </span>
                      {item.price && (
                        <span className="text-[0.95vw] font-bold text-black shrink-0">
                          ${item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-[0.72vw] leading-snug text-[hsl(28,8%,45%)]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-[hsl(36,12%,90%)] px-[4%] py-[1%] flex justify-between items-center">
          <p className="text-[0.8vw] text-[hsl(28,8%,45%)]">
            Order online · Fresh daily · No seed oils
          </p>
          <p className="text-[0.8vw] font-semibold text-black">
            Pita Bowl
          </p>
        </footer>
      </div>
    </div>
  );
}
