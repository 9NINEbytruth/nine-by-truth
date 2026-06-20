import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { PageHero, Eyebrow } from "@/components/ui";
import { site, recruitBenefits } from "@/lib/site";

export const metadata = { title: "リクルート" };

export default function RecruitPage() {
  return (
    <>
      <PageHero en="Recruit" jp="採用情報" label="Join 9NINE by truth" />

      {/* Lead */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-content items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <SmartImage
              src="/images/recruit/recruit-02.jpg"
              alt="9NINE で働くスタッフ"
              label="recruit"
              ratio="aspect-[4/5]"
              className="rounded-sm"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Message</Eyebrow>
            <h2 className="mt-7 font-mincho text-2xl leading-[1.7] tracking-wide text-ink md:text-3xl">
              技術を磨ける場所で、
              <br />
              長く働ける環境を。
            </h2>
            <p className="mt-8 jp-leading text-sm text-ink-soft">
              6年連続SILVER Prizeを支えてきたのは、一人ひとりのスタッフです。
              メンター制度で技術も不安も一緒に乗り越え、年間休日110日・産休制度で
              ライフステージが変わっても続けられる。
              「ここで働いてよかった」と思える環境づくりに、本気で取り組んでいます。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sand px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="mt-6 font-mincho text-2xl tracking-wide text-ink md:text-3xl">
              働く環境
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {recruitBenefits.map((b, i) => (
              <Reveal as="article" key={b.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col bg-paper p-8 md:p-9">
                  <h3 className="font-mincho text-lg text-ink">{b.title}</h3>
                  <p className="mt-3 jp-leading text-sm text-ink-soft">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="bg-ink px-6 py-20 text-paper md:py-24">
        <div className="mx-auto grid max-w-content gap-12 text-center sm:grid-cols-3">
          {[
            { num: "21万円", label: "新卒初任給" },
            { num: "110日", label: "年間休日" },
            { num: "13,000円", label: "体験入社" },
          ].map((n, i) => (
            <Reveal key={n.label} delay={i * 100}>
              <p className="font-cormorant text-4xl font-light tracking-wide text-paper md:text-5xl">
                {n.num}
              </p>
              <p className="mt-3 text-xs tracking-wider2 text-paper/70">
                {n.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-narrow text-center">
          <Reveal>
            <Eyebrow>Entry</Eyebrow>
            <h2 className="mt-7 font-mincho text-2xl leading-relaxed tracking-wide text-ink md:text-3xl">
              まずは、現場の空気を。
            </h2>
            <p className="mt-6 jp-leading text-sm text-ink-soft">
              体験入社（13,000円）で、9NINE の空間と働き方を体感できます。
              採用に関する最新情報は、採用専用アカウントで発信中です。
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={site.links.recruitInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-8 py-3.5 text-xs tracking-wider2 text-paper transition-opacity duration-500 hover:opacity-80"
              >
                採用 Instagram を見る
              </a>
              <a
                href={`tel:${site.telLink}`}
                className="rounded-full border border-ink px-8 py-3.5 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                電話で問い合わせ
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
