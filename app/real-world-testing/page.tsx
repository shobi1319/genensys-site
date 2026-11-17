import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import "./real-world-testing.css";

export const metadata = createPageMetadata(
  "Real World Testing",
  "Review Genensys real-world testing information by certification criteria and reporting year.",
  "/real-world-testing",
);

type DocumentKind = "Plan" | "Results";

const testingPrograms: {
  id: string;
  title: string;
  note?: string;
  years: {
    year: number;
    documents: DocumentKind[];
  }[];
}[] = [
  {
    id: "program-b-e",
    title: "Real World Testing for (b)(1, 2, 6, 10) and (e)(1)",
    years: [
      { year: 2022, documents: ["Plan", "Results"] },
      { year: 2023, documents: ["Plan", "Results"] },
      { year: 2024, documents: ["Plan", "Results"] },
      { year: 2025, documents: ["Plan"] },
    ],
  },
  {
    id: "program-f",
    title: "Real World Testing for (f)(1, 2)",
    years: [
      { year: 2022, documents: ["Plan", "Results"] },
      { year: 2023, documents: ["Plan", "Results"] },
      { year: 2024, documents: ["Plan", "Results"] },
      { year: 2025, documents: ["Plan"] },
    ],
  },
  {
    id: "program-g",
    title: "Real World Testing for (g)(7-10)",
    note: "The 2024 and 2025 documents specify criteria (g)(7, 9, 10).",
    years: [
      { year: 2022, documents: ["Plan", "Results"] },
      { year: 2023, documents: ["Plan", "Results"] },
      { year: 2024, documents: ["Plan", "Results"] },
      { year: 2025, documents: ["Plan", "Results"] },
    ],
  },
  {
    id: "program-c",
    title: "Real World Testing for (c)(1)",
    years: [
      { year: 2022, documents: ["Plan", "Results"] },
      { year: 2023, documents: ["Plan", "Results"] },
      { year: 2024, documents: ["Plan", "Results"] },
      { year: 2025, documents: ["Plan"] },
    ],
  },
  {
    id: "program-h",
    title: "Real World Testing for (h)(1)",
    years: [
      { year: 2022, documents: ["Plan", "Results"] },
      { year: 2023, documents: ["Plan", "Results"] },
      { year: 2024, documents: ["Plan", "Results"] },
      { year: 2025, documents: ["Plan"] },
    ],
  },
];

function DocumentIcon() {
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
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export default function RealWorldTestingPage() {
  return (
    <main id="main-content" className="rwt-page">
      <section className="rwt-hero">
        <div className="section-container rwt-hero-inner">
          <div className="rwt-hero-copy">
            <div className="rwt-eyebrow">
              <span aria-hidden="true" />
              TRANSPARENCY &amp; COMPLIANCE
            </div>
            <h1>Real World Testing</h1>
            <p>
              Find Genensys real-world testing plans and results, organized by
              certification criteria and reporting year.
            </p>
            <div className="rwt-hero-actions">
              <Link className="rwt-button rwt-button-primary" href="#testing-programs">
                Browse testing documents
                <span aria-hidden="true">↓</span>
              </Link>
              <Link className="rwt-button rwt-button-secondary" href="/book-a-demo/">
                Contact Genensys
              </Link>
            </div>
          </div>

          <div className="rwt-hero-panel" aria-label="Real-world testing overview">
            <div className="rwt-panel-top">
              <span className="rwt-panel-icon" aria-hidden="true">
                <DocumentIcon />
              </span>
              <span className="rwt-panel-status">
                <span aria-hidden="true" />
                ANNUAL REPORTING
              </span>
            </div>
            <p className="rwt-panel-label">Testing archive</p>
            <p className="rwt-panel-years">2022 <span>-</span> 2025</p>
            <div className="rwt-panel-rule" />
            <div className="rwt-panel-bottom">
              <span>Plans and results</span>
              <span className="rwt-panel-count">5 criteria groups</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="rwt-content section-container"
        id="testing-programs"
        aria-labelledby="rwt-content-title"
      >
        <div className="rwt-intro">
          <div>
            <span className="rwt-section-kicker">DOCUMENT LIBRARY</span>
            <h2 id="rwt-content-title">Testing plans and results</h2>
            <p>
              Choose a criteria group to review its annual documentation. File
              links will be added here.
            </p>
          </div>
          <div className="rwt-link-notice">
            <span className="rwt-notice-dot" aria-hidden="true" />
            Documents are being prepared
          </div>
        </div>

        <nav className="rwt-program-nav" aria-label="Testing criteria groups">
          {testingPrograms.map((program, index) => (
            <a href={`#${program.id}`} key={program.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {program.title.replace("Real World Testing for ", "")}
            </a>
          ))}
        </nav>

        <div className="rwt-program-list">
          {testingPrograms.map((program, index) => (
            <article
              className="rwt-program-card"
              id={program.id}
              key={program.id}
              aria-labelledby={`${program.id}-title`}
            >
              <div className="rwt-program-heading">
                <span className="rwt-program-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="rwt-program-kicker">
                    CERTIFICATION CRITERIA
                  </span>
                  <h3 id={`${program.id}-title`}>{program.title}</h3>
                  {program.note && <p>{program.note}</p>}
                </div>
              </div>

              <div className="rwt-year-grid">
                {program.years.map(({ year, documents }) => (
                  <section
                    className="rwt-year-card"
                    key={year}
                    aria-label={`${year} documents`}
                  >
                    <div className="rwt-year-heading">
                      <h4>{year}</h4>
                      <span>ANNUAL REPORT</span>
                    </div>
                    <div className="rwt-document-list">
                      {documents.map((document) => (
                        <div
                          className="rwt-document-placeholder"
                          key={document}
                          aria-label={`${year} ${document}: link coming soon`}
                        >
                          <DocumentIcon />
                          <span className="rwt-document-name">{document}</span>
                          <span className="rwt-document-status">Coming soon</span>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
