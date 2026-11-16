
import "./book-a-demo.css";
import Link from "next/link";

export default function BookADemoPage() {
  return (
    <main className="demo-page">
      {/* HERO */}
      <section className="demo-hero">
        <div className="demo-container demo-hero-inner">
          <div className="demo-eyebrow">
            <span />
            LET'S CONNECT
          </div>
          <h1>
            Always there
            <span> to care.</span>
          </h1>
          <p>
            Discover how Genensys can support your healthcare practice.
            Request a demo and let our team show you what is possible.
          </p>
          <div className="demo-hero-bottom">
            <span className="demo-hero-line" />
            <span>REQUEST A DEMO</span>
          </div>
        </div>
        <div className="demo-hero-decoration demo-decoration-one" />
        <div className="demo-hero-decoration demo-decoration-two" />
      </section>

      {/* FORM AND CONTACT */}
      <section className="demo-main">
        <div className="demo-container demo-main-grid">
          <div className="demo-form-column">
            <div className="demo-eyebrow">
              <span />
              REQUEST A DEMO
            </div>

            <h2>Let's start a conversation.</h2>
            <p className="demo-form-intro">
              If you have any questions or would like to see how Genensys
              works, please contact us using the form below.
            </p>

            <form className="demo-form">
              <div className="demo-field-grid">
                <div className="demo-field">
                  <label htmlFor="demo-name">
                    Your Name <span>(required)</span>
                  </label>
                  <input
                    id="demo-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-phone">Phone</label>
                  <input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-email">
                    Your Email <span>(required)</span>
                  </label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-subject">Subject</label>
                  <input
                    id="demo-subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                  />
                </div>
              </div>

              <div className="demo-field demo-message-field">
                <label htmlFor="demo-message">Message</label>
                <textarea
                  id="demo-message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your practice and what you are looking for..."
                />
              </div>

              <div className="demo-sms-section">
                <div className="demo-sms-heading">
                  <span className="demo-sms-icon">✉</span>
                  <div>
                    <strong>SMS messaging</strong>
                    <p>Messaging frequency may vary.</p>
                  </div>
                </div>

                <p className="demo-sms-copy">
                  Message and data rates may apply. You can opt out at any
                  time by texting STOP. For assistance, text HELP or visit
                  our website at{" "}
                  <a
                    href="https://www.genensys.com"
                  >
                    www.genensys.com
                  </a>.
                </p>

                <p className="demo-sms-copy">
                  Visit our{" "}
                  <Link href="/privacy-statement/">
                    Privacy Policy
                  </Link>{" "}
                  and Terms of Service for more information.
                </p>

                <label className="demo-consent">
                  <input type="checkbox" name="smsConsent" />
                  <span>
                    I agree to receive text messages from Genensys LLC at
                    the phone number provided. Message and data rates may
                    apply. Consent is not a condition of purchase.
                  </span>
                </label>
              </div>

              <div className="demo-submit-area">
                <button type="button" className="demo-submit-button" disabled>
                  Submit Query <span>→</span>
                </button>
                <p>
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-statement/">Privacy Policy</Link>.
                </p>
                <p className="demo-backend-note">
                  Form submission will be enabled once the website's form
                  backend is connected.
                </p>
              </div>
            </form>
          </div>

          {/* CONTACT SIDEBAR */}
          <aside className="demo-contact-column">
            <div className="demo-contact-card">
              <div className="demo-contact-top">
                <div className="demo-contact-icon">✳</div>
                <span>GENENSYS SUPPORT</span>
              </div>

              <h3>We're here for you.</h3>
              <p>
                Don't hesitate to reach out. Our team is ready to answer
                your questions and help you learn more about our services.
              </p>

              <div className="demo-contact-divider" />

              <span className="demo-contact-label">CALL OUR TEAM</span>
              <a href="tel:+18553279367" className="demo-contact-phone">
                (855) 327-9367
              </a>

              <div className="demo-contact-divider" />

              <span className="demo-contact-label">OUR LOCATION</span>
              <div className="demo-address">
                <span className="demo-address-icon">⌖</span>
                <p>
                  7269 Winding Lake Cr
                  <br />
                  Oviedo, Florida, 32765
                  <br />
                  United States
                </p>
              </div>

              <div className="demo-contact-bottom">
                <span className="demo-online-dot" />
                Here to help your practice
              </div>
            </div>

            <div className="demo-help-card">
              <span>HAVE QUESTIONS?</span>
              <h3>Let's find the right solution for your practice.</h3>
              <a href="tel:+18553279367">
                Speak with our team <span>→</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* LOCATION */}
      <section className="demo-location">
        <div className="demo-container demo-location-inner">
          <div>
            <div className="demo-eyebrow">
              <span />
              GENENSYS LOCATION
            </div>
            <h2>We're here when you need us.</h2>
            <p>
              Get in touch with our team to learn more about Genensys
              healthcare solutions and services.
            </p>
          </div>

          <div className="demo-location-address">
            <span className="demo-location-pin">⌖</span>
            <div>
              <strong>Genensys</strong>
              <p>
                7269 Winding Lake Cr
                <br />
                Oviedo, Florida, 32765
                <br />
                United States
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7269+Winding+Lake+Cr+Oviedo+Florida+32765"
              >
                View location on map →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
