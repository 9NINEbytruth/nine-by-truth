import Reveal from "@/components/Reveal";
import { PageHero, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = { title: "アクセス" };

export default function AccessPage() {
  return (
    <>
      <PageHero en="Access" jp="アクセス" label="Shop Information" />

      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-content">
          <div className="grid gap-14 md:grid-cols-2 md:gap-20">
            {/* Info */}
            <Reveal>
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow>Shop</Eyebrow>
                  <p className="mt-5 font-mincho text-2xl tracking-wide text-ink">
                    {site.name}
                  </p>
                </div>

                <dl className="flex flex-col gap-7">
                  <div>
                    <dt className="text-[0.7rem] tracking-widest2 text-brass">
                      ADDRESS
                    </dt>
                    <dd className="mt-2 jp-leading text-sm text-ink">
                      {site.address.zip}
                      <br />
                      {site.address.full}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[0.7rem] tracking-widest2 text-brass">
                      TEL
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${site.telLink}`}
                        className="font-cormorant text-2xl tracking-wide text-ink"
                      >
                        {site.tel}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[0.7rem] tracking-widest2 text-brass">
                      OPEN
                    </dt>
                    <dd className="mt-2 flex flex-col gap-1 text-sm text-ink">
                      {site.hours.map((h) => (
                        <span key={h.label} className="flex gap-4">
                          <span className="w-14 text-ink-soft">{h.label}</span>
                          <span>{h.time}</span>
                        </span>
                      ))}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[0.7rem] tracking-widest2 text-brass">
                      CLOSED
                    </dt>
                    <dd className="mt-2 jp-leading text-sm text-ink">
                      {site.closed}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={site.links.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-ink px-7 py-3 text-xs tracking-wider2 text-paper transition-opacity duration-500 hover:opacity-80"
                  >
                    Google マップで開く
                  </a>
                  <a
                    href={site.links.hotpepper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ink px-7 py-3 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
                  >
                    ご予約
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={120}>
              <div className="h-full min-h-[360px] overflow-hidden rounded-sm border border-line">
                <iframe
                  title="9NINE by truth の地図"
                  src="https://maps.google.com/maps?q=%E5%BA%83%E5%B3%B6%E7%9C%8C%E6%9D%B1%E5%BA%83%E5%B3%B6%E5%B8%82%E8%A5%BF%E6%9D%A1%E8%A5%BF%E6%9C%AC%E7%94%BA27-34&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full"
                  style={{ border: 0, minHeight: 360 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
