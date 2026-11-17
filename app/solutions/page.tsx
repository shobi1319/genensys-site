import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import "./solutions.css";

export const metadata = createPageMetadata(
  "Healthcare Solutions",
  "Explore Genensys healthcare operations and technology services, including medical billing, revenue cycle support, practice operations, and compliance support.",
  "/solutions",
);

const solutions = [
  {
    number: "01",
    title: "Medical Billing & RCM",
    description:
      "Medical billing, revenue cycle analysis, and optimization to support the financial operations of healthcare practices.",
    href: "/products/medical-billing",
    action: "Explore medical billing",
  },
  {
    number: "02",
    title: "AR & Denial Management",
    description:
      "Accounts receivable follow-up, denial management, and revenue recovery support.",
    href: "/products/medical-billing",
    action: "Explore medical billing",
  },
  {
    number: "03",
    title: "Eligibility & VOB",
    description:
      "Insurance eligibility and verification-of-benefits support for healthcare practices.",
    href: "/book-a-demo",
    action: "Discuss your needs",
  },
  {
    number: "04",
    title: "Provider Credentialing",
    description:
      "Administrative support for healthcare provider credentialing processes.",
    href: "/book-a-demo",
    action: "Discuss your needs",
  },
  {
    number: "05",
    title: "Front & Back Office Support",
    description:
      "Operational assistance for front-office and back-office practice activities.",
    href: "/book-a-demo",
    action: "Discuss your needs",
  },
  {
    number: "06",
    title: "Practice Management",
    description:
      "Support for scheduling, billing, records, and practice workflow optimization.",
    href: "/products",
    action: "Explore products",
  },
  {
    number: "07",
    title: "Compliance & Quality Support",
    description:
      "HIPAA-related compliance support and MIPS/MICRA practice improvement services.",
    href: "/book-a-demo",
    action: "Discuss your needs",
  },
  {
    number: "08",
    title: "Practice Audits & Digital Support",
    description:
      "Business process audits, medical record scanning, and digital marketing services for medical practices.",
    href: "/book-a-demo",
    action: "Discuss your needs",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content" className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-container">
          <span className="solutions-eyebrow">HEALTHCARE OPERATIONS</span>
          <h1>
            Support for the work
            <span> behind better care.</span>
          </h1>
          <p>
            Explore healthcare services and technology from Genensys, built
            around the administrative, financial, and clinical workflows that
            keep practices moving.
          </p>
          <div className="solutions-hero-actions">
            <Link href="/book-a-demo" className="solutions-primary-button">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
            <Link href="/products" className="solutions-text-link">
              Browse products
            </Link>
          </div>
        </div>
        <div className="solutions-hero-orb" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="solutions-list-section" aria-labelledby="solutions-title">
        <div className="solutions-container">
          <div className="solutions-section-heading">
            <div>
              <span className="solutions-eyebrow">OUR SOLUTIONS</span>
              <h2 id="solutions-title">Find support for your practice.</h2>
            </div>
            <p>
              Select a service to learn more or get in touch with our team to
              discuss what your organization needs.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solutions-card" key={solution.number}>
                <span className="solutions-card-number">{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <Link href={solution.href}>
                  {solution.action} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
