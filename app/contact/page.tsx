import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = { title: "お問い合わせ" };

const channels = [
  {
    en: "Reservation",
    title: "ご予約",
    body: "空き状況の確認・ご予約は Hot Pepper Beauty が便利です。",
    href: site.links.hotpepper,
    cta: "Hot Pepper Beauty",
  },
  {
    en: "Instagram",
    title: "サロンの様子",
    body: "最新のスタイルや店内の雰囲気は Instagram で発信しています。",
    href: site.links.instagram,
    cta: "店舗 Instagram",
  },
  {
    en: "Recruit",
    title: "採用について",
    body: "求人・体験入社のお問い合わせは採用アカウントへ。",
    href: site.links.recruitInstagram,
    cta: "採用 Instagram",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero en="Contact" jp="お問い合わせ" label="Get in Touch" />

      {/* Phone */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-narrow text-center">
          <Reveal>
            <p className="text-[0.7rem] tracking-widest2 text-brass">BY PHONE</p>
            <a
              href={`tel:${site.telLink}`}
              className="mt-5 block font-cormorant text-4xl tracking-wider text-ink md:text-5xl"
            >
              {site.tel}
            </a>
            <p className="mt-4 text-xs tracking-wider2 text-ink-soft">
              平日 9:00〜18:30 ／ 土日祝 9:00〜18:00
            </p>
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-content">
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal as="article" key={c.en} delay={i * 90}>
                <div className="flex h-full flex-col bg-paper p-9 md:p-11">
                  <p className="text-[0.7rem] tracking-widest2 text-brass">
                    {c.en}
                  </p>
                  <h3 className="mt-4 font-mincho text-xl text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-4 flex-1 jp-leading text-sm text-ink-soft">
                    {c.body}
                  </p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 text-xs tracking-wider2 text-ink"
                  >
                    {c.cta}
                    <span className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
