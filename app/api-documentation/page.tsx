import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";
import "./api-documentation.css";

export const metadata = createPageMetadata(
  "API Documentation",
  "Explore Genensys FHIR API documentation, API terms of service, the API framework, and service-based URLs.",
  "/api-documentation",
);

type ApiIconName = "mail" | "document" | "code" | "link" | "send" | "lock";

const apiIconContent: Record<ApiIconName, ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" />,
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
};

function ApiIcon({
  name,
  className,
}: {
  name: ApiIconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {apiIconContent[name]}
    </svg>
  );
}

const apiResources: {
  title: string;
  description: string;
  label: string;
  href: string;
  icon: ApiIconName;
}[] = [
  {
    title: "G(10) FHIR API",
    description:
      "Review the documentation for Genensys FHIR API access and capabilities.",
    label: "View FHIR API documentation",
    href: "https://docs.google.com/document/d/16DjpaMgS8VFV9Kk4kHRfbjI-RBwLFGa9/view?usp=sharing&ouid=103178984741058353842&rtpof=true&sd=true",
    icon: "document",
  },
  {
    title: "API Terms of Service",
    description:
      "Read the terms that apply to use of the Genensys API services.",
    label: "View API terms",
    href: "https://drive.google.com/file/d/1fO1j4vOa3WSOXfieU3BxcHcv5wXzfteH/view?usp=sharing",
    icon: "lock",
  },
  {
    title: "API Framework",
    description:
      "Explore the latest framework information for connecting with Genensys APIs.",
    label: "View API framework",
    href: "https://drive.google.com/file/d/1ugfzmRcxja6l_LEGbLN-Pd_5gPKP2959/view",
    icon: "code",
  },
];

export default function ApiDocumentationPage() {
  return (
    <main id="main-content" className="api-page">
      <section className="api-hero">
        <div className="section-container api-hero-inner">
          <div className="api-hero-copy">
            <span className="api-eyebrow">
              <span aria-hidden="true" />
              DEVELOPER RESOURCES
            </span>
            <h1>API Documentation</h1>
            <p>
              Find the resources you need to connect with Genensys APIs,
              including FHIR documentation, service terms, and framework
              information.
            </p>
            <a className="api-primary-button" href="#api-resources">
              Explore API resources
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="api-hero-visual" aria-hidden="true">
            <div className="api-orbit api-orbit-one" />
            <div className="api-orbit api-orbit-two" />
            <div className="api-code-card">
              <div className="api-code-top">
                <span />
                <span />
                <span />
                <small>FHIR API</small>
              </div>
              <div className="api-code-body">
                <span className="api-code-line api-code-line-short" />
                <span className="api-code-line api-code-line-long" />
                <span className="api-code-line api-code-line-medium" />
                <span className="api-code-line api-code-line-long" />
              </div>
              <div className="api-code-footer">
                <ApiIcon name="lock" />
                Secure data exchange
              </div>
            </div>
            <div className="api-floating-icon api-floating-icon-top">
              <ApiIcon name="link" />
            </div>
            <div className="api-floating-icon api-floating-icon-bottom">
              <ApiIcon name="code" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-container api-content">
        <section
          className="api-resources-section"
          id="api-resources"
          aria-labelledby="api-resources-title"
        >
          <div className="api-section-heading">
            <span className="api-section-kicker">DOCUMENTATION LIBRARY</span>
            <h2 id="api-resources-title">API resources</h2>
            <p>
              Start with the documentation and terms relevant to your
              integration.
            </p>
          </div>

          <div className="api-resource-grid">
            {apiResources.map((resource, index) => (
              <article
                className="api-resource-card"
                key={resource.title}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="api-resource-icon">
                  <ApiIcon name={resource.icon} />
                </span>
                <span className="api-resource-number">
                  0{index + 1} / RESOURCE
                </span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.href}>
                  {resource.label}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          <article className="api-endpoint-card">
            <span className="api-endpoint-icon">
              <ApiIcon name="link" />
            </span>
            <div className="api-endpoint-copy">
              <span className="api-section-kicker">SERVICE DIRECTORY</span>
              <h3>Service Based URL</h3>
              <p>
                Access the current service-based endpoint directory for
                Genensys FHIR services.
              </p>
              <a href="https://fhir.genensys.com/fhir/ServiceBaseURLs.json">
                https://fhir.genensys.com/fhir/ServiceBaseURLs.json
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span className="api-endpoint-badge">JSON</span>
          </article>
        </section>

        <section
          className="api-contact-section"
          aria-labelledby="api-contact-title"
        >
          <div className="api-contact-copy">
            <span className="api-section-kicker">NEED A HAND?</span>
            <h2 id="api-contact-title">Talk with our API team.</h2>
            <p>
              Send a question about API access or documentation and our team
              will be ready to help. Required fields are marked.
            </p>
            <div className="api-contact-note">
              <span className="api-contact-note-icon">
                <ApiIcon name="lock" />
              </span>
              <span>
                Please do not include patient details or other sensitive
                information in this form.
              </span>
            </div>
          </div>

          <form className="api-contact-form">
            <div className="api-form-grid">
              <div className="api-form-field">
                <label htmlFor="api-name">
                  Name <span>Required</span>
                </label>
                <input
                  id="api-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="api-form-field">
                <label htmlFor="api-email">
                  Email <span>Required</span>
                </label>
                <input
                  id="api-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@organization.com"
                  required
                />
              </div>
              <div className="api-form-field api-form-field-full">
                <label htmlFor="api-subject">
                  Subject <span>Required</span>
                </label>
                <input
                  id="api-subject"
                  name="subject"
                  type="text"
                  placeholder="What can we help with?"
                  required
                />
              </div>
              <div className="api-form-field api-form-field-full">
                <label htmlFor="api-message">
                  Message <span>Required</span>
                </label>
                <textarea
                  id="api-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your API question..."
                  required
                />
              </div>
            </div>
            <button className="api-send-button" type="button" disabled>
              <ApiIcon name="send" />
              Send
            </button>
            <p className="api-form-status" role="status">
              Contact form submission will be enabled once the website
              messaging service is connected.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
