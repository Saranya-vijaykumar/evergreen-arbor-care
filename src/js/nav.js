// ArborPro Operations - Shared Navigation, Mobile Drawer & Modal Helpers
import { ArborStore } from './store.js';

export function setupNavigation() {
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

    if (isCurrent) {
      link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
      link.classList.remove('text-on-surface-variant');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
      if (!link.classList.contains('bg-secondary') && !link.classList.contains('bg-primary')) {
        link.classList.add('text-on-surface-variant');
      }
      link.removeAttribute('aria-current');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
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
  const modalRoot = document.getElementById('arbor-modal-root') || document.body;

  const modalHtml = `
    <div id="booking-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-surface-container-highest relative transform transition-all animate-scaleUp">
        <button id="close-modal-btn" class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-surface-container">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
            <span class="material-symbols-outlined">calendar_month</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-lg text-on-surface">Book On-Site Consultation</h3>
            <p class="text-body-sm text-on-surface-variant text-xs">Certified ISA arborists directly to your property</p>
          </div>
        </div>

        <form id="arbor-booking-form" class="space-y-3">
          <div>
            <label class="block text-label-sm text-on-surface mb-1">Selected Service</label>
            <input type="text" id="modal-service" value="${defaultService}" required class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-label-sm text-on-surface mb-1">Your Full Name *</label>
              <input type="text" id="modal-client" required placeholder="Jane Doe" class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label class="block text-label-sm text-on-surface mb-1">Phone Number *</label>
              <input type="tel" id="modal-phone" required placeholder="(555) 000-0000" class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div>
            <label class="block text-label-sm text-on-surface mb-1">Property Street Address *</label>
            <input type="text" id="modal-location" required placeholder="742 Evergreen Terrace, Springfield" class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-label-sm text-on-surface mb-1">Urgency Priority</label>
              <select id="modal-priority" class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="Medium">Standard (Within 5 days)</option>
                <option value="Urgent">Priority (Within 48 hrs)</option>
                <option value="Emergency">Emergency (Immediate Dispatch)</option>
              </select>
            </div>
            <div>
              <label class="block text-label-sm text-on-surface mb-1">Estimated Budget</label>
              <input type="number" id="modal-amount" value="${defaultAmount}" class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div>
            <label class="block text-label-sm text-on-surface mb-1">Tree Details / Property Access Notes</label>
            <textarea id="modal-notes" rows="2" placeholder="e.g. 50ft oak near power lines; side-gate code #4321..." class="w-full px-3 py-2 bg-surface-container rounded-lg text-body-md text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-3 border-t border-surface-container-highest">
            <button type="button" id="cancel-booking-btn" class="px-4 py-2 rounded-lg text-label-md text-on-surface hover:bg-surface-container transition-colors">Cancel</button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors flex items-center gap-2 shadow-md">
              <span class="material-symbols-outlined text-[18px]">send</span>
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

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const client = document.getElementById('modal-client').value.trim();
    const phone = document.getElementById('modal-phone').value.trim();
    const location = document.getElementById('modal-location').value.trim();
    const service = document.getElementById('modal-service').value.trim();
    const priority = document.getElementById('modal-priority').value;
    const amount = parseFloat(document.getElementById('modal-amount').value) || defaultAmount;
    const notes = document.getElementById('modal-notes').value.trim();

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

// Global Theme Management (Light / Dark Mode)
export function initViewPreferences() {
  const root = document.documentElement;

  // Clear any residual RTL direction setting
  localStorage.removeItem('arbor_dir');
  root.removeAttribute('dir');

  // Read saved theme preferences or system defaults
  const savedTheme = localStorage.getItem('arbor_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  // Apply to DOM
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
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
  }

  // Toggle Theme Handler
  function toggleTheme(e) {
    if (e) e.stopPropagation();
    const newIsDark = !root.classList.contains('dark');
    if (newIsDark) {
      root.classList.add('dark');
      localStorage.setItem('arbor_theme', 'dark');
      showToast('Theme Changed', 'Dark mode activated for enhanced night visibility.', 'success');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('arbor_theme', 'light');
      showToast('Theme Changed', 'Light mode restored.', 'success');
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

  // Sync initial UI states
  syncUI();
}

// Attach helpers to global window object
if (typeof window !== 'undefined') {
  window.openBookingModal = openBookingModal;
  window.showToast = showToast;
  window.setupNavigation = setupNavigation;
  window.initViewPreferences = initViewPreferences;
}

// Immediately run view preferences init
try {
  initViewPreferences();
} catch (e) {
  console.warn('Preferences early init error:', e);
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  initViewPreferences();
});

