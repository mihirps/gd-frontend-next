'use client';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function RetailPage() {
  return (
    <>
      <div className="retail-hero">
        <div className="container">
          <span className="section-tag">Division 03</span>
          <h1 className="section-title">
            Retail Growth Support
            <br />
            for Independent Jewelers
          </h1>
          <div className="gold-divider" />
          <p className="section-sub">
            Content • Photography • Social Media • Website Support • Packaging
            <br />
            Look like a larger brand — without hiring a marketing team.
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
              Request Retail Support Plan
            </a>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="retail-services">
            <div className="fade-in">
              <span className="section-tag">Photography</span>
              <h2 className="section-title">Professional Jewelry Photography</h2>
              <div className="gold-divider" />
              <div className="service-list">
                <div className="service-item">White background product images</div>
                <div className="service-item">Lifestyle &amp; editorial imagery</div>
                <div className="service-item">Consistent brand look &amp; feel</div>
                <div className="service-item">Website-ready formats</div>
                <div className="service-item">Social media-optimized formats</div>
              </div>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                }}
              >
                <div
                  className="img-box no-shimmer"
                  style={{ height: 200, border: 'none' }}
                >
                  <img
                    src="/images/8P5A9860.jpg"
                    alt="Before Photo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  className="img-box no-shimmer"
                  style={{ height: 200, border: 'none' }}
                >
                  <img
                    src="/images/8P5A8889.jpg"
                    alt="After Photo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3,1fr)',
                  gap: 8,
                  marginTop: 10,
                }}
              >
                <div
                  className="img-box no-shimmer"
                  style={{ height: 100, border: 'none' }}
                >
                  <img
                    src="https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg"
                    alt="Detail 1"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  className="img-box no-shimmer"
                  style={{ height: 100, border: 'none' }}
                >
                  <img
                    src="/images/8P5A5887.JPG"
                    alt="Detail 2"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  className="img-box no-shimmer"
                  style={{ height: 100, border: 'none' }}
                >
                  <img
                    src="/images/8P5A8805.jpg"
                    alt="Detail 3"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="retail-services" style={{ marginBottom: 0 }}>
            <div className="fade-in fade-in-delay-1">
              <div style={{ textAlign: 'left' }}>
                <span className="section-tag">Social Media</span>
                <h2 className="section-title">
                  Social Media Support + Content Creation
                </h2>
                <div className="gold-divider" />
              </div>
              <div className="service-list">
                <div className="service-item">
                  Instagram, TikTok, Facebook, Pinterest
                </div>
                <div className="service-item">
                  Content ideas and campaign concepts
                </div>
                <div className="service-item">
                  Reels scripts and posting guidance
                </div>
                <div className="service-item">Captions + product storytelling</div>
                <div className="service-item">
                  Holiday &amp; engagement campaign ideas
                </div>
              </div>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div className="social-slider" id="socialSlider">
                <div className="social-slide active">
                  <img
                    src="https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg"
                    alt="Social Post 1"
                  />
                </div>
                <div className="social-slide">
                  <img
                    src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg"
                    alt="Social Post 2"
                  />
                </div>
                <div className="social-slide">
                  <img src="/images/8P5A5887.JPG" alt="Social Post 3" />
                </div>
                <div className="social-slide">
                  <img src="/images/8P5A8805.jpg" alt="Social Post 4" />
                </div>
                <div className="social-slide">
                  <img src="/images/IMG_7142.jpg" alt="Social Post 5" />
                </div>
                <div className="social-slide">
                  <img src="/images/IMG_9424.jpg" alt="Social Post 6" />
                </div>
              </div>
              <div className="social-controls">
                <button
                  className="social-ctrl"
                  id="socialPrev"
                  type="button"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  className="social-ctrl"
                  id="socialNext"
                  type="button"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
            }}
          >
            <div className="fade-in">
              <span className="section-tag">Website</span>
              <h2 className="section-title">Website &amp; SEO Support</h2>
              <div className="gold-divider" />
              <div className="service-list">
                <div className="service-item">Product listing support</div>
                <div className="service-item">
                  SEO basics for jewelry pages
                </div>
                <div className="service-item">Blog content structure</div>
                <div className="service-item">Custom order form setup</div>
                <div className="service-item">Analytics guidance</div>
              </div>
            </div>
            <div className="fade-in fade-in-delay-1">
              <span className="section-tag">Packaging</span>
              <h2 className="section-title">Branded Packaging</h2>
              <div className="gold-divider" />
              <div className="service-list">
                <div className="service-item">Custom packaging design</div>
                <div className="service-item">Logo packaging concepts</div>
                <div className="service-item">Luxury box styling</div>
                <div className="service-item">Thank-you &amp; care cards</div>
              </div>
            </div>
          </div>
          <div
            className="fade-in"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 12,
              marginTop: 40,
            }}
          >
            <div className="img-box" style={{ height: 140 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Luxury Box</div>
            </div>
            <div className="img-box" style={{ height: 140 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Ring Pouch</div>
            </div>
            <div className="img-box" style={{ height: 140 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Thank-You Card</div>
            </div>
            <div className="img-box" style={{ height: 140 }}>
              <div className="img-box-icon">◈</div>
              <div className="img-box-label">Brand Packaging</div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-end-cta">
        <div className="container">
          <h2 className="section-title fade-in">
            Let&apos;s build a support plan for your store
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

