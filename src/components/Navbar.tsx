"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-background/60 backdrop-blur-2xl border-b border-foreground/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center"
          aria-label="Studio 73 — Accueil"
        >
          <Image
            src="/logo-white.png"
            alt="Studio 73"
            width={120}
            height={32}
            priority
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop center nav (glass capsule) */}
        <ul className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-2xl">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-flex items-center px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    active
                      ? "text-background"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA (desktop) */}
        <Link
          href="/contact"
          data-magnetic
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] uppercase tracking-[0.2em] font-medium border border-foreground/15 bg-foreground/5 backdrop-blur-2xl hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
        >
          Start now
          <ArrowUpRight size={14} />
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/15 bg-foreground/5 backdrop-blur-2xl text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-foreground/10 bg-background/80 backdrop-blur-2xl"
          >
            <ul className="px-6 py-8 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-2xl uppercase tracking-[-0.01em] font-medium transition-colors ${
                      pathname === link.href
                        ? "text-foreground"
                        : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-foreground/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm uppercase tracking-[0.2em] font-medium bg-foreground text-background"
                >
                  Start now <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
