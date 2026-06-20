"use client";

import { useState } from "react";

type Props = {
  /** path under /public, e.g. /images/hero/hero-01.jpg */
  src: string;
  alt: string;
  label?: string;
  className?: string;
  /** aspect ratio utility e.g. "aspect-[4/5]" */
  ratio?: string;
  priority?: boolean;
};

/**
 * Renders the photo at `src`. Until the real file is dropped into /public,
 * it falls back to a quiet sand-toned placeholder labelled by category,
 * so the whole site is viewable before any photography arrives.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/5]",
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      {failed ? (
        <div
          className="img-placeholder absolute inset-0"
          data-label={label ?? "photo"}
          aria-label={alt}
          role="img"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out-soft hover:scale-[1.04]"
        />
      )}
    </div>
  );
}
