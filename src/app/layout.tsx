import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import './globals.css';
import ClientEffects from './ClientEffects';
import HamburgerToggle from './HamburgerToggle';

export const metadata: Metadata = {
  title: 'Gemstone Diamond — Complete Retail Partner for Independent Jewelers',
  description: 'Family-owned backend partner for independent U.S. jewelers: jewelry manufacturing, diamond and gemstone supply, and retail growth support.',
  icons: {
    icon: '/fav-icon.png',
  },
};

const BOOK_CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Aaafw8kAHZlAUoqXan9cm5O4YgtoOyJyKPN8060M0qrgqc1UDlcKq7OjEV903XRL40p6pp6xe?gv=true';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientEffects />

        <nav id="mainNav">
          <div className="nav-logo">
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <img
                src="/images/logo.webp"
                alt="Gemstone Diamond"
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
              <span>Gemstone Diamond</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/jewelry">Jewelry</Link>
            </li>
            <li>
              <Link href="/diamonds">Diamonds</Link>
            </li>
            <li>
              <Link href="/gemstones">Gemstones</Link>
            </li>
            <li>
              <Link href="/retail">Retail Support</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a
                className="nav-cta"
                href={BOOK_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </li>
          </ul>
          <HamburgerToggle />
        </nav>

        {children}

        <footer>
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-brand">◆ Gemstone Diamond</div>
                <p className="footer-tagline">
                  Complete retail support partner for independent U.S. jewelers.
                  Family-owned business with in-house manufacturing, diamond
                  supply, and growth support.
                </p>
                <div className="footer-socials">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/gemstone_diamonds"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" aria-hidden="true" />
                  </a>
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/gemstone_diamonds"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                  </a>
                  <a  
                    className="social-icon"
                    href="https://wa.me/16263673527"
                    aria-label="WhatsApp"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  </a>
                  <a
                    className="social-icon"
                    href="https://in.pinterest.com/gemstonediamonds/"
                    aria-label="Pinterest"
                    target="_blank"
                  >
                    <i className="fa-brands fa-pinterest-p" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/jewelry">Jewelry</Link>
                  </li>
                  <li>
                    <Link href="/diamonds">Diamonds</Link>
                  </li>
                  <li>
                    <Link href="/gemstones">Gemstones</Link>
                  </li>
                  <li>
                    <Link href="/retail">Retail Support</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/request">Custom Request</Link>
                  </li>
                  <li>
                    <a
                      href={BOOK_CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Appointment
                    </a>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col footer-contact">
                <h4>Contact</h4>
                <p>
                  sales@gemstone.com
                  <br />
                  +1 (626) 367-3527
                  <br />
                  <br />
                  Available for U.S. Independent Retailers
                  <br />
                  Mon–Fri · 9am–6pm EST
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Gemstone Diamond. All rights reserved.</p>
              <span className="footer-trust">
                ✦ Family-Owned · In-House · No Middlemen
              </span>
            </div>
          </div>
        </footer>

        <Script
          src="https://calendar.google.com/calendar/scheduling-button-script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
