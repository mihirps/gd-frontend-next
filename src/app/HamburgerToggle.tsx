'use client';

export default function HamburgerToggle() {
  return (
    <div
      className="hamburger"
      onClick={() => {
        const links = document.querySelector('.nav-links');
        if (!links || !(links instanceof HTMLElement)) return;
        links.classList.toggle('open');
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

