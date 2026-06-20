import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site, menus } from "@/lib/site";

export const metadata = { title: "メニュー" };

export default function MenuPage() {
  return (
    <>
      <PageHero en="Menu" jp="メニュー" label="Our Services" />

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <p className="jp-leading text-sm text-ink-soft">
              髪質改善・縮毛矯正・美髪メニューを軸に、カット、カラー、個室スパまで。
              料金の詳細・ご予約は Hot Pepper Beauty をご確認ください。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-narrow">
          <div className="flex flex-col gap-16 md:gap-20">
            {menus.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 80}>
                <div>
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-cormorant text-3xl font-light tracking-wide text-ink">
                      {group.group}
                    </h2>
                    <span className="text-xs tracking-wider2 text-brass">
                      {group.en}
                    </span>
                  </div>
                  <div className="mt-8 flex flex-col">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                      >
                        <span className="font-mincho text-base text-ink">
                          {item.name}
                        </span>
                        <span className="text-right text-xs tracking-wide text-ink-soft">
                          {item.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 text-center">
              <a
                href={site.links.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-ink px-10 py-4 text-xs tracking-wider2 text-paper transition-opacity duration-500 hover:opacity-80"
              >
                料金・ご予約は Hot Pepper Beauty へ
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
