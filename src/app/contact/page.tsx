'use client';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function ContactPage() {
  return (
    <>
      <div className="contact-hero">
        <div className="container">
          <span className="section-tag">Reach Us</span>
          <h1
            className="section-title"
            style={{
              color: 'white',
              maxWidth: 600,
              margin: '0 auto 20px',
            }}
          >
            Let&apos;s Start a Conversation
          </h1>
          <div className="gold-divider" />
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              marginTop: 12,
            }}
          >
            We support independent U.S. jewelers. For fastest response, book a
            virtual appointment.
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="contact-cards fade-in">
            <div className="contact-card">
              <div className="contact-card-icon">◆</div>
              <h3>Sales Inquiry</h3>
              <p>
                For diamond sourcing, manufacturing pricing, or partnership
                discussions.
              </p>
              <div className="contact-info">
                <a href="mailto:sales@gemstonediamond.com">
                  sales@gemstonediamond.com
                </a>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
                <span
                  className="hours-note"
                  style={{ fontSize: 12, color: 'var(--text-light)' }}
                >
                  Mon–Fri · 9am–6pm EST
                </span>
              </div>
              <br />
              <a
                className="btn-secondary"
                href="/request"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Submit Request
              </a>
            </div>

            <div className="contact-card featured">
              <div className="contact-card-icon">🗓</div>
              <h3>Book Appointment</h3>
              <p>
                Best way to connect — 15–20 min virtual call to understand your
                needs.
              </p>
              <div className="contact-info">
                <span
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 13,
                  }}
                >
                  Virtual via Zoom · Free · No Commitment
                </span>
              </div>
              <br />
              <a
                className="btn-gold"
                href={BOOK_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                ◆ Book Now
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">✉</div>
              <h3>General Inquiry</h3>
              <p>
                Questions about our services, capabilities, or how we work.
              </p>
              <div className="contact-info">
                <a href="mailto:info@gemstonediamond.com">
                  info@gemstonediamond.com
                </a>
                <span className="hours-note">We respond within 24 hours</span>
              </div>
              <br />
              <div
                className="footer-socials"
                style={{ justifyContent: 'center', marginTop: 12 }}
              >
                <a
                  className="social-icon"
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  className="social-icon"
                  href="https://www.facebook.com"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  className="social-icon"
                  href="https://www.whatsapp.com"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a
                  className="social-icon"
                  href="https://in.pinterest.com/gemstonediamonds/"
                  aria-label="Pinterest"
                >
                  <i className="fa-brands fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="fade-in"
            style={{
              background: 'var(--ivory)',
              borderRadius: 8,
              padding: 48,
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}
          >
            <span
              className="section-tag"
              style={{ display: 'block', textAlign: 'center', paddingLeft: 0 }}
            >
              ✦ Independent Jeweler Commitment
            </span>
            <h2
              className="section-title"
              style={{ fontSize: 32, marginTop: 8 }}
            >
              Specialized for U.S. Independent Retail Jewelers
            </h2>
            <div className="gold-divider" style={{ margin: '16px auto' }} />
            <p
              className="section-sub"
              style={{ textAlign: 'center', margin: '0 auto' }}
            >
              We don&apos;t work with everyone — we focus exclusively on
              independent U.S. retail jewelers who want a true backend partner,
              not just another vendor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

