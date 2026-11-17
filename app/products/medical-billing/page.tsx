
import "./medical-billing.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Medical Billing Services",
  "Explore Genensys medical billing and revenue cycle support for healthcare practices.",
  "/products/medical-billing",
);

type AdvantageIconName =
  | "tools"
  | "diagram"
  | "check"
  | "growth"
  | "billing"
  | "network";

const advantages: {
  number: string;
  title: string;
  description: string;
  icon: AdvantageIconName;
}[] = [
  {
    number: "01",
    title: "Technology & tools",
    description:
      "Our billing experts manage your revenue cycle with technology and practical support, helping your practice collect without carrying the entire administrative workload.",
    icon: "tools",
  },
  {
    number: "02",
    title: "Thrive through change",
    description:
      "Changing regulations, compliance requirements, and incentive programs can challenge your staff. Our team and experience can help you navigate those demands.",
    icon: "diagram",
  },
  {
    number: "03",
    title: "Get started with ease",
    description:
      "Start with low upfront costs, no long-term agreements, and the flexibility to use our services while transitioning to in-house billing software.",
    icon: "check",
  },
  {
    number: "04",
    title: "Expand your practice",
    description:
      "Whether you are starting a practice, adding providers, or seeing more patients, billing resources can scale alongside your needs.",
    icon: "growth",
  },
  {
    number: "05",
    title: "Improve cash flow",
    description:
      "Experienced claims submission and collections support can help improve financial performance while you focus on patient care.",
    icon: "billing",
  },
  {
    number: "06",
    title: "Connected operations",
    description:
      "Use connected billing technologies to measure, monitor, and better understand the financial performance of your practice.",
    icon: "network",
  },
];

const strengths = [
  {
    number: "01",
    title: "Connected",
    description:
      "Technologies used by your Genensys team give you a new way to measure, monitor, and work toward stronger financial results.",
    icon: "network.png",
  },
  {
    number: "02",
    title: "Powerful",
    description:
      "Billing experts and robust software support reimbursement workflows, with easy-to-read reports to help track revenue cycle performance.",
    icon: "power.png",
  },
  {
    number: "03",
    title: "Adaptable as needed",
    description:
      "Use revenue cycle management services for long-term or short-term needs. Switch between Genensys staff and your own team while retaining reporting transparency.",
    icon: "adaptation.png",
  },
  {
    number: "04",
    title: "Reporting & analytics",
    description:
      "Access timely financial insights and customized medical billing reports to help understand performance and make informed decisions.",
    icon: "business-report.png",
  },
];

const advantageIcons: Record<AdvantageIconName, ReactNode> = {
  tools: (
    <>
      <path d="M4 20 14.5 9.5" />
      <path d="m13 5 6-2 2 2-2 6" />
      <path d="m4 20 2-6 4 4-6 2Z" />
    </>
  ),
  diagram: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 6h8M7 8l4 8M17 8l-4 8" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 4-4 3 2 5-6" />
      <path d="M15 7h4v4" />
    </>
  ),
  billing: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h3M8 16h8" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="6" r="1.5" />
      <circle cx="19" cy="6" r="1.5" />
      <circle cx="5" cy="18" r="1.5" />
      <circle cx="19" cy="18" r="1.5" />
      <path d="m7 7.5 3.2 3M17 7.5l-3.2 3M7 16.5l3.2-3M17 16.5l-3.2-3" />
    </>
  ),
};

function AdvantageIcon({ name }: { name: AdvantageIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {advantageIcons[name]}
    </svg>
  );
}

const workflow = [
  {
    number: "01",
    title: "Claims submission",
    description:
      "Support daily claims submission and keep billing activity moving through a structured process.",
  },
  {
    number: "02",
    title: "Follow-up",
    description:
      "Track submitted claims and follow up on outstanding items to keep the revenue cycle progressing.",
  },
  {
    number: "03",
    title: "Denial management",
    description:
      "Review denied claims and support follow-up activity to help address reimbursement issues.",
  },
  {
    number: "04",
    title: "Reporting & visibility",
    description:
      "Use billing reports and financial analytics to monitor activity and understand practice performance.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Schedule your demo",
    description:
      "Let a Genensys expert show you the key features, explain the services, and demonstrate how the solution can support your practice.",
  },
  {
    number: "02",
    title: "Complete the setup process",
    description:
      "After sign-up, answer a few questions about your practice. We'll create an account tailored to your needs.",
  },
  {
    number: "03",
    title: "Work with a success coach",
    description:
      "Your assigned Success Coach will arrange a welcome appointment and show you how to get the most out of Genensys.",
  },
];

const clinicalTools = [
  "An up-to-date drug knowledgebase",
  "Medication reconciliation",
  "Complete medication history from pharmacies",
  "Mail order and retail pharmacy support",
  "Age- and weight-based dose adjustment",
  "Refill requests through patient portals and pharmacies",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-eyebrow">
      <span />
      {children}
    </div>
  );
}

function BillingDashboard() {
  return (
    <div className="mb-dashboard" aria-label="Illustrative billing dashboard">
      <div className="mb-dashboard-top">
        <div>
          <span className="mb-dashboard-kicker">REVENUE CYCLE OVERVIEW</span>
          <strong>Billing performance</strong>
        </div>
        <span className="mb-dashboard-period">Overview</span>
      </div>

      <div className="mb-dashboard-stats">
        <div>
          <span>Claims activity</span>
          <strong>Daily</strong>
          <small>Submission workflow</small>
        </div>
        <div>
          <span>Follow-up</span>
          <strong>Tracked</strong>
          <small>Outstanding claims</small>
        </div>
        <div>
          <span>Reporting</span>
          <strong>Clear</strong>
          <small>Financial visibility</small>
        </div>
      </div>

      <div className="mb-dashboard-chart">
        <div className="mb-chart-heading">
          <strong>Revenue cycle activity</strong>
          <span>Illustrative view</span>
        </div>
        <div className="mb-chart-bars" aria-hidden="true">
          {[36, 55, 43, 72, 58, 83, 65, 91, 70, 78, 60, 96].map(
            (height, index) => (
              <i
                key={index}
                style={{ height: `${height}%` }}
              />
            ),
          )}
        </div>
        <div className="mb-chart-labels">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>

      <div className="mb-dashboard-footer">
        <span><i /> Claims workflow</span>
        <span><i /> Reporting visibility</span>
      </div>
    </div>
  );
}

export default function MedicalBillingPage() {
  return (
    <main id="main-content" className="mb-page">
      {/* HERO */}
      <section className="mb-hero">
        <div className="mb-container mb-hero-grid">
          <div className="mb-hero-content">
            <Eyebrow>GENENSYS MEDICAL BILLING</Eyebrow>

            <h1>
              Medical billing,
              <br />
              <span>without the burden.</span>
            </h1>

            <p className="mb-hero-lead">
              Explore medical billing services from a team you can trust.
              Get the support, simplified processes, and transparent
              reporting your practice needs to move forward.
            </p>

            <p className="mb-hero-subtext">
              Higher claims acceptance. Faster reimbursements.
              More visibility into your revenue cycle.
            </p>

            <div className="mb-hero-actions">
              <Link href="/book-a-demo/" className="mb-button mb-button-blue">
                Book a free demo <span>↗</span>
              </Link>
              <a href="#mb-services" className="mb-secondary-link">
                Explore our services <span>↓</span>
              </a>
            </div>

            <div className="mb-hero-assurance">
              <span className="mb-assurance-mark">✓</span>
              <span>Flexible billing support for your practice</span>
            </div>
          </div>

          <div className="mb-hero-visual">
            <div className="mb-hero-photo">
              <Image
                src="/images/revenue-cycle-workflow.svg"
                alt="Illustration of revenue cycle and billing workflows."
                fill
                priority
                sizes="(max-width: 850px) 100vw, 52vw"
                className="mb-hero-image"
              />
            </div>
            <div className="mb-dashboard-wrap">
              <BillingDashboard />
            </div>
            <div className="mb-hero-photo-caption">
              <span />
              A clearer view of your billing operations
            </div>
          </div>
        </div>

        <div className="mb-hero-bottom">
          <div className="mb-container mb-hero-bottom-inner">
            <span>REVENUE CYCLE MANAGEMENT</span>
            <i />
            <span>CLAIMS & FOLLOW-UP</span>
            <i />
            <span>DENIAL MANAGEMENT</span>
            <i />
            <span>REPORTING & ANALYTICS</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mb-intro-section" id="mb-services">
        <div className="mb-container">
          <div className="mb-section-intro">
            <div>
              <Eyebrow>SUPPORT FOR YOUR REVENUE CYCLE</Eyebrow>
              <h2>
                Spend less time managing billing.
                <br />
                <span>Focus more on your practice.</span>
              </h2>
            </div>
            <p>
              Managing claims, collections, and reporting takes time.
              Genensys combines billing expertise and technology to help
              practices simplify revenue cycle operations and gain
              better visibility into financial performance.
            </p>
          </div>

          <div className="mb-advantage-grid">
            {advantages.map((item) => (
              <article className="mb-advantage-card" key={item.number}>
                <div className="mb-advantage-top">
                  <span className="mb-card-number">{item.number}</span>
                  <div className="mb-icon-frame">
                    <AdvantageIcon name={item.icon} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="mb-card-accent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING WORKFLOW */}
      <section className="mb-workflow-section">
        <div className="mb-container">
          <div className="mb-workflow-heading">
            <Eyebrow>END-TO-END BILLING SUPPORT</Eyebrow>
            <h2>
              A billing process built
              <br />
              around <span>your practice.</span>
            </h2>
            <p>
              From daily claim submission to follow-up and denial
              management, Genensys supports the key activities involved
              in your medical billing workflow.
            </p>
          </div>

          <div className="mb-workflow-layout">
            <div className="mb-workflow-visual">
              <div className="mb-workflow-visual-inner">
                <span className="mb-workflow-orbit mb-orbit-a" />
                <span className="mb-workflow-orbit mb-orbit-b" />
                <div className="mb-workflow-center">
                  <span>$</span>
                  <strong>Revenue</strong>
                  <strong>Cycle</strong>
                  <small>GENENSYS</small>
                </div>
                <span className="mb-workflow-node mb-node-a">01</span>
                <span className="mb-workflow-node mb-node-b">02</span>
                <span className="mb-workflow-node mb-node-c">03</span>
                <span className="mb-workflow-node mb-node-d">04</span>
              </div>
              <p>
                Connected billing activities. Better operational visibility.
              </p>
            </div>

            <div className="mb-workflow-list">
              {workflow.map((item) => (
                <article className="mb-workflow-item" key={item.number}>
                  <span className="mb-workflow-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="mb-workflow-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE BILLING MODEL */}
      <section className="mb-flex-section">
        <div className="mb-container mb-flex-grid">
          <div className="mb-flex-content">
            <Eyebrow>FLEXIBILITY THAT WORKS FOR YOU</Eyebrow>
            <h2>
              Your billing environment.
              <br />
              <span>Your choice.</span>
            </h2>
            <p>
              Your practice should not have to give up its preferred
              billing environment to get support. Genensys can integrate
              with your existing billing service, helping you retain
              the environment you already use.
            </p>
            <p>
              If you do not already have a clearinghouse relationship,
              our team can recommend an insurance clearinghouse option.
              You can also use Genensys billing services for short-term
              or longer-term needs, with flexibility to transition
              between our staff and your own.
            </p>
            <Link href="/book-a-demo/" className="mb-inline-link">
              Discuss your billing needs <span>↗</span>
            </Link>
          </div>

          <div className="mb-flex-visual">
            <div className="mb-flex-visual-header">
              <span className="mb-flex-header-dot" />
              FLEXIBLE BILLING ARRANGEMENTS
            </div>
            <div className="mb-flex-option">
              <div className="mb-flex-option-icon">G</div>
              <div>
                <strong>Genensys billing team</strong>
                <span>Billing services and expert support</span>
              </div>
              <span className="mb-flex-check">✓</span>
            </div>
            <div className="mb-flex-connector">
              <span />
              <small>OR TRANSITION</small>
              <span />
            </div>
            <div className="mb-flex-option">
              <div className="mb-flex-option-icon mb-flex-option-light">Y</div>
              <div>
                <strong>Your in-house team</strong>
                <span>Use your own staff with billing software</span>
              </div>
              <span className="mb-flex-check">✓</span>
            </div>
            <div className="mb-flex-note">
              <span>+</span>
              <p>
                Keep your preferred billing environment. Ask us about
                integration options for your existing service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPORTING */}
      <section className="mb-reporting-section">
        <div className="mb-container mb-reporting-grid">
          <div className="mb-reporting-visual">
            <div className="mb-reporting-image">
              <svg
                viewBox="0 0 48 48"
                role="img"
                aria-label="Revenue reporting icon"
              >
                <path
                  d="M8 37V25M19 37V18M30 37V11M41 37V6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                <path
                  d="m8 18 11-7 11 3L41 6"
                  fill="none"
                  stroke="#ed2545"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mb-reporting-mini">
              <span>FINANCIAL VISIBILITY</span>
              <strong>Reporting & analytics</strong>
              <div className="mb-reporting-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <small>Illustrative reporting graphic</small>
            </div>
          </div>

          <div className="mb-reporting-content">
            <Eyebrow>MAKE INFORMED DECISIONS</Eyebrow>
            <h2>
              Understand your numbers.
              <br />
              <span>See the bigger picture.</span>
            </h2>
            <p>
              Financial performance is easier to understand when the
              information is clear. Genensys reporting software provides
              timely financial analytics and customized medical billing
              reports to help you monitor your revenue cycle.
            </p>
            <div className="mb-reporting-points">
              <div><span>✓</span> Customized billing reports</div>
              <div><span>✓</span> Revenue cycle performance tracking</div>
              <div><span>✓</span> Meaningful financial analytics</div>
              <div><span>✓</span> Reporting transparency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL TOOLS */}
      <section className="mb-clinical-section">
        <div className="mb-container mb-clinical-grid">
          <div>
            <Eyebrow>CONNECTED PRACTICE TECHNOLOGY</Eyebrow>
            <h2>
              More than billing.
              <br />
              <span>Connected clinical tools.</span>
            </h2>
            <p>
              Genensys billing and practice management tools work
              alongside its EHR solutions to support more connected
              practice operations.
            </p>
            <p className="mb-clinical-note">
              The following medication and pharmacy capabilities are
              presented as associated clinical tools, not as claims
              processing features.
            </p>
          </div>

          <div className="mb-clinical-list">
            {clinicalTools.map((tool, index) => (
              <div className="mb-clinical-item" key={tool}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{tool}</p>
                <i>✓</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="mb-start-section">
        <div className="mb-container">
          <div className="mb-start-heading">
            <Eyebrow>GETTING STARTED IS EASY</Eyebrow>
            <h2>
              Three steps to get
              <br />
              <span>your practice moving.</span>
            </h2>
            <p>
              Enjoy Genensys services through a straightforward,
              guided onboarding process.
            </p>
          </div>

          <div className="mb-steps-grid">
            {onboarding.map((step) => (
              <article className="mb-step-card" key={step.number}>
                <div className="mb-step-top">
                  <span>{step.number}</span>
                  <i />
                  <b>✓</b>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-cta-section">
        <div className="mb-container">
          <div className="mb-cta-card">
            <div className="mb-cta-circles mb-cta-circle-a" />
            <div className="mb-cta-circles mb-cta-circle-b" />
            <div className="mb-cta-copy">
              <Eyebrow>LET'S TALK ABOUT YOUR PRACTICE</Eyebrow>
              <h2>
                Make billing simpler.
                <br />
                Move your practice forward.
              </h2>
              <p>
                Talk with the Genensys team about your billing workflow,
                reporting needs, and the right support for your practice.
              </p>
              <Link href="/book-a-demo/" className="mb-button mb-button-white">
                Schedule a free demo <span>↗</span>
              </Link>
            </div>
            <div className="mb-cta-symbol" aria-hidden="true">
              <span>$</span>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
