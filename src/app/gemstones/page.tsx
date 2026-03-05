'use client';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function GemstonesPage() {
  return (
    <>
      <div className="gems-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Division 02b</span>
          <h1 className="section-title">
            Gemstones — Natural, Lab-Created
            <br />
            &amp; Fantasy Cuts
          </h1>
          <div className="gold-divider" />
          <p className="section-sub">
            Melee to 15+ carats • Custom shapes • Specialty cutting available
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
              Request Gemstone Availability
            </a>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
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
              <span className="section-tag">Specialty</span>
              <h2 className="section-title">
                Fantasy Cut Gemstones That Stand Out
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                Fantasy cuts create high-impact, premium differentiation for U.S.
                customers who want something truly unique.
              </p>
              <div
                className="design-features"
                style={{ marginTop: 24 }}
              >
                <div className="design-feat">Custom fantasy cuts</div>
                <div className="design-feat">Unique shapes on request</div>
                <div className="design-feat">Matching pairs available</div>
                <div className="design-feat">
                  Statement stones + melee supply
                </div>
              </div>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div className="reality-video-wrapper tall taller">
                <video
                  src="/videos/colour diamond 2 (1).webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Portfolio</span>
            <h2 className="section-title">Full Gemstone Selection</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
            <p
              className="section-sub"
              style={{ margin: '0 auto 40px', textAlign: 'center' }}
            >
              Natural + lab-created availability depending on stone.
            </p>
          </div>
          <div className="gems-cats fade-in fade-in-delay-1">
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Sapphire.png"
                  alt="Sapphire"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Sapphire</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Ruby.png"
                  alt="Ruby"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Ruby</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Emerald.png"
                  alt="Emerald"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Emerald</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Morganite.png"
                  alt="Morganite"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Morganite</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Tanzanite.png"
                  alt="Tanzanite"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Tanzanite</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Tourmaline.png"
                  alt="Tourmaline"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Tourmaline</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Aquamarine.png"
                  alt="Aquamarine"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Aquamarine</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Garnet.png"
                  alt="Garnet"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Garnet</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Amethyst.png"
                  alt="Amethyst"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Amethyst</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Opal.png"
                  alt="Opal"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Opal</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Peridot.png"
                  alt="Peridot"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Peridot</div>
            </div>
            <div className="gem-cat">
              <div
                className="img-box gem-cat-img no-shimmer"
                style={{ border: 'none' }}
              >
                <img
                  src="/images/gemstones/Topaz.png"
                  alt="Topaz"
                  loading="lazy"
                />
              </div>
              <div className="gem-cat-label">Topaz</div>
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

