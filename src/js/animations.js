// ArborPro Operations - Premium 60fps Animation & Micro-Interactions Controller

export function initGlobalAnimations() {
  if (typeof window === 'undefined') return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Top Scroll Progress Indicator
  setupScrollProgressBar();

  // 2. Header Glassmorphism Scroll Elevation
  setupHeaderScrollEffect();

  // 3. Button Shimmer & Micro-Interactions
  setupButtonShimmer();

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.classList.add('reveal-visible');
    });
    return;
  }

  // 4. Scroll-Driven Intersection Reveal with Staggering
  setupScrollReveal();

  // 5. Animated Number Counters
  setupNumberCounters();
}

/**
 * Creates and updates the top gradient scroll progress bar
 */
function setupScrollProgressBar() {
  let bar = document.getElementById('scroll-progress-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scroll-progress-bar';
    document.body.prepend(bar);
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Enhances header with glassmorphism blur and subtle shadow on scroll
 */
function setupHeaderScrollEffect() {
  const header = document.querySelector('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Automatically applies subtle shimmer shine to primary/secondary buttons
 */
function setupButtonShimmer() {
  const buttons = document.querySelectorAll(
    'button.bg-primary, button.bg-secondary, a.bg-primary, a.bg-secondary, .btn-submit, #book-quote-btn, .service-tab.active'
  );

  buttons.forEach(btn => {
    if (!btn.classList.contains('btn-shimmer')) {
      btn.classList.add('btn-shimmer');
    }
  });
}

/**
 * Scroll Reveal using IntersectionObserver with automatic cascading stagger
 */
function setupScrollReveal() {
  const targetSelectors = [
    'main > section',
    '.service-card',
    '.grid > div',
    '.bento-card',
    'article',
    '.auth-card',
    '#accordion-container > div',
    '.timeline-step',
    '.reveal'
  ];

  const elements = document.querySelectorAll(targetSelectors.join(', '));
  if (!elements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => {
    if (el.closest('.reveal-init') && el.classList.contains('reveal-init')) return;
    if (el.tagName === 'HEADER' || el.tagName === 'NAV') return;

    if (!el.classList.contains('reveal-init') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
      el.classList.add('reveal-init');
    }

    const parent = el.parentElement;
    if (parent && parent.classList.contains('grid')) {
      const siblingIndex = Array.from(parent.children).indexOf(el);
      const delay = (siblingIndex % 4) * 80;
      el.style.transitionDelay = `${delay}ms`;
    }

    observer.observe(el);
  });
}

/**
 * Animate numbers counting up when scrolled into view
 */
function setupNumberCounters() {
  const counterCandidates = document.querySelectorAll('.font-headline, .font-extrabold, .font-black');

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateNumberValue(el);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterCandidates.forEach(el => {
    const text = el.innerText.trim();
    const hasNumber = /\d+/.test(text);
    const isShort = text.length <= 15;
    if (hasNumber && isShort && !el.dataset.counterAttached && !el.children.length) {
      el.dataset.counterAttached = 'true';
      el.dataset.originalText = text;
      counterObserver.observe(el);
    }
  });
}

function animateNumberValue(el) {
  const original = el.dataset.originalText || el.innerText.trim();
  const numMatch = original.match(/[\d,.]+/);
  if (!numMatch) return;

  const rawNumStr = numMatch[0].replace(/,/g, '');
  const targetNum = parseFloat(rawNumStr);
  if (isNaN(targetNum) || targetNum <= 0) return;

  const isDecimal = rawNumStr.includes('.');
  const prefix = original.slice(0, numMatch.index);
  const suffix = original.slice(numMatch.index + numMatch[0].length);

  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = targetNum * easeProgress;

    let formattedVal;
    if (isDecimal) {
      formattedVal = currentVal.toFixed(1);
    } else if (targetNum >= 1000) {
      formattedVal = Math.floor(currentVal).toLocaleString();
    } else {
      formattedVal = Math.floor(currentVal).toString();
    }

    el.innerText = `${prefix}${formattedVal}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = original;
    }
  }

  requestAnimationFrame(update);
}
