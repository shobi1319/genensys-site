import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import "./interoperability.css";

export const metadata = createPageMetadata(
  "Healthcare Interoperability",
  "Explore Genensys healthcare interoperability resources, including FHIR API documentation, certified modules, and real-world testing information.",
  "/interoperability",
);

const resources = [
  {
    number: "01",
    title: "FHIR API documentation",
    description:
      "Find API resources, service-based URLs, and documentation for developers evaluating integrations.",
    href: "/api-documentation",
    action: "Explore API resources",
  },
  {
    number: "02",
    title: "Certified capabilities",
    description:
      "Review certified modules, clinical quality measures, and product information for Simplify EMR v4.0.",
    href: "/additional-costs",
    action: "Review certified modules",
  },
  {
    number: "03",
    title: "Real-world testing",
    description:
      "Browse real-world testing information organized by certification criteria and reporting year.",
    href: "/real-world-testing",
    action: "View testing information",
  },
];

export default function InteroperabilityPage() {
  return (
    <main id="main-content" className="interoperability-page">
      <section className="interoperability-hero">
        <div className="interoperability-container interoperability-hero-grid">
          <div className="interoperability-copy">
            <span className="interoperability-eyebrow">
              CONNECTED HEALTHCARE
            </span>
            <h1>
              Better-connected
              <span> healthcare information.</span>
            </h1>
            <p>
              Explore Genensys resources for healthcare interoperability,
              including FHIR API documentation and information about certified
              product capabilities.
            </p>
            <Link
              href="/api-documentation"
              className="interoperability-primary-button"
            >
              Explore API resources <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            className="interoperability-visual"
            role="img"
            aria-label="Diagram showing healthcare records connected through FHIR and APIs"
          >
            <div className="interoperability-node node-ehr">EHR</div>
            <div className="interoperability-node node-fhir">FHIR</div>
            <div className="interoperability-node node-api">API</div>
            <span className="interoperability-connector connector-one" />
            <span className="interoperability-connector connector-two" />
            <span className="interoperability-connector connector-three" />
            <div className="interoperability-core" aria-hidden="true">
              <span>+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="interoperability-resources">
        <div className="interoperability-container">
          <div className="interoperability-heading">
            <span className="interoperability-eyebrow">START HERE</span>
            <h2>Explore the available resources.</h2>
            <p>
              Technical documentation and product information are available
              below. Review the materials that best fit your needs.
            </p>
          </div>

          <div className="interoperability-resource-grid">
            {resources.map((resource) => (
              <article
                className="interoperability-resource-card"
                key={resource.number}
              >
                <span>{resource.number}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href={resource.href}>
                  {resource.action} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="interoperability-product-callout">
            <div>
              <span className="interoperability-eyebrow">SIMPLIFY EMR</span>
              <h2>Learn more about the EHR platform.</h2>
              <p>
                Explore clinical and practice management workflows supported
                by the Genensys occupational therapy EHR.
              </p>
            </div>
            <Link href="/products/occupational-therapy-ehr">
              Explore the EHR <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
