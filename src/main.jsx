import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

/* =========================
   LOGO
========================= */
import katboxLogo from './assets/katbox-logo.png';

/* =========================
   HERO CAROUSEL
========================= */
import heroAppHome from './assets/customer-home.jpg';
import heroHomemade from './assets/customer-chefinfo.jpg';
import heroMealbox from './assets/customer-mealboxes.jpg';
import heroCatering from './assets/customer-catering.jpg';

/* =========================
   SERVICE CARDS
========================= */
import svcHomemade from './assets/homemade.png';
import svcMealbox from './assets/mealboxes.png';
import svcCatering from './assets/catering.jpg';
import svcQuickBites from './assets/quickbites.jpeg';

/* =========================
   FOR CHEFS CAROUSEL
========================= */
import chefDashboard from './assets/chef-dashboard.jpg';
import chefOrders from './assets/chef-orders.jpg';
import chefEarnings from './assets/chef-category.jpg';
import chefKitchen from './assets/chef-profile.jpg';

/* =========================
   DOWNLOAD
========================= */
import downloadSplash from './assets/download.png';

/* =========================================================
   ⬇️  APP DOWNLOAD LINKS
   ========================================================= */
const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=com.katbox.app';

const apkUrl =
  'https://github.com/kunchala-nithin/katbox-app/releases/download/v1.0.0/application-ad79a90c-df76-4e41-a44b-d9957820191e.apk';

const PLAY_STORE_LIVE = false;

const getApiBaseUrl = () => {
  const configuredUrl = String(import.meta.env.VITE_API_URL || '').trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
    return 'http://localhost:4000';
  }

  if (typeof window !== 'undefined' && window.location?.hostname === '127.0.0.1') {
    return 'http://localhost:4000';
  }

  throw new Error(
    'Katbox API URL is not configured. Set VITE_API_URL to your production backend URL.'
  );
};

/* =========================================================
   EXPLORE KATBOX — SERVICE CARDS
   ========================================================= */
const services = [
  {
    title: 'Homemade Foods',
    tag: 'HOMEMADE FOODS',
    description:
      'Authentic pickles, karam podis, sweets and traditional snacks, crafted the homemade way in small batches by local home cooks — just like your grandmother used to make.',
    price: '₹99',
    suffix: 'onwards',
    image: svcHomemade,
  },
  {
    title: 'Daily Meal Boxes',
    tag: 'MEAL BOX PLANS',
    description:
      'Wholesome homestyle meals with dal, rotis, seasonal curries and a sweet — cooked fresh every morning by verified home chefs and delivered warm to your doorstep.',
    price: '₹99',
    suffix: '/meal',
    image: svcMealbox,
  },
  {
    title: 'Katbox Platters',
    tag: 'CATERING MEAL PLANS',
    description:
      'Traditional event platters, festive thalis and party spreads with authentic regional flavours — beautifully served for birthdays, housewarmings and celebrations.',
    price: '₹129',
    suffix: '/platter',
    image: svcCatering,
  },
  {
    title: 'Quick Bites',
    tag: 'QUICK BITES',
    badge: 'QUICK DELIVERY',
    badgeNote: '75 mins',
    description:
      'Freshly cooked the moment you order — never pre-made. From sizzling snacks to comforting quick meals, your food is prepared only after you tap order, then delivered hot to your door. Cooking + delivery in under 75 minutes.',
    price: '₹59',
    suffix: 'onwards',
    image: svcQuickBites,
  },
];

/* =========================================================
   HOW KATBOX WORKS — full app journey
   ========================================================= */
const howSteps = [
  {
    number: '01',
    emoji: '🔍',
    title: 'Browse & Discover',
    bullets: [
      'Open the app and see what’s cooking near you',
      'Browse Homemade Foods, Meal Boxes, Catering & Quick Bites',
      'Filter by cuisine, diet, spice level or delivery time',
      'See real photos, prices and chef ratings before you pick',
    ],
  },
  {
    number: '02',
    emoji: '👩‍🍳',
    title: 'Choose Your Chef',
    bullets: [
      'View verified chef profiles with stories & photos',
      'Check signature dishes, cuisines & hygiene score',
      'Read real reviews from customers near you',
      'Know exactly who is cooking your food',
    ],
  },
  {
    number: '03',
    emoji: '🛒',
    title: 'Customise Your Order',
    bullets: [
      'Add spice level, allergies or Jain / vegan notes',
      'Choose portion size and delivery slot',
      'Subscribe to daily, weekly or monthly meal plans',
      'Add special requests for the chef in one tap',
    ],
  },
  {
    number: '04',
    emoji: '💳',
    title: 'Pay Securely',
    bullets: [
      'Pay via UPI, cards or wallets inside the app',
      'Apply coupons and loyalty rewards at checkout',
      'Transparent pricing — no hidden delivery charges',
      'Instant order confirmation to you and the chef',
    ],
  },
  {
    number: '05',
    emoji: '📲',
    title: 'Track Live',
    bullets: [
      'Watch live status — confirmed → cooking → packed',
      'Chat directly with your chef in the app',
      'Get delivery partner details & live map tracking',
      'Notifications at every step of the journey',
    ],
  },
  {
    number: '06',
    emoji: '🛵',
    title: 'Fresh Delivery',
    bullets: [
      'Food packed warm and delivered to your door',
      'Quick Bites at your door in under 75 minutes',
      'Meal boxes delivered fresh every morning',
      'Catering delivered & served for your event',
    ],
  },
  {
    number: '07',
    emoji: '❤️',
    title: 'Enjoy & Reorder',
    bullets: [
      'Rate and review your chef after every order',
      'Tip your chef directly — 100% goes to them',
      'Reorder favourites in a single tap',
      'Unlock loyalty rewards and chef specials',
    ],
  },
];

/* =========================================================
   ABOUT KATBOX APP — feature cards
   ========================================================= */
const aboutCards = [
  {
    icon: '🍲',
    title: 'Real home kitchens',
    text:
      'Every dish is cooked fresh in a verified home kitchen — no centralised factories, no frozen meals, no shortcuts. Just honest, small-batch cooking by real people.',
  },
  {
    icon: '🧑‍🍳',
    title: 'Verified local chefs',
    text:
      'Browse chef profiles with their story, signature dishes and reviews. Every chef is KYC-verified and hygiene-checked before they go live on Katbox.',
  },
  {
    icon: '⏱️',
    title: 'Flexible ordering',
    text:
      'Order a one-off meal, subscribe to a weekly tiffin plan or book a chef for a private dinner. Katbox fits your day — breakfast, lunch, dinner or a midnight craving.',
  },
  {
    icon: '📍',
    title: 'Hyperlocal by design',
    text:
      'We start in Hyderabad and grow neighbourhood-by-neighbourhood. That means shorter delivery routes, warmer food and support for cooks right around the corner.',
  },
  {
    icon: '🛡️',
    title: 'Safe & transparent',
    text:
      'Clear pricing, ingredient lists, live order tracking and a support team that actually answers — so you always know what you’re eating and from whom.',
  },
  {
    icon: '💚',
    title: 'Fair for everyone',
    text:
      'Chefs earn more per order than on typical aggregators, and customers pay fair prices for real food. Katbox exists to make the homemade food economy work — for both sides.',
  },
];

const heroSlides = [
  { src: heroAppHome, alt: 'Katbox app home' },
  { src: heroHomemade, alt: 'Katbox homemade foods' },
  { src: heroMealbox, alt: 'Katbox meal boxes' },
  { src: heroCatering, alt: 'Katbox catering' },
];

const featureSlides = [
  { src: chefDashboard, alt: 'Katbox chef dashboard' },
  { src: chefOrders, alt: 'Katbox chef orders' },
  { src: chefEarnings, alt: 'Katbox chef earnings' },
  { src: chefKitchen, alt: 'Katbox chef kitchen' },
];

/* =========================
   Reusable Carousel
========================= */
function Carousel({ slides, variant = 'hero' }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== active) setActive(index);
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const safe = Math.max(0, Math.min(i, slides.length - 1));
    el.scrollTo({
      left: safe * el.clientWidth,
      behavior: 'smooth',
    });
    setActive(safe);
  };

  const handlePrev = () => goTo(active - 1);
  const handleNext = () => goTo(active + 1);

  useEffect(() => {
    const onResize = () => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollTo({
        left: active * el.clientWidth,
        behavior: 'auto',
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  const atStart = active === 0;
  const atEnd = active === slides.length - 1;

  return (
    <div className={`carousel carousel-${variant}`}>

      <div className="carousel-row">

        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={handlePrev}
          disabled={atStart}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {slides.map((slide, i) => (
            <div
              className={`carousel-slide carousel-slide-${variant}`}
              key={i}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={handleNext}
          disabled={atEnd}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={
              i === active
                ? 'carousel-dot active'
                : 'carousel-dot'
            }
            onClick={() => goTo(i)}
          />
        ))}
      </div>

    </div>
  );
}

/* =========================
   HOW KATBOX WORKS — Horizontal Scroll
========================= */
function HowItWorksScroller({ steps }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const safe = Math.max(0, Math.min(i, steps.length - 1));
    const card = el.children[safe];
    if (!card) return;

    el.scrollTo({
      left: card.offsetLeft - 24,
      behavior: 'smooth',
    });
    setActive(safe);
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children);
    const center = el.scrollLeft + el.clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    if (closest !== active) setActive(closest);
  };

  const handlePrev = () => scrollToIndex(active - 1);
  const handleNext = () => scrollToIndex(active + 1);

  const atStart = active === 0;
  const atEnd = active === steps.length - 1;

  return (
    <div className="how-scroller">

      <div className="how-scroller-head">
        <div className="how-scroller-counter">
          <span className="how-counter-active">
            {String(active + 1).padStart(2, '0')}
          </span>
          <span className="how-counter-sep">/</span>
          <span className="how-counter-total">
            {String(steps.length).padStart(2, '0')}
          </span>
        </div>

        <div className="how-scroller-arrows">
          <button
            type="button"
            className="how-arrow"
            onClick={handlePrev}
            disabled={atStart}
            aria-label="Previous step"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="how-arrow"
            onClick={handleNext}
            disabled={atEnd}
            aria-label="Next step"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="how-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {steps.map((step, i) => (
          <article
            className={
              i === active
                ? 'how-card active'
                : 'how-card'
            }
            key={step.number}
          >
            <div className="how-card-head">
              <span className="how-card-emoji" aria-hidden="true">
                {step.emoji}
              </span>
              <span className="how-card-number">
                {step.number}
              </span>
            </div>

            <h3 className="how-card-title">
              {step.title}
            </h3>

            <ul className="how-card-bullets">
              {step.bullets.map((b) => (
                <li key={b}>
                  <span className="how-bullet-dot" aria-hidden="true">
                    ✦
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="how-card-glow" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="how-dots">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            className={
              i === active
                ? 'how-dot active'
                : 'how-dot'
            }
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

/* =========================
   ABOUT KATBOX APP — Horizontal Scroll
   (mobile-only scroller; desktop grid unchanged)
========================= */
function AboutScroller({ cards }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const safe = Math.max(0, Math.min(i, cards.length - 1));
    const card = el.children[safe];
    if (!card) return;

    el.scrollTo({
      left: card.offsetLeft - 24,
      behavior: 'smooth',
    });
    setActive(safe);
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardsEls = Array.from(el.children);
    const center = el.scrollLeft + el.clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;
    cardsEls.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    if (closest !== active) setActive(closest);
  };

  const handlePrev = () => scrollToIndex(active - 1);
  const handleNext = () => scrollToIndex(active + 1);

  const atStart = active === 0;
  const atEnd = active === cards.length - 1;

  return (
    <div className="about-scroller">

      <div className="about-scroller-head">
        <div className="about-scroller-counter">
          <span className="about-counter-active">
            {String(active + 1).padStart(2, '0')}
          </span>
          <span className="about-counter-sep">/</span>
          <span className="about-counter-total">
            {String(cards.length).padStart(2, '0')}
          </span>
        </div>

        <div className="about-scroller-arrows">
          <button
            type="button"
            className="about-arrow"
            onClick={handlePrev}
            disabled={atStart}
            aria-label="Previous card"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="about-arrow"
            onClick={handleNext}
            disabled={atEnd}
            aria-label="Next card"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="about-grid"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <div className="about-card" key={card.title}>
            <span className="about-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="about-dots">
        {cards.map((_, i) => (
          <button
            key={i}
            type="button"
            className={
              i === active
                ? 'about-dot active'
                : 'about-dot'
            }
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

/* =========================
   EXPLORE KATBOX — Horizontal Scroll
   Distinct mobile-only scroller with a progress bar
   (instead of numbered counter) and image-forward cards.
========================= */
function ExploreScroller({ services, onOrderNow }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const safe = Math.max(0, Math.min(i, services.length - 1));
    const card = el.children[safe];
    if (!card) return;

    el.scrollTo({
      left: card.offsetLeft - 16,
      behavior: 'smooth',
    });
    setActive(safe);
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardsEls = Array.from(el.children);
    const center = el.scrollLeft + el.clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;
    cardsEls.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    if (closest !== active) setActive(closest);
  };

  const total = services.length;
  const progressPct =
    total <= 1 ? 100 : ((active + 1) / total) * 100;

  return (
    <div className="explore-scroller">

      <div className="explore-scroller-head">
        <span className="explore-scroller-label">
          <i aria-hidden="true" />
          Swipe to explore
        </span>

        <div className="explore-scroller-progress">
          <div className="explore-progress-bar">
            <div
              className="explore-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="explore-progress-count">
            <b>{String(active + 1).padStart(2, '0')}</b>
            {' / '}
            {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div
        className="service-grid"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {services.map((service, i) => (
          <article
            className={
              i === active
                ? 'service-card is-active'
                : 'service-card'
            }
            key={service.title}
          >
            {service.badge && (
              <div className="quick-badge-corner">
                <span className="quick-dot"></span>
                <div>
                  <strong>{service.badge}</strong>
                  {service.badgeNote && (
                    <small>{service.badgeNote}</small>
                  )}
                </div>
              </div>
            )}

            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="service-price">
                <strong>{service.price}</strong>
                <small>{service.suffix}</small>
              </div>
            </div>

            <div className="service-content">
              <span className="service-tag">
                <i></i>
                {service.tag}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button
                type="button"
                className="card-link"
                onClick={onOrderNow}
              >
                Order now
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="explore-dots">
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            className={
              i === active
                ? 'explore-dot active'
                : 'explore-dot'
            }
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

/* =========================
   Generic Modal Shell
========================= */
function ModalShell({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="dl-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={onClose}
    >
      <div
        className="dl-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================
   Download Confirmation Modal
========================= */
function DownloadModal({ open, onCancel, onConfirm }) {
  return (
    <ModalShell
      open={open}
      onClose={onCancel}
      labelledBy="dl-modal-title"
    >
      <div className="dl-modal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path
            d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4.5 19.5h15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 id="dl-modal-title" className="dl-modal-title">
        Download Katbox App
      </h3>

      <p className="dl-modal-text">
        You’re about to download the Katbox Android APK
        directly to your device. Continue?
      </p>

      <div className="dl-modal-meta">
        <span className="dl-modal-pill">Android • .apk</span>
        <span className="dl-modal-pill">
          From official Katbox release
        </span>
      </div>

      <div className="dl-modal-actions">
        <button
          type="button"
          className="dl-modal-btn dl-modal-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="dl-modal-btn dl-modal-confirm"
          onClick={onConfirm}
          autoFocus
        >
          OK, Download
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </ModalShell>
  );
}

/* =========================
   Coming Soon Modal (Google Play)
========================= */
function ComingSoonModal({ open, onClose }) {
  return (
    <ModalShell
      open={open}
      onClose={onClose}
      labelledBy="cs-modal-title"
    >
      <div className="dl-modal-icon cs-modal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path
            d="M12 8v5m0 3.5h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 id="cs-modal-title" className="dl-modal-title">
        Coming Soon to Google Play
      </h3>

      <p className="dl-modal-text">
        Katbox for Android is on its way to the Google
        Play Store. In the meantime, you can install the
        app right now using the Android APK below.
      </p>

      <div className="dl-modal-meta">
        <span className="dl-modal-pill">Launching very soon</span>
        <span className="dl-modal-pill">APK available now</span>
      </div>

      <div className="dl-modal-actions">
        <button
          type="button"
          className="dl-modal-btn dl-modal-cancel"
          onClick={onClose}
        >
          Close
        </button>

        <button
          type="button"
          className="dl-modal-btn dl-modal-confirm"
          onClick={onClose}
          autoFocus
        >
          Got it
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </ModalShell>
  );
}

/* =========================
   Join Success Card (premium)
   Shown after a successful join submission.
========================= */
function JoinSuccessCard({ role, firstName, onReset }) {
  const isChef = role === 'chef';

  const title = isChef
    ? `Thank you, ${firstName}!`
    : `Welcome to Katbox, ${firstName}!`;

  const subtitle = isChef
    ? 'Our Katbox chef team will call you shortly to guide you through the onboarding.'
    : 'Our Katbox team will call you shortly to confirm your details and get you started.';

  const eyebrow = isChef ? 'CHEF APPLICATION RECEIVED' : 'YOU’RE ON THE LIST';

  return (
    <div className="join-success" role="status" aria-live="polite">
      <div className="join-success-glow" aria-hidden="true" />

      <div className="join-success-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className="join-success-eyebrow">{eyebrow}</span>

      <h3 className="join-success-title">{title}</h3>

      <p className="join-success-subtitle">{subtitle}</p>

      <div className="join-success-meta">
        <span className="join-success-pill">
          <span aria-hidden="true">📞</span>
          Our Katbox team will call you
        </span>
        <span className="join-success-pill">
          <span aria-hidden="true">⚡</span>
          Usually within 24 hours
        </span>
      </div>

      <button
        type="button"
        className="join-success-reset"
        onClick={onReset}
      >
        Submit another response
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState('');

  const [joinRole, setJoinRole] = useState('customer');
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    about: '',
  });
  const [joinNotice, setJoinNotice] = useState('');
  const [joinSuccess, setJoinSuccess] = useState(null);
  // joinSuccess shape: { role: 'chef' | 'customer', firstName: string }

  const [highlightGetApp, setHighlightGetApp] = useState(false);
  const getAppRef = useRef(null);

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const submitEmail = async (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) return;

    setNotice('Saving your email...');

    try {
      const apiBaseUrl = getApiBaseUrl();

      const response = await fetch(
        `${apiBaseUrl}/api/messages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'newsletter',
            email: normalizedEmail,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.message ||
            'Unable to save your email. Please try again.'
        );
      }

      setNotice(
        'Thanks! We’ll keep you posted about the Katbox launch.'
      );
      setEmail('');
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setNotice(
        error?.message ||
          'Unable to save your email. Please try again.'
      );
    }
  };

  const updateJoin = (field) => (e) =>
    setJoinForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

  const submitJoin = async (e) => {
    e.preventDefault();

    const name = joinForm.name.trim();
    const email = joinForm.email.trim().toLowerCase();
    const phone = joinForm.phone.trim();
    const city = joinForm.city.trim();
    const about = joinForm.about.trim();

    if (!name || !email || !phone || !city) {
      setJoinNotice(
        'Please fill in your name, email, phone and city.'
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setJoinNotice('Please enter a valid email address.');
      return;
    }

    setJoinNotice('Submitting your details...');
    setJoinSuccess(null);

    try {
      const apiBaseUrl = getApiBaseUrl();

      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => {
        controller.abort();
      }, 15000);

      let response;

      try {
        response = await fetch(
          `${apiBaseUrl}/api/messages`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              type: 'join',
              role: joinRole,
              name,
              email,
              phone,
              city,
              about,
            }),
            signal: controller.signal,
          }
        );
      } finally {
        window.clearTimeout(timeoutId);
      }

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data?.success !== true) {
        throw new Error(
          data?.message ||
            'Unable to submit your details. Please try again.'
        );
      }

      // ✅ PREMIUM SUCCESS STATE (replaces old "Welcome aboard" text)
      const firstName = name.split(' ')[0] || 'friend';

      setJoinNotice('');
      setJoinSuccess({
        role: joinRole,
        firstName,
      });

      setJoinForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        about: '',
      });
    } catch (error) {
      console.error('Join form submission error:', error);

      const message =
        error?.name === 'AbortError'
          ? 'The server took too long to respond. Please try again.'
          : error?.message ||
            'Unable to submit your details. Please try again.';

      setJoinNotice(message);
    }
  };

  const resetJoinSuccess = () => {
    setJoinSuccess(null);
    setJoinNotice('');
  };

  const goToJoinAs = (role) => {
    setJoinRole(role);
    setJoinNotice('');
    setJoinSuccess(null);
    const el = document.getElementById('join');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderNow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHighlightGetApp(true);
    window.clearTimeout(handleOrderNow._t);
    handleOrderNow._t = window.setTimeout(() => {
      setHighlightGetApp(false);
    }, 4200);
  };

  /* =========================================================
     DOWNLOAD FLOW
     Any download trigger opens the confirmation modal.
     The actual download happens when user clicks OK.
     ========================================================= */
  const openDownloadModal = (e) => {
    if (e) e.preventDefault();

    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setShowDownloadModal(true);
  };

  const closeDownloadModal = () => {
    setShowDownloadModal(false);
  };

  const confirmDownload = () => {
    setShowDownloadModal(false);

    if (!apkUrl || apkUrl.includes('yourdomain')) {
      alert('APK download link coming soon! Please check back shortly.');
      return;
    }

    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'katbox.apk');
    link.setAttribute('rel', 'noopener noreferrer');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlayStore = (e) => {
    e.preventDefault();

    if (!PLAY_STORE_LIVE) {
      setShowComingSoonModal(true);
      return;
    }

    if (!googlePlayUrl || googlePlayUrl.includes('yourdomain')) {
      setShowComingSoonModal(true);
      return;
    }

    window.open(googlePlayUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="site">

      <header className="navbar">

        <a
          className="brand"
          href="#top"
          aria-label="Katbox home"
        >
          <img
            src={katboxLogo}
            alt="Katbox"
            className="brand-logo"
            draggable="false"
          />
        </a>

        <nav className="nav-links">
          <a href="#services">Explore</a>
          <a href="#how-it-works">How it works</a>
          <a href="#chefs">For Chefs</a>
          <a href="#join">Join</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">

          <a
            className={
              highlightGetApp
                ? 'text-button get-app-highlight'
                : 'text-button'
            }
            href="#download"
            onClick={openDownloadModal}
            ref={getAppRef}
            aria-label="Download Katbox Android APK"
          >
            Get the app
          </a>

          <a
            className="primary-button small desktop-only"
            href="#join"
          >
            Join Katbox <span>→</span>
          </a>

        </div>

      </header>

      <main id="top">

        <section className="hero">

          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="pulse"></span>
              HOMEMADE FOOD • LOCAL LOVE
            </div>

            <h1>
              Food that feels
              <br />
              <em>like home.</em>
            </h1>

            <p>
              Katbox is a homegrown food platform that connects
              you with verified local home chefs, tiffin makers
              and small kitchens around you. Order homemade
              favourites, wholesome daily meal boxes, festive
              catering and chef-made specials — all crafted in
              real kitchens with real ingredients, and delivered
              fresh to your doorstep.
            </p>

            <div className="hero-buttons">

              <a
                className="primary-button"
                href="#services"
              >
                Explore Katbox
                <span>→</span>
              </a>

              <a
                className="ghost-button"
                href="#join"
              >
                Join as Chef or Customer
                <span>↗</span>
              </a>

            </div>

            <div className="hero-trust">

              <div className="avatar-stack">
                <span>🥘</span>
                <span>🍱</span>
                <span>🍪</span>
                <span>👩‍🍳</span>
              </div>

              <div>
                <strong>
                  Made by local food creators
                </strong>

                <small>
                  Fresh • Familiar • Full of flavour
                </small>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <Carousel
              slides={heroSlides}
              variant="hero"
            />

            <div className="carousel-hint">
              <span></span>
              Scroll to explore
            </div>

          </div>

        </section>

        <section className="ticker">
          <div className="ticker-track">

            <div className="ticker-group">
              <span>HOMEMADE FAVOURITES</span>
              <b>✦</b>
              <span>QUICK BITES UNDER 75 MINS</span>
              <b>✦</b>
              <span>DAILY MEAL BOXES</span>
              <b>✦</b>
              <span>CATERING</span>
              <b>✦</b>
              <span>LOCAL CHEFS</span>
              <b>✦</b>
              <span>TRADITIONAL FLAVOURS</span>
              <b>✦</b>
            </div>

            <div className="ticker-group" aria-hidden="true">
              <span>HOMEMADE FAVOURITES</span>
              <b>✦</b>
              <span>QUICK BITES UNDER 75 MINS</span>
              <b>✦</b>
              <span>DAILY MEAL BOXES</span>
              <b>✦</b>
              <span>CATERING</span>
              <b>✦</b>
              <span>LOCAL CHEFS</span>
              <b>✦</b>
              <span>TRADITIONAL FLAVOURS</span>
              <b>✦</b>
            </div>

          </div>
        </section>

        <section className="section about-app" id="about-app">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                ABOUT THE KATBOX APP
              </span>

              <h2>
                One app for every
                <br />
                <em>homemade craving.</em>
              </h2>

            </div>

            <p>
              Katbox brings together home chefs, tiffin
              services, traditional sweet makers and
              small catering kitchens into one warm,
              easy-to-use app — so you can order food
              that actually tastes like it was made at home.
            </p>

          </div>

          <AboutScroller cards={aboutCards} />

        </section>

        <section
          className="section services-section"
          id="services"
        >

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                EXPLORE KATBOX
              </span>

              <h2>
                Something delicious
                <br />
                <em>for every moment.</em>
              </h2>

            </div>

            <p>
              From weekday meal boxes to weekend
              biryani feasts, festive sweets and
              quick bites cooked fresh on order —
              discover food that keeps the homemade
              feeling alive.
            </p>

          </div>

          <ExploreScroller
            services={services}
            onOrderNow={handleOrderNow}
          />

        </section>

        <section
          className="feature-band"
          id="chefs"
        >

          <div className="feature-copy">

            <span className="section-kicker light">
              FOR HOME CHEFS
            </span>

            <h2>
              Your kitchen.
              <br />
              <em>Your earnings.</em>
            </h2>

            <p>
              You already cook delicious food for your
              family, friends and neighbours — so why
              not get paid for it? Katbox gives you a
              full storefront, a stream of hungry
              customers, delivery support, secure
              payments and a dashboard to run your
              kitchen — all from your phone. No
              marketing spend. No commission traps.
              You cook, we handle the rest.
            </p>

            <div className="feature-list chef-list">

              <div>
                <span>₹</span>
                <div>
                  <strong>Earn more per order</strong>
                  <small>
                    Fair payouts, transparent pricing
                    and same-week settlements. You
                    keep the majority of every rupee —
                    no hidden deductions.
                  </small>
                </div>
              </div>

              <div>
                <span>📱</span>
                <div>
                  <strong>Manage everything in one app</strong>
                  <small>
                    Set your menu, prices, prep time
                    and daily capacity. Pause any dish
                    or close your kitchen whenever you
                    want — you’re in full control.
                  </small>
                </div>
              </div>

              <div>
                <span>🚴</span>
                <div>
                  <strong>We handle delivery & support</strong>
                  <small>
                    Assign orders to our delivery
                    partners, track every delivery live
                    and leave customer support to us.
                    You just focus on cooking.
                  </small>
                </div>
              </div>

              <div>
                <span>📈</span>
                <div>
                  <strong>Grow your reputation</strong>
                  <small>
                    Build a chef profile with your story,
                    signature dishes and reviews. Repeat
                    customers come back to you — not to
                    a random restaurant.
                  </small>
                </div>
              </div>

            </div>

            <button
              type="button"
              className="cream-button"
              onClick={() => goToJoinAs('chef')}
            >
              Start cooking & earning
              <span>→</span>
            </button>

          </div>

          <div className="feature-phone">

            <Carousel
              slides={featureSlides}
              variant="feature"
            />

            <div className="carousel-hint light">
              <span></span>
              Your chef dashboard
            </div>

            <div className="phone-glow"></div>

          </div>

        </section>

        <section
          className="section how-section"
          id="how-it-works"
        >

          <div className="section-heading centered">

            <div>

              <span className="section-kicker">
                HOW KATBOX WORKS
              </span>

              <h2>
                From browsing
                <em> to doorstep.</em>
              </h2>

              <p className="centered-sub">
                Seven easy steps between you and a warm
                homemade meal — from the moment you open
                the app to the moment you reorder your
                favourite dish.
              </p>

            </div>

          </div>

          <HowItWorksScroller steps={howSteps} />

        </section>

        <section className="chef-cta">

          <div>

            <span className="section-kicker">
              ARE YOU A HOME CHEF?
            </span>

            <h2>
              Turn your recipes into
              <br />
              <em>
                something people remember.
              </em>
            </h2>

            <p>
              If you already cook for family, neighbours
              or friends — you already have a business.
              Katbox gives you a storefront, a customer
              base, delivery support and a fair payout,
              so you can focus on the food you love
              making. No commissions that eat your
              margins, no marketing spend, no surprises.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={() => goToJoinAs('chef')}
            >
              Become a Katbox chef
              <span>→</span>
            </button>

          </div>

          <div className="leaf-art">
            ✦
          </div>

        </section>

        <section className="section join-section" id="join">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                JOIN KATBOX
              </span>

              <h2>
                Be part of the
                <br />
                <em>homemade movement.</em>
              </h2>

            </div>

            <p>
              Whether you want to cook and earn, or
              order and enjoy — Katbox is for you.
              Fill in your details below and pick your
              role to get started. We’ll reach out
              as soon as we launch near you.
            </p>

          </div>

          <div className="join-wrap">

            <div className="join-role-tabs">

              <button
                type="button"
                className={
                  joinRole === 'customer'
                    ? 'role-tab active'
                    : 'role-tab'
                }
                onClick={() => {
                  setJoinRole('customer');
                  setJoinNotice('');
                  setJoinSuccess(null);
                }}
              >
                <span className="role-emoji">🍽️</span>
                <span>
                  <strong>I’m a Customer</strong>
                  <small>I want to order homemade food</small>
                </span>
              </button>

              <button
                type="button"
                className={
                  joinRole === 'chef'
                    ? 'role-tab active'
                    : 'role-tab'
                }
                onClick={() => {
                  setJoinRole('chef');
                  setJoinNotice('');
                  setJoinSuccess(null);
                }}
              >
                <span className="role-emoji">👩‍🍳</span>
                <span>
                  <strong>I’m a Home Chef</strong>
                  <small>I want to cook & earn with Katbox</small>
                </span>
              </button>

            </div>

            {joinSuccess ? (
              <JoinSuccessCard
                role={joinSuccess.role}
                firstName={joinSuccess.firstName}
                onReset={resetJoinSuccess}
              />
            ) : (
              <form className="join-form" onSubmit={submitJoin}>

                <div className="join-row">

                  <label className="join-field">
                    <span>Full name</span>
                    <input
                      type="text"
                      value={joinForm.name}
                      onChange={updateJoin('name')}
                      placeholder={
                        joinRole === 'chef'
                          ? 'e.g. Lakshmi Reddy'
                          : 'e.g. Aarav Sharma'
                      }
                      required
                    />
                  </label>

                  <label className="join-field">
                    <span>Email address</span>
                    <input
                      type="email"
                      value={joinForm.email}
                      onChange={updateJoin('email')}
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                </div>

                <div className="join-row">

                  <label className="join-field">
                    <span>Phone number</span>
                    <input
                      type="tel"
                      value={joinForm.phone}
                      onChange={updateJoin('phone')}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </label>

                  <label className="join-field">
                    <span>City / Area</span>
                    <input
                      type="text"
                      value={joinForm.city}
                      onChange={updateJoin('city')}
                      placeholder={
                        joinRole === 'chef'
                          ? 'e.g. Banjara Hills, Hyderabad'
                          : 'e.g. Gachibowli, Hyderabad'
                      }
                      required
                    />
                  </label>

                </div>

                <label className="join-field">
                  <span>
                    {joinRole === 'chef'
                      ? 'Tell us about your cooking'
                      : 'Anything we should know?'}
                  </span>
                  <textarea
                    rows="4"
                    value={joinForm.about}
                    onChange={updateJoin('about')}
                    placeholder={
                      joinRole === 'chef'
                        ? 'What do you love to cook? Any signature dishes, cuisines or specialities?'
                        : 'Dietary preferences, favourite cuisines or delivery notes?'
                    }
                  />
                </label>

                <button
                  className="primary-button join-submit"
                  type="submit"
                >
                  {joinRole === 'chef'
                    ? 'Apply to cook with Katbox'
                    : 'Join the Katbox waitlist'}
                  <span>→</span>
                </button>

                {joinNotice && (
                  <p className="join-notice">
                    {joinNotice}
                  </p>
                )}

                <p className="join-disclaimer">
                  By submitting, you agree to be contacted
                  by the Katbox team about launch updates
                  and onboarding. We never share your
                  details with third parties.
                </p>

              </form>
            )}

          </div>

        </section>

        <section
          className="faq section"
          id="about"
        >

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                GOOD TO KNOW
              </span>

              <h2>
                Questions,
                <br />
                <em>answered.</em>
              </h2>

            </div>

            <p>
              Everything you need to know before
              your first Katbox order — or before
              you sign up as a home chef.
            </p>

          </div>

          <div className="faq-list">

            {[
              [
                'What exactly is Katbox?',
                'Katbox is a hyperlocal homemade food platform. It connects customers with verified home chefs, tiffin makers, sweet shops and small catering kitchens. You can order individual meals, subscribe to daily/weekly meal boxes or book catering for events — all cooked fresh in real home kitchens and delivered to your door.',
              ],
              [
                'What are Quick Bites?',
                'Quick Bites are freshly cooked meals and snacks prepared only after you place your order — never pre-made, never reheated. Cooking plus delivery takes under 75 minutes, so you get warm, freshly-made food fast. Perfect for sudden cravings, working lunches and evening snacks.',
              ],
              [
                'Where is Katbox available?',
                'Katbox is launching first in Hyderabad, starting with a few neighbourhoods and expanding block-by-block. Join our waitlist with your area name and we’ll notify you the moment Katbox goes live in your locality.',
              ],
              [
                'How are chefs verified?',
                'Every home chef goes through a KYC check, a kitchen hygiene review and a taste-test before going live. Chefs also agree to our food safety and packaging guidelines. Customer reviews and ratings are shown on every chef’s profile so you always know who is cooking for you.',
              ],
              [
                'Can I become a Katbox chef?',
                'Yes! If you already cook for family, friends or neighbours, you can apply through the Join form above. We’ll help you set up your menu, pricing, photos and delivery. Chefs earn a fair share per order with transparent payouts and no hidden deductions.',
              ],
              [
                'How do I pay and track my order?',
                'Pay securely inside the app via UPI, cards or wallets. You’ll get live order tracking from the moment the chef starts cooking, plus notifications at every step — confirmed, cooking, packed and out for delivery.',
              ],
              [
                'What if I have allergies or dietary needs?',
                'You can add notes for spice level, allergies, Jain/vegan preferences or portion sizes when placing an order. Chefs see these notes before cooking, and you can also message them directly through the app for special requests.',
              ],
              [
                'How is Katbox different from other food apps?',
                'Katbox focuses only on homemade, small-batch food from real home kitchens — not restaurant chains. That means fresher ingredients, more regional and traditional dishes, fairer prices for customers and better earnings for home chefs.',
              ],
            ].map(([q, a], i) => (

              <div
                className={
                  activeFaq === i
                    ? 'faq-item active'
                    : 'faq-item'
                }
                key={q}
              >

                <button
                  onClick={() =>
                    setActiveFaq(
                      activeFaq === i
                        ? null
                        : i
                    )
                  }
                >

                  <span>
                    {q}
                  </span>

                  <b>
                    {activeFaq === i
                      ? '−'
                      : '+'}
                  </b>

                </button>

                {activeFaq === i && (
                  <p>
                    {a}
                  </p>
                )}

              </div>

            ))}

          </div>

        </section>

        <section
          className="download"
          id="download"
        >

          <div className="download-brand">

            <img
              src={downloadSplash}
              alt="Katbox"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

          </div>

          <div className="download-copy">

            <span className="section-kicker light">
              KATBOX APP
            </span>

            <h2>
              Keep Katbox
              <br />
              <em>in your pocket.</em>
            </h2>

            <p>
              The Katbox app is where everything lives —
              discovering chefs, ordering homemade food,
              tracking delivery, managing meal box
              subscriptions, chatting with your chef and
              reordering your favourites in a single tap.
              Built clean, fast and warm — like a good
              home-cooked meal should feel.
            </p>

            <div className="download-buttons">

              <a
                className="store-button"
                href={googlePlayUrl}
                onClick={handlePlayStore}
                aria-label="Get Katbox on Google Play"
              >
                <span>▶</span>
                <div>
                  <small>
                    Available soon on
                  </small>
                  <strong>
                    Google Play
                  </strong>
                </div>
              </a>

              <button
                type="button"
                className="store-button outline"
                onClick={openDownloadModal}
                aria-label="Download Katbox Android APK"
              >
                <span>⌁</span>
                <div>
                  <small>
                    Katbox
                  </small>
                  <strong>
                    Android APK
                  </strong>
                </div>
              </button>

            </div>

            <small className="launch-note">
              Launch access will be published here.
            </small>

          </div>

        </section>

        <section className="newsletter">

          <div>

            <span className="section-kicker">
              STAY IN THE LOOP
            </span>

            <h2>
              Good food is coming.
            </h2>

          </div>

          <form onSubmit={submitEmail}>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Notify me
              <span>→</span>
            </button>

          </form>

          {notice && (
            <p className="notice">
              {notice}
            </p>
          )}

        </section>

      </main>

      <footer>

        <div className="footer-main">

          <div className="footer-brand">

            <a
              className="brand footer-logo"
              href="#top"
            >
              <img
                src={katboxLogo}
                alt="Katbox"
                className="brand-logo footer-logo-img"
                draggable="false"
              />
            </a>

            <p>
              Homemade flavours.
              <br />
              Shared with love.
            </p>

          </div>

          <div className="footer-links">

            <div>

              <strong>
                Explore
              </strong>

              <a href="#services">
                Homemade Foods
              </a>

              <a href="#services">
                Meal Boxes
              </a>

              <a href="#services">
                Catering
              </a>

              <a href="#services">
                Quick Bites
              </a>

            </div>

            <div>

              <strong>
                Katbox
              </strong>

              <a href="#about-app">
                About the app
              </a>

              <a href="#how-it-works">
                How it works
              </a>

              <a href="#join">
                Become a Chef
              </a>

              {/* ===== FOOTER DOWNLOAD — opens modal, then downloads APK ===== */}
              <a
                href="#download"
                onClick={openDownloadModal}
              >
                Download App
              </a>

            </div>

            <div>

              <strong>
                Legal
              </strong>

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms & Conditions
              </a>

              <a href="#">
                Refund Policy
              </a>

              <a href="#">
                Contact
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Katbox. Made with ♥ in Hyderabad.
          </span>

          <span>
            Freshly imagined. Locally loved.
          </span>

        </div>

      </footer>

      <DownloadModal
        open={showDownloadModal}
        onCancel={closeDownloadModal}
        onConfirm={confirmDownload}
      />

      <ComingSoonModal
        open={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);
