import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { PageHero, Eyebrow } from "@/components/ui";

export const metadata = { title: "コンセプト" };

const features = [
  {
    en: "Semi-private Seats",
    title: "全席半個室",
    body: "すべての席が半個室仕様。隣を気にせず、自分だけの時間に没頭できます。施術中の会話も、静かな読書も、思いのままに。",
  },
  {
    en: "Private Spa Room",
    title: "個室スパルーム",
    body: "完全な個室で受けるヘッドスパ。照明を落とした静かな空間で、頭皮と心をゆっくりほぐしていきます。",
  },
  {
    en: "Full-flat Shampoo",
    title: "フルフラットシャンプー台",
    body: "首や腰に負担のかからないフルフラット設計。シャンプーの時間さえも、心地よい休息のひとときに。",
  },
];

export default function ConceptPage() {
  return (
    <>
      <PageHero en="Concept" jp="コンセプト" label="About 9NINE by truth" />

      {/* Lead statement */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-narrow">
          <Reveal>
            <p className="font-mincho text-2xl leading-[2] tracking-wide text-ink md:text-3xl md:leading-[2.1]">
              技術は、信頼の積み重ね。
              <br />
              空間は、また来たくなる理由。
            </p>
            <p className="mt-10 jp-leading text-sm text-ink-soft">
              9NINE by truth は、東広島・西条で髪質改善と上質な時間を提供する美容室です。
              HOT PEPPER Beauty AWARD では6年連続でSILVER Prizeをいただきました。
              それは流行を追うのではなく、一人ひとりの髪と誠実に向き合ってきた結果だと考えています。
              磨いてきた技術と、心からくつろげる空間。その両方で、お客様をお迎えします。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Big image */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <SmartImage
              src="/images/salon/salon-02.jpg"
              alt="9NINE by truth の空間"
              label="salon"
              ratio="aspect-[16/9]"
              className="rounded-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-content">
          <div className="grid gap-16 md:gap-24">
            {features.map((f, i) => (
              <Reveal key={f.en}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <SmartImage
                    src={`/images/salon/salon-0${i + 3}.jpg`}
                    alt={f.title}
                    label="salon"
                    ratio="aspect-[4/3]"
                    className="rounded-sm"
                  />
                  <div>
                    <Eyebrow>{f.en}</Eyebrow>
                    <h3 className="mt-6 font-mincho text-2xl tracking-wide text-ink md:text-3xl">
                      {f.title}
                    </h3>
                    <p className="mt-6 jp-leading text-sm text-ink-soft">
                      {f.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
