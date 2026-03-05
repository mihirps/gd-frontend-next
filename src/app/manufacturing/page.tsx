'use client';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function ManufacturingPage() {
  return (
    <>
      <div className="mfg-hero">
        <div className="container">
          <span className="section-tag">Division 01</span>
          <h1 className="section-title">
            Complete In-House
            <br />
            Jewelry Manufacturing
          </h1>
          <div className="gold-divider" />
          <p className="section-sub">
            From concept to finished piece — controlled quality, consistent
            finishing, reliable delivery.
          </p>
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              className="btn-primary"
              href={BOOK_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ◆ Book Virtual Appointment
            </a>
            <a className="btn-secondary" href="/request">
              Submit Manufacturing Request
            </a>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">What We Build</span>
            <h2 className="section-title">
              Built for Retail Custom Orders &amp; Collections
            </h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div className="mfg-types-grid fade-in fade-in-delay-1">
            <div className="mfg-type-card">
              <div
                className="img-box mfg-type-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg"
                  alt="Engagement & Bridal"
                  loading="lazy"
                />
              </div>
              <div className="mfg-type-info">
                <h3>Engagement &amp; Bridal</h3>
                <p>
                  Solitaires, halos, pave, and custom bridal designs built to
                  your customers&apos; vision.
                </p>
              </div>
            </div>
            <div className="mfg-type-card">
              <div
                className="img-box mfg-type-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg"
                  alt="Statement Rings"
                  loading="lazy"
                />
              </div>
              <div className="mfg-type-info">
                <h3>Statement Rings</h3>
                <p>
                  Bold designs, cocktail rings, and one-of-a-kind statement
                  pieces for your collection.
                </p>
              </div>
            </div>
            <div className="mfg-type-card">
              <div
                className="img-box mfg-type-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/earring-image.jpg"
                  alt="Earrings and Pendants"
                  loading="lazy"
                />
              </div>
              <div className="mfg-type-info">
                <h3>Earrings, Pendants &amp; More</h3>
                <p>
                  Full jewelry range including bracelets, earrings, and
                  nature-inspired texture pieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow">
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">The Process</span>
            <h2 className="section-title">End-to-End Manufacturing Process</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div className="workflow-grid fade-in fade-in-delay-1">
            <div className="workflow-step">
              <div className="workflow-step-num">01</div>
              <h4>Design Development</h4>
              <p>Concept, reference review, and brief alignment.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">02</div>
              <h4>3D Visualization</h4>
              <p>Digital render for customer preview and approval.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">03</div>
              <h4>CAD Engineering</h4>
              <p>Technical file precision-built for production.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">04</div>
              <h4>Wax Modeling</h4>
              <p>Physical wax model for pre-cast verification.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">05</div>
              <h4>Casting</h4>
              <p>Metal casting in gold, silver, or platinum.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">06</div>
              <h4>Cleaning &amp; Prep</h4>
              <p>Surface preparation after casting stage.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">07</div>
              <h4>Stone Setting</h4>
              <p>Expert prong, bezel, pave, and channel setting.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step-num">08</div>
              <h4>Polishing &amp; Plating</h4>
              <p>Final polish and rhodium plating where required.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--pearl)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}
          >
            <div className="fade-in">
              <span className="section-tag">Quality Standards</span>
              <h2 className="section-title">
                Consistent Finishing &amp; Quality Control
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                We operate with controlled in-house processes to maintain
                finishing consistency, reduce remakes, and protect your retail
                reputation.
              </p>
              <div
                className="family-strengths"
                style={{ marginTop: 24 }}
              >
                <div className="strength-item">
                  <div className="strength-icon">◆</div>
                  <div className="strength-text">
                    <h4>Pre-Ship Quality Check</h4>
                    <p>Every piece inspected before packaging.</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">◈</div>
                  <div className="strength-text">
                    <h4>Stone Setting Inspection</h4>
                    <p>Prong and setting security verified under magnification.</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">✦</div>
                  <div className="strength-text">
                    <h4>Photo/Video Approvals</h4>
                    <p>
                      Optional pre-ship photo review for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div className="reality-video-wrapper tall">
                <video
                  src="/videos/ring-band-change.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-in">
            <span className="section-tag">Custom Video</span>
            <h2 className="section-title">See the Process in Motion</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div
            className="video-box fade-in"
            style={{
              maxWidth: 720,
              height: 360,
              margin: '40px auto',
            }}
          >
            <div className="video-play">▶</div>
            <div className="video-box-label">
              Manufacturing Process Video · 30 sec
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
          <p
            style={{
              fontSize: 13,
              color: 'var(--text-light)',
              marginTop: 12,
            }}
          >
            15–20 minute Zoom call · No commitment
          </p>
        </div>
      </div>
    </>
  );
}

