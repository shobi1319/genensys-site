
import "./partners.css";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="partners-hero-glow" />

        <div className="partners-container partners-hero-content">
          <span className="partners-eyebrow">
            <span className="partners-eyebrow-dot" />
            OUR PARTNERS
          </span>

          <h1>
            Better healthcare
            <br />
            starts with <span>partnership.</span>
          </h1>

          <p>
            Supporting the organizations and people who make a difference
            in healthcare and community wellbeing.
          </p>

          <div className="partners-hero-bottom">
            <span>GOOD FAITH HEALTH SERVICES</span>
            <span className="partners-hero-line" />
            <span>CARE. TRUST. EXCELLENCE.</span>
          </div>
        </div>

        <div className="partners-hero-decoration" aria-hidden="true">
          <div className="partners-decoration-ring ring-one" />
          <div className="partners-decoration-ring ring-two" />
          <div className="partners-decoration-cross">+</div>
        </div>
      </section>

      <section className="partners-intro">
        <div className="partners-container partners-intro-layout">
          <div className="partners-intro-label">
            <span>01 / OUR COMMITMENT</span>
            <div />
            <span>HEALTHCARE PARTNERSHIPS</span>
          </div>

          <div className="partners-intro-content">
            <h2>
              Caring for those
              <br />
              who <span>care for others.</span>
            </h2>

            <p>
              At Good Faith Health Services, we aim to serve your healthcare
              organization in raising standards to international level and
              best practices so that it can boost trust of your patients and
              their families in your services.
            </p>

            <p>
              We are proud to take the privilege of caring for those who care
              for the health and wellbeing of our communities.
            </p>

            <Link href="/book-a-demo" className="partners-contact-link">
              Get in touch <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="partners-values">
        <div className="partners-container partners-values-inner">
          <div>
            <span className="partners-values-kicker">OUR SHARED PURPOSE</span>
            <h2>
              Raising standards.
              <br />
              Building <span>trust.</span>
            </h2>
          </div>

          <div className="partners-values-note">
            <span className="partners-values-mark">✳</span>
            <p>
              Better standards of care begin with supporting the people and
              organizations behind healthcare.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
