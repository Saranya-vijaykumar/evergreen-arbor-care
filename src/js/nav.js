import { initGlobalAnimations } from './animations.js';
// ArborPro Operations - Shared Navigation, Mobile Drawer & Modal Helpers
import { ArborStore } from './store.js';

export function setupNavigation() {
  try { initGlobalAnimations(); } catch (e) { console.warn('Animations init error:', e); }
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isHome1 = currentPath === '' || currentPath === 'index.html';
  const isHome2 = currentPath.includes('home-2');
  const isAnyHome = isHome1 || isHome2;

  // Highlight Home Dropdown Parent Button if on any Home page
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  if (homeDropdownBtn) {
    if (isAnyHome) {
      homeDropdownBtn.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
      homeDropdownBtn.classList.remove('text-on-surface-variant');
    } else {
      homeDropdownBtn.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
      homeDropdownBtn.classList.add('text-on-surface-variant');
    }
  }

  // Highlight active link in desktop and mobile navs
  document.querySelectorAll('nav a[data-path], #mobile-menu-drawer a[data-path]').forEach(link => {
    const path = link.getAttribute('data-path');
    const isCurrent = 
      (path === 'home' && isHome1) ||
      (path === 'home-2' && isHome2) ||
      (path === 'about' && currentPath.includes('about')) ||
      (path === 'services' && currentPath.includes('services')) ||
      (path === 'blog' && currentPath.includes('blog')) ||
      (path === 'pricing' && currentPath.includes('pricing')) ||
      (path === 'contact' && currentPath.includes('contact')) ||
      ((path === 'admin' || path === 'admin-dashboard') && currentPath.includes('admin')) ||
      (path === 'login' && (currentPath.includes('login') || currentPath.includes('signup')));

    const isDropdownSubitem = link.classList.contains('group/item') || !!link.closest('#home-dropdown-group');

    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
      if (isDropdownSubitem) {
        link.classList.add('bg-primary/10', 'border-l-4', 'border-primary', 'font-bold');
        link.classList.remove('bg-primary-container', 'text-on-primary-container');
        const titleEl = link.querySelector('.text-on-surface, div.font-bold');
        if (titleEl) {
          titleEl.classList.remove('text-on-surface');
          titleEl.classList.add('text-primary');
        }
      } else {
        link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
        link.classList.remove('text-on-surface-variant');
      }
    } else {
      link.removeAttribute('aria-current');
      if (isDropdownSubitem) {
        link.classList.remove('bg-primary/10', 'border-l-4', 'border-primary', 'font-bold', 'bg-primary-container', 'text-on-primary-container');
        const titleEl = link.querySelector('.text-primary');
        if (titleEl) {
          titleEl.classList.remove('text-primary');
          titleEl.classList.add('text-on-surface');
        }
      } else {
        link.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
        if (!link.classList.contains('bg-secondary') && !link.classList.contains('bg-primary')) {
          link.classList.add('text-on-surface-variant');
        }
      }
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileMenu) {
    mobileToggle.setAttribute('type', 'button');
    mobileToggle.style.cursor = 'pointer';
    mobileToggle.style.touchAction = 'manipulation';

    if (!mobileToggle.dataset.bound) {
      mobileToggle.dataset.bound = 'true';
      const toggleIcon = mobileToggle.querySelector('.material-symbols-outlined');

      const setMenuOpen = (open) => {
        if (open) {
          mobileMenu.classList.remove('hidden');
          mobileToggle.setAttribute('aria-expanded', 'true');
          if (toggleIcon) toggleIcon.textContent = 'close';
        } else {
          mobileMenu.classList.add('hidden');
          mobileToggle.setAttribute('aria-expanded', 'false');
          if (toggleIcon) toggleIcon.textContent = 'menu';
        }
      };

      // Unified debounced toggle for both touch and click
      let lastToggleTime = 0;
      const handleToggle = (e) => {
        const now = Date.now();
        if (now - lastToggleTime < 300) return; // Ignore synthetic double-fires
        lastToggleTime = now;
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const willOpen = mobileMenu.classList.contains('hidden');
        setMenuOpen(willOpen);
      };

      mobileToggle.addEventListener('click', handleToggle);
      mobileToggle.addEventListener('touchend', handleToggle);

      // Close when clicking or tapping outside
      const handleOutsideClose = (e) => {
        if (!mobileMenu.classList.contains('hidden')) {
          if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            setMenuOpen(false);
          }
        }
      };

      document.addEventListener('click', handleOutsideClose);
      document.addEventListener('touchend', (e) => {
        if (!mobileToggle.contains(e.target)) {
          handleOutsideClose(e);
        }
      }, { passive: true });

      // Close when clicking any link inside the mobile drawer
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          setMenuOpen(false);
        });
      });

      // Auto-close mobile menu if viewport resized to desktop (>= 1024px)
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
          setMenuOpen(false);
        }
      }, { passive: true });
    }
  }

  // Click & hover toggle for Home dropdown
  if (homeDropdownBtn) {
    const dropdownMenu = homeDropdownBtn.nextElementSibling;
    if (dropdownMenu) {
      homeDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!homeDropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.add('hidden');
        }
      });
    }
  }

  // Automatically bind any "Get Instant Estimate" buttons or links across all pages
  document.querySelectorAll('a, button').forEach(btn => {
    const text = (btn.textContent || '').trim().toLowerCase();
    const href = btn.getAttribute('href') || '';
    if (
      text.includes('get instant estimate') ||
      href === 'home-2.html#quote' ||
      (href === '#quote' && !btn.closest('#quote'))
    ) {
      if (!btn.dataset.estimateBound) {
        btn.dataset.estimateBound = 'true';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          openEstimateModal();
        });
      }
    }
  });

  // Inject modal container if not present
  if (!document.getElementById('arbor-modal-root')) {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'arbor-modal-root';
    document.body.appendChild(modalRoot);
  }
}

// Global Toast Notification
export function showToast(title, message, type = 'success') {
  let toastContainer = document.getElementById('arbor-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'arbor-toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0 p-4 rounded-xl shadow-xl flex items-start gap-3 border ${
    type === 'success' 
      ? 'bg-surface text-on-surface border-primary/30 shadow-primary/10' 
      : 'bg-error-container text-on-error-container border-error/30'
  }`;

  const iconName = type === 'success' ? 'check_circle' : 'info';
  const iconColor = type === 'success' ? 'text-primary' : 'text-error';

  toast.innerHTML = `
    <span class="material-symbols-outlined ${iconColor} text-[24px] mt-0.5">${iconName}</span>
    <div class="flex-1">
      <h4 class="font-headline-sm text-sm font-semibold">${title}</h4>
      <p class="font-body-sm text-xs text-on-surface-variant mt-0.5">${message}</p>
    </div>
    <button class="text-on-surface-variant hover:text-on-surface text-lg leading-none" onclick="this.parentElement.remove()">&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto remove after 5s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Global Booking Modal
export function openBookingModal(defaultService = 'Tree Pruning & Care', defaultAmount = 450) {
  let modalRoot = document.getElementById('arbor-modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'arbor-modal-root';
    document.body.appendChild(modalRoot);
  }

  const modalHtml = `
    <div id="booking-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div class="bg-surface rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-surface-container-highest relative transform transition-all animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button id="close-modal-btn" class="absolute top-3 right-3 sm:top-4 sm:right-4 text-on-surface-variant hover:text-on-surface p-1.5 sm:p-2 rounded-full hover:bg-surface-container" aria-label="Close booking modal">
          <span class="material-symbols-outlined text-[18px] sm:text-[20px]">close</span>
        </button>

        <div class="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 pr-8">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[20px] sm:text-[22px]">calendar_month</span>
          </div>
          <div>
            <h3 class="font-headline font-bold text-base sm:text-lg text-on-surface leading-tight">Book On-Site Consultation</h3>
            <p class="text-[11px] sm:text-xs text-on-surface-variant">Certified ISA arborists directly to your property</p>
          </div>
        </div>

        <form id="arbor-booking-form" class="space-y-2.5 sm:space-y-3">
          <div>
            <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Selected Service</label>
            <input type="text" id="modal-service" value="${defaultService}" required class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div>
              <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Your Full Name *</label>
              <input type="text" id="modal-client" required placeholder="Jane Doe" minlength="2" class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
              <span id="modal-err-client" class="hidden text-[10px] text-error font-medium mt-0.5">At least 2 letters (no numbers).</span>
            </div>
            <div>
              <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Phone Number *</label>
              <input type="tel" id="modal-phone" required placeholder="(555) 000-0000" class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
              <span id="modal-err-phone" class="hidden text-[10px] text-error font-medium mt-0.5">Digits only, min 7 digits (no letters).</span>
            </div>
          </div>

          <div>
            <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Property Street Address *</label>
            <input type="text" id="modal-location" required placeholder="742 Evergreen Terrace, Springfield" class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div>
              <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Urgency Priority</label>
              <select id="modal-priority" class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="Medium">Standard (Within 5 days)</option>
                <option value="Urgent">Priority (Within 48 hrs)</option>
                <option value="Emergency">Emergency (Immediate Dispatch)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Estimated Budget</label>
              <input type="number" id="modal-amount" value="${defaultAmount}" class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div>
            <label class="block text-[11px] sm:text-xs font-semibold text-on-surface mb-1">Tree Details / Property Access Notes</label>
            <textarea id="modal-notes" rows="2" placeholder="e.g. 50ft oak near power lines; side-gate code #4321..." class="w-full px-3 py-1.5 sm:py-2 bg-surface-container rounded-lg text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2.5 sm:gap-3 pt-2.5 sm:pt-3 border-t border-surface-container-highest">
            <button type="button" id="cancel-booking-btn" class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm text-on-surface hover:bg-surface-container transition-colors">Cancel</button>
            <button type="submit" class="px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-primary text-on-primary font-semibold text-xs sm:text-sm hover:bg-primary-container transition-colors flex items-center gap-1.5 sm:gap-2 shadow-md">
              <span class="material-symbols-outlined text-[16px] sm:text-[18px]">send</span>
              Confirm & Dispatch
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  modalRoot.innerHTML = modalHtml;

  const backdrop = document.getElementById('booking-modal-backdrop');
  const closeBtn = document.getElementById('close-modal-btn');
  const cancelBtn = document.getElementById('cancel-booking-btn');
  const form = document.getElementById('arbor-booking-form');

  const closeModal = () => {
    if (backdrop) backdrop.remove();
  };

  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Prevent letters in phone field
  const phoneEl = document.getElementById('modal-phone');
  if (phoneEl) {
    phoneEl.addEventListener('input', function() {
      this.value = this.value.replace(/[a-zA-Z]/g, '');
    });
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const clientInput = document.getElementById('modal-client');
    const phoneInput = document.getElementById('modal-phone');
    const errClient = document.getElementById('modal-err-client');
    const errPhone = document.getElementById('modal-err-phone');

    const client = clientInput.value.trim();
    const phone = phoneInput.value.trim();
    const location = document.getElementById('modal-location').value.trim();
    const service = document.getElementById('modal-service').value.trim();
    const priority = document.getElementById('modal-priority').value;
    const amount = parseFloat(document.getElementById('modal-amount').value) || defaultAmount;
    const notes = document.getElementById('modal-notes').value.trim();

    let isValid = true;
    if (!/^[A-Za-z\s'\-]{2,60}$/.test(client)) {
      errClient?.classList.remove('hidden');
      clientInput.classList.add('border-error');
      isValid = false;
    } else {
      errClient?.classList.add('hidden');
      clientInput.classList.remove('border-error');
    }

    const digits = phone.replace(/\D/g, '');
    if (/[a-zA-Z]/.test(phone) || digits.length < 7) {
      errPhone?.classList.remove('hidden');
      phoneInput.classList.add('border-error');
      isValid = false;
    } else {
      errPhone?.classList.add('hidden');
      phoneInput.classList.remove('border-error');
    }

    if (!isValid) return;

    const order = ArborStore.addOrder({
      client,
      contact: phone,
      location,
      service,
      priority,
      amount,
      notes: notes || 'Booked via ArborPro online consultation modal'
    });

    closeModal();
    showToast(
      'Work Order Confirmed!', 
      `Order ${order.id} logged for ${client}. View it anytime on the Operations Dashboard.`,
      'success'
    );
  });
}

// =========================================================
// GLOBAL INSTANT ESTIMATE CALCULATOR POPUP MODAL
// =========================================================
export function openEstimateModal(initialService = 'Tree Trimming & Pruning', initialBasePrice = 150) {
  let modalRoot = document.getElementById('arbor-modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'arbor-modal-root';
    document.body.appendChild(modalRoot);
  }

  const modalHtml = `
    <div id="estimate-modal-backdrop" class="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div class="bg-surface rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-surface-container-highest relative transform transition-all animate-scaleUp max-h-[94vh] overflow-y-auto">
        <button id="close-estimate-btn" class="absolute top-3 right-3 sm:top-4 sm:right-4 text-on-surface-variant hover:text-on-surface p-1.5 sm:p-2 rounded-full hover:bg-surface-container" aria-label="Close estimate modal">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div class="flex items-center gap-3 mb-4 pr-8 border-b border-surface-container pb-3">
          <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 shadow-xs">
            <span class="material-symbols-outlined text-[22px]">calculate</span>
          </div>
          <div>
            <h3 class="font-headline font-bold text-lg text-on-surface leading-tight">Instant Tree Care Estimate</h3>
            <p class="text-xs text-on-surface-variant mt-0.5">Real-time ISA ANSI A300 certified pricing calculator</p>
          </div>
        </div>

        <form id="arbor-estimate-form" class="space-y-4">
          <!-- Service Selector -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5" for="estimate-service">1. Select Tree Care Service</label>
            <select id="estimate-service" class="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer font-medium">
              <option value="150" data-name="Tree Trimming & Pruning" ${initialService.includes('Trimming') ? 'selected' : ''}>Tree Trimming &amp; Crown Thinning — Base $150</option>
              <option value="350" data-name="Hazardous Tree Removal" ${initialService.includes('Removal') ? 'selected' : ''}>Hazardous Tree Removal &amp; Extraction — Base $350</option>
              <option value="120" data-name="Precision Stump Grinding" ${initialService.includes('Stump') ? 'selected' : ''}>Precision Stump Grinding &amp; Root Milling — Base $120</option>
              <option value="200" data-name="Tree Health & Risk Assessment" ${initialService.includes('Health') ? 'selected' : ''}>Diagnostic Tree Health &amp; Sonic Tomography — Base $200</option>
              <option value="450" data-name="24/7 Emergency Storm Dispatch" ${initialService.includes('Emergency') ? 'selected' : ''}>24/7 Emergency Storm Hazard Clearing — Base $450</option>
              <option value="1200" data-name="60-Ton Knuckle Crane Rigging">Liebherr 60-Ton Heavy Rigging Crane — Base $1,200</option>
              <option value="650" data-name="75-Ft Aerial Bucket Truck Pruning">Altec 75-Ft Aerial Bucket Truck Service — Base $650</option>
            </select>
          </div>

          <!-- Scope / Size Selector -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5" for="estimate-size">2. Tree Height &amp; Scope</label>
            <select id="estimate-size" class="w-full px-3.5 py-2.5 bg-surface-container rounded-xl text-xs sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer font-medium">
              <option value="1.0">Small Tree (&lt; 25 ft / Ornamental / Routine)</option>
              <option value="1.5" selected>Medium Tree (25 – 50 ft / Standard Canopy)</option>
              <option value="2.2">Large Tree (50 – 80 ft / Complex Rigging)</option>
              <option value="3.0">Massive / Heritage (&gt; 80 ft / High Voltage Easement)</option>
            </select>
          </div>

          <!-- Scheduling & Urgency -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5" for="estimate-urgency">3. Scheduling Urgency</label>
              <select id="estimate-urgency" class="w-full px-3 py-2.5 bg-surface-container rounded-xl text-xs text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer font-medium">
                <option value="1.0" selected>Standard (Within 5–7 days)</option>
                <option value="1.35">Priority (Within 48 hours)</option>
                <option value="1.75">Emergency (Immediate / Today)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5" for="estimate-count">4. Number of Trees</label>
              <select id="estimate-count" class="w-full px-3 py-2.5 bg-surface-container rounded-xl text-xs text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer font-medium">
                <option value="1" selected>1 Tree / Stump</option>
                <option value="2">2 Trees (10% multi-tree discount)</option>
                <option value="3">3 Trees (15% multi-tree discount)</option>
                <option value="5">4–5 Trees (20% estate discount)</option>
                <option value="10">6+ Trees (Commercial / Acreage)</option>
              </select>
            </div>
          </div>

          <!-- Live Price Display Box -->
          <div class="bg-surface-container-low rounded-2xl p-4 sm:p-5 border border-surface-container flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Estimated Total</span>
                <div class="text-3xl sm:text-4xl font-extrabold font-headline text-primary" id="estimate-result-price">$225</div>
              </div>
              <div class="text-right">
                <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Fixed Rate Lock
                </span>
                <p class="text-[10px] text-on-surface-variant mt-1" id="estimate-breakdown-text">Base $150 × 1.5 scope</p>
              </div>
            </div>

            <div class="text-[11px] text-on-surface-variant bg-surface p-2.5 rounded-xl border border-surface-container flex items-center gap-2">
              <span class="material-symbols-outlined text-[16px] text-secondary shrink-0">shield</span>
              <span>Includes site cleanup, 100% biomass chipping, and $5M liability coverage.</span>
            </div>
          </div>

          <!-- Lock in & Book Action -->
          <div class="flex flex-col sm:flex-row items-center gap-2 pt-1">
            <button type="submit" class="w-full sm:flex-1 py-3 px-4 bg-secondary text-on-secondary rounded-xl font-bold text-sm hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">lock</span>
              <span>Lock In Rate &amp; Book Free Consultation</span>
            </button>
            <button type="button" id="cancel-estimate-btn" class="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  modalRoot.innerHTML = modalHtml;

  const backdrop = document.getElementById('estimate-modal-backdrop');
  const closeBtn = document.getElementById('close-estimate-btn');
  const cancelBtn = document.getElementById('cancel-estimate-btn');
  const form = document.getElementById('arbor-estimate-form');

  const serviceSelect = document.getElementById('estimate-service');
  const sizeSelect = document.getElementById('estimate-size');
  const urgencySelect = document.getElementById('estimate-urgency');
  const countSelect = document.getElementById('estimate-count');
  const priceDisplay = document.getElementById('estimate-result-price');
  const breakdownText = document.getElementById('estimate-breakdown-text');

  function calculateEstimate() {
    const base = parseFloat(serviceSelect.value) || 150;
    const size = parseFloat(sizeSelect.value) || 1.5;
    const urgency = parseFloat(urgencySelect.value) || 1.0;
    const countVal = parseInt(countSelect.value) || 1;

    let countMultiplier = countVal;
    if (countVal === 2) countMultiplier = 2 * 0.90;
    else if (countVal === 3) countMultiplier = 3 * 0.85;
    else if (countVal === 5) countMultiplier = 5 * 0.80;
    else if (countVal === 10) countMultiplier = 10 * 0.75;

    const total = Math.round(base * size * urgency * countMultiplier);
    priceDisplay.textContent = `$${total.toLocaleString()}`;

    const selectedOpt = serviceSelect.options[serviceSelect.selectedIndex];
    const serviceName = selectedOpt.getAttribute('data-name') || selectedOpt.text;
    breakdownText.textContent = `${serviceName} • Base $${base} × ${size}x scope`;
    return { total, serviceName };
  }

  [serviceSelect, sizeSelect, urgencySelect, countSelect].forEach(el => {
    el?.addEventListener('change', calculateEstimate);
    el?.addEventListener('input', calculateEstimate);
  });

  calculateEstimate();

  const closeModal = () => {
    if (backdrop) backdrop.remove();
  };

  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const { total, serviceName } = calculateEstimate();
    closeModal();
    openBookingModal(`Instant Estimate: ${serviceName}`, total);
    showToast(
      'Estimate Locked!',
      `Locked in rate of $${total.toLocaleString()} for ${serviceName}. Please complete your consultation contact details.`,
      'success'
    );
  });
}

// Global View Preferences (Theme & Direction RTL/LTR)
export function initViewPreferences() {
  const root = document.documentElement;

  // Read saved theme preferences or system defaults
  const savedTheme = localStorage.getItem('arbor_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  // Read saved RTL direction preference
  const savedDir = localStorage.getItem('arbor_dir');
  const isRtl = savedDir === 'rtl';

  // Apply to DOM
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  if (isRtl) {
    root.setAttribute('dir', 'rtl');
  } else {
    root.setAttribute('dir', 'ltr');
  }

  // Update UI representations across all buttons
  function syncUI() {
    const currentIsDark = root.classList.contains('dark');

    // Update all theme toggle elements
    document.querySelectorAll('.theme-icon, #theme-icon').forEach(icon => {
      icon.textContent = currentIsDark ? 'light_mode' : 'dark_mode';
    });
    document.querySelectorAll('.theme-text, #theme-text').forEach(el => {
      el.textContent = currentIsDark ? 'Light Mode' : 'Dark Mode';
    });
    document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
      btn.setAttribute('title', currentIsDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('aria-label', currentIsDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    // Update all direction toggle elements
    const currentIsRtl = root.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-text, #dir-text').forEach(el => {
      el.textContent = currentIsRtl ? 'RTL' : 'LTR';
    });
    document.querySelectorAll('.dir-icon, #dir-icon').forEach(icon => {
      icon.textContent = 'swap_horiz';
    });
    document.querySelectorAll('.dir-toggle-btn, #dir-toggle').forEach(btn => {
      btn.setAttribute('title', currentIsRtl ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
      btn.setAttribute('aria-label', currentIsRtl ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
      if (currentIsRtl) {
        btn.classList.add('border-primary', 'bg-primary-container', 'text-on-primary-container');
      } else {
        btn.classList.remove('border-primary', 'bg-primary-container', 'text-on-primary-container');
      }
    });
  }

  // Toggle Theme Handler
  function toggleTheme(e) {
    if (e) e.stopPropagation();
    const newIsDark = !root.classList.contains('dark');
    if (newIsDark) {
      root.classList.add('dark');
      localStorage.setItem('arbor_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('arbor_theme', 'light');
    }
    syncUI();
  }

  // Toggle Direction Handler (LTR / RTL)
  function toggleDirection(e) {
    if (e) e.stopPropagation();
    const currentIsRtl = root.getAttribute('dir') === 'rtl';
    const newIsRtl = !currentIsRtl;
    if (newIsRtl) {
      root.setAttribute('dir', 'rtl');
      localStorage.setItem('arbor_dir', 'rtl');
    } else {
      root.setAttribute('dir', 'ltr');
      localStorage.setItem('arbor_dir', 'ltr');
    }
    syncUI();
  }

  // Bind click handlers to all theme buttons
  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    if (!btn.dataset.themeBound) {
      btn.dataset.themeBound = 'true';
      btn.addEventListener('click', toggleTheme);
    }
  });

  // Bind click handlers to all direction buttons
  document.querySelectorAll('.dir-toggle-btn, #dir-toggle').forEach(btn => {
    if (!btn.dataset.dirBound) {
      btn.dataset.dirBound = 'true';
      btn.addEventListener('click', toggleDirection);
    }
  });

  // Sync initial UI states
  syncUI();
}

// =========================================================
// INTERACTIVE BEFORE & AFTER COMPARISON SLIDERS
// =========================================================
export function initBeforeAfterSliders() {
  document.querySelectorAll('.before-after-slider').forEach(slider => {
    const range = slider.querySelector('.slider-range');
    const beforeLayer = slider.querySelector('.before-layer');
    const divider = slider.querySelector('.slider-divider');
    const dragHint = slider.querySelector('.drag-hint');

    if (!range || !beforeLayer || !divider) return;

    const updateSlider = (val) => {
      beforeLayer.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
      divider.style.left = `${val}%`;
    };

    // Update on range input (drag & touch)
    range.addEventListener('input', (e) => {
      updateSlider(e.target.value);
      if (dragHint) dragHint.style.opacity = '0';
    });

    // Initial sync
    updateSlider(range.value || 50);
  });
}

export function setSliderPercent(sliderId, percent) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const range = slider.querySelector('.slider-range');
  const beforeLayer = slider.querySelector('.before-layer');
  const divider = slider.querySelector('.slider-divider');
  const dragHint = slider.querySelector('.drag-hint');

  if (range) range.value = percent;
  if (beforeLayer) beforeLayer.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
  if (divider) divider.style.left = `${percent}%`;
  if (dragHint) dragHint.style.opacity = '0';
}

// Attach helpers to global window object
if (typeof window !== 'undefined') {
  window.openBookingModal = openBookingModal;
  window.openEstimateModal = openEstimateModal;
  window.showToast = showToast;
  window.setupNavigation = setupNavigation;
  window.initViewPreferences = initViewPreferences;
  window.initGlobalAnimations = initGlobalAnimations;
  window.initBeforeAfterSliders = initBeforeAfterSliders;
  window.setSliderPercent = setSliderPercent;
}

// Immediately run view preferences init
try {
  initViewPreferences();
} catch (e) {
  console.warn('Preferences early init error:', e);
}

// Robust DOM lifecycle execution
function runNavInit() {
  try {
    setupNavigation();
  } catch (e) {
    console.error('setupNavigation error:', e);
  }
  try {
    initViewPreferences();
  } catch (e) {
    console.warn('initViewPreferences error:', e);
  }
  try {
    initBeforeAfterSliders();
  } catch (e) {
    console.warn('initBeforeAfterSliders error:', e);
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runNavInit);
  } else {
    // DOM is already parsed (interactive or complete)
    runNavInit();
  }
  window.addEventListener('load', runNavInit);
}

