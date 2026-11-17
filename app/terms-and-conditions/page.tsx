
import Link from "next/link";
import "./page.css";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Terms and Conditions",
  "Review the terms and conditions for using the Genensys website and services.",
  "/terms-and-conditions",
);

const terms = [
  {
    id: "acceptance",
    number: "01",
    icon: "01",
    title: "Acceptance of Agreement",
    paragraphs: [
      "You agree to the terms and conditions outlined in this Terms and Conditions of use Agreement (Agreement) with respect to our site www.genensys.com. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Site, the content, free product samples or freebie offers or services provided by or listed on the Site, and the subject matter of this Agreement.",
      "This Agreement may be amended by us at any time and at any frequency without specific notice to you. The latest Agreement will be posted on the Site, and you should review this Agreement prior to using the Site.",
    ],
  },
  {
    id: "copyright",
    number: "02",
    icon: "©",
    title: "Copyright",
    paragraphs: [
      "The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws, including but not limited to intellectual property laws. The copying, reproduction, use, modification or publication by you of any such matters or any part of the Site is strictly prohibited, without our express prior written permission.",
    ],
  },
  {
    id: "deleting",
    number: "03",
    icon: "✎",
    title: "Deleting and Modification",
    paragraphs: [
      "We reserve the right in our sole discretion, without any obligation and without any notice requirement to you, to edit or delete any documents, information or other content appearing on the Site, including this Agreement.",
    ],
  },
  {
    id: "indemnification",
    number: "04",
    icon: "✓",
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify, defend and hold us, our officers, our shareholders, our partners, attorneys and employees harmless from any and all liability, loss, damages, claim and expense, including reasonable attorney’s fees, related to your violation of this Agreement or use of the Site.",
    ],
  },
  {
    id: "disclaimer",
    number: "05",
    icon: "▤",
    title: "Disclaimer",
    paragraphs: [
      "The Content, Services, Free Product Samples And Freebie Offers From Or Listed Through The Site Are Provided “as-is,” “as Available,” And All Warranties, Express Or Implied, Are Disclaimed, Including But Not Limited To The Disclaimer Of Any Implied Warranties Of Title, Non-infringement, Merchantability, Quality And Fitness For A Particular Purpose, With Respect To This Site And Any Website With Which It Is Linked. The Information And Services May Contain Bugs, Errors, Problems Or Other Limitations. We Have No Liability Whatsoever For Your Use Of Any Information Or Service.",
      "In Particular, But Not As A Limitation, We Are Not Liable For Any Indirect, Incidental Or Consequential Damages (including Damages For Loss Of Business, Loss Of Profits, Loss Of Money, Litigation, Or The Like), Whether Based On Breach Of Contract, Breach Of Warranty, Negligence, Product Liability Or Otherwise, Even If Advised Of The Possibility Of Such Damages. The Negation Of Damages Set Forth Above Are Fundamental Elements Of The Basis Of The Bargain Between Us And You The User. This Site And The Information Would Not Be Provided Without Such Limitations. No Advice Or Information, Whether Oral Or Written, Obtained By You From Us Through The Site Shall Create Any Warranty, Representation Or Guarantee Not Expressly Stated In This Agreement.",
      "The Information And All Other Materials On The Site Are Provided For General Information Purposes Only And Do Not Constitute Professional Advice. It Is Your Responsibility To Evaluate The Accuracy And Completeness Of All Information Available On This Site Or Any Website With Which It Is Linked.",
    ],
  },
  {
    id: "limits",
    number: "06",
    icon: "盾",
    title: "Limits",
    paragraphs: [
      "All responsibility or liability for any damages caused by viruses contained within the electronic file containing the form or document is disclaimed. We will not be liable to you for any incidental, special or consequential damages of any kind that may result from use of or inability to use the site.",
    ],
  },
  {
    id: "third-party-website",
    number: "07",
    icon: "↗",
    title: "Third-Party Website",
    paragraphs: [
      "All rules, terms and conditions, other policies (including privacy policies) and operating procedures of third-party linked websites will apply to you while on such websites. We are not responsible for the content, accuracy or opinions express in such Websites, and such Websites are not investigated, monitored or checked for accuracy or completeness by us.",
      "Inclusion of any linked Website on our Site does not imply approval or endorsement of the linked Website by us. This Site and the third-party linked websites are independent entities and neither party has authority to make any representations or commitments on behalf of the other. If you decide to leave our Site and access these third-party linked sites, you do so at your own risk.",
    ],
  },
  {
    id: "third-party-products",
    number: "08",
    icon: "◇",
    title: "Third-Party Products and Services",
    paragraphs: [
      "We advertise third-party linked websites from which you may purchase or otherwise obtain certain sample goods, freebie offerings or free trial services. You understand that we do not operate or control the products, free offerings or services offered by third-party linked websites.",
      "Third-party linked websites are responsible for all aspects of order processing, fulfillment, billing and customer service. We are not a party to the transactions entered into between you and third-party linked websites. You agree that use of such third-party linked websites is at your sole risk and is without warranties of any kind by us, expressed, implied or otherwise.",
      "Under no circumstances are we liable for any damages arising from the transactions between you and third-party linked websites or for any information appearing on third-party linked websites or any other site linked to or from our site.",
    ],
  },
  {
    id: "submissions",
    number: "09",
    icon: "➤",
    title: "Submissions",
    paragraphs: [
      "All suggestions, ideas, notes, concepts and other information you may send to us (collectively, “Submissions”) shall be deemed and shall remain our sole property and shall not be subject to any obligation of confidence on our part. Without limiting the foregoing, we shall be deemed to own all known and hereafter existing rights of every kind and nature regarding the Submissions and shall be entitled to unrestricted use of the Submissions for any purpose, without compensation to the provider of the Submissions.",
    ],
  },
  {
    id: "general",
    number: "10",
    icon: "⚖",
    title: "General",
    paragraphs: [
      "You agree that all actions or proceedings arising directly or indirectly out of this agreement, or your use of the site or any sample products, freebie offers or services obtained by you through such use, shall be litigated in the circuit court of Los Angeles County, California or the United States District Court for the Central District of California. you are expressly submitting and consenting in advance to such jurisdiction in any action or proceeding in any of such courts, and are waiving any claim that Los Angeles, California or the central district of California is an inconvenient forum or an improper forum based on lack of venue.",
      "This site is controlled by Perfect Insight, Inc. in the State of California, USA. As such, the laws of California will govern the terms and conditions contained in this Agreement and elsewhere throughout the Site, without giving effect to any principles of conflicts of laws.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main id="main-content" className="terms-page">
      <section className="terms-hero">
        <div className="terms-hero-image" aria-hidden="true" />

        <div className="terms-container terms-hero-content">
          <span className="terms-eyebrow">
            <span />
            GENENSYS / LEGAL INFORMATION
          </span>

          <h1>
            Terms and
            <br />
            <span>Conditions</span>
          </h1>

          <p>
            Please read these terms and conditions carefully
            before using our website.
          </p>

          <div className="terms-hero-meta">
            <span>WEBSITE TERMS</span>
            <span className="terms-meta-line" />
            <span>GENENSYS</span>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-container">
          <div className="terms-notice">
            <div className="terms-notice-icon">i</div>
            <div>
              <h2>
                Please read the terms and conditions of use carefully
                before using this site.
              </h2>
              <p>
                This site is free to use by our visitors. And by using this
                site, you the user are agreeing to comply with and be bound
                by the following terms of use. After reviewing the following
                terms and conditions thoroughly, if you do not agree to the
                terms and conditions, please do not use this site.
              </p>
            </div>
          </div>

          <div className="terms-layout">
            <aside className="terms-sidebar">
              <div className="terms-sidebar-card">
                <span className="terms-sidebar-label">IN THIS DOCUMENT</span>

                {terms.map((term) => (
                  <a href={`#${term.id}`} key={term.id}>
                    <span>{term.number}</span>
                    {term.title}
                  </a>
                ))}

                <div className="terms-sidebar-bottom">
                  <span>GENENSYS</span>
                  <p>Thank you for taking the time to review our terms.</p>
                  <Link href="/privacy-policy">
                    View Privacy Policy <span>↗</span>
                  </Link>
                </div>
              </div>
            </aside>

            <article className="terms-document">
              <div className="terms-document-header">
                <span>TERMS &amp; CONDITIONS</span>
                <span>GENENSYS / LEGAL</span>
              </div>

              {terms.map((term) => (
                <section
                  className="terms-section"
                  id={term.id}
                  key={term.id}
                >
                  <div className="terms-section-icon">
                    {term.icon}
                  </div>

                  <div className="terms-section-content">
                    <div className="terms-section-heading">
                      <span>{term.number}</span>
                      <h2>{term.title}</h2>
                    </div>

                    {term.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="terms-document-footer">
                <span />
                <p>END OF TERMS &amp; CONDITIONS</p>
                <span />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
