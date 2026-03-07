'use client';

import { useRef } from 'react';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function DiamondsPage() {
  const shapesTrackRef = useRef<HTMLDivElement>(null);
  const videosTrackRef = useRef<HTMLDivElement>(null);

  const scrollShapes = (dir: number) => {
    if (!shapesTrackRef.current) return;
    shapesTrackRef.current.scrollBy({
      left: dir * 240,
      behavior: 'smooth',
    });
  };

  const scrollVideos = (dir: number) => {
    if (!videosTrackRef.current) return;
    const el = videosTrackRef.current;
    el.scrollBy({
      left: dir * Math.max(320, Math.floor(el.clientWidth * 0.8)),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="diamonds-hero">
        <div className="container">
          <span className="section-tag">Division 02</span>
          <h1 className="section-title" style={{ color: 'white' }}>
            Direct Diamond Supply for
            <br />
            Independent U.S. Jewelers
          </h1>
          <div className="gold-divider" />
          <p className="section-sub">
            Natural • Lab-Grown • Salt &amp; Pepper • Moissanite
            <br />
            Melee to 15+ carats • Custom shapes available
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
              className="btn-gold"
              href={BOOK_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ◆ Book Virtual Appointment
            </a>
            <a
              className="btn-secondary"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
              }}
              href="/request"
            >
              Request Diamond Availability
            </a>
          </div>
        </div>
      </div>

      {/* LAB GROWN FEATURE */}
      <section className="lab-grown-feature">
        <div className="container">
          <div className="lab-grid">
            <div className="lab-content fade-in">
              <div className="lab-badge">
                🔥 Trending · Fastest Growing U.S. Demand
              </div>
              <span className="section-tag">Featured</span>
              <h2 className="section-title">
                Lab-Grown Diamonds — The U.S. Market is Choosing Them
              </h2>
              <div className="gold-divider" />
              <p className="section-sub">
                U.S. buyers increasingly prefer lab-grown for bigger look, value,
                and modern preference. IGI-certified options across popular
                shapes and sizes.
              </p>
              <div className="lab-features">
                <div className="lab-feat">IGI certified options available</div>
                <div className="lab-feat">Better value for larger sizes</div>
                <div className="lab-feat">Popular for engagement &amp; bridal</div>
                <div className="lab-feat">Custom sizes and unique shapes</div>
              </div>
              <br />
              <a
                className="btn-gold"
                href="/request"
                style={{ marginTop: 8 }}
              >
                Request Lab-Grown Availability
              </a>
            </div>
            <div className="fade-in fade-in-delay-2">
              <div className="lab-video-wrapper">
                <img
                  src="/images/lab-diam-image.jpg"
                  alt="Lab-grown diamonds"
                  style={{ width: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Categories</span>
            <h2 className="section-title">Full Diamond Portfolio</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div className="diamond-cats fade-in fade-in-delay-1">
            <div className="diamond-cat">
              <video
                src="/videos/natural-diam-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="diamond-cat-info">
                <h3>Natural Diamonds</h3>
                <p>White &amp; fancy colors · GIA/IGI available · Melee to 15+ carat</p>
              </div>
            </div>
            <div className="diamond-cat">
              <video
                src="/videos/lab-diamond-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="diamond-cat-info">
                <h3>Lab-Grown</h3>
                <p>IGI certified · Custom sizing · Trending U.S. market</p>
              </div>
            </div>
            <div className="diamond-cat">
              <video
                src="/videos/moissonite-diam-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="diamond-cat-info">
                <h3>Moissanite</h3>
                <p>Premium quality · Full color range · Custom cuts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPES */}
      <section>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Cut Styles</span>
            <h2 className="section-title">Shapes &amp; Cuts We Supply</h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
          </div>
          <div className="shape-carousel fade-in fade-in-delay-1">
            <button
              className="shape-nav left"
              type="button"
              onClick={() => scrollShapes(-1)}
            >
              ‹
            </button>
            <div className="shape-track" id="shapesTrack" ref={shapesTrackRef}>
              <div className="shape-card">
                <img src="/images/diamondshapes/round.png" alt="Round" />
                <div className="shape-label">Round</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Oval.png" alt="Oval" />
                <div className="shape-label">Oval</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Cushion.png" alt="Cushion" />
                <div className="shape-label">Cushion</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Emerald.png" alt="Emerald" />
                <div className="shape-label">Emerald</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Pear.png" alt="Pear" />
                <div className="shape-label">Pear</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Radiant.png" alt="Radiant" />
                <div className="shape-label">Radiant</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/princess.png" alt="Princess" />
                <div className="shape-label">Princess</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Asscher.png" alt="Asscher" />
                <div className="shape-label">Asscher</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Marquise.png" alt="Marquise" />
                <div className="shape-label">Marquise</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Heart.png" alt="Heart" />
                <div className="shape-label">Heart</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/trilliant.png" alt="Trilliant" />
                <div className="shape-label">Trilliant</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/baguatte.png" alt="Baguette" />
                <div className="shape-label">Baguette</div>
              </div>
              <div className="shape-card">
                <img
                  src="/images/diamondshapes/tapered-baguette.png"
                  alt="Tapered Baguette"
                />
                <div className="shape-label">Tapered Baguette</div>
              </div>
              <div className="shape-card">
                <img
                  src="/images/diamondshapes/half-moon.png"
                  alt="Half Moon"
                />
                <div className="shape-label">Half Moon</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/Shield.png" alt="Shield" />
                <div className="shape-label">Shield</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/bullet.png" alt="Bullet" />
                <div className="shape-label">Bullet</div>
              </div>
              <div className="shape-card">
                <img
                  src="/images/diamondshapes/trapezoid.png"
                  alt="Trapezoid"
                />
                <div className="shape-label">Trapezoid</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/lozenge.png" alt="Lozenge" />
                <div className="shape-label">Lozenge</div>
              </div>
              <div className="shape-card">
                <img src="/images/diamondshapes/flanders.png" alt="Flanders" />
                <div className="shape-label">Flanders</div>
              </div>
            </div>
            <button
              className="shape-nav right"
              type="button"
              onClick={() => scrollShapes(1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SAMPLES */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <span className="section-tag">Preview</span>
            <h2 className="section-title">
              Sell Faster with Videos &amp; Certification
            </h2>
            <div className="gold-divider" style={{ margin: '20px auto' }} />
            <p
              className="section-sub"
              style={{ margin: '0 auto 40px', textAlign: 'center' }}
            >
              We provide inventory videos and certification support to help you
              confidently present options to your customers and close faster.
            </p>
          </div>
          <div className="video-slider fade-in fade-in-delay-1">
            <button
              className="video-nav left"
              type="button"
              onClick={() => scrollVideos(-1)}
            >
              ‹
            </button>
            <div className="video-track" id="videosTrack" ref={videosTrackRef}>
              <div className="video-item">
                <video
                  src="/videos/0227.mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Round · 1ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/0227 (4)(1).mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Oval · 2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/0227 (5)(1).mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Cushion · 1.5ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/movel - Made with Clipchamp (2).mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/pan etsy.mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/8P5A0349.MP4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/0929 (1).mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/1106 (1).mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
              <div className="video-item">
                <video
                  src="/videos/2 cvd.mp4"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="video-caption">Pear · 1.2ct</div>
              </div>
            </div>
            <button
              className="video-nav right"
              type="button"
              onClick={() => scrollVideos(1)}
            >
              ›
            </button>
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

