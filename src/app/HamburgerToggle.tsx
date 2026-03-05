'use client';

export default function HamburgerToggle() {
  return (
    <div
      className="hamburger"
      onClick={() => {
        const links = document.querySelector('.nav-links');
        if (!links || !(links instanceof HTMLElement)) return;
        if (links.style.display === 'flex') {
          links.style.display = '';
        } else {
          links.style.display = 'flex';
          links.style.flexDirection = 'column';
          links.style.position = 'fixed';
          links.style.top = '72px';
          links.style.left = '0';
          links.style.right = '0';
          links.style.background = 'rgba(250,247,242,0.98)';
          links.style.padding = '24px';
          links.style.gap = '20px';
          links.style.borderBottom = '1px solid var(--border)';
          links.style.zIndex = '999';
          // backdropFilter is not widely supported in SSR, but fine in browser
          (links.style as any).backdropFilter = 'blur(12px)';
        }
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

