
import "./occupational-therapy-ehr.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupational Therapy EHR",
  description:
    "Explore Genensys occupational therapy EHR software, designed to support clinical documentation, patient management and therapy practice workflows.",
};

const features = [
  {
    number: "01",
    title: "Clinical documentation",
    description:
      "Organize patient information and clinical documentation in a structured electronic health record designed for therapy workflows.",
    detail: "PATIENT RECORDS",
  },
  {
    number: "02",
    title: "Therapy workflow support",
    description:
      "Support the day-to-day work of therapy practices with connected clinical and administrative workflows.",
    detail: "PRACTICE WORKFLOWS",
  },
  {
    number: "03",
    title: "Patient information",
    description:
      "Keep relevant patient details and care information organized and accessible within the EHR workflow.",
    detail: "PATIENT MANAGEMENT",
  },
  {
    number: "04",
    title: "Billing workflows",
    description:
      "Bring clinical and administrative processes closer together to support more organized billing operations.",
    detail: "REVENUE CYCLE",
  },
  {
    number: "05",
    title: "Prescribing and lab workflows",
    description:
      "Support connected healthcare workflows involving prescribing and laboratory information.",
    detail: "CLINICAL OPERATIONS",
  },
  {
    number: "06",
    title: "Healthcare interoperability",
    description:
      "Support the exchange of healthcare information through standards-based interoperability capabilities.",
    detail: "CONNECTED HEALTHCARE",
  },
];

const workflow = [
  {
    number: "01",
    title: "Organize patient information",
    description:
      "Maintain patient details and clinical information within an electronic record.",
  },
  {
    number: "02",
    title: "Document clinical care",
    description:
      "Support the documentation activities involved in therapy practice.",
  },
  {
    number: "03",
    title: "Coordinate operations",
    description:
      "Connect clinical and administrative work across the practice.",
  },
  {
    number: "04",
    title: "Manage the patient journey",
    description:
      "Bring patient-facing and practice-management workflows into a more connected experience.",
  },
];

export default function OccupationalTherapyEHRPage() {
  return (
    <main className="ehr-page">
      <section className="ehr-hero">
        <div className="ehr-container ehr-hero-layout">
          <div className="ehr-hero-copy">
            <div className="ehr-eyebrow">
              <span />
              HEALTHCARE TECHNOLOGY
            </div>

            <h1>
              A smarter way to manage
              <em> occupational therapy.</em>
            </h1>

            <p className="ehr-hero-description">
              Bring clinical documentation, patient information and
              practice workflows together with an electronic health
              record designed to support occupational therapy.
            </p>

            <div className="ehr-hero-actions">
              <a href="#ehr-contact" className="ehr-button ehr-button-primary">
                Explore the solution <span>↗</span>
              </a>
              <a href="#ehr-features" className="ehr-text-link">
                Discover features <span>↓</span>
              </a>
            </div>

            <div className="ehr-hero-note">
              <span className="ehr-note-line" />
              CLINICAL WORKFLOWS. CONNECTED OPERATIONS.
            </div>
          </div>

          <div className="ehr-hero-visual">
            <div className="ehr-image-frame">
              <img
                src="https://genensys.com/wp-content/uploads/2023/10/doctor-writing-about-routine-medical-checkup-1-scaled.jpg"
                alt="Healthcare professional documenting patient information"
              />
              <div className="ehr-image-shade" />
              <div className="ehr-image-caption">
                <span className="ehr-caption-dot" />
                <div>
                  <strong>Clinical care, organized.</strong>
                  <small>Designed around practice workflows</small>
                </div>
              </div>
            </div>

            <div className="ehr-visual-index">
              <strong>01</strong>
              <span>OCCUPATIONAL THERAPY EHR</span>
            </div>
            <div className="ehr-visual-decoration" />
          </div>
        </div>

        <div className="ehr-hero-bottom">
          <div className="ehr-container ehr-hero-bottom-inner">
            <span>BUILT AROUND THE NEEDS OF HEALTHCARE</span>
            <div>Clinical documentation</div>
            <div>Practice workflows</div>
            <div>Connected information</div>
          </div>
        </div>
      </section>

      <section className="ehr-intro" id="ehr-overview">
        <div className="ehr-container ehr-intro-grid">
          <div>
            <div className="ehr-section-label">THE PRODUCT</div>
            <h2>
              More connected workflows.
              <br />
              <span>More organized care.</span>
            </h2>
          </div>

          <div className="ehr-intro-copy">
            <p>
              Healthcare practices work across clinical records,
              patient communication and administrative responsibilities.
              Managing these activities across disconnected processes
              can make everyday work more difficult.
            </p>
            <p>
              Genensys occupational therapy EHR brings these areas
              into a healthcare software environment designed to
              support the needs of therapy practices.
            </p>
          </div>
        </div>
      </section>

      <section className="ehr-features" id="ehr-features">
        <div className="ehr-container">
          <div className="ehr-section-heading">
            <div>
              <div className="ehr-section-label">WHAT THE PLATFORM SUPPORTS</div>
              <h2>
                The tools behind
                <br />
                <span>everyday practice.</span>
              </h2>
            </div>
            <p>
              A connected approach to the clinical and operational
              activities that keep a therapy practice moving.
            </p>
          </div>

          <div className="ehr-feature-grid">
            {features.map((feature) => (
              <article className="ehr-feature-card" key={feature.number}>
                <div className="ehr-feature-top">
                  <span>{feature.detail}</span>
                  <strong>{feature.number}</strong>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="ehr-feature-bottom">
                  <span />
                  GENENSYS HEALTHCARE TECHNOLOGY
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ehr-workflow">
        <div className="ehr-container ehr-workflow-layout">
          <div className="ehr-workflow-heading">
            <div className="ehr-section-label">A CONNECTED APPROACH</div>
            <h2>
              From patient records
              <span> to practice operations.</span>
            </h2>
            <p>
              Clinical and administrative activities are closely
              connected. The right software should help practices
              manage these responsibilities in a more organized way.
            </p>
            <a href="#ehr-contact" className="ehr-dark-link">
              Explore the platform <span>↗</span>
            </a>
          </div>

          <div className="ehr-workflow-list">
            {workflow.map((item) => (
              <div className="ehr-workflow-item" key={item.number}>
                <span className="ehr-workflow-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="ehr-workflow-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ehr-interoperability">
        <div className="ehr-container ehr-interoperability-layout">
          <div className="ehr-interoperability-visual">
            <div className="ehr-orbit ehr-orbit-one" />
            <div className="ehr-orbit ehr-orbit-two" />
            <div className="ehr-core">
              <span>GENENSYS</span>
              <strong>Connected<br />Healthcare</strong>
            </div>
            <div className="ehr-node ehr-node-one">EHR</div>
            <div className="ehr-node ehr-node-two">FHIR</div>
            <div className="ehr-node ehr-node-three">CARE</div>
          </div>

          <div className="ehr-interoperability-copy">
            <div className="ehr-section-label">BEYOND THE RECORD</div>
            <h2>
              Healthcare information
              <span> should work together.</span>
            </h2>
            <p>
              Healthcare interoperability helps systems exchange
              information in a structured and consistent way.
              Genensys works with healthcare technology and
              interoperability standards to support more connected
              healthcare environments.
            </p>
            <div className="ehr-standard">
              <span className="ehr-standard-mark">FHIR</span>
              <div>
                <strong>Standards-based interoperability</strong>
                <small>Supporting connected healthcare systems</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ehr-contact" id="ehr-contact">
        <div className="ehr-container">
          <div className="ehr-contact-card">
            <div className="ehr-contact-copy">
              <div className="ehr-section-label">LET'S TALK HEALTHCARE</div>
              <h2>
                Let's explore a better
                <span> way to manage your practice.</span>
              </h2>
              <p>
                Every practice has different clinical and operational
                needs. Talk with Genensys about your workflows and
                explore whether this solution is right for your team.
              </p>
              <Link href="/products" className="ehr-button ehr-button-light">
                Explore all products <span>↗</span>
              </Link>
            </div>
            <div className="ehr-contact-mark" aria-hidden="true">
              <span>G</span>
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
