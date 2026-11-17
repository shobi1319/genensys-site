
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import "./page.css";

export const metadata = createPageMetadata(
  "Client Login",
  "Access your Genensys client portals for Simplify EMR and Simplify Therapy.",
  "/client-login",
  true,
);

const products = [
  {
    number: "01",
    name: "Simplify EMR",
    description:
      "Access your electronic medical records and practice management platform.",
    url: "https://simplifyemr.genensys.com/",
    label: "EMR PLATFORM",
    icon: "E",
  },
  {
    number: "02",
    name: "Simplify Therapy",
    description:
      "Access your therapy practice platform and manage your clinical workflows.",
    url: "https://simplifytherapy.genensys.com/",
    label: "THERAPY PLATFORM",
    icon: "T",
  },
];

export default function ClientLoginPage() {
  return (
    <main id="main-content" className="client-login-page">
      <section className="client-login-hero">
        <div className="client-login-hero-decoration" />

        <div className="client-login-container client-login-hero-inner">
          <span className="client-login-eyebrow">
            <span />
            GENENSYS CLIENT PORTAL
          </span>

          <h1>
            Welcome
            <br />
            <span>back.</span>
          </h1>

          <p>
            Select your Genensys product below to access your account
            and continue where you left off.
          </p>

          <div className="client-login-hero-bottom">
            <span>SECURE CLIENT ACCESS</span>
            <span className="client-login-hero-divider" />
            <span>SIMPLIFY YOUR WORKFLOW</span>
          </div>
        </div>

        <div className="client-login-hero-symbol" aria-hidden="true">
          <div className="client-login-symbol-circle">
            <span>+</span>
          </div>
        </div>
      </section>

      <section className="client-login-products">
        <div className="client-login-container">
          <div className="client-login-section-heading">
            <div>
              <span className="client-login-section-label">
                YOUR GENENSYS PRODUCTS
              </span>
              <h2>
                Where would you
                <br />
                like to <span>sign in?</span>
              </h2>
            </div>

            <p>
              Please select the product you wish to log in to.
            </p>
          </div>

          <div className="client-login-product-grid">
            {products.map((product) => (
              <article className="client-login-product-card" key={product.number}>
                <div className="client-login-card-top">
                  <span className="client-login-card-number">
                    {product.number}
                  </span>
                  <span className="client-login-card-label">
                    {product.label}
                  </span>
                </div>
<div className="client-login-brand-wrap">
  <div className="client-login-brand-orbit" />
  <div className="client-login-brand-orbit orbit-two" />

  <div className="client-login-brand-circle">
    <Image
         src="/images/genensys-logo.svg"
            alt="Genensys"
            width={64}
            height={36}
      sizes="69px"
    />
  </div>

  <span className="client-login-brand-dot" />
</div>

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <a
                  href={product.url}
                  className="client-login-button"
                >
                  Continue to login
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="client-login-help">
            <div className="client-login-help-icon">?</div>

            <div className="client-login-help-copy">
              <span>NEED A HAND?</span>
              <h3>Need Help? Feel free to contact us.</h3>
              <p>
                We love to help you any time. Get in touch with our team
                if you need assistance.
              </p>
            </div>

            <Link href="/book-a-demo" className="client-login-help-button">
              Contact Us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
