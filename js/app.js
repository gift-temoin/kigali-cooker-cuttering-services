// Kigali Cooker - Core App Utilities
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    renderNav();
    renderFooter();
    initNav();
    applyTranslations();
    updateAuthUI();
});

// Navigation
function initNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    // Scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    // Language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === currentPage) a.classList.add('active');
    });
}

// Auth Helpers
function getCurrentUser() {
    const u = localStorage.getItem('kc_currentUser');
    return u ? JSON.parse(u) : null;
}

function isAdmin() {
    const u = getCurrentUser();
    return u && u.isAdmin;
}

function loginUser(userData) {
    localStorage.setItem('kc_currentUser', JSON.stringify(userData));
    updateAuthUI();
}

function logoutUser() {
    if (confirm(t('logout_confirm') || "Are you sure you want to log out?")) {
        localStorage.removeItem('kc_currentUser');
        window.location.href = 'index.html';
    }
}

function updateAuthUI() {
    const user = getCurrentUser();
    const loginLinks = document.querySelectorAll('.auth-login');
    const registerLinks = document.querySelectorAll('.auth-register');
    const dashboardLinks = document.querySelectorAll('.auth-dashboard');
    const adminLinks = document.querySelectorAll('.auth-admin');
    const logoutBtns = document.querySelectorAll('.auth-logout');

    if (user) {
        loginLinks.forEach(el => el.style.display = 'none');
        registerLinks.forEach(el => el.style.display = 'none');
        dashboardLinks.forEach(el => el.style.display = '');
        logoutBtns.forEach(el => el.style.display = '');
        adminLinks.forEach(el => el.style.display = user.isAdmin ? '' : 'none');
    } else {
        loginLinks.forEach(el => el.style.display = '');
        registerLinks.forEach(el => el.style.display = '');
        dashboardLinks.forEach(el => el.style.display = 'none');
        logoutBtns.forEach(el => el.style.display = 'none');
        adminLinks.forEach(el => el.style.display = 'none');
    }
}

// Toast Notification
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}

// Star Rating HTML
function renderStars(rating) {
    let html = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= Math.round(rating) ? '' : 'empty'}">★</span>`;
    }
    html += '</div>';
    return html;
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat().format(price) + ' ' + t('rwf');
}

// Generate unique ID
function generateId(prefix = 'ID') {
    return prefix + Date.now().toString(36).toUpperCase();
}

// Modal helpers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function renderNav() {
    const navPlaceholder = document.querySelector('nav.navbar');
    if (!navPlaceholder) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const lang = getCurrentLang();

    navPlaceholder.innerHTML = `
    <div class="nav-container">
      <a href="index.html" class="nav-brand">
        <div class="brand-icon">🍳</div>
        <span>Kigali Cooker Catering</span>
      </a>
      <div class="nav-links">
        <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}" data-i18n="nav_home">${t('nav_home')}</a>
        <a href="training.html" class="${currentPage === 'training.html' ? 'active' : ''}" data-i18n="nav_training">${t('nav_training')}</a>
        <a href="workers.html" class="${currentPage === 'workers.html' ? 'active' : ''}" data-i18n="nav_workers">${t('nav_workers')}</a>
        <a href="book-service.html" class="${currentPage === 'book-service.html' ? 'active' : ''}" data-i18n="nav_services">${t('nav_services')}</a>
        <a href="dashboard.html" class="auth-dashboard ${currentPage === 'dashboard.html' ? 'active' : ''}" data-i18n="nav_dashboard">${t('nav_dashboard')}</a>
        <a href="admin.html" class="auth-admin ${currentPage === 'admin.html' ? 'active' : ''}" data-i18n="nav_admin">${t('nav_admin')}</a>
      </div>
      <div class="nav-actions">
        <div class="lang-toggle">
          <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          <button class="lang-btn ${lang === 'kn' ? 'active' : ''}" data-lang="kn">KN</button>
        </div>
        <a href="login.html" class="btn btn-sm btn-secondary auth-login" data-i18n="nav_login">${t('nav_login')}</a>
        <a href="register.html" class="btn btn-sm btn-primary auth-register" data-i18n="nav_register">${t('nav_register')}</a>
        <button class="btn btn-sm btn-danger auth-logout" onclick="logoutUser()" data-i18n="nav_logout" style="display:none">${t('nav_logout')}</button>
      </div>
      <button class="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>`;
}

function renderFooter() {
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-brand">
                        <div class="brand-icon">🍳</div>
                        <span>Kigali Cooker Catering Services Ltd</span>
                    </div>
                    <p style="color:var(--text-dark-secondary);margin-top:var(--space-sm);font-size:0.9rem;" data-i18n="footer_desc">
                        ${t('footer_desc')}
                    </p>
                </div>
                <div class="footer-col">
                    <h4 style="color:var(--primary-400);margin-bottom:var(--space-md);" data-i18n="quick_links">${t('quick_links')}</h4>
                    <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--space-sm);">
                        <li><a href="index.html" style="color:var(--text-dark-secondary);text-decoration:none;"><span data-i18n="nav_home">${t('nav_home')}</span></a></li>
                        <li><a href="training.html" style="color:var(--text-dark-secondary);text-decoration:none;"><span data-i18n="nav_training">${t('nav_training')}</span></a></li>
                        <li><a href="workers.html" style="color:var(--text-dark-secondary);text-decoration:none;"><span data-i18n="nav_workers">${t('nav_workers')}</span></a></li>
                        <li><a href="book-service.html" style="color:var(--text-dark-secondary);text-decoration:none;"><span data-i18n="nav_services">${t('nav_services')}</span></a></li>
                        <li><a href="#" onclick="triggerInstall(); return false;" style="color:var(--primary-400);text-decoration:none;font-weight:600;">📲 Download App</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="color:var(--primary-400);margin-bottom:var(--space-md);" data-i18n="contact_us">${t('contact_us')}</h4>
                    <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--space-sm);">
                        <li><a href="https://wa.me/250789296912" target="_blank" style="color:var(--text-dark-secondary);text-decoration:none;">💬 WhatsApp: 0789296912</a></li>
                        <li><a href="mailto:info@kigalicooker.com" style="color:var(--text-dark-secondary);text-decoration:none;">📧 info@kigalicooker.com</a></li>
                        <li><span style="color:var(--text-dark-secondary);">📍 Kigali, Rwanda</span></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="color:var(--primary-400);margin-bottom:var(--space-md);">Follow Us</h4>
                    <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--space-sm);">
                        <li><a href="https://www.facebook.com/" target="_blank" style="color:var(--text-dark-secondary);text-decoration:none;">📘 Facebook</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" style="color:var(--text-dark-secondary);text-decoration:none;">📸 Instagram</a></li>
                        <li><a href="https://www.twitter.com/" target="_blank" style="color:var(--text-dark-secondary);text-decoration:none;">🐦 Twitter</a></li>
                        <li><a href="https://www.youtube.com/" target="_blank" style="color:var(--text-dark-secondary);text-decoration:none;">📺 YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p><span data-i18n="developed_by">${t('developed_by')}</span> <a href="https://meet-temoin.vercel.app/" target="_blank">Gift Temoin</a></p>
                <p>&copy; 2026 Kigali Cooker Catering Services Ltd</p>
            </div>
        </div>`;
    }
    // Also inject WhatsApp FAB if not present
    if (!document.querySelector('.whatsapp-fab')) {
        const fab = document.createElement('a');
        fab.href = 'https://wa.me/250789296912';
        fab.target = '_blank';
        fab.className = 'whatsapp-fab';
        fab.title = 'Chat on WhatsApp';
        fab.innerHTML = '💬';
        document.body.appendChild(fab);
    }
}


// PWA Installation Handling
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtns = document.querySelectorAll('.pwa-install-btn, #installBtn');
    installBtns.forEach(btn => btn.style.display = 'inline-flex');
});

function triggerInstall() {
    if (!deferredPrompt) {
        showToast('Native installation not supported or already installed. Use the QR code instead!', 'info');
        openQRModal();
        return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        }
        deferredPrompt = null;
        const installBtns = document.querySelectorAll('.pwa-install-btn, #installBtn');
        installBtns.forEach(btn => btn.style.display = 'none');
    });
}

// Redirect logout confirm translation if missing
if (typeof t !== 'undefined' && !t('logout_confirm')) {
    // This is just a safety if i18n isn't ready
}

