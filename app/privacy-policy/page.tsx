
import "./page.css";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Read the Genensys privacy policy to understand how information is collected and used.",
  "/privacy-policy",
);

const sections = [
  {
    title: "What Information We Collect and How We Use It",
    content: (
      <>
        <p>
          Any information we collect on our Site generally falls into the
          Personally Identifiable Information category.
        </p>
        <p>
          <strong>Personally Identifiable Information:</strong> This refers
          to information that lets us know specifically who you are. In
          general, you can visit our Site without telling us who you are or
          revealing any Personally Identifiable Information.
        </p>
      </>
    ),
  },
  {
    title: "Sharing Your Information",
    content: (
      <>
        <p>
          Except as disclosed in this Privacy Statement, we do not sell
          trade, rent, or otherwise retransmit any Personally Identifiable
          Information we collect online unless we have your permission.
        </p>
        <p>
          From time to time, we may be required to provide Personally
          Identifiable Information in response to court order, subpoena, or
          government investigation. We also reserve the right to report to
          law enforcement agencies any activities that we in good faith
          believe to be unlawful.
        </p>
        <p>
          We may release Personally Identifiable Information when we believe
          that such release is reasonably necessary to enforce or apply our
          Limited Warranty or to protect the rights, property, and safety of
          others and ourselves.
        </p>
      </>
    ),
  },
  {
    title: "Links to Other Web Sites",
    content: (
      <p>
        Links to third-party Web sites may be provided solely for your
        information and convenience, or to provide additional information
        for various other goods and services. If you use these links, you
        will leave our Site. This Privacy Statement does not cover the
        information practices of those Web sites linked to our Site, nor
        do we control their content or privacy policies. We suggest that
        you carefully review the privacy policies of each site you visit.
      </p>
    ),
  },
  {
    title: "Changes to This Statement",
    content: (
      <p>
        Any updates or changes to the terms of this Privacy Statement will
        be posted here on our Site and the date of the newest version posted
        below. Please check back frequently, especially before you submit
        any Personally Identifiable Information at our Site, to see if this
        Privacy Statement has changed. By using our Site, you acknowledge
        acceptance of this Privacy Statement in effect at the time of use.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero-decoration" />

        <div className="privacy-container privacy-hero-content">
          <span className="privacy-eyebrow">
            <span />
            GENENSYS / LEGAL INFORMATION
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Your privacy matters. Learn how we collect, use, and protect
            information when you visit our website.
          </p>

          <div className="privacy-hero-bottom">
            <span>YOUR PRIVACY</span>
            <span className="privacy-hero-line" />
            <span>OUR COMMITMENT</span>
          </div>
        </div>

        <div className="privacy-hero-symbol" aria-hidden="true">
          <div className="privacy-shield">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 6L53 14V29C53 42 44 53 32 58C20 53 11 42 11 29V14L32 6Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M23 32L29 38L42 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="privacy-container privacy-layout">
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar-inner">
              <span className="privacy-sidebar-label">
                ON THIS PAGE
              </span>

              <a href="#introduction">Introduction</a>
              <a href="#information">Information We Collect</a>
              <a href="#sharing">Sharing Your Information</a>
              <a href="#external-links">Third-Party Websites</a>
              <a href="#changes">Changes to This Statement</a>

              <div className="privacy-sidebar-note">
                <span>GENENSYS</span>
                <p>
                  Thank you for visiting our website and taking the time
                  to review our privacy statement.
                </p>
              </div>
            </div>
          </aside>

          <article className="privacy-document">
            <div className="privacy-document-top">
              <span className="privacy-document-tag">
                PRIVACY STATEMENT
              </span>
              <span className="privacy-document-number">
                GENENSYS / 01
              </span>
            </div>

            <section id="introduction" className="privacy-document-intro">
              <h2>Our commitment to your privacy</h2>
              <p>
                Thank you for visiting www.genensys.com. We appreciate the
                opportunity to interact with you on the Internet and are
                committed to protecting and safeguarding your privacy.
              </p>
              <p>
                The purpose of this Privacy Statement is to inform you about
                the types of information we might collect about you when you
                visit our Site, how we may use that information and whether
                we disclose that information to anyone.
              </p>
            </section>

            {sections.map((section, index) => {
              const ids = [
                "information",
                "sharing",
                "external-links",
                "changes",
              ];

              return (
                <section
                  className="privacy-document-section"
                  id={ids[index]}
                  key={section.title}
                >
                  <div className="privacy-section-number">
                    0{index + 1}
                  </div>

                  <div className="privacy-section-body">
                    <h2>{section.title}</h2>
                    <div className="privacy-section-text">
                      {section.content}
                    </div>
                  </div>
                </section>
              );
            })}

            <div className="privacy-document-end">
              <span />
              <p>GENENSYS — PRIVACY STATEMENT</p>
              <span />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
