
import "./teletherapy.css";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Teletherapy Services",
  "Explore Genensys teletherapy tools and services that help practices support remote care workflows.",
  "/products/teletherapy",
);

const benefits = [
  {
    number: "01",
    title: "Care without distance",
    description:
      "Connect patients with healthcare professionals remotely, helping make therapy services accessible beyond the clinic.",
  },
  {
    number: "02",
    title: "Convenient patient access",
    description:
      "Give patients the flexibility to access consultations and therapy services from the comfort of home.",
  },
  {
    number: "03",
    title: "A supported transition",
    description:
      "Help your practice move toward virtual care with tailored solutions, guidance, and ongoing support.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Remote consultations",
    description:
      "Extend the reach of your practice by connecting healthcare providers and patients through virtual consultations.",
  },
  {
    number: "02",
    title: "Virtual therapy sessions",
    description:
      "Make therapy services available remotely, giving patients another convenient way to access care.",
  },
  {
    number: "03",
    title: "Flexible care delivery",
    description:
      "Reduce geographical barriers and help patients access services without always needing to travel to a clinic.",
  },
  {
    number: "04",
    title: "User-friendly experience",
    description:
      "Integrate technology and approachable interfaces to support virtual care for both providers and patients.",
  },
  {
    number: "05",
    title: "Privacy-conscious approach",
    description:
      "Prioritize the confidentiality and safety of patient information through privacy and security protocols.",
  },
  {
    number: "06",
    title: "Ongoing guidance",
    description:
      "Get support as your practice transitions to virtual care and works to optimize the experience.",
  },
];

const steps = [
  {
    number: "01",
    title: "Schedule your demo",
    description:
      "Meet with a Genensys expert who will walk you through the platform, highlight key features, and demonstrate how it can support your practice.",
  },
  {
    number: "02",
    title: "Complete your setup",
    description:
      "Tell us about your practice and its needs. Our team will use that information to build an account tailored to your requirements.",
  },
  {
    number: "03",
    title: "Work with your success coach",
    description:
      "Get a welcome appointment and guidance on how to make the most of your Genensys solution.",
  },
];

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tele-eyebrow">
      <span className="tele-eyebrow-dot" />
      {children}
    </div>
  );
}

export default function TeletherapyPage() {
  return (
    <main id="main-content" className="tele-page">
      {/* HERO */}
      <section className="tele-hero">
        <div className="tele-hero-glow" />

        <div className="tele-container tele-hero-grid">
          <div className="tele-hero-content">
            <SectionLabel>GENENSYS TELETHERAPY</SectionLabel>

            <h1>
              Healthcare
              <br />
              without <span>distance.</span>
            </h1>

            <p className="tele-hero-description">
              Bring patients and healthcare professionals closer through
              convenient virtual consultations and therapy services.
              Make quality care more accessible, wherever patients are.
            </p>

            <div className="tele-hero-actions">
              <Link
                href="/book-a-demo/"
                className="tele-button tele-button-primary"
              >
                Book a demo <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#teletherapy-benefits"
                className="tele-text-link"
              >
                Explore the solution <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="tele-hero-note">
              <span className="tele-note-icon">+</span>
              <span>Virtual care designed around people</span>
            </div>
          </div>

          <div className="tele-hero-visual">
            <div className="tele-hero-image-wrap">
              <Image
                src="/images/telehealth-workflow.svg"
                alt="Illustration of a clinician providing a virtual consultation."
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                className="tele-hero-image"
              />
            </div>

            <div className="tele-floating-card">
              <div className="tele-floating-icon">
                <span>+</span>
              </div>
              <div>
                <strong>Care that connects</strong>
                <small>Patients and providers, virtually</small>
              </div>
              <span className="tele-floating-status" />
            </div>

            <div className="tele-visual-caption">
              <span className="tele-caption-line" />
              <span>Bringing care closer to home</span>
            </div>
          </div>
        </div>

        <div className="tele-hero-bottom">
          <div className="tele-container tele-hero-bottom-inner">
            <span>ACCESSIBILITY</span>
            <span className="tele-bottom-divider" />
            <span>CONVENIENCE</span>
            <span className="tele-bottom-divider" />
            <span>CONNECTED CARE</span>
            <span className="tele-bottom-divider" />
            <span>ONGOING SUPPORT</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        className="tele-intro-section"
        id="teletherapy-benefits"
      >
        <div className="tele-container">
          <div className="tele-intro-grid">
            <div className="tele-intro-heading">
              <SectionLabel>A MORE CONNECTED APPROACH</SectionLabel>
              <h2>
                Care should reach
                <br />
                <span>people wherever they are.</span>
              </h2>
            </div>

            <div className="tele-intro-copy">
              <p>
                The way people access healthcare is changing. Teletherapy
                helps practices extend their reach beyond traditional
                clinic settings, creating new opportunities for remote
                consultations, therapy sessions, and treatment offerings.
              </p>
              <p>
                Genensys supports healthcare providers with tailored
                teletherapy solutions designed to make the transition
                to virtual care more convenient for both patients and
                professionals.
              </p>
            </div>
          </div>

          <div className="tele-benefit-grid">
            {benefits.map((benefit) => (
              <article className="tele-benefit" key={benefit.number}>
                <span className="tele-benefit-number">
                  {benefit.number}
                </span>
                <div className="tele-benefit-icon">
                  {benefit.number === "01"
                    ? "◎"
                    : benefit.number === "02"
                      ? "⌂"
                      : "↗"}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT IMAGE / EXPERIENCE */}
      <section className="tele-experience-section">
        <div className="tele-container tele-experience-grid">
          <div className="tele-experience-image-wrap">
            <Image
              src="/images/patient-care-workflow.svg"
              alt="Illustration of a patient and care professional reviewing care information."
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="tele-experience-image"
            />
            <div className="tele-image-tag">
              <span className="tele-image-tag-dot" />
              Care from the comfort of home
            </div>
          </div>

          <div className="tele-experience-content">
            <SectionLabel>CARE THAT FITS REAL LIFE</SectionLabel>
            <h2>
              A more convenient
              <br />
              way to connect
              <br />
              with <span>care.</span>
            </h2>

            <p>
              Distance and busy schedules can make accessing care
              difficult. Teletherapy creates another way for patients
              to connect with healthcare providers without always
              having to visit a physical location.
            </p>

            <p>
              By supporting a virtual care experience, Genensys helps
              practices respond to changing patient needs while keeping
              accessibility and convenience at the center.
            </p>

            <Link
              href="/book-a-demo/"
              className="tele-inline-link"
            >
              See how Genensys can help <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="tele-capabilities-section">
        <div className="tele-container">
          <div className="tele-section-heading">
            <div>
              <SectionLabel>THE TELETHERAPY SOLUTION</SectionLabel>
              <h2>
                Supporting the shift
                <br />
                to <span>virtual care.</span>
              </h2>
            </div>

            <p>
              A flexible approach to remote healthcare that brings
              together accessibility, technology, and support for
              modern healthcare practices.
            </p>
          </div>

          <div className="tele-capabilities-layout">
            <div className="tele-capabilities-aside">
              <div className="tele-orbit">
                <div className="tele-orbit-ring tele-orbit-ring-one" />
                <div className="tele-orbit-ring tele-orbit-ring-two" />

                <div className="tele-orbit-center">
                  <span className="tele-orbit-plus">+</span>
                  <strong>Virtual</strong>
                  <strong>Care</strong>
                  <small>GENENSYS</small>
                </div>

                <span className="tele-orbit-node tele-node-top">P</span>
                <span className="tele-orbit-node tele-node-right">+</span>
                <span className="tele-orbit-node tele-node-bottom">C</span>
              </div>

              <p className="tele-orbit-caption">
                Connecting patients and providers through a more
                accessible care experience.
              </p>
            </div>

            <div className="tele-capability-list">
              {capabilities.map((item) => (
                <article
                  className="tele-capability-item"
                  key={item.number}
                >
                  <span className="tele-capability-number">
                    {item.number}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="tele-capability-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="tele-start-section">
        <div className="tele-container">
          <div className="tele-start-heading">
            <SectionLabel>GETTING STARTED IS EASY</SectionLabel>
            <h2>
              Three steps to a
              <br />
              <span>more connected practice.</span>
            </h2>
            <p>
              Getting started with Genensys is a guided process.
              Our team will help you understand the solution and
              get your practice set up.
            </p>
          </div>

          <div className="tele-steps-grid">
            {steps.map((step) => (
              <article className="tele-step" key={step.number}>
                <div className="tele-step-top">
                  <span className="tele-step-number">
                    {step.number}
                  </span>
                  <span className="tele-step-line" />
                  <span className="tele-step-check">✓</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tele-cta-section">
        <div className="tele-container">
          <div className="tele-cta-card">
            <div className="tele-cta-decoration tele-cta-decoration-one" />
            <div className="tele-cta-decoration tele-cta-decoration-two" />

            <div className="tele-cta-content">
              <SectionLabel>LET'S CONNECT</SectionLabel>
              <h2>
                Bring your practice
                <br />
                closer to <span>your patients.</span>
              </h2>
              <p>
                Discover how Genensys teletherapy solutions can support
                your move toward more accessible and convenient care.
              </p>
              <Link
                href="/book-a-demo/"
                className="tele-button tele-button-light"
              >
                Schedule your demo <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="tele-cta-mark" aria-hidden="true">
              <span>G</span>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
