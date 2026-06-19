import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-cormorant text-2xl tracking-wider2 text-ink">
              9NINE<span className="text-brass"> by truth</span>
            </p>
            <p className="mt-5 jp-leading text-sm text-ink-soft">
              {site.catch.main}
              <br />
              {site.catch.sub}
            </p>
          </div>

          {/* Sitemap */}
          <nav className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-xs tracking-wider2 text-ink-soft transition-colors hover:text-ink"
              >
                {n.label}
                <span className="ml-3 text-line">{n.jp}</span>
              </Link>
            ))}
          </nav>

          {/* Info */}
          <div className="flex flex-col gap-4 text-sm text-ink-soft">
            <p className="jp-leading">
              {site.address.zip}
              <br />
              {site.address.full}
            </p>
            <a
              href={`tel:${site.telLink}`}
              className="font-cormorant text-lg tracking-wide text-ink"
            >
              TEL {site.tel}
            </a>
            <div className="mt-2 flex gap-5 text-xs tracking-wider2">
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-brass"
              >
                Instagram
              </a>
              <a
                href={site.links.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-brass"
              >
                Hot Pepper
              </a>
              <a
                href={site.links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-brass"
              >
                Map
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[0.65rem] tracking-wider2 text-brass-light md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} 9NINE by truth. All rights reserved.</p>
          <p>Higashihiroshima, Saijo</p>
        </div>
      </div>
    </footer>
  );
}
