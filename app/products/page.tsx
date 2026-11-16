
import "./products.css";
import Link from "next/link";
const products = [
  {
    number: "01",
    category: "ELECTRONIC HEALTH RECORDS",
    title: "EHR for Occupational Therapy",
    description:
      "Support occupational therapy workflows with electronic health records and fast electronic claims filing and follow-up.",
    image:
      "https://genensys.com/wp-content/uploads/2023/10/doctor-writing-about-routine-medical-checkup-1-scaled.jpg",
    href: "/products/occupational-therapy-ehr",
    tag: "EHR SOFTWARE",
  },
{
  number: "02",
  category: "TELETHERAPY",
  title: "Tele Therapy Services",
  description:
    "Extend your practice beyond the clinic with flexible virtual consultations and therapy services.",
  image:
    "https://genensys.com/wp-content/uploads/2023/11/doctor-offering-medical-teleconsultation-scaled.jpg",
  href: "/products/teletherapy",
  tag: "VIRTUAL CARE",
},
  {
    number: "03",
    category: "REVENUE CYCLE",
    title: "Billing",
    description:
      "Streamlined billing software for clinicians, designed to support efficient and accurate billing workflows.",
    image:
      "https://genensys.com/wp-content/uploads/2023/10/close-up-businessman-calculating-invoices-using-calculator-scaled.jpg",
    href: "/products/medical-billing",
    tag: "BILLING",
  },
  {
    number: "04",
    category: "PATIENT ENGAGEMENT",
    title: "Patient Care Management",
    description:
      "Patient-focused care management solutions that help clinicians support communication and patient involvement.",
    image:
      "https://genensys.com/wp-content/uploads/2023/10/group-doctors-cooperating-while-analyzing-xray-medical-clinic-1-scaled.jpg",
    href: "/products/patient-care",
    tag: "PATIENT PORTAL",
  },
  {
    number: "05",
    category: "THERAPY PRACTICE SOFTWARE",
    title: "Simplify Therapy",
    description:
      "Easy-to-use therapy solutions for healthcare professionals, supporting therapy practice and administrative workflows.",
    image:
      "https://genensys.com/wp-content/uploads/2023/11/Untitled-design-14.png",
    href: "/products/simplify-therapy",
    tag: "THERAPY SOFTWARE",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ProductsPage() {
  return (
    <main id="main-content" className="products-page">
      {/* PAGE HERO */}
      <section className="products-hero">
        <div className="section-container products-hero-inner">
          <div className="products-hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              GENENSYS PRODUCTS
            </div>

            <h1>
              Technology that
              <span> supports better</span>
              <span className="gradient-text"> healthcare.</span>
            </h1>

            <p>
              Explore healthcare technology from Genensys,
              including electronic health records, teletherapy,
              billing and patient care management solutions.
            </p>

            <div className="hero-actions">
              <Link href="#our-products" className="primary-button">
                Explore Products <Arrow />
              </Link>

              <Link href="/book-a-demo/" className="secondary-button">
                Talk to Our Team <Arrow />
              </Link>
            </div>
          </div>

          <div className="products-hero-art" aria-hidden="true">
            <div className="products-art-orbit orbit-one" />
            <div className="products-art-orbit orbit-two" />

            <div className="products-art-card art-card-main">
              <span className="art-card-icon">✳</span>
              <span className="art-card-label">HEALTHCARE TECHNOLOGY</span>
              <strong>Connected care.</strong>
              <strong className="art-blue">Simplified workflows.</strong>
              <div className="art-card-lines">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="products-art-card art-card-small">
              <span className="art-small-icon">+</span>
              <div>
                <strong>Patient-focused</strong>
                <small>Healthcare solutions</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS INTRO */}
      <section className="products-intro">
        <div className="section-container products-intro-inner">
          <div>
            <span className="section-eyebrow">OUR PRODUCT PORTFOLIO</span>
            <h2>
              Solutions for different parts of the healthcare journey.
            </h2>
          </div>

          <p>
            From clinical records and remote therapy to billing
            and patient engagement, Genensys brings together
            technology for healthcare practices and professionals.
          </p>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section
        id="our-products"
        className="products-catalogue section-padding"
      >
        <div className="section-container">
          <div className="products-catalogue-heading">
            <div>
              <span className="section-eyebrow">EXPLORE GENENSYS</span>
              <h2>Our products</h2>
            </div>

          </div>

          <div className="products-catalogue-grid">
            {products.map((product) => (
              <article className="catalogue-card" key={product.number}>
                <Link
                  href={product.href}
                  className="catalogue-image-link"
                  aria-label={`View ${product.title} details`}
                >
                  <div
                    className="catalogue-image"
                    style={{
                      backgroundImage: `url("${product.image}")`,
                    }}
                    role="img"
                    aria-label={product.title}
                  >
                
                    <span className="catalogue-image-tag">
                      {product.tag}
                    </span>
                  </div>
                </Link>

                <div className="catalogue-card-content">
                  <span className="catalogue-category">
                    {product.category}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <Link
                    href={product.href}
                    className="catalogue-link"
                  >
                    View Product Details <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING TECHNOLOGY */}
      <section className="products-support-section">
        <div className="section-container products-support-inner">
          <div className="products-support-icon">⌘</div>

          <div className="products-support-content">
            <span className="section-eyebrow">
              CONNECTED HEALTHCARE
            </span>

            <h2>Technology that works together.</h2>

            <p>
              Healthcare interoperability helps information
              move between systems. Explore how FHIR and
              healthcare integration technologies support
              connected healthcare environments.
            </p>
          </div>

          <Link
            href="/interoperability"
            className="secondary-button"
          >
            Explore Interoperability <Arrow />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="section-eyebrow">LET'S CONNECT</span>

              <h2>Looking for the right healthcare solution?</h2>

              <p>
                Talk to the Genensys team about our products
                and how they may support your organization.
              </p>
            </div>

            <Link href="/book-a-demo/" className="primary-button">
              Contact Our Team <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
