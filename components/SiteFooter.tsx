import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type FooterIconName =
  | "privacy"
  | "terms"
  | "support"
  | "costs"
  | "api"
  | "report"
  | "login"
  | "contact"
  | "location"
  | "phone"
  | "clock"
  | "facebook"
  | "linkedin"
  | "instagram";

const iconContent: Record<FooterIconName, ReactNode> = {
  privacy: (
    <>
      <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  terms: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5M9 12h6M9 16h6" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 12H3v5h4v-5H4Zm16 0h1v5h-4v-5h3ZM17 19a5 5 0 0 1-5 2" />
    </>
  ),
  costs: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 8.5c-.6-.7-1.5-1-2.8-1-1.5 0-2.5.7-2.5 1.8 0 2.8 5.7 1.2 5.7 4.5 0 1.3-1.2 2.2-3 2.2-1.3 0-2.4-.4-3.1-1.2M12 6v12" />
    </>
  ),
  api: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),
  report: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5M9 16v-3m3 3v-6m3 6v-4" />
    </>
  ),
  login: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M15 8h6m-3-3 3 3-3 3" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 3h3l2 5-2 1.5a15 15 0 0 0 6.5 6.5L16 14l5 2v3c0 1.1-.9 2-2 2C10.7 21 3 13.3 3 5c0-1.1.9-2 2-2Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  facebook: (
    <path d="M14 21v-8h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5H17V3.8c-.7-.1-1.5-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.1M12 17v-7m0 3c0-1.7 4-2.1 4 0v4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
};

function FooterIcon({
  name,
  className,
}: {
  name: FooterIconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconContent[name]}
    </svg>
  );
}

const usefulLinks: {
  label: string;
  href: string;
  internal?: boolean;
  icon: FooterIconName;
}[] = [
  {
    label: "Privacy Statement",
    href: "/privacy-policy/",
    internal: true,
    icon: "privacy",
  },
  {
    label: "Terms of use",
    href: "/terms-and-conditions/",
    internal: true,
    icon: "terms",
  },
  {
    label: "Support",
    href: "https://genensys.freshdesk.com/support/login",
    icon: "support",
  },
  {
    label: "Additional Costs",
    href: "/additional-costs/",
    internal: true,
    icon: "costs",
  },
  {
    label: "API Documentation",
    href: "/api-documentation/",
    internal: true,
    icon: "api",
  },
  {
    label: "Real World Testing",
    href: "/real-world-testing/",
    icon: "report",
  },
  {
    label: "Client Login",
    href: "/client-login/",
    internal: true,
    icon: "login",
  },
  {
    label: "Contact Us",
    href: "/book-a-demo/",
    internal: true,
    icon: "contact",
  },
];

const socialLinks: {
  label: string;
  href: string;
  icon: FooterIconName;
}[] = [
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/genensysllc?mibextid=ZbWKwL",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/genensys-llc/",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/genensys13/?igshid=MTc4cDY3eTA3ZjV4YQ%3D%3D",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Genensys home">
              <Image
                src="https://genensys.com/wp-content/uploads/2023/09/logo.webp"
                alt="Genensys"
                width={180}
                height={54}
                className="footer-logo-image"
              />
            </Link>
            <p>
              Healthcare technology and operational solutions designed to
              connect systems, simplify workflows, and support healthcare
              practices.
            </p>
          </div>

          <div className="footer-column">
            <h3>Useful links</h3>
            {usefulLinks.map((link) => {
              const content = (
                <>
                  <FooterIcon name={link.icon} className="footer-link-icon" />
                  <span>{link.label}</span>
                </>
              );

              return link.internal ? (
                <Link href={link.href} key={link.label}>
                  {content}
                </Link>
              ) : (
                <a href={link.href} key={link.label}>
                  {content}
                </a>
              );
            })}
          </div>

          <div className="footer-column">
            <h3>Our Address</h3>
            <address className="footer-address">
              <div className="footer-address-item">
                <FooterIcon name="location" className="footer-icon" />
                <p>
                  7269 Winding Lake Cr
                  <br />
                  Oviedo, Florida, 32765.
                </p>
              </div>
              <a className="footer-address-item" href="tel:+18553279367">
                <FooterIcon name="phone" className="footer-icon" />
                <span>(855) 327-9367</span>
              </a>
              <div className="footer-address-item">
                <FooterIcon name="clock" className="footer-icon" />
                <span>09.00 - 17.00</span>
              </div>
            </address>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            {socialLinks.map((link) => (
              <a className="footer-social-link" href={link.href} key={link.label}>
                <FooterIcon
                  name={link.icon}
                  className="footer-social-icon"
                />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            Copyright © 2026 Developed by <Link href="/">Genensys</Link>
          </span>
          <div className="footer-legal-links">
            <Link href="/privacy-policy/">
              <FooterIcon name="privacy" className="footer-legal-icon" />
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/">
              <FooterIcon name="terms" className="footer-legal-icon" />
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
