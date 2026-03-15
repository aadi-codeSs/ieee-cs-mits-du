"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import logo from "@/components/images/logo.png"

// ─────────────────────────────────────────────────────────────
// STYLE CONFIG — tweak these values to adjust the navbar
// without touching layout or component logic
// ─────────────────────────────────────────────────────────────
const navConfig = {
  // Layout
  navbarHeight:     "h-[100px]",       // e.g. "h-[100px]", "h-[110px]"
  maxWidth:         "max-w-7xl",      // container max width

  // Logo
  logoHeight:       "h-[80px]",       // e.g. "h-[48px]", "h-[64px]"
  logoSizes:        "(max-width: 640px) 160px, 220px",

  // Navigation links
  linkFontSize:     "text-[13.5px]",  // e.g. "text-sm", "text-[14px]"
  linkFontWeight:   "font-[300]",     // e.g. "font-medium", "font-[600]"
  linkTracking:     "tracking-[0.02em]",
  linkPaddingX:     "px-4",           // horizontal padding per link
  linkPaddingY:     "py-2",           // vertical padding per link
  linkGap:          "gap-0.5",        // gap between nav items

  // Mobile menu
  mobileLinkSize:   "text-[14px]",
  mobileLinkWeight: "font-medium",

  // Colors (CSS values, not Tailwind — used in style props)
  colorPrimary:     "#0A2A4A",
  colorSecondary:   "#00629B",
  colorGold:        "#FFC72C",
} as const;
// ─────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const NAV_LINKS = [
  { label: "Home",           href: "/" },
  { label: "About IEEE CS",  href: "/about" },
  { label: "Events",         href: "/events" },
  { label: "Office Bearers", href: "/office-bearers" },
  { label: "Gallery",        href: "/gallery" },
  { label: "Contact",        href: "/contact" },
];

// ─────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-[#0A2A4A] transition-shadow duration-300",
        scrolled ? "shadow-lg shadow-black/40" : "shadow-sm shadow-black/20",
      ].join(" ")}
    >
      {/* Bottom gold accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFC72C]"
        aria-hidden="true"
      />

      <div className={`mx-auto ${navConfig.maxWidth} px-4 sm:px-6 lg:px-8`}>
        <div className={`flex ${navConfig.navbarHeight} items-center justify-between`}>

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="IEEE Computer Society — MITS Student Branch Chapter home"
            className="flex shrink-0 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2A4A]"
          >
            <Image
              src={logo}
              alt="IEEE Computer Society — MITS Student Branch Chapter"
              height={84}
              width={0}
              sizes={navConfig.logoSizes}
              className={`${navConfig.logoHeight} w-auto object-contain`}
              priority
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            aria-label="Primary navigation"
            className={`hidden lg:flex items-center ${navConfig.linkGap} ${inter.className}`}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}
          </nav>

          {/* ── Hamburger ── */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C] transition-colors"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className={`border-t border-white/10 bg-[#0A2A4A] px-4 pb-5 pt-2 ${inter.className}`}>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      `flex items-center gap-2.5 rounded px-3 py-2.5`,
                      `${navConfig.mobileLinkSize} ${navConfig.mobileLinkWeight}`,
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C]",
                      isActive
                        ? "text-white bg-[#00629B]/30"
                        : "text-white/80 hover:text-white hover:bg-[#00629B]/20",
                    ].join(" ")}
                    style={{
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale",
                    } as React.CSSProperties}
                  >
                    {/* Gold dot — solid when active, dimmed when not */}
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFC72C] transition-opacity duration-200"
                      style={{ opacity: isActive ? 1 : 0.45 }}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// Desktop Nav Link
// ─────────────────────────────────────────────────────────────
interface NavLinkProps {
  href:   string;
  label:  string;
  active: boolean;
}

function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "group relative rounded",
        navConfig.linkPaddingX,
        navConfig.linkPaddingY,
        navConfig.linkFontSize,
        navConfig.linkFontWeight,
        navConfig.linkTracking,
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C]",
        active
          ? "text-white bg-[#00629B]/20"
          : "text-white/80 hover:text-white hover:bg-[#00629B]/25",
      ].join(" ")}
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      } as React.CSSProperties}
    >
      {label}

      {/*
        Gold underline:
        - Active link  → always visible (scale-x-100)
        - Hovered link → animates in from the left
      */}
      <span
        aria-hidden="true"
        className={[
          "absolute bottom-[4px] left-4 right-4 h-[2px] rounded-full bg-[#FFC72C]",
          "origin-left transition-transform duration-200",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        ].join(" ")}
      />
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
// Hamburger / Close Icon
// ─────────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="4"  y1="4"  x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="4"  x2="4"  y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}