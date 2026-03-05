'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
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

    // Diamond videos scroll helper (buttons can call via window.scrollVideos)
    (window as any).scrollVideos = (dir: number) => {
      const el = document.getElementById('videosTrack');
      if (!el) return;
      el.scrollBy({
        left: dir * Math.max(320, Math.floor(el.clientWidth * 0.8)),
        behavior: 'smooth',
      });
    };

    // Social slider (retail page)
    const slider = document.getElementById('socialSlider');
    let sliderInterval: number | undefined;
    if (slider) {
      const slides = Array.from(
        slider.querySelectorAll<HTMLElement>('.social-slide'),
      );
      let idx = 0;
      const show = (n: number) => {
        slides.forEach((s, i) => s.classList.toggle('active', i === n));
      };
      show(0);
      let paused = false; 
      slider.addEventListener('mouseenter', () => {
        paused = true;
      });
      slider.addEventListener('mouseleave', () => {
        paused = false;
      });
      const prev = document.getElementById('socialPrev');
      const next = document.getElementById('socialNext');
      if (prev)
        prev.addEventListener('click', () => {
          paused = true;
          idx = (idx - 1 + slides.length) % slides.length;
          show(idx);
          setTimeout(() => {
            paused = false;
          }, 3000);
        });
      if (next)
        next.addEventListener('click', () => {
          paused = true;
          idx = (idx + 1) % slides.length;
          show(idx);
          setTimeout(() => {
            paused = false;
          }, 3000);
        });
      sliderInterval = window.setInterval(() => {
        if (paused || slides.length < 2) return;
        idx = (idx + 1) % slides.length;
        show(idx);
      }, 4000);
    }

    // Request form tabs
    (window as any).selectReqType = (type: string) => {
      document
        .querySelectorAll<HTMLElement>('.request-types .req-type')
        .forEach(i => i.classList.remove('active'));
      const active = document.querySelector<HTMLElement>(
        `.request-types .req-type[data-type="${type}"]`,
      );
      if (active) active.classList.add('active');
      document
        .querySelectorAll<HTMLElement>('.req-form-panel')
        .forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('form-' + type);
      if (panel) panel.classList.add('active');
    };

    // Initialize default request tab if present
    const def = document.querySelector<HTMLElement>(
      '.request-types .req-type.active',
    );
    if (def && def.dataset.type) {
      (window as any).selectReqType(def.dataset.type);
    }

    // Manufacturing ring-size visibility
    const typeEl = document.getElementById(
      'manufacturingJewelryType',
    ) as HTMLSelectElement | null;
    const ringGroup = document.getElementById(
      'manufacturingRingSizeGroup',
    ) as HTMLElement | null;
    if (typeEl && ringGroup) {
      const sync = () => {
        const v = (typeEl.value || '').toLowerCase();
        ringGroup.style.display =
          v === 'ring' || v === 'bangle' ? '' : 'none';
      };
      typeEl.addEventListener('change', sync);
      sync();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
      shapesCleanup();
      if (sliderInterval) window.clearInterval(sliderInterval);
    };
  }, [pathname]);

  return null;
}

