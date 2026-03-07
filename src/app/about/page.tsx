const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function AboutPage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="fade-in">
              <span className="section-tag">Our Story</span>
              <h1 className="section-title">
                Family-Owned Manufacturing &amp; Diamond Production Partner
              </h1>
              <div className="gold-divider" />
              <p className="section-sub">
                Gemstone Diamond is built on family expertise and in-house
                infrastructure. Each department is led by specialized skill —
                diamond manufacturing, custom cutting, CAD engineering, jewelry
                production, and retail growth support.
              </p>
              <br />
              <a
                className="btn-primary"
                href={BOOK_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ◆ Book Virtual Appointment
              </a>
            </div>
            <div className="family-collage fade-in fade-in-delay-2" style={{ height: 400 }}>
              <div
                className="img-box"
                style={{
                  gridColumn: 1,
                  gridRow: '1 / span 2',
                  height: '100%',
                }}
              >
                <div className="img-box-icon">◈</div>
                <div className="img-box-label">Workshop</div>
              </div>
              <div
                className="img-box"
                style={{ gridColumn: 2, gridRow: 1, height: '100%' }}
              >
                <div className="img-box-icon">◈</div>
                <div className="img-box-label">Team</div>
              </div>
              <div
                className="img-box"
                style={{ gridColumn: 2, gridRow: 2, height: '100%' }}
              >
                <div className="img-box-icon">◈</div>
                <div className="img-box-label">Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div className="values-grid fade-in fade-in-delay-1">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Long-Term Partnership</h3>
              <p>
                We grow with your store over time — not just fulfill one-off
                orders.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3>Reliability &amp; Transparency</h3>
              <p>Clear timelines, honest communication, no surprises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">◈</div>
              <h3>Controlled Quality</h3>
              <p>In-house manufacturing means consistent finishing every time.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3>Better Pricing</h3>
              <p>
                Direct production means no broker layers — cleaner margins for
                you.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">◉</div>
              <h3>Independent Jeweler Focus</h3>
              <p>We help independent stores compete with bigger brands.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🇺🇸</div>
              <h3>U.S. Retail Specialist</h3>
              <p>
                Built specifically for the U.S. independent jewelry retail
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Infrastructure</span>
            <h2 className="section-title">
              Large In-House Team, Structured Workflow
            </h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
            <p
              className="section-sub"
              style={{ margin: '0 auto 40px', textAlign: 'center' }}
            >
              Instead of outsourcing each step to separate vendors, we control
              the process internally, improving timeline predictability,
              quality, and communication.
            </p>
          </div>
          <div
            className="fade-in"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5,1fr)',
              gap: 12,
            }}
          >
            <div className="img-box" style={{ height: 180 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">CAD Design</div>
            </div>
            <div className="img-box" style={{ height: 180 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Workshop</div>
            </div>
            <div className="img-box" style={{ height: 180 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Diamond Dept.</div>
            </div>
            <div className="img-box" style={{ height: 180 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Finishing</div>
            </div>
            <div className="img-box" style={{ height: 180 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Shipping</div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-end-cta">
        <div className="container">
          <h2 className="section-title fade-in">
            Ready to discuss your next order?
          </h2>
          <div
            className="gold-divider"
            style={{ margin: '16px auto 32px' }}
          />
          <a
            className="btn-gold"
            href={BOOK_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            ◆ Book Virtual Appointment
          </a>
        </div>
      </div>
    </>
  );
}

