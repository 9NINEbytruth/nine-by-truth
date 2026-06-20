@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
}

* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

body {
  background-color: #ffffff;
  color: #1a1a1a;
  font-feature-settings: "palt" 1;
}

/* Vertical rhythm for Japanese reading */
.jp-leading {
  line-height: 2.1;
  letter-spacing: 0.04em;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1s var(--ease-soft), transform 1s var(--ease-soft);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
  }
}

/* Thin elegant hairline */
.hairline {
  height: 1px;
  background-color: #e5e0d8;
}

/* Image placeholder shimmer until real photo lands */
.img-placeholder {
  background:
    linear-gradient(135deg, #f5f2ee 0%, #eae4db 100%);
  position: relative;
  overflow: hidden;
}
.img-placeholder::after {
  content: attr(data-label);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #a89178;
}
