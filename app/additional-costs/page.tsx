import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import "./additional-costs.css";

export const metadata = createPageMetadata(
  "Additional Costs and Certified Modules",
  "Review Simplify EMR v4.0 certified modules, clinical quality measures, costs, API information, and two-factor authentication.",
  "/additional-costs",
);

const qualityMeasures = [
  {
    code: "CMS2v8",
    title:
      "Preventive Care and Screening: Screening for Depression and Follow-Up Plan",
  },
  {
    code: "CMS50v7",
    title: "Closing the Referral Loop: Receipt of Specialist Report",
  },
  {
    code: "CMS68v8",
    title: "Documentation of Current Medications in the Medical Record",
  },
  {
    code: "CMS69v7",
    title:
      "Preventive Care and Screening: Body Mass Index (BMI) Screening and Follow-Up Plan",
  },
  {
    code: "CMS156v7",
    title: "Use of High-Risk Medications in the Elderly",
  },
  {
    code: "CMS165v7",
    title: "Controlling High Blood Pressure",
  },
];

const certifiedModules = [
  {
    section: "315 (a)",
    items: [
      "(1) Computerized Provider Order Entry (CPOE) - Medications",
      "(2) Computerized Provider Order Entry (CPOE) - Laboratory",
      "(4) Drug-Drug, Drug-Allergy Interaction Checks for CPOE",
      "(5) Demographics",
      "(12) Family Health History",
      "(14) Implantable Device List",
    ],
  },
  {
    section: "315 (b)",
    items: [
      "(1) Transitions of Care",
      "(2) Clinical Information Reconciliation and Incorporation",
      "(10) Electronic Health Information Export",
      "(11) Decision Support Interventions",
    ],
  },
  {
    section: "315 (c)",
    items: ["(1) Clinical Quality Measures - Record and Export"],
  },
  {
    section: "315 (d)",
    items: [
      "(1) Authentication, Access Control, Authorization",
      "(2) Auditable Events and Tamper-Resistance",
      "(3) Audit Report(s)",
      "(4) Amendments",
      "(5) Automatic Access Time-out",
      "(6) Emergency Access",
      "(7) End-User Device Encryption",
      "(8) Integrity",
      "(9) Trusted Connection",
      "(10) Auditing Actions on Health Information",
      "(12) Encrypt Authentication Credentials",
      "(13) Multi-factor Authentication",
    ],
  },
  {
    section: "315 (e)",
    items: ["(1) View, Download, and Transmit to 3rd Party"],
  },
  {
    section: "315 (f)",
    items: [
      "(1) Transmission to Immunization Registries",
      "(2) Transmission to Public Health Agencies - Syndromic Surveillance",
    ],
  },
  {
    section: "315 (g)",
    items: [
      "(3) Safety-Enhanced Design",
      "(4) Quality Management System",
      "(5) Accessibility-Centered Design",
      "(6) Consolidated CDA Creation",
      "(7) Application Access - Patient Selection",
      "(9) Application Access - All Data Request",
      "(10) Standardized API for Patient and Population Services",
    ],
  },
  {
    section: "315 (h)",
    items: ["(1) Direct Project"],
  },
];

function CertificateIcon() {
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
      <path d="M7 3h10v13H7zM9 7h6M9 10h6" />
      <circle cx="12" cy="17" r="3" />
      <path d="m10.5 19.5-.5 3 2-1 2 1-.5-3" />
    </svg>
  );
}

export default function AdditionalCostsPage() {
  return (
    <main id="main-content" className="additional-costs-page">
      <section className="costs-hero">
        <div className="section-container costs-hero-inner">
          <div className="costs-hero-copy">
            <span className="costs-eyebrow">
              <span aria-hidden="true" />
              CERTIFICATION &amp; TRANSPARENCY
            </span>
            <h1>Simplify EMR v4.0 certification</h1>
            <p>
              Explore certified modules, clinical quality measures, and
              important information about costs and product capabilities.
            </p>
            <a className="costs-hero-link" href="#certified-modules">
              View certified modules <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="costs-hero-card" aria-label="Certification overview">
            <span className="costs-hero-card-icon">
              <CertificateIcon />
            </span>
            <span className="costs-hero-card-label">SIMPLIFY EMR</span>
            <strong>Certified functionality</strong>
            <span className="costs-hero-card-description">
              Clinical measures, modules, and transparency details
            </span>
            <span className="costs-hero-card-footer">
              <span className="costs-status-dot" aria-hidden="true" />
              Version 4.0
            </span>
          </div>
        </div>
      </section>

      <div className="section-container costs-content">
        <section
          className="costs-section quality-section"
          aria-labelledby="quality-title"
        >
          <div className="costs-section-heading">
            <span className="costs-section-kicker">QUALITY MEASURES</span>
            <h2 id="quality-title">Tested and certified clinical quality measures</h2>
            <p>
              Simplify EMR v4.0 is certified for the following clinical quality
              measures.
            </p>
          </div>
          <div className="quality-grid">
            {qualityMeasures.map((measure) => (
              <article className="quality-card" key={measure.code}>
                <span className="quality-code">{measure.code}</span>
                <h3>{measure.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section
          className="costs-section modules-section"
          id="certified-modules"
          aria-labelledby="modules-title"
        >
          <div className="costs-section-heading">
            <span className="costs-section-kicker">CERTIFIED CAPABILITIES</span>
            <h2 id="modules-title">Modules tested and certified</h2>
            <p>
              Certified functionality is grouped below by the corresponding
              certification criterion.
            </p>
          </div>
          <div className="module-grid">
            {certifiedModules.map((module) => (
              <article className="module-card" key={module.section}>
                <h3>{module.section}</h3>
                <ul>
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="costs-section cost-statement"
          aria-labelledby="cost-statement-title"
        >
          <div className="cost-statement-mark" aria-hidden="true">
            $
          </div>
          <div>
            <span className="costs-section-kicker">COST TRANSPARENCY</span>
            <h2 id="cost-statement-title">Costs</h2>
            <p>
              As part of the client service agreement, this certified product
              may have recurring and/or one-time fees for support and licensing.
              There are no additional costs for the certified functionality; the
              features are incorporated into the product at no additional cost
              to clients. All fees associated with the additional software
              required are included in our monthly recurring support fees. This
              solution is web-based, requires the use of a current web browser,
              and may require the execution of a contract and business associate
              agreement.
            </p>
          </div>
        </section>

        <section
          className="costs-info-grid"
          aria-label="Additional product information"
        >
          <article className="costs-info-card" id="api-information">
            <span className="costs-info-icon" aria-hidden="true">
              {"</>"}
            </span>
            <span className="costs-section-kicker">DEVELOPER RESOURCES</span>
            <h2>API information</h2>
            <p>
              Simplify EMR v4.0 provides APIs (Application Programming
              Interfaces) that give third-party software developers access to
              health information. Review the terms and API documentation for
              more details.
            </p>
            <Link href="/api-documentation/">
              View API information <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="costs-info-card">
            <span className="costs-info-icon" aria-hidden="true">
              2FA
            </span>
            <span className="costs-section-kicker">ACCOUNT SECURITY</span>
            <h2>Two-factor authentication</h2>
            <p>
              Users can optionally receive a sign-in code by text message for
              two-factor authentication.
            </p>
          </article>

          <article className="costs-info-card">
            <span className="costs-info-icon" aria-hidden="true">
              SV
            </span>
            <span className="costs-section-kicker">STANDARDS</span>
            <h2>SVAP</h2>
            <p>
              View the advance notice related to the Standards Version
              Advancement Process.
            </p>
            <a href="https://docs.google.com/document/d/1JY6M6k5zdPwIZQXPj90btLGoun38ri15/edit?usp=sharing&ouid=103178984741058353842&rtpof=true&sd=true">
              SVAP Advance Notice <span aria-hidden="true">→</span>
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
