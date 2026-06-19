import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = { title: "スタイル" };

const styles = [
  { n: 1, cat: "Treatment", title: "髪質改善" },
  { n: 2, cat: "Straight", title: "縮毛矯正" },
  { n: 3, cat: "Color", title: "透明感カラー" },
  { n: 4, cat: "Cut", title: "韓国風レイヤー" },
  { n: 5, cat: "Design", title: "デザインカラー" },
  { n: 6, cat: "Beauty Hair", title: "美髪スタイル" },
];

export default function StylePage() {
  return (
    <>
      <PageHero en="Style" jp="スタイル" label="Hair Gallery" />

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <p className="jp-leading text-sm text-ink-soft">
              髪質改善、縮毛矯正、透明感のあるカラー。
              一人ひとりの髪質と骨格に合わせて、扱いやすく艶やかなスタイルへ。
              実際のスタイルは Instagram・Hot Pepper Beauty でもご覧いただけます。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {styles.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 80}>
                <figure className="group">
                  <SmartImage
                    src={`/images/style/style-0${s.n}.jpg`}
                    alt={s.title}
                    label="style"
                    ratio="aspect-[3/4]"
                    className="rounded-sm"
                  />
                  <figcaption className="mt-4 flex items-baseline gap-3">
                    <span className="text-[0.65rem] tracking-widest2 text-brass">
                      {s.cat}
                    </span>
                    <span className="font-mincho text-sm text-ink">
                      {s.title}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 flex flex-wrap justify-center gap-4">
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-8 py-3.5 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                Instagram で見る
              </a>
              <a
                href={site.links.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-8 py-3.5 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                Hot Pepper Beauty
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
