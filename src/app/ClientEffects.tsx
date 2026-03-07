'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile nav menu on page change (so it doesn't stay open after navigation)
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navLinks instanceof HTMLElement) {
      navLinks.classList.remove('open');
    }

    // Scroll nav shadow
    const onScroll = () => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Fade-in observer (re-run on route change so new sections are tracked)
    const items = document.querySelectorAll<HTMLElement>('.fade-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 },
    );
    items.forEach(i => observer.observe(i));

    // Sparkle cursor
    // ensure keyframes exist (once)
    if (!document.getElementById('spark-fade-style')) {
      const sparkStyle = document.createElement('style');
      sparkStyle.id = 'spark-fade-style';
      sparkStyle.textContent =
        '@keyframes sparkFade { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(0) translateY(-12px)} }';
      document.head.appendChild(sparkStyle);
    }
    const onMove = (e: MouseEvent) => {
      if (Math.random() > 0.96) {
        const spark = document.createElement('div');
        spark.style.cssText = `
          position:fixed;left:${e.clientX}px;top:${e.clientY}px;
          width:4px;height:4px;border-radius:50%;
          background:var(--gold);pointer-events:none;z-index:9999;
          animation:sparkFade 0.6s ease forwards;
        `;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
      }
    };
    document.addEventListener('mousemove', onMove);

    // Handle Next.js ChunkLoadError (caused by deployment mismatch)
    // When you redeploy, old hashed chunks are deleted. If a user is on an old session,
    // they might hit a 404 when navigating. We catch this and force a hard refresh.
    const handleChunkError = (e: ErrorEvent) => {
      const msg = e.message || '';
      if (
        msg.includes('ChunkLoadError') || 
        msg.includes('Loading chunk') || 
        msg.includes('Failed to load resource')
      ) {
        // Only reload if it looks like a Next.js chunk error
        if (msg.includes('_next/static/chunks/')) {
          console.warn('ChunkLoadError detected. Reloading page to sync with latest build...');
          window.location.reload();
        }
      }
    };
    window.addEventListener('error', handleChunkError, true);

    // Shapes auto-scroll carousel
    const shapesTrack = document.getElementById('shapesTrack');
    let shapesCleanup = () => {};
    if (shapesTrack) {
      const children = Array.from(shapesTrack.children);
      children.forEach(c => shapesTrack.appendChild(c.cloneNode(true)));
      let paused = false;
      const speed = 0.6;
      let raf: number;
      const step = () => {
        if (!paused) {
          shapesTrack.scrollLeft += speed;
          const half = shapesTrack.scrollWidth / 2;
          if (shapesTrack.scrollLeft >= half) {
            shapesTrack.scrollLeft -= half;
          }
        }
        raf = requestAnimationFrame(step);
      };
      const pause = () => {
        paused = true;
      };
      const resume = () => {
        paused = false;
      };
      shapesTrack.addEventListener('mouseenter', pause);
      shapesTrack.addEventListener('mouseleave', resume);
      shapesTrack.addEventListener('touchstart', pause, { passive: true });
      shapesTrack.addEventListener('touchend', resume, { passive: true });

      const left = document.querySelector<HTMLButtonElement>(
        '.shape-nav.left',
      );
      const right = document.querySelector<HTMLButtonElement>(
        '.shape-nav.right',
      );
      if (left)
        left.addEventListener('click', () => {
          pause();
          shapesTrack.scrollBy({ left: -240, behavior: 'smooth' });
          setTimeout(resume, 1500);
        });
      if (right)
        right.addEventListener('click', () => {
          pause();
          shapesTrack.scrollBy({ left: 240, behavior: 'smooth' });
          setTimeout(resume, 1500);
        });

      step();
      shapesCleanup = () => {
        cancelAnimationFrame(raf);
        shapesTrack.removeEventListener('mouseenter', pause);
        shapesTrack.removeEventListener('mouseleave', resume);
        shapesTrack.removeEventListener('touchstart', pause);
        shapesTrack.removeEventListener('touchend', resume);
      };
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
      shapesCleanup();
    };
  }, [pathname]);

  return null;
}

