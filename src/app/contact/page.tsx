"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  IconInstagram,
  IconFacebook,
  IconLinkedin,
  IconX,
} from "@/components/SocialIcons";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+32 472 35 63 14",
    href: "tel:+32472356314",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@studio-73.be",
    href: "mailto:info@studio-73.be",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Bruxelles, Belgique",
    href: null,
  },
];

const socials = [
  { icon: IconInstagram, href: "https://instagram.com/studio73.be", label: "Instagram", handle: "@studio73.be" },
  { icon: IconFacebook, href: "https://facebook.com/Studio73.be", label: "Facebook", handle: "@Studio73" },
  { icon: IconLinkedin, href: "https://linkedin.com/company/studio-73", label: "LinkedIn", handle: "Studio 73" },
  { icon: IconX, href: "https://x.com/studio73", label: "X", handle: "@studio73" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Parlons ensemble
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact</h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Studio 73 est basé à Bruxelles. Nous travaillons sur rendez-vous,
            en présentiel ou à distance, selon ce qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info + Social */}
          <div>
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-8">
                Où nous trouver
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">
                  Réseaux sociaux
                </h3>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                        <social.icon size={18} />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-accent transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <AnimatedSection delay={0.15}>
            <div className="p-8 md:p-10 rounded-3xl border border-border bg-muted">
              <h2 className="text-2xl font-bold mb-2">
                Contactez-nous !
              </h2>
              <p className="text-muted-foreground mb-8">
                Une idée ? Un projet en tête ? N&apos;hésitez pas, écrivez-nous
                dès maintenant !
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Votre numéro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Envoyer
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
