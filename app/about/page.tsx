import Link from "next/link";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";
import "./about.css";

export const metadata = createPageMetadata(
  "About Us",
  "Learn how Genensys connects healthcare technology, services, and practice support to simplify workflows and support care teams.",
  "/about",
);

type AboutIconName = "care" | "systems" | "operations" | "people";

const aboutIcons: Record<AboutIconName, ReactNode> = {
  care: (
    <>
      <path d="M20.8 8.7c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
      <path d="M8 12h2.5l1.5-2.5 2 5 1.3-2.5H18" />
    </>
  ),
  systems: (
    <>
      <rect x="3" y="4" width="7" height="6" rx="1.5" />
      <rect x="14" y="4" width="7" height="6" rx="1.5" />
      <rect x="8.5" y="15" width="7" height="6" rx="1.5" />
      <path d="M6.5 10v2h11v-2m-5.5 2v3" />
    </>
  ),
  operations: (
    <>
      <path d="M4 20V8l8-5 8 5v12" />
      <path d="M9 20v-6h6v6M8 9h.01M12 9h.01M16 9h.01" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8m1 3a5.5 5.5 0 0 1 3.5 5.2" />
    </>
  ),
};

function AboutIcon({ name }: { name: AboutIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {aboutIcons[name]}
    </svg>
  );
}

const focusAreas: {
  number: string;
  icon: AboutIconName;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: "care",
    title: "Healthcare software",
    description:
      "EHR, therapy, and patient-care tools that help practices organize the work behind care delivery.",
  },
  {
    number: "02",
    icon: "systems",
    title: "Connected systems",
    description:
      "Interoperability and standards-based technology designed to help healthcare information move between systems.",
  },
  {
    number: "03",
    icon: "operations",
    title: "Practice support",
    description:
      "Revenue cycle and operational services that support the everyday needs of healthcare organizations.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero">
        <div className="section-container about-hero-inner">
          <div className="about-hero-copy">
            <span className="about-eyebrow">
              <span aria-hidden="true" />
              ABOUT GENENSYS
            </span>
            <h1>
              Moving healthcare forward,
              <span> together.</span>
            </h1>
            <p>
              Genensys brings healthcare technology and operational support
              together to help practices simplify workflows, manage
              information, and focus on care.
            </p>
            <div className="about-hero-actions">
              <Link className="about-button about-button-primary" href="/partners/">
                Meet our partners <span aria-hidden="true">→</span>
              </Link>
              <Link className="about-button about-button-secondary" href="/products/">
                Explore our products
              </Link>
            </div>
          </div>

          <div className="about-hero-art" aria-hidden="true">
            <div className="about-art-orbit about-art-orbit-one" />
            <div className="about-art-orbit about-art-orbit-two" />
            <div className="about-connection about-connection-one" />
            <div className="about-connection about-connection-two" />
            <div className="about-connection about-connection-three" />
            <div className="about-art-center">
              <span className="about-art-mark">G</span>
              <strong>GENENSYS</strong>
              <small>Healthcare, connected</small>
            </div>
            <div className="about-art-node about-art-node-care">
              <AboutIcon name="care" />
              <span>Care</span>
            </div>
            <div className="about-art-node about-art-node-tech">
              <AboutIcon name="systems" />
              <span>Technology</span>
            </div>
            <div className="about-art-node about-art-node-support">
              <AboutIcon name="operations" />
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro section-container">
        <div className="about-section-marker">
          <span>01</span>
          <span>OUR PURPOSE</span>
          <span className="about-marker-line" />
        </div>
        <div className="about-intro-content">
          <h2>
            Healthcare is complex.
            <span> Technology should simplify it.</span>
          </h2>
          <div className="about-intro-copy">
            <p>
              Healthcare organizations balance patient care, information,
              technology, and day-to-day operations. Genensys brings these
              needs into focus with software and services designed around
              healthcare practices.
            </p>
            <p>
              Our work spans EHR and therapy software, interoperability,
              revenue cycle support, and practice operations - helping teams
              connect the tools and support they need.
            </p>
          </div>
        </div>
      </section>

      <section className="about-focus-section">
        <div className="section-container">
          <div className="about-section-heading">
            <span className="about-section-kicker">WHAT WE BRING TOGETHER</span>
            <h2>Technology and support for the work of care.</h2>
            <p>
              A connected view of the systems and operational needs that help
              healthcare practices work with confidence.
            </p>
          </div>
          <div className="about-focus-grid">
            {focusAreas.map((area) => (
              <article className="about-focus-card" key={area.number}>
                <div className="about-focus-card-top">
                  <span className="about-focus-icon">
                    <AboutIcon name={area.icon} />
                  </span>
                  <span className="about-focus-number">{area.number}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach section-container">
        <div className="about-approach-heading">
          <span className="about-section-kicker">HOW WE THINK ABOUT HEALTHCARE</span>
          <h2>Built around people, workflows, and connection.</h2>
        </div>
        <div className="about-approach-points">
          <div className="about-approach-point">
            <span className="about-approach-icon">
              <AboutIcon name="people" />
            </span>
            <div>
              <h3>People first</h3>
              <p>
                Support the people who deliver and coordinate healthcare every
                day.
              </p>
            </div>
          </div>
          <div className="about-approach-point">
            <span className="about-approach-icon">
              <AboutIcon name="systems" />
            </span>
            <div>
              <h3>Connected by design</h3>
              <p>
                Bring software, information, and operational needs into a more
                connected picture.
              </p>
            </div>
          </div>
          <div className="about-approach-point">
            <span className="about-approach-icon">
              <AboutIcon name="operations" />
            </span>
            <div>
              <h3>Practical support</h3>
              <p>
                Focus on useful tools and services that fit the needs of
                healthcare practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-partners-cta">
        <div className="section-container about-partners-cta-inner">
          <div className="about-partners-icon" aria-hidden="true">
            <AboutIcon name="people" />
          </div>
          <div className="about-partners-copy">
            <span className="about-section-kicker">STRONGER TOGETHER</span>
            <h2>Good healthcare is a team effort.</h2>
            <p>
              Learn more about the people and organizations connected through
              our partner network.
            </p>
          </div>
          <Link className="about-button about-button-light" href="/partners/">
            Explore our partners <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
