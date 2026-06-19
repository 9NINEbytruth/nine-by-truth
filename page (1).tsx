import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { Eyebrow, SectionTitle } from "@/components/ui";
import { site, strengths, awards } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* hero image */}
        <div className="absolute inset-0">
          <SmartImage
            src="/images/hero/hero-01.jpg"
            alt="9NINE by truth の店内"
            label="hero"
            ratio="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/30 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-content px-6">
          <div className="max-w-xl animate-fade-up">
            <Eyebrow>Higashihiroshima · Saijo</Eyebrow>
            <h1 className="mt-8 font-mincho text-4xl font-medium leading-[1.5] tracking-wide text-ink md:text-6xl md:leading-[1.45]">
              実績が証明する技術。
              <br />
              また来たくなる空間。
            </h1>
            <p className="mt-8 jp-leading max-w-md text-sm text-ink-soft">
              髪質改善と上質なくつろぎを、東広島・西条で。
              全席半個室の静かな空間で、あなたの髪と丁寧に向き合います。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={site.links.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-8 py-3.5 text-xs tracking-wider2 text-paper transition-opacity duration-500 hover:opacity-80"
              >
                ご予約はこちら
              </a>
              <Link
                href="/concept"
                className="group inline-flex items-center gap-2 text-xs tracking-wider2 text-ink"
              >
                コンセプトを見る
                <span className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="text-[0.6rem] tracking-widest2 text-brass">SCROLL</span>
          <span className="h-10 w-px animate-pulse bg-brass-light" />
        </div>
      </section>

      {/* ───────────── AWARD signature ───────────── */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <p className="text-[0.7rem] tracking-widest2 text-brass-light">
              HOT PEPPER Beauty AWARD
            </p>
            <p className="mt-8 font-cormorant text-6xl font-light tracking-wide md:text-8xl">
              6<span className="text-brass-light">years</span>
            </p>
            <p className="mt-4 text-sm tracking-wider2 text-paper/70">
              2021〜2026　6年連続 SILVER Prize 受賞
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {awards.map((year) => (
                <span
                  key={year}
                  className="font-cormorant text-lg tracking-wider text-paper/55"
                >
                  {year}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── CONCEPT teaser ───────────── */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <SmartImage
              src="/images/salon/salon-01.jpg"
              alt="半個室のサロン空間"
              label="salon"
              ratio="aspect-[4/5]"
              className="rounded-sm"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Concept</Eyebrow>
            <h2 className="mt-7 font-mincho text-3xl leading-[1.6] tracking-wide text-ink md:text-4xl">
              静けさの中で、
              <br />
              髪と向き合う時間を。
            </h2>
            <p className="mt-8 jp-leading text-sm text-ink-soft">
              人目を気にせず過ごせる半個室。首に負担のかからないフルフラットシャンプー台。
              そして個室スパルーム。技術だけでなく、過ごす時間そのものを上質に。
              また来たくなる——そんな空間を目指しています。
            </p>
            <Link
              href="/concept"
              className="group mt-10 inline-flex items-center gap-2 text-xs tracking-wider2 text-ink"
            >
              詳しく見る
              <span className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── STRENGTHS ───────────── */}
      <section className="bg-sand px-6 py-28 md:py-40">
        <div className="mx-auto max-w-content">
          <Reveal>
            <SectionTitle en="Our Strengths" jp="9NINE が選ばれる理由" />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal as="article" key={s.no} delay={i * 100}>
                <div className="flex h-full flex-col bg-paper p-9 md:p-11">
                  <span className="font-cormorant text-3xl text-brass-light">
                    {s.no}
                  </span>
                  <p className="mt-6 text-[0.7rem] tracking-widest2 text-brass">
                    {s.en}
                  </p>
                  <h3 className="mt-3 font-mincho text-xl leading-relaxed text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-5 jp-leading text-sm text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── STYLE teaser ───────────── */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-end justify-between">
              <SectionTitle en="Style" jp="スタイル" />
              <Link
                href="/style"
                className="group hidden items-center gap-2 text-xs tracking-wider2 text-ink md:inline-flex"
              >
                すべて見る
                <span className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 100}>
                <SmartImage
                  src={`/images/style/style-0${n}.jpg`}
                  alt={`スタイル ${n}`}
                  label="style"
                  ratio="aspect-[3/4]"
                  className="rounded-sm"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/style"
              className="inline-flex items-center gap-2 text-xs tracking-wider2 text-ink"
            >
              すべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── RECRUIT teaser ───────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src="/images/recruit/recruit-01.jpg"
            alt="9NINE で働くスタッフ"
            label="recruit"
            ratio="h-full w-full"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="relative mx-auto max-w-content px-6 py-32 text-paper md:py-44">
          <Reveal>
            <p className="text-[0.7rem] tracking-widest2 text-brass-light">
              Recruit
            </p>
            <h2 className="mt-6 max-w-lg font-mincho text-3xl leading-[1.6] tracking-wide md:text-4xl">
              技術を、ここで磨く。
            </h2>
            <p className="mt-7 jp-leading max-w-md text-sm text-paper/80">
              メンター制度、年間休日110日、産休制度。
              長く、安心して、技術と向き合える環境がここにあります。
            </p>
            <Link
              href="/recruit"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-paper/60 px-8 py-3.5 text-xs tracking-wider2 text-paper transition-colors duration-500 hover:bg-paper hover:text-ink"
            >
              採用情報を見る →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── ACCESS / CTA ───────────── */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-narrow text-center">
          <Reveal>
            <Eyebrow>Reservation</Eyebrow>
            <h2 className="mt-7 font-mincho text-3xl leading-relaxed tracking-wide text-ink md:text-4xl">
              ご予約・お問い合わせ
            </h2>
            <a
              href={`tel:${site.telLink}`}
              className="mt-8 block font-cormorant text-4xl tracking-wider text-ink md:text-5xl"
            >
              {site.tel}
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={site.links.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-8 py-3.5 text-xs tracking-wider2 text-paper transition-opacity duration-500 hover:opacity-80"
              >
                Hot Pepper Beauty で予約
              </a>
              <Link
                href="/access"
                className="rounded-full border border-ink px-8 py-3.5 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                アクセス
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
