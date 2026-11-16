
import "./simplify-therapy.css";
import Link from "next/link";

const challenges = [
  {
    number: "01",
    title: "Administrative complexity",
    description:
      "Therapy practices often deal with administrative processes that take attention away from their primary responsibility: patient care.",
  },
  {
    number: "02",
    title: "Billing responsibilities",
    description:
      "Managing billing alongside clinical responsibilities can create additional pressure for therapists and practice staff.",
  },
  {
    number: "03",
    title: "Inefficient workflows",
    description:
      "Unnecessary process steps and administrative bottlenecks can make it harder to keep everyday practice operations running smoothly.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Understand your practice",
    description:
      "Genensys works with healthcare providers to understand their existing administrative processes and the specific needs of their therapy practice.",
  },
  {
    number: "02",
    title: "Identify opportunities",
    description:
      "Review existing workflows to identify administrative bottlenecks and areas where processes can be simplified.",
  },
  {
    number: "03",
    title: "Build a tailored approach",
    description:
      "Develop practical strategies and streamlined systems that help reduce administrative complexity and improve operational efficiency.",
  },
];

const onboarding = [
  {
    number: "01",
    title: "Schedule your demo",
    description:
      "Let a Genensys expert show you more about our services, key features, and how we can support your practice.",
  },
  {
    number: "02",
    title: "Complete the setup",
    description:
      "After signing up, answer a few questions about your practice so we can understand your requirements.",
  },
  {
    number: "03",
    title: "Work with a success coach",
    description:
      "Your assigned Success Coach will arrange a welcome appointment and help you get the most out of Genensys.",
  },
];

function TherapyWorkflow() {
  return (
    <div className="st-workflow-visual">
      <div className="st-workflow-heading">
        <span>THE SIMPLIFY THERAPY APPROACH</span>
        <strong>From administrative burden to better workflows</strong>
      </div>

      <div className="st-workflow-step">
        <span className="st-workflow-icon">01</span>
        <div>
          <strong>Understand</strong>
          <small>Review your existing practice processes</small>
        </div>
        <span className="st-workflow-status">DISCOVER</span>
      </div>

      <div className="st-workflow-connector" />

      <div className="st-workflow-step">
        <span className="st-workflow-icon">02</span>
        <div>
          <strong>Identify</strong>
          <small>Find bottlenecks and administrative challenges</small>
        </div>
        <span className="st-workflow-status">ANALYZE</span>
      </div>

      <div className="st-workflow-connector" />

      <div className="st-workflow-step st-workflow-step-active">
        <span className="st-workflow-icon">03</span>
        <div>
          <strong>Simplify</strong>
          <small>Develop a tailored approach for your practice</small>
        </div>
        <span className="st-workflow-status">IMPROVE</span>
      </div>

      <div className="st-workflow-bottom">
        <span>✓</span>
        More time to focus on patient care
      </div>
    </div>
  );
}

export default function SimplifyTherapyPage() {
  return (
    <main className="st-page">
      {/* HERO */}
      <section className="st-hero">
        <div className="st-container st-hero-grid">
          <div className="st-hero-content">
            <div className="st-eyebrow">
              <span />
              SIMPLIFY THERAPY
            </div>

            <h1>
              Less administration.
              <span> More time for therapy.</span>
            </h1>

            <p>
              Simplify the administrative and billing challenges of running a
              therapy practice. Genensys works with healthcare providers to
              improve workflows, reduce complexity, and help therapists focus
              on delivering quality patient care.
            </p>

            <div className="st-hero-actions">
              <Link
                href="/book-a-demo/"
                className="st-button st-button-primary"
              >
                Schedule a demo <span>→</span>
              </Link>

              <a href="#our-approach" className="st-secondary-link">
                Discover our approach <span>↓</span>
              </a>
            </div>

            <div className="st-hero-proof">
              <span>✓</span>
              Solutions shaped around your practice
            </div>
          </div>

          <div className="st-hero-visual">
            <div className="st-visual-background" />

            <div className="st-hero-art">
              <div className="st-art-top">
                <div>
                  <span>THERAPY PRACTICE</span>
                  <strong>Care comes first.</strong>
                </div>
                <div className="st-art-symbol">+</div>
              </div>

              <div className="st-art-main">
                <div className="st-art-circle">
                  <div className="st-art-inner">
                    <span>FOCUS</span>
                    <strong>Patient<br />care</strong>
                  </div>
                </div>

                <div className="st-art-orbit st-art-orbit-one" />
                <div className="st-art-orbit st-art-orbit-two" />

                <div className="st-art-tag st-art-tag-one">
                  <span>01</span>
                  Administration
                </div>
                <div className="st-art-tag st-art-tag-two">
                  <span>02</span>
                  Billing
                </div>
                <div className="st-art-tag st-art-tag-three">
                  <span>03</span>
                  Workflows
                </div>
              </div>

              <div className="st-art-bottom">
                <span>GENENSYS</span>
                <span>SUPPORTING BETTER PRACTICE OPERATIONS</span>
              </div>
            </div>

            <div className="st-floating-card">
              <span>✓</span>
              <div>
                <strong>Less complexity</strong>
                <small>More focus on care</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="st-introduction">
        <div className="st-container st-intro-grid">
          <div>
            <div className="st-eyebrow st-eyebrow-light">
              <span />
              A BETTER WAY TO WORK
            </div>
            <h2>
              Let therapists spend more time doing what they do best.
            </h2>
          </div>

          <div className="st-intro-copy">
            <p>
              Genensys helps simplify the administrative and billing aspects
              of therapy services, reducing the obstacles that can interfere
              with the delivery of care.
            </p>
            <p>
              We take a practical approach: understand your existing
              processes, identify bottlenecks, and work with you to develop
              strategies suited to your practice.
            </p>
            <p>
              The goal is to make everyday operations more manageable so
              healthcare providers can devote more attention to their
              patients.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="st-challenges">
        <div className="st-container">
          <div className="st-section-heading">
            <div>
              <div className="st-eyebrow">
                <span />
                THE CHALLENGE
              </div>
              <h2>
                Therapy should be about
                <br />
                people, not paperwork.
              </h2>
            </div>

            <p>
              Administrative responsibilities are a necessary part of
              operating a therapy practice, but they should not overshadow
              patient care.
            </p>
          </div>

          <div className="st-challenge-grid">
            {challenges.map((item) => (
              <article className="st-challenge-card" key={item.number}>
                <span className="st-card-number">{item.number}</span>
                <div className="st-card-accent" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="st-approach" id="our-approach">
        <div className="st-container st-approach-grid">
          <div className="st-approach-visual">
            <TherapyWorkflow />
          </div>

          <div className="st-approach-content">
            <div className="st-eyebrow">
              <span />
              OUR APPROACH
            </div>

            <h2>
              Practical solutions. Built around your practice.
            </h2>

            <p>
              Every therapy practice has its own requirements. That's why
              Genensys focuses on understanding how your practice works before
              developing a tailored approach to simplifying its operations.
            </p>

            <div className="st-solution-list">
              {solutions.map((solution) => (
                <article className="st-solution-item" key={solution.number}>
                  <span>{solution.number}</span>
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="st-outcomes">
        <div className="st-container">
          <div className="st-outcomes-heading">
            <div className="st-eyebrow">
              <span />
              THE DIFFERENCE
            </div>
            <h2>
              Make room for what
              <br />
              matters most.
            </h2>
            <p>
              A more manageable practice environment helps providers focus
              their time and attention where it matters.
            </p>
          </div>

          <div className="st-outcome-grid">
            <article className="st-outcome-item">
              <span className="st-outcome-icon">↗</span>
              <h3>Simplified administration</h3>
              <p>
                Reduce unnecessary administrative complexity through a more
                considered approach to everyday processes.
              </p>
            </article>

            <article className="st-outcome-item">
              <span className="st-outcome-icon">◇</span>
              <h3>Better operational efficiency</h3>
              <p>
                Identify bottlenecks and improve the way administrative
                responsibilities are handled.
              </p>
            </article>

            <article className="st-outcome-item">
              <span className="st-outcome-icon">＋</span>
              <h3>More focus on patients</h3>
              <p>
                Give therapists more opportunity to concentrate on
                personalized and meaningful patient care.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="st-onboarding">
        <div className="st-container">
          <div className="st-onboarding-heading">
            <div className="st-eyebrow st-eyebrow-light">
              <span />
              GETTING STARTED
            </div>
            <h2>Getting started is easy.</h2>
            <p>
              Our team will guide you through the process, from your first
              conversation to getting started with Genensys.
            </p>
          </div>

          <div className="st-onboarding-grid">
            {onboarding.map((step) => (
              <article className="st-onboarding-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="st-contact">
        <div className="st-container st-contact-grid">
          <div className="st-contact-content">
            <div className="st-eyebrow">
              <span />
              LET'S TALK
            </div>

            <h2>
              Ready to simplify
              <br />
              your therapy practice?
            </h2>

            <p>
              Talk with our team about your administrative and billing
              challenges. We would be happy to learn more about your practice
              and discuss how Genensys can help.
            </p>

            <Link href="/book-a-demo/" className="st-button st-button-primary">
              Contact our team <span>→</span>
            </Link>
          </div>

          <div className="st-contact-card">
            <span className="st-contact-label">SPEAK WITH OUR TEAM</span>
            <div className="st-contact-divider" />

            <span className="st-contact-small">CALL US</span>
            <a href="tel:4075369683" className="st-phone-number">
              407-536-9683
            </a>

            <div className="st-contact-divider" />

            <span className="st-contact-small">HOW WE CAN HELP</span>
            <p>
              Learn more about our therapy practice support, front office
              support, and medical billing services.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="st-final-cta">
        <div className="st-container st-final-cta-inner">
          <div>
            <div className="st-eyebrow st-eyebrow-light">
              <span />
              SIMPLIFY THERAPY WITH GENENSYS
            </div>
            <h2>Put patient care back at the center.</h2>
            <p>
              Discover a more manageable approach to therapy practice
              administration.
            </p>
          </div>

          <Link
            href="/book-a-demo/"
            className="st-button st-button-white"
          >
            Book your demo <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
