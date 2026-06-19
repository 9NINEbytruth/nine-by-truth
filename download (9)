"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-cormorant text-xl tracking-wider2 text-ink md:text-2xl"
        >
          9NINE<span className="text-brass"> by truth</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative text-xs tracking-wider2 text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-500 ease-out-soft group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href={site.links.hotpepper}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-ink px-5 py-2 text-xs tracking-wider2 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper lg:inline-block"
        >
          ご予約
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-paper transition-all duration-500 ease-out-soft lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-10">
          <nav className="flex flex-col gap-7">
            {nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-cormorant text-3xl tracking-wide text-ink">
                  {n.label}
                </span>
                <span className="text-xs tracking-wider2 text-brass">
                  {n.jp}
                </span>
              </Link>
            ))}
          </nav>
          <a
            href={site.links.hotpepper}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block w-fit rounded-full bg-ink px-8 py-3 text-xs tracking-wider2 text-paper"
          >
            ご予約はこちら
          </a>
        </div>
      </div>
    </header>
  );
}
