
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Genensys | Healthcare Technology and Services",
  "Genensys supports healthcare organizations with software, interoperability, and operational services designed for better connected workflows.",
  "/",
);

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              HEALTHCARE TECHNOLOGY & SOLUTIONS
            </div>

            <h1>
              Moving Healthcare
              <span> Forward Through</span>
              <span className="gradient-text"> Technology.</span>
            </h1>

            <p className="hero-description">
              Connecting healthcare organizations with intuitive
              EHR technology, therapy software, revenue cycle
              services and practice support.
            </p>

            <div className="hero-actions">
              <Link href="/book-a-demo/" className="primary-button">
                Talk to Our Team <Arrow />
              </Link>

              <Link href="/products" className="secondary-button">
                Explore Our Products <Arrow />
              </Link>
            </div>

            <div className="hero-trust">
              <span className="trust-line" />
              <span>Technology and support built around healthcare</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" aria-hidden="true" />
            <Image
              className="hero-illustration"
              src="/images/healthcare-workflow.svg"
              alt="Illustration of a healthcare professional using connected patient and practice workflows."
              width={1200}
              height={900}
              sizes="(max-width: 760px) 100vw, 52vw"
              priority
            />
            <div className="floating-tag floating-tag-top" aria-hidden="true">
              <span className="floating-icon blue">✳</span>
              <div>
                <strong>Connected care</strong>
                <small>Technology &amp; integration</small>
              </div>
            </div>
            <div className="floating-tag floating-tag-bottom" aria-hidden="true">
              <span className="floating-icon red">+</span>
              <div>
                <strong>People first</strong>
                <small>Support for practice teams</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-decoration" />
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section-padding">
        <div className="section-container intro-grid">
          <div>
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>
              Healthcare is complex.
              <span className="blue-text">
                {" "}Technology should simplify it.
              </span>
            </h2>
          </div>

          <div className="intro-description">
            <p>
              Genensys brings healthcare software, revenue cycle
              management and practice support together to help
              healthcare organizations simplify operations,
              manage information and support patient care.
            </p>

            <Link href="/about" className="text-link">
              Discover Genensys <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section section-padding">
        <div className="section-container">
          <div className="section-heading centered-heading">
            <span className="section-eyebrow">OUR TECHNOLOGY</span>
            <h2>Healthcare software built around your practice</h2>
            <p>
              Explore Genensys software solutions designed to
              support clinical workflows, patient information
              and therapy practice operations.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <div className="product-icon blue-icon" aria-hidden="true">▦</div>
              <span className="product-category">
                ELECTRONIC HEALTH RECORDS
              </span>
              <h3>Simplify EMR</h3>
              <p>
                An EHR/EMR solution for healthcare practices,
                supporting clinical documentation, scheduling
                and everyday practice workflows.
              </p>
              <Link href="/products/occupational-therapy-ehr/" className="card-link">
                Explore Simplify EMR <Arrow />
              </Link>
            </article>

            <article className="product-card featured-card">
              <div className="product-icon red-icon" aria-hidden="true">✳</div>
              <span className="product-category">
                THERAPY PRACTICE SOFTWARE
              </span>
              <h3>Simplify Therapy</h3>
              <p>
                Therapy practice software designed for pediatric
                physical therapists and PPECs, with tools for
                documentation, billing and authorization workflows.
              </p>
              <Link href="/products/simplify-therapy/" className="card-link">
                Explore Simplify Therapy <Arrow />
              </Link>
            </article>

            <article className="product-card">
              <div className="product-icon purple-icon" aria-hidden="true">⌘</div>
              <span className="product-category">
                HEALTHCARE INTEGRATION
              </span>
              <h3>FHIR & Interoperability</h3>
              <p>
                Healthcare integration and standards-based
                technology supporting the exchange of information
                between connected systems.
              </p>
              <Link href="/interoperability" className="card-link">
                Explore Interoperability <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section
        className="home-resources-section"
        aria-labelledby="home-resources-title"
      >
        <div className="section-container">
          <div className="home-resources-heading">
            <div>
              <span className="section-eyebrow">PRODUCT RESOURCES</span>
              <h2 id="home-resources-title">
                Useful information, all in one place.
              </h2>
            </div>
            <p>
              Review product details, technical documentation, and testing
              information from Genensys.
            </p>
          </div>
          <div className="home-resources-grid">
            <Link href="/additional-costs/" className="home-resource-card">
              <span className="home-resource-icon blue-icon" aria-hidden="true">✓</span>
              <span className="home-resource-copy">
                <strong>Certification &amp; costs</strong>
                <small>Certified modules and product information</small>
              </span>
              <Arrow />
            </Link>
            <Link href="/api-documentation/" className="home-resource-card">
              <span className="home-resource-icon purple-icon" aria-hidden="true">⌘</span>
              <span className="home-resource-copy">
                <strong>FHIR API documentation</strong>
                <small>Developer documentation and service URLs</small>
              </span>
              <Arrow />
            </Link>
            <Link href="/real-world-testing/" className="home-resource-card">
              <span className="home-resource-icon red-icon" aria-hidden="true">↗</span>
              <span className="home-resource-copy">
                <strong>Real World Testing</strong>
                <small>Testing information by criteria and year</small>
              </span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-padding">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">OUR SOLUTIONS</span>
            <h2>
              More than software.
              <span className="blue-text">
                {" "}Complete healthcare support.
              </span>
            </h2>
            <p>
              From revenue cycle management to daily practice
              operations, Genensys provides services that help
              healthcare organizations manage their workflows.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-item">
              <span className="service-number">01</span>
              <h3>Medical Billing & RCM</h3>
              <p>
                Medical billing, revenue cycle analysis and
                optimization to support the financial operations
                of healthcare practices.
              </p>
              <Link href="/solutions" aria-label="Explore medical billing and RCM">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">02</span>
              <h3>AR & Denial Management</h3>
              <p>
                Accounts receivable follow-up, denial management
                and revenue recovery support.
              </p>
              <Link href="/solutions" aria-label="Explore AR and denial management">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">03</span>
              <h3>Eligibility & VOB</h3>
              <p>
                Insurance eligibility and verification of benefits
                support for healthcare practices.
              </p>
              <Link href="/solutions" aria-label="Explore eligibility and VOB">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">04</span>
              <h3>Provider Credentialing</h3>
              <p>
                Administrative support for healthcare provider
                credentialing processes.
              </p>
              <Link href="/solutions" aria-label="Explore provider credentialing">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">05</span>
              <h3>Front & Back Office Support</h3>
              <p>
                Operational assistance for front-office and
                back-office practice activities.
              </p>
              <Link href="/solutions" aria-label="Explore office support">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">06</span>
              <h3>Practice Management</h3>
              <p>
                Support for scheduling, billing, records and
                practice workflow optimization.
              </p>
              <Link href="/solutions" aria-label="Explore practice management">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">07</span>
              <h3>Compliance & Quality Support</h3>
              <p>
                HIPAA-related compliance support and MIPS/MICRA
                practice improvement services.
              </p>
              <Link href="/solutions" aria-label="Explore compliance support">
                Explore solution <Arrow />
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">08</span>
              <h3>Practice Audits & Digital Support</h3>
              <p>
                Business process audits, medical record scanning
                and digital marketing services for medical practices.
              </p>
              <Link href="/solutions" aria-label="Explore practice audits and digital support">
                Explore solution <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* INTEROPERABILITY */}
      <section className="interop-section section-padding">
        <div className="section-container interop-grid">
          <div className="interop-content">
            <span className="section-eyebrow light-eyebrow">
              CONNECTED HEALTHCARE
            </span>

            <h2>
              Healthcare systems should speak the same language.
            </h2>

            <p>
              Healthcare interoperability helps information
              move between systems. Genensys focuses on
              healthcare integration and standards-based
              technologies, including FHIR.
            </p>

            <Link href="/interoperability" className="light-button">
              Discover Interoperability <Arrow />
            </Link>
          </div>

          <div
            className="interop-visual"
            aria-hidden="true"
          >
            <div className="interop-circle circle-one">EHR</div>
            <div className="interop-circle circle-two">FHIR</div>
            <div className="interop-circle circle-three">API</div>
            <div className="interop-center">+</div>
            <span className="interop-line line-one" />
            <span className="interop-line line-two" />
            <span className="interop-line line-three" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="section-eyebrow">LET'S CONNECT</span>
              <h2>Let's move healthcare forward together.</h2>
              <p>
                Looking for healthcare software, revenue cycle
                support or help improving your practice operations?
                Let's start a conversation.
              </p>
            </div>

            <Link href="/book-a-demo/" className="primary-button">
              Get in Touch <Arrow />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
