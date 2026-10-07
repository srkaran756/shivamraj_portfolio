/**
 * SHIVAMRAJ KARAN — DOCUMENTARY & PORTRAIT PHOTOGRAPHY
 * Lightweight, Ultra-Fast Editorial Portfolio Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // ======================================================
  // 1. DYNAMIC GALLERY RENDERING
  // ======================================================
  const worksGrid = document.getElementById('works-grid');
  let currentFilter = 'all';

  function renderWorks() {
    if (!worksGrid || typeof GALLERY_PLATES === 'undefined') return;

    const filtered = currentFilter === 'all'
      ? GALLERY_PLATES
      : GALLERY_PLATES.filter(p => p.category === currentFilter);

    worksGrid.innerHTML = '';

    filtered.forEach((plate, idx) => {
      const card = document.createElement('article');
      card.className = `work-card-item aspect-${plate.aspect || 'landscape'}`;
      card.setAttribute('data-id', plate.id);

      card.innerHTML = `
        <div class="work-media-box">
          <span class="work-card-badge">PLATE 0${idx + 1} • BIHAR</span>
          <img src="${plate.image}" alt="${plate.title} — Photographed by Shivamraj Karan" class="work-card-img" loading="lazy" />
        </div>
        <div class="work-card-meta">
          <div class="work-card-header">
            <h3 class="work-card-title">${plate.title}</h3>
            <span class="work-card-cat">${plate.categoryLabel || 'Documentary'}</span>
          </div>
          <p class="work-card-story">${plate.story}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(GALLERY_PLATES.findIndex(p => p.id === plate.id));
      });

      worksGrid.appendChild(card);
    });
  }

  // Filter Buttons
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  filterTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderWorks();
    });
  });

  renderWorks();

  // ======================================================
  // 2. INTERACTIVE LIGHTBOX MODAL
  // ======================================================
  const lightbox = document.getElementById('lightbox');
  const lbShade = document.getElementById('lb-shade');
  const lbCloseBtn = document.getElementById('lb-close-btn');
  const lbPrevBtn = document.getElementById('lb-prev-btn');
  const lbNextBtn = document.getElementById('lb-next-btn');
  const lbImg = document.getElementById('lightbox-image');
  const lbCounter = document.getElementById('lb-counter-num');
  const lbTitle = document.getElementById('lb-piece-title');
  const lbStory = document.getElementById('lb-piece-story');

  let activeIndex = 0;

  function openLightbox(index) {
    if (!lightbox || typeof GALLERY_PLATES === 'undefined') return;
    activeIndex = (index + GALLERY_PLATES.length) % GALLERY_PLATES.length;
    const plate = GALLERY_PLATES[activeIndex];

    lbImg.src = plate.image;
    lbImg.alt = plate.title;
    lbCounter.textContent = `PLATE 0${activeIndex + 1} / 0${GALLERY_PLATES.length}`;
    lbTitle.textContent = plate.title;
    lbStory.textContent = plate.story;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbShade) lbShade.addEventListener('click', closeLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', () => openLightbox(activeIndex - 1));
  if (lbNextBtn) lbNextBtn.addEventListener('click', () => openLightbox(activeIndex + 1));

  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(activeIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(activeIndex + 1);
  });

  // ======================================================
  // 3. MOBILE DRAWER NAVIGATION
  // ======================================================
  const menuToggle = document.getElementById('menu-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav-panel');
  const mobClose = document.getElementById('mob-close-btn');
  const mobItems = document.querySelectorAll('.mob-nav-item');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  }
  if (mobClose && mobileNav) {
    mobClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  mobItems.forEach(item => {
    item.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
    });
  });

  // ======================================================
  // 4. ONE-TAP CLIPBOARD COPY & TOAST NOTIFICATION
  // ======================================================
  const toast = document.getElementById('toast-popup');
  const copyBtns = document.querySelectorAll('.copy-btn-action');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
        });
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // ======================================================
  // 5. HEADER SCROLL SHADOW
  // ======================================================
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.padding = '0.85rem var(--pad-x)';
      header.style.background = 'rgba(9, 9, 11, 0.95)';
    } else {
      header.style.padding = '1.25rem var(--pad-x)';
      header.style.background = 'rgba(9, 9, 11, 0.88)';
    }
  }, { passive: true });

});

  // Purposeful motion: reveal information as it enters the reading flow.
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionQuery.matches && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.hero-feature-frame, .works-section .section-header-bar, .work-card-item, .manifesto-layout-grid, .studio-card-wrapper, .contact-centered-box'
    );
    revealTargets.forEach((el) => el.classList.add('reveal-item'));
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((el) => observer.observe(el));
  }

