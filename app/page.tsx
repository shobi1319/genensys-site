
import Link from "next/link";

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

          {/* ILLUSTRATIVE DASHBOARD */}
          <div
            className="hero-visual"
            aria-label="Illustrative healthcare workspace"
          >
            <div className="visual-glow" />

            <div className="dashboard-window">
              <div className="dashboard-topbar">
                <div className="dashboard-brand">
                  <span className="mini-brand-icon">G</span>
                  <span>Healthcare Workspace Preview</span>
                </div>

                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="dashboard-body">
                <aside className="dashboard-sidebar">
                  <div className="sidebar-symbol active">▦</div>
                  <div className="sidebar-symbol">♧</div>
                  <div className="sidebar-symbol">▤</div>
                  <div className="sidebar-symbol">⌘</div>
                </aside>

                <div className="dashboard-main">
                  <div className="dashboard-heading">
                    <div>
                      <span className="dashboard-label">WORKSPACE</span>
                      <h3>Healthcare Overview</h3>
                    </div>
                    <span className="dashboard-status">● Connected</span>
                  </div>

                  <div className="dashboard-cards">
                    <div className="dashboard-card">
                      <span>Patient Management</span>
                      <strong>01</strong>
                      <small>Organized patient records</small>
                    </div>

                    <div className="dashboard-card">
                      <span>Clinical Workflows</span>
                      <strong>02</strong>
                      <small>Connected care processes</small>
                    </div>
                  </div>

                  <div className="workflow-panel">
                    <div className="workflow-heading">
                      <strong>Connected Healthcare</strong>
                      <span>Workflow overview</span>
                    </div>

                    <div className="workflow-step">
                      <span className="workflow-icon blue">01</span>
                      <div>
                        <strong>Clinical Information</strong>
                        <small>Organize healthcare records</small>
                      </div>
                      <span className="step-arrow">→</span>
                    </div>

                    <div className="workflow-step">
                      <span className="workflow-icon purple">02</span>
                      <div>
                        <strong>Interoperability</strong>
                        <small>Connect systems and data</small>
                      </div>
                      <span className="step-arrow">→</span>
                    </div>

                    <div className="workflow-step">
                      <span className="workflow-icon red">03</span>
                      <div>
                        <strong>Healthcare Operations</strong>
                        <small>Support practice workflows</small>
                      </div>
                      <span className="step-arrow">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-tag floating-tag-top">
              <span className="floating-icon blue">✳</span>
              <div>
                <strong>Connected Care</strong>
                <small>Technology & Integration</small>
              </div>
            </div>

            <div className="floating-tag floating-tag-bottom">
              <span className="floating-icon red">+</span>
              <div>
                <strong>Healthcare First</strong>
                <small>People-centered technology</small>
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
              <div className="product-icon blue-icon">▦</div>
              <span className="product-category">
                ELECTRONIC HEALTH RECORDS
              </span>
              <h3>Simplify EMR</h3>
              <p>
                An EHR/EMR solution for healthcare practices,
                supporting clinical documentation, scheduling
                and everyday practice workflows.
              </p>
              <Link href="/products" className="card-link">
                Explore Simplify EMR <Arrow />
              </Link>
            </article>

            <article className="product-card featured-card">
              <div className="product-icon red-icon">✳</div>
              <span className="product-category">
                THERAPY PRACTICE SOFTWARE
              </span>
              <h3>Simplify Therapy</h3>
              <p>
                Therapy practice software designed for pediatric
                physical therapists and PPECs, with tools for
                documentation, billing and authorization workflows.
              </p>
              <Link href="/products" className="card-link">
                Explore Simplify Therapy <Arrow />
              </Link>
            </article>

            <article className="product-card">
              <div className="product-icon purple-icon">⌘</div>
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
                <Arrow />
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
            aria-label="Illustration of connected healthcare systems"
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
