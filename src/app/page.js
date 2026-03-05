'use client';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span /> Trusted by Independent U.S. Jewelers
          </div>
          <h1>
            Complete Retail <em>Support Partner</em> for Independent Jewelers
          </h1>
          <p className="hero-sub">
            Jewelry Manufacturing • Diamond Supply • Custom Cutting • Retail
            Growth
          </p>
          <p className="hero-desc">
            We operate as your outsourced backend division — so you can focus on
            customers while we manage production, stones, and growth support.
          </p>
          <div className="hero-btns">
            <a
              className="btn-primary"
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              ◆ Book Virtual Appointment
            </a>
            <a className="btn-secondary" href="/request">
              Submit Custom Request
            </a>
          </div>
        </div>
        <div className="hero-video-col">
          <div className="fade-in fade-in-delay-2">
            <div className="reality-video-wrapper tall">
              <video
                src="/videos/ring video 2.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-track" id="trustTrack">
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Family-Owned Business</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">In-House Manufacturing</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">No Middlemen Layers</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Custom Cutting &amp; Unique Shapes</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Serving U.S. Retail Jewelers</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Family-Owned Business</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">In-House Manufacturing</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">No Middlemen Layers</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Custom Cutting &amp; Unique Shapes</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◆</span>
            <span className="trust-text">Serving U.S. Retail Jewelers</span>
          </div>
        </div>
      </div>

      {/* REALITY SECTION */}
      <section className="reality">
        <div className="container">
          <div className="reality-grid">
            <div className="fade-in fade-in-delay-2">
              <div className="reality-video-wrapper tall taller">
                <video
                  src="https://www.pexels.com/download/video/6263174/"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
            <div className="fade-in">
              <span className="section-tag">The Reality</span>
              <h2 className="section-title">
                Running a Jewelry Store Without a Big Team?
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                Independent jewelers often manage everything — CAD coordination,
                sourcing, production follow-ups, customer approvals, marketing,
                and shipping. This overload causes delays, margin pressure, and
                limited growth.
              </p>
              <div className="reality-list">
                <div className="reality-item">Custom orders &amp; design changes</div>
                <div className="reality-item">CAD &amp; 3D approvals</div>
                <div className="reality-item">Diamond sourcing &amp; selection</div>
                <div className="reality-item">Production follow-ups</div>
                <div className="reality-item">Website catalog &amp; listings</div>
                <div className="reality-item">Social media &amp; content</div>
                <div className="reality-item">Photography &amp; marketing</div>
                <div className="reality-item">Shipping coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="pillars">
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Solution</span>
            <h2 className="section-title">
              One Partnership. Three Divisions.
              <br />
              Fully Coordinated.
            </h2>
            <div
              className="gold-divider"
              style={{ margin: '20px auto' }}
            />
          </div>
          <div className="pillars-grid fade-in fade-in-delay-1">
            <div
              className="pillar-card"
              onClick={() => {
                window.location.href = '/manufacturing';
              }}
            >
              <div
                className="img-box pillar-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="https://images.pexels.com/photos/6263060/pexels-photo-6263060.jpeg"
                  alt="Jewelry crafting at workbench"
                  loading="lazy"
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-number">01 — Division</div>
                <h3 className="pillar-title">Jewelry Manufacturing</h3>
                <p className="pillar-steps">
                  Design → CAD → Wax → Casting → Setting → Finishing → Shipping
                </p>
                <a
                  className="pillar-link"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = '/manufacturing';
                  }}
                >
                  Explore Manufacturing →
                </a>
              </div>
            </div>
            <div
              className="pillar-card"
              onClick={() => {
                window.location.href = '/diamonds';
              }}
            >
              <div
                className="img-box pillar-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/8P5A2005.jpg"
                  alt="Diamonds and gemstones"
                  loading="lazy"
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-number">02 — Division</div>
                <h3 className="pillar-title">Diamond &amp; Gemstone Supply</h3>
                <p className="pillar-steps">
                  Natural · Salt &amp; Pepper · Lab-Grown · Moissanite · Gemstones
                  · Melee to 15+ carats
                </p>
                <a
                  className="pillar-link"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = '/diamonds';
                  }}
                >
                  Explore Diamonds →
                </a>
              </div>
            </div>
            <div
              className="pillar-card"
              onClick={() => {
                window.location.href = '/retail';
              }}
            >
              <div
                className="img-box pillar-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg"
                  alt="Retail jewelry store showroom"
                  loading="lazy"
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-number">03 — Division</div>
                <h3 className="pillar-title">Retail Growth Support</h3>
                <p className="pillar-steps">
                  Photography · Social Media · Content · Website Support · Packaging
                </p>
                <a
                  className="pillar-link"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = '/retail';
                  }}
                >
                  Explore Retail Support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY OWNED */}
      <section className="family">
        <div className="container">
          <div className="family-grid">
            <div className="fade-in">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Family-Owned Business with a Large In-House Team
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                Gemstone Diamond is built by a family business where each
                department is led by specialized expertise — diamond manufacturing,
                custom cutting, CAD engineering, jewelry production, and retail
                growth support.
              </p>
              <div className="family-strengths">
                <div className="strength-item">
                  <div className="strength-icon">◈</div>
                  <div className="strength-text">
                    <h4>Skill-Specialized Team</h4>
                    <p>
                      Each department led by deep expertise across all production
                      stages.
                    </p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">◆</div>
                  <div className="strength-text">
                    <h4>Controlled Manufacturing</h4>
                    <p>
                      In-house systems ensure quality consistency and predictable
                      timelines.
                    </p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">✦</div>
                  <div className="strength-text">
                    <h4>No Middlemen — Better Pricing</h4>
                    <p>
                      Direct production means cleaner margins and better value for
                      your store.
                    </p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">◉</div>
                  <div className="strength-text">
                    <h4>Long-Term Partnership Mindset</h4>
                    <p>
                      We grow with your store — not just fulfill one-off orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="family-collage fade-in fade-in-delay-2">
              <div
                className="img-box family-img-large no-shimmer"
                style={{
                  gridColumn: 1,
                  gridRow: '1 / span 2',
                  border: 'none',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/6263157/pexels-photo-6263157.jpeg"
                  alt="Workshop"
                />
              </div>
              <div
                className="img-box family-img-sm no-shimmer"
                style={{ gridColumn: 2, gridRow: 1, border: 'none' }}
              >
                <img
                  src="https://jewelrylukas.com/wp-content/uploads/2025/09/cad-jewelry-design.png"
                  alt="CAD Screen"
                />
              </div>
              <div
                className="img-box family-img-sm no-shimmer"
                style={{ gridColumn: 2, gridRow: 2, border: 'none' }}
              >
                <img src="/images/8P5A7186.jpg" alt="Diamonds" />
              </div>
              <div
                className="img-box family-img-sm no-shimmer"
                style={{ gridColumn: 1, gridRow: 3, border: 'none' }}
              >
                <img src="/images/8P5A5887.JPG" alt="Finished Jewelry" />
              </div>
              <div
                className="img-box family-img-sm no-shimmer"
                style={{ gridColumn: 2, gridRow: 3, border: 'none' }}
              >
                <img
                  src="https://images.pexels.com/photos/4271701/pexels-photo-4271701.jpeg"
                  alt="Packaging"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4000 DESIGNS */}
      <section className="designs">
        <div className="container">
          <div className="designs-layout">
            <div className="fade-in">
              <span className="section-tag">Design Library</span>
              <h2 className="section-title">
                4,000+ Design Assets for Your Website
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                Access a large design library with website-ready photos and videos
                so you can show customers a big collection without holding stock.
              </p>
              <div className="design-features">
                <div className="design-feat">4,000+ ready jewelry designs</div>
                <div className="design-feat">High-resolution photos + videos</div>
                <div className="design-feat">Website-ready content</div>
                <div className="design-feat">Easy order system</div>
                <div className="design-feat">On-demand manufacturing</div>
              </div>
              <br />
              <a
                className="btn-primary"
                href="/request"
                style={{ marginTop: 8 }}
              >
                Request Design Access
              </a>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div className="designs-grid-preview">
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/1 fgle042 yellow.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/ijewel.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/2 fgle02 white for man.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/FGS137_YELLOW_GOLD_360_VIDEO.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/FGS043_ROSE_GOLD_360_VIDEO.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/FGN098_YELLOW_GOLD_360_VIDEO.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/FGN200_WHITE_GOLD_360_VIDEO.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/FGLE429_YELLOW_GOLD_429_VIDEO.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="preview-thumb">
                  <video
                    src="/Design Library videos/ijewel (1).webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">How It Works</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              Simple Process for Custom Orders
            </h2>
            <div
              className="gold-divider"
              style={{
                margin: '20px auto',
                background:
                  'linear-gradient(90deg, var(--gold), var(--champagne))',
              }}
            />
          </div>
          <div className="process-steps fade-in fade-in-delay-1">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Submit Request</div>
              <div className="step-desc">
                Reference images, specs, or design ideas
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">CAD + 3D Visual</div>
              <div className="step-desc">
                Review and approve the design digitally
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">Stone Selection</div>
              <div className="step-desc">
                Videos and certificates for your review
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-title">Manufacturing</div>
              <div className="step-desc">
                Full in-house production and finishing
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">05</div>
              <div className="step-title">Secure Shipping</div>
              <div className="step-desc">Insured delivery to your store</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <span
            className="section-tag"
            style={{
              display: 'block',
              textAlign: 'center',
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <span style={{ display: 'inline-block' }}>Get Started</span>
          </span>
          <h2 className="section-title fade-in">
            Book a 15–20 Minute
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
              Virtual Introduction
            </em>
          </h2>
          <div className="gold-divider" style={{ margin: '20px auto' }} />
          <p
            className="section-sub fade-in fade-in-delay-1"
            style={{ textAlign: 'center', margin: '0 auto 40px' }}
          >
            We&apos;ll understand your current workflow and recommend how we can
            support your store — manufacturing, diamonds, custom cutting, or
            growth support.
          </p>
          <div className="cta-buttons fade-in fade-in-delay-2">
            <a
              className="btn-gold"
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              ◆ Book Virtual Appointment
            </a>
            <a className="btn-secondary" href="/request">
              Submit Custom Request
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
