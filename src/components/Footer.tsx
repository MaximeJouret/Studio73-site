import Link from "next/link";
import Image from "next/image";
import { IconInstagram, IconFacebook, IconLinkedin, IconX } from "./SocialIcons";

const socials = [
  { icon: IconInstagram, href: "https://instagram.com/studio73.be", label: "Instagram" },
  { icon: IconFacebook, href: "https://www.facebook.com/profile.php?id=61576844498498", label: "Facebook" },
  { icon: IconLinkedin, href: "https://www.linkedin.com/company/studio73-be", label: "LinkedIn" },
  { icon: IconX, href: "https://x.com/studio_73_", label: "X" },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo_blanc.svg"
                alt="Studio 73"
                width={140}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Agence créative belge fondée à Bruxelles. Nous développons des
              projets créatifs adaptés à chaque besoin.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+32472356314" className="hover:text-foreground transition-colors">
                  +32 472 35 63 14
                </a>
              </li>
              <li>
                <a href="mailto:info@studio-73.be" className="hover:text-foreground transition-colors">
                  info@studio-73.be
                </a>
              </li>
              <li className="text-muted-foreground">Bruxelles, Belgique</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Studio 73. Tous droits réservés.
          </p>
          <nav className="flex gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
