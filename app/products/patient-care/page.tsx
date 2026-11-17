
import "./patient-care.css";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Patient Care Solutions",
  "Explore Genensys technology and services designed to support connected patient care workflows.",
  "/products/patient-care",
);
import Link from "next/link";

const portalFeatures = [
  {
    number: "01",
    icon: "▤",
    title: "Access medical records",
    description:
      "Give patients convenient access to their health information through a secure online portal.",
  },
  {
    number: "02",
    icon: "▦",
    title: "Request appointments",
    description:
      "Help patients request appointments and stay informed about their care.",
  },
  {
    number: "03",
    icon: "＄",
    title: "Manage billing",
    description:
      "Let patients view billing information and statements online.",
  },
  {
    number: "04",
    icon: "✉",
    title: "Message your care team",
    description:
      "Support convenient communication between patients and their healthcare team.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Keep patients informed",
    description:
      "Share important health information and updates through a convenient online portal.",
  },
  {
    number: "02",
    title: "Reduce administrative workload",
    description:
      "Reduce time spent answering routine calls, coordinating appointment requests, and relaying messages. Give your staff more time for clinical and billing responsibilities.",
  },
  {
    number: "03",
    title: "Support faster communication",
    description:
      "Let patients send questions, request prescription renewals, and ask for appointments without waiting on hold. Help your team manage incoming requests more efficiently.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Schedule your demo",
    description:
      "Let a Genensys expert walk you through the patient portal's key features and ease of use.",
  },
  {
    number: "02",
    title: "Complete the setup",
    description:
      "After signing up, answer a few questions about your practice. We'll create an account around your needs.",
  },
  {
    number: "03",
    title: "Work with a success coach",
    description:
      "Your assigned Success Coach will arrange a welcome appointment and show you how to get the most out of Genensys.",
  },
];

function PortalPreview() {
  return (
    <div className="pp-preview">
      <div className="pp-preview-top">
        <div>
          <span className="pp-preview-label">PATIENT PORTAL</span>
          <h3>Welcome back, Alex</h3>
          <p>Your healthcare information, all in one place.</p>
        </div>
        <div className="pp-avatar">A</div>
      </div>

      <div className="pp-preview-status">
        <span className="pp-status-dot" />
        Your portal is ready
      </div>

      <div className="pp-preview-grid">
        <div className="pp-preview-tile">
          <span className="pp-tile-icon">▤</span>
          <strong>Medical records</strong>
          <small>View your health information</small>
        </div>
        <div className="pp-preview-tile">
          <span className="pp-tile-icon">▦</span>
          <strong>Appointments</strong>
          <small>Request an appointment</small>
        </div>
        <div className="pp-preview-tile">
          <span className="pp-tile-icon">＄</span>
          <strong>Billing</strong>
          <small>View and pay statements</small>
        </div>
        <div className="pp-preview-tile">
          <span className="pp-tile-icon">✉</span>
          <strong>Messages</strong>
          <small>Contact your care team</small>
        </div>
      </div>

      <div className="pp-preview-message">
        <div className="pp-message-icon">✓</div>
        <div>
          <strong>Stay connected to your care</strong>
          <p>Convenient access to important patient information.</p>
        </div>
      </div>
    </div>
  );
}

export default function PatientCarePage() {
  return (
    <main id="main-content" className="pp-page">
      {/* HERO */}
      <section className="pp-hero">
        <div className="pp-container pp-hero-grid">
          <div className="pp-hero-content">
            <div className="pp-eyebrow">
              <span />
              QUALITY PATIENT PORTAL
            </div>

            <h1>
              Better patient communication.
              <span> A more connected practice.</span>
            </h1>

            <p className="pp-hero-description">
              Give patients a convenient way to connect with your practice,
              access important health information, request appointments, and
              manage payments through an online patient portal.
            </p>

            <div className="pp-hero-actions">
              <Link href="/book-a-demo/" className="pp-button pp-button-primary">
                Book a demo <span>→</span>
              </Link>
              <a href="#portal-features" className="pp-text-link">
                Explore portal features <span>↓</span>
              </a>
            </div>

            <div className="pp-hero-note">
              <span>✓</span>
              Connected with Simplify EMR and Practice Management
            </div>
          </div>

          <div className="pp-hero-visual">
            <div className="pp-visual-glow" />
            <PortalPreview />
            <div className="pp-floating-note">
              <span className="pp-floating-check">✓</span>
              <div>
                <strong>Patient access</strong>
                <small>Information in one place</small>
              </div>
            </div>
            <div className="pp-visual-caption">
              <span>SIMPLIFY EMR</span>
              <span>CONNECTED CARE EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="pp-intro">
        <div className="pp-container pp-intro-grid">
          <div>
            <div className="pp-eyebrow pp-eyebrow-light">
              <span />
              PATIENT-CENTERED COMMUNICATION
            </div>
            <h2>
              Keep patients connected to their healthcare, beyond the office.
            </h2>
          </div>

          <div className="pp-intro-copy">
            <p>
              Simplify EMR's Patient Portal gives patients online access to
              important information and convenient ways to communicate with
              their healthcare providers.
            </p>
            <p>
              Your practice can share reminders, statements, educational
              materials, and lab results electronically through a private
              patient portal.
            </p>
            <p>
              Integrated with the EMR and Practice Management modules, the
              portal brings important patient interactions into a more
              connected workflow.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="pp-features-section" id="portal-features">
        <div className="pp-container">
          <div className="pp-section-heading">
            <div>
              <div className="pp-eyebrow">
                <span />
                PORTAL FEATURES
              </div>
              <h2>
                Give patients more ways
                <br />
                to stay connected.
              </h2>
            </div>
            <p>
              Convenient online tools help patients manage everyday
              interactions with your practice without relying on phone calls
              for every request.
            </p>
          </div>

          <div className="pp-feature-grid">
            {portalFeatures.map((feature) => (
              <article className="pp-feature-card" key={feature.number}>
                <div className="pp-feature-card-top">
                  <span className="pp-feature-icon">{feature.icon}</span>
                  <span className="pp-feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="pp-feature-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section className="pp-integration">
        <div className="pp-container pp-integration-grid">
          <div className="pp-integration-visual">
            <div className="pp-integration-panel">
              <div className="pp-integration-panel-header">
                <span className="pp-panel-dot" />
                CONNECTED PLATFORM
              </div>

              <div className="pp-system-box pp-system-portal">
                <span>01</span>
                <div>
                  <strong>Patient Portal</strong>
                  <small>Patient communication and access</small>
                </div>
              </div>

              <div className="pp-connector">
                <span />
                <span />
                <span />
              </div>

              <div className="pp-system-row">
                <div className="pp-system-box">
                  <span>02</span>
                  <div>
                    <strong>EMR</strong>
                    <small>Electronic records</small>
                  </div>
                </div>
                <div className="pp-system-box">
                  <span>03</span>
                  <div>
                    <strong>Practice Management</strong>
                    <small>Practice workflows</small>
                  </div>
                </div>
              </div>

              <div className="pp-integration-footer">
                <span>✓</span>
                Unified solution
              </div>
            </div>
          </div>

          <div className="pp-integration-content">
            <div className="pp-eyebrow">
              <span />
              ONE CONNECTED SOLUTION
            </div>
            <h2>
              Designed to work with your practice's existing workflows.
            </h2>
            <p>
              The patient portal is integrated with Simplify EMR and Practice
              Management modules, helping bring patient communication and
              practice operations together.
            </p>

            <ul className="pp-check-list">
              <li>
                <span>✓</span>
                Integrated EMR and Practice Management experience
              </li>
              <li>
                <span>✓</span>
                Convenient access to patient information
              </li>
              <li>
                <span>✓</span>
                Private online communication
              </li>
            </ul>

            <p className="pp-certification-note">
              Simplify EMR's EHR is described by Genensys as certified to
              support Meaningful Use. Contact Genensys for details about
              applicable certification and current program requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE BENEFITS */}
      <section className="pp-benefits">
        <div className="pp-container">
          <div className="pp-benefits-heading">
            <div className="pp-eyebrow">
              <span />
              BENEFITS FOR YOUR PRACTICE
            </div>
            <h2>
              A better experience
              <br />
              for patients and staff.
            </h2>
            <p>
              Improve access to information while helping your team spend less
              time managing routine communication.
            </p>
          </div>

          <div className="pp-benefit-list">
            {benefits.map((benefit) => (
              <article className="pp-benefit-row" key={benefit.number}>
                <span className="pp-benefit-number">{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="pp-onboarding">
        <div className="pp-container">
          <div className="pp-onboarding-heading">
            <div className="pp-eyebrow pp-eyebrow-light">
              <span />
              GETTING STARTED
            </div>
            <h2>Getting started is easy.</h2>
            <p>
              Get to know the Genensys platform and work with our team to get
              your practice set up.
            </p>
          </div>

          <div className="pp-onboarding-grid">
            {onboarding.map((step) => (
              <article className="pp-onboarding-card" key={step.number}>
                <span className="pp-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pp-cta">
        <div className="pp-container pp-cta-inner">
          <div>
            <div className="pp-eyebrow pp-eyebrow-light">
              <span />
              SIMPLIFY EMR PATIENT PORTAL
            </div>
            <h2>
              Bring your patients
              <br />
              closer to their care.
            </h2>
            <p>
              Discover how the Genensys Patient Portal can support
              communication and everyday interactions with your practice.
            </p>
          </div>

          <div className="pp-cta-action">
            <Link href="/book-a-demo/" className="pp-button pp-button-white">
              Schedule a demo <span>→</span>
            </Link>
            <small>Talk with a Genensys expert.</small>
          </div>
        </div>
      </section>
    </main>
  );
}