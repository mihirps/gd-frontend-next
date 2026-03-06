'use client';

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

function handleSubmit(endpoint: string) {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
      alert('Request submitted successfully.');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to submit request. Please try again.');
    }
  };
}

export default function RequestPage() {
  return (
    <>
      <div className="request-hero">
        <div className="container">
          <span className="section-tag">Get Started</span>
          <h1 className="section-title">Submit a Custom Request</h1>
          <div className="gold-divider" />
          <p className="section-sub">
            Jewelry manufacturing, diamonds, gemstones, custom cutting — all
            requests handled through one system.
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="request-types fade-in">
            <div
              className="req-type"
              data-type="manufacturing"
              onClick={() => (window as any).selectReqType?.('manufacturing')}
            >
              <div className="req-type-icon">⚒</div>
              <h3>Manufacturing Request</h3>
              <p>Custom jewelry, collection production, casting &amp; finishing</p>
            </div>
            <div
              className="req-type active"
              data-type="diamond"
              onClick={() => (window as any).selectReqType?.('diamond')}
            >
              <div className="req-type-icon">◆</div>
              <h3>Diamond Request</h3>
              <p>Natural, lab-grown, salt &amp; pepper, moissanite</p>
            </div>
            <div
              className="req-type"
              data-type="gemstone"
              onClick={() => (window as any).selectReqType?.('gemstone')}
            >
              <div className="req-type-icon">◈</div>
              <h3>Gemstone Request</h3>
              <p>Sapphire, ruby, emerald, fantasy cuts, and more</p>
            </div>
            <div
              className="req-type"
              data-type="cutting"
              onClick={() => (window as any).selectReqType?.('cutting')}
            >
              <div className="req-type-icon">✦</div>
              <h3>Custom Cutting</h3>
              <p>Unique shapes, fantasy cuts, specialty cuts</p>
            </div>
            <div
              className="req-type"
              data-type="design"
              onClick={() => (window as any).selectReqType?.('design')}
            >
              <div className="req-type-icon">◉</div>
              <h3>4,000+ Design Access</h3>
              <p>Website-ready photo &amp; video design library</p>
            </div>
            <div
              className="req-type"
              data-type="retail"
              onClick={() => (window as any).selectReqType?.('retail')}
            >
              <div className="req-type-icon">◻</div>
              <h3>Retail Support Plan</h3>
              <p>Photography, social media, content, packaging</p>
            </div>
          </div>

          <div className="request-form fade-in fade-in-delay-1">
            {/* Manufacturing form */}
            <form
              id="form-manufacturing"
              className="req-form-panel"
              onSubmit={handleSubmit('/api/request/manufacturing')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Manufacturing Request
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Custom jewelry production details.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Jewelry Type</label>
                  <select
                    id="manufacturingJewelryType"
                    name="jewelryType"
                  >
                    <option>Select Type</option>
                    <option>Ring</option>
                    <option>Bracelet</option>
                    <option>Bangle</option>
                    <option>Necklace</option>
                    <option>Pendant</option>
                    <option>Earrings</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Metal</label>
                  <select name="metal">
                    <option>Gold</option>
                    <option>Platinum</option>
                    <option>Silver</option>
                  </select>
                </div>
                <div
                  className="form-group"
                  id="manufacturingRingSizeGroup"
                  style={{ display: 'none' }}
                >
                  <label>Ring Size</label>
                  <select id="manufacturingRingSize" name="ringSize">
                    <option>Select Size</option>
                    <option>3</option>
                    <option>3.5</option>
                    <option>4</option>
                    <option>4.5</option>
                    <option>5</option>
                    <option>5.5</option>
                    <option>6</option>
                    <option>6.5</option>
                    <option>7</option>
                    <option>7.5</option>
                    <option>8</option>
                    <option>8.5</option>
                    <option>9</option>
                    <option>9.5</option>
                    <option>10</option>
                    <option>10.5</option>
                    <option>11</option>
                    <option>11.5</option>
                    <option>12</option>
                    <option>12.5</option>
                    <option>13</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Details</label>
                  <textarea
                    name="details"
                    placeholder="Design, stones, finishing requirements..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Submit Request ◆
                  </button>
                </div>
              </div>
            </form>

            {/* Diamond form */}
            <form
              id="form-diamond"
              className="req-form-panel active"
              onSubmit={handleSubmit('/api/request/diamond')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Diamond Request
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Tell us the stones you need.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Shape</label>
                  <select name="shape">
                    <option>Round</option>
                    <option>Oval</option>
                    <option>Emerald</option>
                    <option>Cushion</option>
                    <option>Princess</option>
                    <option>Pear</option>
                    <option>Marquise</option>
                    <option>Radiant</option>
                    <option>Asscher</option>
                    <option>Heart</option>
                    <option>Trillion</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Carat Range</label>
                  <select name="caratRange">
                    <option>Under 1 ct</option>
                    <option>1–2 ct</option>
                    <option>2–3 ct</option>
                    <option>3–4 ct</option>
                    <option>4–5 ct</option>
                    <option>5 ct+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Certification</label>
                  <select name="certification">
                    <option>Any</option>
                    <option>GIA</option>
                    <option>IGI</option>
                    <option>None</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Details</label>
                  <textarea
                    name="details"
                    placeholder="Color/clarity preference, budget, timelines..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media (up to 4)</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Submit Request ◆
                  </button>
                </div>
              </div>
            </form>

            {/* Gemstone form */}
            <form
              id="form-gemstone"
              className="req-form-panel"
              onSubmit={handleSubmit('/api/request/gemstone')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Gemstone Request
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Gemstone type and cut details.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Stone</label>
                  <input
                    type="text"
                    name="stone"
                    placeholder="e.g., Sapphire, Ruby, Emerald"
                  />
                </div>
                <div className="form-group">
                  <label>Cut</label>
                  <input
                    type="text"
                    name="cut"
                    placeholder="e.g., Fantasy, Step, Brilliant"
                  />
                </div>
                <div className="form-group full">
                  <label>Details</label>
                  <textarea
                    name="details"
                    placeholder="Size, color, matching pairs..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media (up to 4)</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Submit Request ◆
                  </button>
                </div>
              </div>
            </form>

            {/* Cutting form */}
            <form
              id="form-cutting"
              className="req-form-panel"
              onSubmit={handleSubmit('/api/request/cutting')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Custom Cutting
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Unique shapes and specifications.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Shape</label>
                  <input
                    type="text"
                    name="shape"
                    placeholder="e.g., Shield, Lozenge"
                  />
                </div>
                <div className="form-group">
                  <label>Dimensions</label>
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="e.g., 8×6 mm"
                  />
                </div>
                <div className="form-group full">
                  <label>Details</label>
                  <textarea
                    name="details"
                    placeholder="Material, target weight, tolerances..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media (up to 4)</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Submit Request ◆
                  </button>
                </div>
              </div>
            </form>

            {/* Design access form */}
            <form
              id="form-design"
              className="req-form-panel"
              onSubmit={handleSubmit('/api/request/design')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                4,000+ Design Access
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Access to product photos and videos.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Website URL</label>
                  <input
                    type="url"
                    name="websiteUrl"
                    placeholder="https://"
                  />
                </div>
                <div className="form-group">
                  <label>Platform</label>
                  <select name="platform">
                    <option>Shopify</option>
                    <option>WooCommerce</option>
                    <option>Squarespace</option>
                    <option>Custom</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Notes</label>
                  <textarea
                    name="notes"
                    placeholder="Anything we should know..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media (up to 4)</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Request Access ◆
                  </button>
                </div>
              </div>
            </form>

            {/* Retail support form */}
            <form
              id="form-retail"
              className="req-form-panel"
              onSubmit={handleSubmit('/api/request/retail')}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Retail Support Plan
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--text-light)',
                  marginBottom: 32,
                }}
              >
                Choose support areas.
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Your Jewelry Store"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@yourstore.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Services</label>
                  <select name="services">
                    <option>Photography</option>
                    <option>Social Media</option>
                    <option>Content</option>
                    <option>Website</option>
                    <option>Packaging</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Start Month</label>
                  <select name="startMonth">
                    <option>ASAP</option>
                    <option>Next Month</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Notes</label>
                  <textarea
                    name="notes"
                    placeholder="Goals, campaigns, brand notes..."
                  />
                </div>
                <div className="form-group full">
                  <label>Upload Media (up to 4)</label>
                  <input
                    type="file"
                    name="media"
                    multiple
                    accept="image/*,video/*,.pdf"
                  />
                </div>
                <div className="form-group full">
                  <button
                    className="btn-gold"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: 16,
                    }}
                    type="submit"
                  >
                    Submit Plan Request ◆
                  </button>
                </div>
              </div>
            </form>
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
