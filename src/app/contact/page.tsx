"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Send, ArrowUpRight } from "lucide-react";
import {
  IconInstagram,
  IconFacebook,
  IconLinkedin,
  IconX,
} from "@/components/SocialIcons";
import { useState } from "react";

const socials = [
  { icon: IconInstagram, href: "https://instagram.com/studio73.be", label: "Instagram", handle: "@studio73.be" },
  { icon: IconFacebook, href: "https://www.facebook.com/profile.php?id=61576844498498", label: "Facebook", handle: "@Studio73" },
  { icon: IconLinkedin, href: "https://www.linkedin.com/company/studio73-be", label: "LinkedIn", handle: "Studio 73" },
  { icon: IconX, href: "https://x.com/studio_73_", label: "X", handle: "@studio_73_" },
];

const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // TODO: remplacer par l'ID Formspree

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
            [004] Contact
          </p>
          <h1
            className="font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-10"
            style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
          >
            Contact<span className="text-foreground">.</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
            Basés à Bruxelles, disponibles partout. En présentiel ou à
            distance, selon vos préférences.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — Direct contact (big type) */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono mb-6">
                [I] Direct
              </p>
              <a
                href="mailto:info@studio-73.be"
                data-magnetic
                className="group inline-flex items-baseline gap-3 transition-opacity hover:opacity-60"
              >
                <span
                  className="font-medium uppercase tracking-[-0.04em] leading-[0.9] break-all"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 5rem)" }}
                >
                  info@studio-73.be
                </span>
                <ArrowUpRight className="shrink-0 mt-2" size={28} />
              </a>
              <div className="mt-6">
                <a
                  href="tel:+32472356314"
                  className="text-foreground/50 hover:text-foreground transition-colors text-base md:text-lg uppercase tracking-[0.2em] font-mono"
                >
                  +32 472 35 63 14
                </a>
              </div>
              <div className="mt-2 text-foreground/40 text-sm uppercase tracking-[0.2em] font-mono">
                Bruxelles, Belgique
              </div>

              <div className="mt-16">
                <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono mb-6">
                  [II] Réseaux
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnetic
                      className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md hover:border-foreground hover:bg-foreground/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <social.icon size={16} />
                        <div className="min-w-0">
                          <p className="text-sm uppercase tracking-[0.15em] font-medium truncate">
                            {social.label}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="shrink-0 opacity-50 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1}>
              <div className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono mb-6">
                  [III] Brief express
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                      <Send size={20} />
                    </div>
                    <h3 className="text-xl font-medium uppercase tracking-[-0.01em] mb-2">
                      Message envoyé.
                    </h3>
                    <p className="text-foreground/50 text-sm uppercase tracking-[0.15em]">
                      Réponse sous 24h.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: "Nom", name: "name", type: "text", placeholder: "Votre nom" },
                      { label: "Email", name: "email", type: "email", placeholder: "votre@email.com" },
                      { label: "Téléphone", name: "phone", type: "tel", placeholder: "+32 ..." },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-mono mb-2">
                          {f.label} *
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          required
                          className="w-full bg-transparent border-b border-foreground/15 px-0 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors text-base"
                          placeholder={f.placeholder}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-mono mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-foreground/15 px-0 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-none text-base"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>
                    {error && (
                      <p className="text-red-400 text-sm">
                        Une erreur est survenue. Réessayez ou contactez-nous par email.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      data-magnetic
                      className="group w-full mt-6 inline-flex items-center justify-between gap-6 bg-foreground text-background pl-6 pr-2 py-2 rounded-full uppercase tracking-[0.15em] text-sm font-medium transition-colors hover:bg-foreground/90 disabled:opacity-50"
                    >
                      <span>{loading ? "Envoi en cours..." : "Envoyer"}</span>
                      <span className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                        <Send size={14} />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
