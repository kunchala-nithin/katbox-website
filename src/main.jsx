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

/* =========================================================
   LEGAL PAGES
   ========================================================= */
const LEGAL_LAST_UPDATED = '6 October 2026';

const KATBOX_LEGAL = {
  enterprise: 'KATBOX',
  owner: 'Kunchala Sree Nithin',
  role: 'Proprietor',
  udyam: 'UDYAM-TS-20-0219090',
  businessType: 'Proprietary / Sole Proprietorship',
  enterpriseType: 'Micro Enterprise',
  incorporationDate: '22 September 2026',
  address: 'Flat/Door No. 401, Sri Sai Nilayam, Block 1, Vinayaka Nagar, Road No. 1, Nizampet Village, Hyderabad, Telangana – 500090, India',
  email: 'katbox.in@gmail.com',
  phone: '+91 9133450555',
};

const legalContent = {
  privacy: {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    title: 'Your information deserves careful handling.',
    intro:
      'This Privacy Policy explains how KATBOX, operated as a sole proprietorship by Kunchala Sree Nithin, collects, uses, shares, stores and protects personal information when you use the Katbox website, mobile application, marketplace and related services.',
    sections: [
      {
        title: '1. Data Fiduciary / Privacy Contact',
        body: [
          `For privacy and personal-data questions, the relevant contact is ${KATBOX_LEGAL.owner}, Proprietor of ${KATBOX_LEGAL.enterprise}. Katbox is currently a proprietary micro enterprise registered under Udyam Registration Number ${KATBOX_LEGAL.udyam}. The Udyam registration records Katbox as a proprietary enterprise and identifies its official enterprise address and contact details.`,
          `Privacy contact: ${KATBOX_LEGAL.email} | ${KATBOX_LEGAL.phone}.`,
          'This policy applies to the Katbox website, mobile application and services together. It does not replace the privacy notices of independent third-party services that process information directly under their own terms.'
        ]
      },
      {
        title: '2. Information we collect',
        body: [
          'Customer account information may include your name, mobile number and email address. If you use Google sign-in through Clerk, authentication information is processed through that authentication service; Katbox does not need to collect a separate Google password.',
          'Order and service information may include selected chef, food items, quantities, order status, delivery address, delivery instructions, special instructions, order history, cancellation/refund information and communications relating to the order.',
          'Payment and verification information may include payment status, transaction reference, UTR/reference number and other limited payment metadata needed to verify a payment. During Katbox’s initial testing phase, customers may pay through a UPI flow and submit a UTR/reference number for manual admin verification. Katbox does not intentionally collect or store full card numbers, CVV values, banking passwords or UPI PINs.',
          'Chef onboarding information may include name, mobile number, email, address, identity/KYC documents, FSSAI registration or licence information, bank-account details for settlements, menu information and food/business photographs.',
          'Information you voluntarily send to Katbox may include support emails, complaint evidence, photographs, reviews, ratings, feedback and other information needed to resolve an issue.',
          'Katbox currently states that it does not intentionally collect device information, profile photographs or a separate copy of Google-account profile information as a routine account-data field. Technical logs may nevertheless be generated by hosting, security or third-party infrastructure as described in their own policies.'
        ]
      },
      {
        title: '3. How we use personal information',
        body: [
          'We use information to create and authenticate accounts; accept, verify and fulfil orders; connect customers with chefs; coordinate delivery; process cancellations and refunds; verify UPI/transaction references during the testing phase; calculate chef settlements and marketplace commissions; provide customer support; investigate complaints; maintain food-safety and marketplace records; prevent fraud and misuse; protect the security of the platform; improve our services; and comply with legal or regulatory obligations.',
          'We may also use information to send service messages such as order confirmations, delivery updates, account notices and support communications. Promotional communications will be handled in accordance with applicable law and the choices available to you.'
        ]
      },
      {
        title: '4. Legal bases, consent and applicable data-protection law',
        body: [
          'Katbox intends to process personal data only for specified and reasonably necessary purposes, including providing requested services, complying with legal obligations, protecting the platform and acting on permissions or consent where required. Where applicable data-protection law gives you rights relating to consent, access, correction, erasure, grievance redressal or withdrawal, Katbox will handle those requests subject to the law and any information that must lawfully be retained.',
          'Katbox will update its privacy practices as India’s data-protection framework, including the Digital Personal Data Protection Act, 2023 and applicable rules or commencement provisions, becomes applicable to the relevant processing.'
        ]
      },
      {
        title: '5. When information is shared',
        body: [
          'Katbox may share only the information reasonably needed for a service with the relevant home chef, food business, delivery personnel or delivery partner, payment/verification provider, hosting and technology provider, customer-support provider, professional adviser or other service provider acting for Katbox.',
          'For example, a chef may receive the customer name, delivery information, order details and special instructions needed to prepare and fulfil an order. Delivery personnel may receive the delivery information needed to complete the delivery.',
          'Information may also be disclosed where required by law, court order, governmental request, regulatory process, fraud investigation or to protect users, Katbox or the public from unlawful activity or security threats.',
          'Katbox does not sell personal information to third parties for their independent advertising purposes.'
        ]
      },
      {
        title: '6. Third-party technology and service providers',
        body: [
          'Katbox’s technology stack may include MongoDB for database services, Cloudinary for media storage/delivery, Render for hosting, Clerk for authentication including Google sign-in, Expo-related mobile technology, and other infrastructure or monitoring services used to operate the application.',
          'Katbox may introduce Cashfree or another payment processor for online payments in the future. When a third-party payment provider is used, payment information may be processed directly by that provider under its own terms and privacy policy. Katbox does not control independent third-party privacy practices.'
        ]
      },
      {
        title: '7. Food-safety and seller information',
        body: [
          'Katbox may collect and display food-business information such as a chef’s FSSAI registration/licence details and other information required for lawful marketplace listing. Chefs are responsible for providing accurate, current and valid regulatory information and for complying with applicable food-safety requirements.',
          'Where food-safety information is required to be displayed to customers, Katbox may make it visible on the relevant chef or food listing.'
        ]
      },
      {
        title: '8. Cookies, local storage and similar technologies',
        body: [
          'The website or app may use essential storage, cookies, session mechanisms and similar technologies needed for authentication, navigation, security and basic functionality. If non-essential analytics, advertising or tracking technologies are introduced, Katbox will provide the notices and choices required by applicable law.'
        ]
      },
      {
        title: '9. Data retention',
        body: [
          'We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide the service, maintain transaction and settlement records, resolve disputes, investigate fraud or food-safety complaints, enforce agreements and comply with legal or regulatory requirements.',
          'When information is no longer required and there is no legal reason to retain it, Katbox may delete, anonymise or securely dispose of it, subject to technical backups and retention requirements of service providers.'
        ]
      },
      {
        title: '10. Security and payment safety',
        body: [
          'Katbox uses reasonable technical and organisational safeguards appropriate to its stage and the nature of the information processed. However, no website, mobile application, database or internet transmission can be guaranteed to be completely secure.',
          'Katbox will never ask a customer to disclose a UPI PIN, card CVV, banking password or authentication secret by email or support message. Customers should not share such credentials with Katbox staff, chefs or delivery personnel.'
        ]
      },
      {
        title: '11. Your privacy requests and grievance process',
        body: [
          'Depending on applicable law, you may contact Katbox to ask about personal information associated with your account, request correction of inaccurate information, request deletion where legally available, raise a grievance, or exercise other applicable data-protection rights.',
          `Send requests to ${KATBOX_LEGAL.email}. To protect accounts, Katbox may ask for reasonable information to verify that the request is being made by the relevant person. Legal, accounting, transaction, fraud-prevention and other records may need to be retained where required or permitted by law.`,
          `General customer/grievance contact: ${KATBOX_LEGAL.owner}, Proprietor, Katbox | ${KATBOX_LEGAL.email} | ${KATBOX_LEGAL.phone}.`
        ]
      },
      {
        title: '12. Children',
        body: [
          'Katbox does not intentionally design its services to collect personal information from children in circumstances where a legally required consent is unavailable. If you believe a child has provided personal information improperly, contact us so that we can review the information and take appropriate action under applicable law.'
        ]
      },
      {
        title: '13. International processing and service-provider locations',
        body: [
          'Some technology or infrastructure providers used by Katbox may process or store information in locations outside Telangana or India. Where such processing occurs, Katbox will take the steps required by applicable law and the relevant contractual or technical arrangements.'
        ]
      },
      {
        title: '14. Changes to this policy',
        body: [
          'Katbox may update this policy when its services, technology, business model or legal obligations change. Material changes will be reflected by updating this page and its last-updated date. Continued use after an updated policy takes effect will be subject to the updated policy to the extent permitted by law.'
        ]
      }
    ]
  },
  terms: {
    path: '/terms-and-conditions',
    label: 'Terms & Conditions',
    title: 'The rules behind the Katbox marketplace.',
    intro:
      'These Terms & Conditions apply to the Katbox website, mobile application and related marketplace services. They are designed for Katbox’s current early-stage marketplace model and may be supplemented by order-specific terms.',
    sections: [
      {
        title: '1. Business identity and scope',
        body: [
          `Katbox is the trading name of KATBOX, currently operated as a proprietary/sole-proprietorship enterprise by ${KATBOX_LEGAL.owner}. Katbox has Udyam Registration Number ${KATBOX_LEGAL.udyam} and is currently recorded as a Micro Enterprise. Its Udyam certificate identifies the enterprise as a proprietary organisation and records its official business address in Hyderabad, Telangana.`,
          'Katbox operates a digital marketplace that connects customers with independent home chefs and food businesses. Except where expressly stated otherwise for a specific service, Katbox does not itself prepare the food.'
        ]
      },
      {
        title: '2. Acceptance and eligibility',
        body: [
          'By accessing or using Katbox, you agree to these Terms, the Privacy Policy and the Refund & Cancellation Policy. If you do not agree, do not use the service.',
          'Katbox may be used by customers of any age subject to applicable law. Where a user is not legally capable of entering a binding contract, use of paid services must be authorised or supervised by a parent or legal guardian where required by law.'
        ]
      },
      {
        title: '3. Katbox is a marketplace facilitator',
        body: [
          'Katbox provides technology and marketplace services for discovering chefs, menus and food-related services, submitting orders or bookings, communicating order information and coordinating fulfilment. The independent chef remains responsible for the food it prepares, its ingredients, preparation, packaging, food-safety compliance, listing accuracy and other seller obligations.',
          'Nothing in these Terms is intended to exclude consumer rights or remedies that cannot lawfully be excluded.'
        ]
      },
      {
        title: '4. Chef eligibility and FSSAI compliance',
        body: [
          'Katbox requires chefs to provide onboarding information, including identity information, contact details, address, FSSAI information, bank details, menu information and food photographs. Katbox may verify submitted information before activation and may request updated documents at any time.',
          'A chef must maintain any FSSAI registration/licence and other approvals applicable to the chef’s activity. A chef must not list or sell food through Katbox while a required licence/registration is expired, suspended, cancelled or otherwise invalid.',
          'Katbox may suspend or delist a chef or food item where food-safety, regulatory, customer-safety or authenticity concerns arise.'
        ]
      },
      {
        title: '5. Listings, photos, menus and availability',
        body: [
          'Chefs are responsible for accurate descriptions, prices, portions, ingredients, dietary/allergen information, preparation times, availability and photographs supplied to Katbox. Katbox may correct formatting, remove misleading content or require changes before or after publication.',
          'Food photographs are intended to represent the product but actual appearance, portioning and packaging may vary. A listing must not use misleading images or claims.'
        ]
      },
      {
        title: '6. Orders and acceptance',
        body: [
          'Submitting an order is a request to purchase. An order becomes accepted when Katbox and/or the relevant chef confirms it through the platform or the applicable order workflow. Katbox may refuse, cancel or delay an order for reasons including unavailability, payment verification failure, suspected fraud, food-safety concerns, operational limitations or legal requirements.',
          'For the current testing flow, customers may be asked to pay using the displayed UPI method and enter the UTR/reference number. The order may remain pending until an administrator verifies the payment. Katbox may reject a UTR that cannot be reasonably verified.'
        ]
      },
      {
        title: '7. Quick Bites and delivery estimates',
        body: [
          'Quick Bites are designed around fresh preparation after ordering. Katbox currently uses a target of cooking and delivery within approximately 75 minutes for the Quick Bites service. The actual delivery time may vary because of preparation time, traffic, weather, customer availability, delivery-partner availability and other operational conditions.',
          'Any delivery time shown in the app or website is an estimate unless Katbox expressly states that a particular time is guaranteed. A displayed delivery slot does not create a promise that cannot reasonably be affected by events outside Katbox’s control.'
        ]
      },
      {
        title: '8. Meal boxes, homemade foods and catering',
        body: [
          'Meal boxes may operate on single-meal, weekly, flexible-day or other plan structures shown at the time of purchase. The exact plan, schedule, price and cancellation terms displayed at checkout form part of the order.',
          'Homemade-food orders, including items such as pickles, podis, pindi vantalu and sweets, may have different preparation, shelf-life and dispatch requirements. Customers should follow storage and consumption instructions supplied by the chef.',
          'Catering and large-event orders require advance booking, advance payment and chef confirmation. The booking may have a specific cancellation deadline and service terms shown or agreed before payment. If the booking-specific terms differ from the ordinary food-order rules, the booking-specific terms apply to that booking to the extent permitted by law.'
        ]
      },
      {
        title: '9. Hire-a-Chef',
        body: [
          'Where Katbox offers a Hire-a-Chef service, Katbox may facilitate the customer’s request, match or introduce a chef, coordinate booking information and facilitate payment through Katbox. The chef remains responsible for the actual cooking/service obligations agreed for the booking. The booking may have additional service-specific terms, timing, cancellation rules and safety requirements.'
        ]
      },
      {
        title: '10. Prices, delivery charges and taxes',
        body: [
          'Prices and applicable delivery/service charges are shown before an order is confirmed. Delivery charges may vary based on distance, service type, availability and other operational factors and will be disclosed where applicable.',
          `Katbox is currently not GST registered according to the business information provided for this website. This statement is not a representation that GST or any other tax can never apply. If Katbox becomes registered or a tax becomes applicable to a particular transaction, the applicable tax will be charged or accounted for as required by law and disclosed where required.`,
          'Customers are responsible for reviewing the final order amount before confirming payment.'
        ]
      },
      {
        title: '11. Chef commission and promotional commission-free orders',
        body: [
          'Katbox currently provides a commission incentive for newly joined chefs. The first three orders in a chef’s own chronological order sequence are commission-free at 0%.',
          'After the first three orders, the current pattern is: orders #4–#7 carry an 18% commission; order #8 is commission-free; orders #9–#12 carry an 18% commission; order #13 is commission-free; orders #14–#17 carry an 18% commission; order #18 is commission-free; and the pattern continues so that, after the first three free orders, every fifth order in the chef’s sequence is commission-free and the other orders carry an 18% commission, unless Katbox announces a different commercial offer.',
          'The chef’s applicable delivery-related charges and any other agreed marketplace charges are handled according to the order and settlement record. The detailed settlement calculation may be shown to the chef in the applicable dashboard or settlement communication.'
        ]
      },
      {
        title: '12. Payments and future payment processors',
        body: [
          'Katbox currently uses a manual UPI/UTR verification workflow for its initial testing stage. Katbox may later integrate Cashfree or another payment processor for digital payments. When a payment processor is used, the processor’s own terms, privacy policy and payment rules also apply.',
          'Customers must not submit false UTRs, fraudulent payment screenshots, unauthorised payment claims or another person’s payment information. Katbox may suspend an account and investigate suspected payment fraud.'
        ]
      },
      {
        title: '13. Delivery',
        body: [
          'Delivery may be performed by Katbox personnel and/or independent third-party delivery partners. Customers must provide a correct address, reachable phone number and reasonable access instructions.',
          'Where delivery cannot be completed because the customer supplied an incorrect address, is unavailable, refuses a valid order or otherwise prevents reasonable delivery, refund eligibility may be affected as described in the Refund & Cancellation Policy.'
        ]
      },
      {
        title: '14. Food safety, allergens and customer responsibility',
        body: [
          'Customers must review available ingredient, allergen, dietary and preparation information and communicate relevant requirements before ordering. Katbox cannot guarantee an allergen-free environment unless a specific listing expressly makes such a representation and the chef can substantiate it.',
          'Customers should follow storage, reheating and consumption instructions. Food should not be consumed when its packaging or condition reasonably indicates contamination or unsafe handling. Food-safety concerns should be reported immediately.'
        ]
      },
      {
        title: '15. Cancellation and refunds',
        body: [
          'Before a chef accepts an order, a customer may generally request cancellation for a full eligible refund. After chef acceptance but before preparation begins, cancellation is permitted under the applicable order workflow. Once food preparation has started, cancellation generally does not qualify for a refund because perishable ingredients, labour and preparation have been committed, subject to applicable law and exceptional resolution by Katbox.',
          'If Katbox cannot arrange delivery and the order cannot reasonably be fulfilled, Katbox intends to provide a full refund of the eligible amount paid for that order. If a chef cancels an accepted order, the customer will generally receive a full refund of the eligible amount paid.'
        ]
      },
      {
        title: '16. Complaints and evidence',
        body: [
          'For missing, incorrect, damaged or quality-related issues, Katbox may ask the customer to provide photographs or video evidence by email, together with the order ID and relevant details. Katbox and the chef may jointly review the evidence before deciding on a replacement, partial refund, full refund, credit or other resolution.',
          'Food-safety complaints may result in the chef being temporarily suspended, the listing being taken offline, evidence being requested, an investigation being conducted, FSSAI documentation being reviewed, and/or the matter being escalated where appropriate.'
        ]
      },
      {
        title: '17. Promotions, coupons and credits',
        body: [
          'Coupons, referral benefits, promotional credits and other offers may have specific eligibility, expiry and usage conditions. Unless required by law or expressly stated otherwise, promotional credits are not refundable, transferable or exchangeable for cash.',
          'Katbox may cancel or reverse a promotion where it was obtained through abuse, fraud, multiple accounts or a technical error.'
        ]
      },
      {
        title: '18. Customer reviews and user content',
        body: [
          'Customers may be able to submit ratings, reviews, photographs or other content. Content must be truthful, relevant, lawful and based on a genuine experience.',
          'Katbox may remove or restrict content that is fraudulent, abusive, threatening, defamatory, discriminatory, unlawful, misleading, spam, unrelated to the service, or otherwise harmful to users or the platform. Katbox does not promise that every review is independently verified.'
        ]
      },
      {
        title: '19. Intellectual property and chef content licence',
        body: [
          'Katbox’s website, application, branding, logos, software, design, text and original materials are owned by or licensed to Katbox and may not be copied, modified, distributed or commercially exploited without permission.',
          'A chef grants Katbox a non-exclusive, worldwide, royalty-free licence, for the duration of the chef’s participation and a reasonable period thereafter for archival/marketing purposes, to host, reproduce, display, crop, resize and otherwise use the chef’s submitted business name, logo, food photographs, menu descriptions and related listing content for operating, promoting and marketing Katbox, including on the Katbox app, website, social media and advertising. Chefs do not grant rights in videos because Katbox’s current chef onboarding does not require chef-uploaded videos.'
        ]
      },
      {
        title: '20. Prohibited conduct',
        body: [
          'Users must not misuse the platform, create fraudulent accounts, submit false payment information, manipulate reviews, harass chefs/customers/delivery personnel, scrape or reverse engineer the platform, upload unlawful content, attempt unauthorised access, interfere with platform security, or use Katbox for an unlawful purpose.'
        ]
      },
      {
        title: '21. Suspension and termination',
        body: [
          'Katbox may suspend, restrict or terminate access where it reasonably believes that a user or chef has violated these Terms, created a safety or fraud risk, provided false information, failed regulatory requirements, abused promotions, or otherwise threatened the integrity of the marketplace. Where appropriate and legally required, Katbox may provide notice or an opportunity to resolve the issue.',
          'Termination does not remove rights or obligations that by their nature should survive termination, including payment obligations, confidentiality, intellectual-property rights, dispute provisions and lawful record-retention requirements.'
        ]
      },
      {
        title: '22. Disclaimers and limitation of liability',
        body: [
          'Katbox aims to provide a reliable marketplace but does not guarantee uninterrupted availability, error-free listings, continuous chef availability, exact delivery times or the suitability of a particular food for every customer. Independent chefs are responsible for their own food and services.',
          'To the maximum extent permitted by law, Katbox will not be responsible for indirect, incidental, special or consequential loss arising from a user’s use of the platform. Nothing in these Terms excludes or limits liability that cannot legally be excluded or limits consumer rights that cannot lawfully be waived.'
        ]
      },
      {
        title: '23. Indemnity',
        body: [
          'To the extent permitted by applicable law, a user or chef may be responsible for losses reasonably arising from their fraud, unlawful conduct, intentional misuse of the platform, infringement of third-party rights, or material breach of these Terms. This clause does not create liability beyond what the law permits.'
        ]
      },
      {
        title: '24. Force majeure',
        body: [
          'Katbox will not be responsible for delay or failure caused by events reasonably outside its control, including severe weather, natural disasters, strikes, civil disturbance, government restrictions, public-health emergencies, network or infrastructure outages, payment-system failures, delivery disruptions or other events of force majeure. Where an order cannot be fulfilled, Katbox will take reasonable steps to communicate and provide the applicable cancellation/refund resolution.'
        ]
      },
      {
        title: '25. Governing law and jurisdiction',
        body: [
          'These Terms are governed by the laws of India. Subject to mandatory consumer-protection rights and the jurisdiction of forums or authorities that cannot lawfully be excluded, disputes will be subject to the competent courts and authorities having jurisdiction in Hyderabad, Telangana.'
        ]
      },
      {
        title: '26. Changes to these Terms',
        body: [
          'Katbox may update these Terms as the platform, payment methods, services or legal requirements change. The updated version will be posted on this page with a revised date. Continued use after the effective date will be subject to the updated Terms to the extent permitted by law.'
        ]
      }
    ]
  },
  refund: {
    path: '/refund-cancellation-policy',
    label: 'Refund & Cancellation Policy',
    title: 'Clear rules when plans change.',
    intro:
      'Food is perishable and many Katbox orders are prepared specifically for a customer. This policy explains the current cancellation, refund and complaint process for food orders, catering, meal plans and related services.',
    sections: [
      {
        title: '1. Customer cancellation before chef acceptance',
        body: [
          'If a customer requests cancellation before the chef accepts the order, Katbox will generally provide a full refund of the eligible amount paid, subject to any payment-provider limitation and applicable law.'
        ]
      },
      {
        title: '2. Cancellation after chef acceptance but before preparation',
        body: [
          'A customer may request cancellation after chef acceptance but before preparation begins. Where the cancellation is accepted under the order workflow, Katbox will generally process a refund of the eligible amount paid.'
        ]
      },
      {
        title: '3. After food preparation has started',
        body: [
          'Once preparation has started, cancellation generally does not qualify for a refund because the chef may already have purchased, consumed or committed perishable ingredients, labour and packaging. Katbox may nevertheless consider exceptional refunds or credits where appropriate or where required by law.'
        ]
      },
      {
        title: '4. Katbox or chef cancellation',
        body: [
          'If a chef cancels an accepted order, the customer will generally receive a full refund of the eligible amount paid. If Katbox cannot arrange delivery or otherwise cannot reasonably fulfil the order, Katbox will generally provide a full refund of the eligible amount paid for that order.'
        ]
      },
      {
        title: '5. Customer unavailable or incorrect delivery information',
        body: [
          'Refund eligibility may be affected when delivery fails because the customer supplied an incorrect address or phone number, was unavailable for a reasonable delivery attempt, refused a valid order, or did not provide required access information. Katbox may assess the actual circumstances before deciding whether any refund is due.'
        ]
      },
      {
        title: '6. Missing, incorrect, damaged or spilled food',
        body: [
          'Contact Katbox as soon as reasonably possible, preferably within 24 hours of delivery, with the order ID and clear photographs or video evidence where relevant. Evidence may be sent by email to the Katbox support address. Katbox and the chef may jointly investigate and may offer a replacement, partial refund, full refund, credit or other appropriate resolution depending on the issue.'
        ]
      },
      {
        title: '7. Food quality or food-safety complaint',
        body: [
          'If you believe food is unsafe, contaminated or has caused an adverse reaction, stop consuming it and contact Katbox immediately. Keep the food, packaging, labels and remaining product where reasonably possible. Katbox may request evidence, temporarily suspend the chef, take the relevant listing offline, investigate the incident, request FSSAI documentation and escalate the matter to relevant authorities where appropriate.',
          'A food-safety complaint may require additional investigation before a final refund decision. This process does not limit any legal rights available to the customer.'
        ]
      },
      {
        title: '8. Catering and large-event bookings',
        body: [
          'Catering and large orders require advance booking, advance payment and chef confirmation. Each booking may have a specific cancellation deadline because the chef may need to procure ingredients, reserve staff and allocate kitchen capacity. The cancellation deadline and applicable refund amount should be communicated or agreed before the booking is confirmed.',
          'If the booking-specific cancellation terms are not separately provided, Katbox will assess the request based on preparation status, advance commitments, the time remaining before the event and applicable law.'
        ]
      },
      {
        title: '9. Meal plans and scheduled services',
        body: [
          'Meal-box plans may have recurring or scheduled fulfilment. The plan’s specific cancellation and refund terms shown at purchase will apply. A refund for unused future fulfilment may be considered separately from a refund for a meal already prepared or delivered.'
        ]
      },
      {
        title: '10. Hire-a-Chef bookings',
        body: [
          'Hire-a-Chef bookings may require advance payment and chef confirmation. The cancellation deadline and refund terms may depend on the event date, chef commitment, travel and preparation. Any booking-specific terms displayed or accepted at checkout will apply.'
        ]
      },
      {
        title: '11. Refund method and processing time',
        body: [
          'Once a refund is approved, Katbox will initiate it through the original payment route where reasonably possible, or through another method communicated to the customer. Banking and payment-provider processing times are outside Katbox’s direct control.',
          'For the current manual UPI/UTR testing flow, Katbox may use the verified payment reference and available transaction records to process the applicable refund.'
        ]
      },
      {
        title: '12. Coupons and promotional credits',
        body: [
          'Coupons, referral benefits and promotional credits may have separate eligibility and expiry rules. Unless required by law or expressly stated otherwise, promotional value is not refundable or exchangeable for cash.'
        ]
      },
      {
        title: '13. How to submit a refund or complaint request',
        body: [
          `Email ${KATBOX_LEGAL.email} with your order ID, registered mobile number/email, the issue, date and time of delivery, and photographs or video evidence where relevant. For food-safety concerns, contact Katbox immediately rather than waiting for the ordinary complaint window.`,
          `Support contact: ${KATBOX_LEGAL.phone}. Katbox may request additional information and may coordinate with the chef and delivery partner before reaching a final resolution.`
        ]
      }
    ]
  },
  chef: {
    path: '/chef-partner-agreement',
    label: 'Chef Partner Agreement',
    title: 'Chef Partner Agreement',
    intro:
      'This agreement is a practical onboarding template for independent home chefs joining the Katbox marketplace. A chef may accept it electronically in the Katbox onboarding flow or sign a separate copy where Katbox requires one.',
    sections: [
      {
        title: '1. Parties and purpose',
        body: [
          `This Chef Partner Agreement ("Agreement") is between KATBOX, a proprietary/sole-proprietorship enterprise operated by ${KATBOX_LEGAL.owner} ("Katbox"), and the independent chef or food business that applies to sell through the Katbox marketplace ("Chef").`,
          'The purpose of this Agreement is to set the commercial, food-safety, operational and content rules under which the Chef may list food and accept customer orders through Katbox.'
        ]
      },
      {
        title: '2. Independent business relationship',
        body: [
          'The Chef is an independent food business and is not an employee of Katbox. Nothing in this Agreement creates an employment relationship, partnership, joint venture or general agency relationship. The Chef remains responsible for its own personnel, kitchen, ingredients, equipment, statutory registrations, taxes and business expenses.',
          'Katbox provides marketplace, technology, customer-connection and related operational services. Katbox does not own the Chef’s kitchen or employ the Chef’s cooking staff.'
        ]
      },
      {
        title: '3. Chef onboarding documents',
        body: [
          'Before activation, the Chef must provide accurate information requested by Katbox, which may include name, phone number, email, address, identity/KYC documentation, valid FSSAI registration/licence information, bank-account details, menu, prices and food photographs.',
          'Katbox currently does not require a PAN field as part of its stated chef onboarding form. If tax, invoicing, regulatory or settlement requirements later require additional information, Katbox may request it.',
          'The Chef must promptly notify Katbox of any change to its FSSAI status, bank details, address, contact details or other material information.'
        ]
      },
      {
        title: '4. FSSAI, food safety and legal compliance',
        body: [
          'The Chef must obtain and maintain every food-safety registration, licence, permission or approval required for its activity and must provide Katbox with accurate FSSAI information for display where required.',
          'The Chef must follow applicable food-safety, hygiene, sanitation, labelling, allergen, packaging, storage and handling requirements. The Chef must not sell food that is unsafe, adulterated, expired, contaminated, misleadingly described or otherwise prohibited by law.',
          'Katbox may request updated FSSAI documentation, hygiene information, product information or evidence of compliance. Katbox may suspend or delist the Chef or any food item immediately where there is a credible food-safety or regulatory concern.'
        ]
      },
      {
        title: '5. Menus, prices and product information',
        body: [
          'The Chef is responsible for the accuracy of menu names, descriptions, ingredients, allergen information, dietary claims, portion sizes, prices, preparation times, availability and photographs supplied to Katbox.',
          'The Chef must not make false, misleading, unsubstantiated health, nutritional or origin claims. The Chef must promptly correct information that becomes inaccurate.'
        ]
      },
      {
        title: '6. Orders and preparation',
        body: [
          'The Chef must monitor orders, accept or reject them promptly, and prepare accepted orders in accordance with the listing, selected quantity, requested special instructions and agreed preparation time.',
          'For Quick Bites, the Chef understands that the service is designed around fresh preparation after ordering and an approximate target of cooking plus delivery within 75 minutes. The Chef must not intentionally mark food as ready when it is not ready or provide false order-status information.',
          'The Chef must package food appropriately for the product and hand it over safely to the applicable delivery person or customer according to the order workflow.'
        ]
      },
      {
        title: '7. Delivery and handover',
        body: [
          'Delivery may be performed by Katbox personnel or an independent delivery partner. The Chef must keep the food ready for collection at the agreed time and must package it so that reasonable transport does not compromise safety or integrity.',
          'The Chef must cooperate with reasonable delivery investigations, including missing-item, spillage, packaging and delayed-order complaints.'
        ]
      },
      {
        title: '8. Commission and commercial terms',
        body: [
          'Katbox currently offers each newly joined Chef the first three orders in the Chef’s own chronological order sequence at 0% commission.',
          'After those first three orders, the current recurring commercial pattern is 18% commission on orders #4–#7, order #8 at 0%, orders #9–#12 at 18%, order #13 at 0%, orders #14–#17 at 18%, order #18 at 0%, and so on. In other words, after the initial three free orders, every fifth order in the Chef’s sequence is commission-free and the other orders carry an 18% commission, unless Katbox and the Chef agree to a different written commercial offer.',
          'Applicable delivery fees and any separately agreed charges are handled according to the order/settlement record. The Chef should review the settlement statement and raise any discrepancy promptly.'
        ]
      },
      {
        title: '9. Payments and settlements',
        body: [
          'During the initial testing stage, customers may pay through the Katbox-displayed UPI flow and an administrator may verify the UTR/reference before the order is accepted. Katbox may later introduce Cashfree or another payment processor.',
          'Chef settlements are subject to successful customer payment, refunds, cancellations, chargebacks or payment disputes, applicable commission, delivery-related adjustments and other lawful adjustments shown in the relevant settlement record.'
        ]
      },
      {
        title: '10. Cancellations, refunds and complaints',
        body: [
          'The Chef agrees to follow Katbox’s then-current Refund & Cancellation Policy. Before acceptance, customers may generally receive a full eligible refund. After acceptance but before preparation, cancellation may still be allowed. Once preparation starts, refunds may be restricted because of perishable commitments, subject to applicable law.',
          'If a customer reports missing, wrong, damaged, poor-quality or unsafe food, the Chef must cooperate with Katbox’s investigation and provide reasonable evidence, preparation details, order records and regulatory documents when requested.'
        ]
      },
      {
        title: '11. Food-safety incident response',
        body: [
          'If Katbox receives a credible food-safety complaint, Katbox may temporarily suspend the Chef, take the affected listing offline, request evidence and FSSAI documentation, investigate the complaint, seek information about ingredients or preparation, and take further action required to protect customers and comply with law.',
          'The Chef must not retaliate against a customer for making a genuine complaint and must preserve relevant food, packaging, batch/ingredient or order information where reasonably necessary for an investigation.'
        ]
      },
      {
        title: '12. Chef content and marketing licence',
        body: [
          'The Chef grants Katbox a non-exclusive, worldwide, royalty-free licence to host, reproduce, display, crop, resize, format and use the Chef’s submitted business name, logo, food photographs, menu descriptions and related listing content to operate, advertise and market the Chef and Katbox, including on the app, website, social media and promotional materials.',
          'The Chef confirms that it owns or has permission to use submitted content and that the content does not infringe another person’s intellectual-property or privacy rights. Katbox may remove content that is misleading, unlawful, infringing or unsuitable for the marketplace.',
          'Katbox’s current chef onboarding does not require chef-uploaded videos; any future video/content permissions will be addressed separately if introduced.'
        ]
      },
      {
        title: '13. Customer data and confidentiality',
        body: [
          'The Chef may receive customer information only to the extent necessary to prepare and fulfil an order or provide the booked service. The Chef must keep customer information confidential, must not sell or reuse it for independent marketing, and must not contact customers outside the legitimate service purpose unless permitted by law and the applicable Katbox rules.',
          'The Chef must not copy, scrape, export or retain customer lists except where reasonably necessary for lawful order records and as permitted by Katbox.'
        ]
      },
      {
        title: '14. Customer reviews and conduct',
        body: [
          'The Chef must not create fake reviews, offer improper incentives for reviews, threaten customers for negative feedback or manipulate ratings. The Chef may report demonstrably fraudulent or abusive content to Katbox for review.',
          'Katbox may remove or restrict reviews/content that violate its marketplace rules or applicable law.'
        ]
      },
      {
        title: '15. Taxes and statutory obligations',
        body: [
          'The Chef is responsible for its own income, business, professional, food-safety, labour and tax obligations applicable to its activities. Katbox’s current GST status does not determine whether a Chef has separate tax obligations.',
          'The Chef must provide documents required for lawful settlement, invoicing, reporting or regulatory compliance if Katbox is legally required to collect them.'
        ]
      },
      {
        title: '16. Inspection, verification and audits',
        body: [
          'Katbox may conduct reasonable verification of a Chef’s documents, listings, order records and food-safety information. Where legally and operationally appropriate, Katbox may request photographs, certificates, explanations or other evidence to confirm marketplace compliance.'
        ]
      },
      {
        title: '17. Suspension and termination',
        body: [
          'Katbox may suspend, restrict or terminate a Chef’s marketplace access for food-safety concerns, invalid FSSAI information, repeated cancellations, fraudulent transactions, misleading listings, serious customer complaints, misuse of customer information, payment fraud, abusive conduct, breach of this Agreement or other material marketplace risk.',
          'A Chef may request termination by contacting Katbox. Existing accepted orders, customer complaints, refunds, settlement reconciliation and legal obligations may continue to be handled after termination.'
        ]
      },
      {
        title: '18. Indemnity and responsibility',
        body: [
          'To the extent permitted by law, the Chef is responsible for claims, losses or costs arising from the Chef’s food preparation, regulatory non-compliance, unsafe food, misleading product information, infringement of third-party rights, fraud, unlawful conduct or material breach of this Agreement. Nothing here removes liability that cannot legally be excluded.'
        ]
      },
      {
        title: '19. No guaranteed order volume',
        body: [
          'Katbox does not guarantee any minimum number of orders, sales, revenue, customer traffic or earnings. Marketplace visibility may depend on location, customer demand, availability, ratings, compliance and other operational factors.'
        ]
      },
      {
        title: '20. Changes to this Agreement',
        body: [
          'Katbox may update commercial or operational terms when the platform evolves. Material changes affecting commission, fees or significant obligations should be communicated through the applicable onboarding, dashboard, email or other reasonable channel. Continued participation after an effective change may constitute acceptance to the extent permitted by law.'
        ]
      },
      {
        title: '21. Governing law and dispute resolution',
        body: [
          'This Agreement is governed by the laws of India. Subject to mandatory legal rights and forums that cannot be excluded, disputes will be subject to the competent courts and authorities having jurisdiction in Hyderabad, Telangana.'
        ]
      },
      {
        title: '22. Acceptance',
        body: [
          'By checking an acceptance box, signing this Agreement, or otherwise completing Katbox’s chef onboarding flow where electronic acceptance is provided, the Chef confirms that the information supplied is accurate, that the Chef has read and understood this Agreement and that the Chef agrees to comply with it and the applicable Katbox policies.',
          `Katbox legal contact: ${KATBOX_LEGAL.owner}, Proprietor | ${KATBOX_LEGAL.email} | ${KATBOX_LEGAL.phone}.`
        ]
      }
    ]
  }
};

function LegalPage({ type }) {
  const page = legalContent[type];

  useEffect(() => {
    document.title = `${page.label} | Katbox`;
    window.scrollTo(0, 0);
  }, [page.label]);

  const legalLinks = [
    ['privacy', 'Privacy Policy', '/privacy-policy'],
    ['terms', 'Terms & Conditions', '/terms-and-conditions'],
    ['refund', 'Refund & Cancellation', '/refund-cancellation-policy'],
    ['chef', 'Chef Partner Agreement', '/chef-partner-agreement'],
  ];

  return (
    <div className="site legal-site">
      <header className="navbar legal-navbar">
        <a className="brand legal-brand" href="/" aria-label="Katbox home">
          <span className="brand-text legal-brand-text">Katbox</span>
        </a>
        <nav className="nav-links legal-nav-links">
          <a href="/">Home</a>
          <a href="/#services">Explore</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#join">For Chefs</a>
        </nav>
        <div className="nav-actions">
          <a className="primary-button small" href="/#download">Get the app <span>→</span></a>
        </div>
      </header>

      <main className="legal-main">
        <section className="legal-hero">
          <div className="legal-hero-inner">
            <a className="legal-back" href="/">← Back to Katbox</a>
            <span className="section-kicker">KATBOX LEGAL</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <div className="legal-meta">
              <span>Last updated: {LEGAL_LAST_UPDATED}</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </section>

        <section className="legal-layout">
          <aside className="legal-sidebar">
            <span>Legal documents</span>
            {legalLinks.map(([key, label, href]) => (
              <a key={key} className={type === key ? 'active' : ''} href={href}>{label}</a>
            ))}
            <a href={`mailto:${KATBOX_LEGAL.email}`}>Contact Katbox</a>
          </aside>

          <article className="legal-document">
            {page.sections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body?.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="legal-section legal-business-details">
              <h2>Katbox legal & contact details</h2>
              <div className="legal-detail-grid">
                <div><span>Enterprise</span><strong>{KATBOX_LEGAL.enterprise}</strong></div>
                <div><span>Proprietor</span><strong>{KATBOX_LEGAL.owner}</strong></div>
                <div><span>Structure</span><strong>{KATBOX_LEGAL.businessType}</strong></div>
                <div><span>Udyam</span><strong>{KATBOX_LEGAL.udyam}</strong></div>
                <div><span>Email</span><strong>{KATBOX_LEGAL.email}</strong></div>
                <div><span>Phone</span><strong>{KATBOX_LEGAL.phone}</strong></div>
                <div className="full"><span>Official enterprise address</span><strong>{KATBOX_LEGAL.address}</strong></div>
              </div>
              <p className="legal-small-note">Udyam/MSME registration is an enterprise registration and does not by itself represent GST registration, FSSAI licensing, incorporation as a company, or any other regulatory approval.</p>
            </section>

            <div className="legal-contact-card">
              <span className="legal-contact-icon">✦</span>
              <div>
                <strong>Need help with an order, privacy request, grievance or chef-partner question?</strong>
                <p>Email <a href={`mailto:${KATBOX_LEGAL.email}`}>{KATBOX_LEGAL.email}</a> or call {KATBOX_LEGAL.phone}.</p>
              </div>
            </div>

            <p className="legal-disclaimer">
              This website text is a comprehensive operational draft prepared from the information supplied for Katbox and publicly available Indian regulatory materials. It is not a substitute for advice from a qualified Indian lawyer. Before public launch, Katbox should have the final documents reviewed against its exact FSSAI status, tax position, payment model, consumer-commerce obligations, data-protection implementation and final chef contracts.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand footer-logo" href="/">
              <img src={katboxLogo} alt="Katbox" className="brand-logo footer-logo-img" draggable="false" />
            </a>
            <p>Homemade flavours.<br />Shared with love.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="/#services">Homemade Foods</a>
              <a href="/#services">Meal Boxes</a>
              <a href="/#services">Catering</a>
              <a href="/#services">Quick Bites</a>
            </div>
            <div>
              <strong>Katbox</strong>
              <a href="/#about-app">About the app</a>
              <a href="/#how-it-works">How it works</a>
              <a href="/#join">Become a Chef</a>
              <a href="/#download">Download App</a>
            </div>
            <div>
              <strong>Legal</strong>
              {legalLinks.map(([key, label, href]) => <a key={key} href={href}>{label}</a>)}
              <a href={`mailto:${KATBOX_LEGAL.email}`}>Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Katbox. Made with ♥ in Hyderabad.</span>
          <span>Freshly imagined. Locally loved.</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const legalPath = window.location.pathname.replace(/\/$/, '') || '/';
  if (legalPath === '/privacy-policy') return <LegalPage type="privacy" />;
  if (legalPath === '/terms-and-conditions') return <LegalPage type="terms" />;
  if (legalPath === '/refund-cancellation-policy') return <LegalPage type="refund" />;
  if (legalPath === '/chef-partner-agreement') return <LegalPage type="chef" />;

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

  const [highlightGetApp, setHighlightGetApp] = useState(false);
  const getAppRef = useRef(null);

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setNotice(
      'Thanks! We’ll keep you posted about the Katbox launch.'
    );
    setEmail('');
  };

  const updateJoin = (field) => (e) =>
    setJoinForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

  const submitJoin = (e) => {
    e.preventDefault();

    if (
      !joinForm.name.trim() ||
      !joinForm.email.trim() ||
      !joinForm.phone.trim() ||
      !joinForm.city.trim()
    ) {
      setJoinNotice(
        'Please fill in your name, email, phone and city.'
      );
      return;
    }

    setJoinNotice(
      joinRole === 'chef'
        ? `Thank you, ${joinForm.name.split(' ')[0]}! Our chef onboarding team will reach out to you shortly.`
        : `Welcome aboard, ${joinForm.name.split(' ')[0]}! We’ll notify you the moment Katbox launches near you.`
    );

    setJoinForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      about: '',
    });
  };

  const goToJoinAs = (role) => {
    setJoinRole(role);
    setJoinNotice('');
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
                }}
              >
                <span className="role-emoji">👩‍🍳</span>
                <span>
                  <strong>I’m a Home Chef</strong>
                  <small>I want to cook & earn with Katbox</small>
                </span>
              </button>

            </div>

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

              <a href="/privacy-policy">
                Privacy Policy
              </a>

              <a href="/terms-and-conditions">
                Terms & Conditions
              </a>

              <a href="/refund-cancellation-policy">
                Refund Policy
              </a>

              <a href="/chef-partner-agreement">
                Chef Partner Agreement
              </a>

              <a href="mailto:katbox.in@gmail.com">
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