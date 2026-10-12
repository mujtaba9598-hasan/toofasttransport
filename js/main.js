/* ==========================================================================
   Too Fast Transport LLC - Master JavaScript
   Mobile Navigation, FAQ Accordion, Marquee Loop & Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking standard nav links (not toggles)
    navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item:not(.nested-toggle), .nested-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Mobile Dropdown Expander Handlers
    const dropdownToggle = navMenu.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const menu = dropdownToggle.nextElementSibling;
          if (menu) menu.classList.toggle('mobile-open');
        }
      });
    }

    const nestedToggle = navMenu.querySelector('.nested-toggle');
    if (nestedToggle) {
      nestedToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const nestedMenu = nestedToggle.nextElementSibling;
          if (nestedMenu) nestedMenu.classList.toggle('mobile-open');
        }
      });
    }
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.faq-toggle, .faq-question');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Client Marquee Infinite Loop Duplication
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    // Clone children to make infinite seamless loop
    const items = Array.from(marqueeTrack.children);
    items.forEach(child => {
      const clone = child.cloneNode(true);
      marqueeTrack.appendChild(clone);
    });
  }

  // 4. Contact Form Submission Feedback (Native WhatsApp Bridge)
  const contactForm = document.getElementById('quickQuoteForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value || 'Client';
      const phone = contactForm.querySelector('[name="phone"]')?.value || '';
      const service = contactForm.querySelector('[name="service"]')?.value || 'Transport Inquiry';
      const pickup = contactForm.querySelector('[name="pickup"]')?.value || '';
      const destination = contactForm.querySelector('[name="destination"]')?.value || '';
      const message = contactForm.querySelector('[name="message"]')?.value || '';
      let text = `Hello Too Fast Transport, I am ${name}. Phone: ${phone}. Required Service: ${service}.`;
      if (pickup) text += ` Pickup Location: ${pickup}.`;
      if (destination) text += ` Destination: ${destination}.`;
      if (message) text += ` Details: ${message}.`;
      window.open(`https://wa.me/971508535777?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // 5. Home Quote Form Submission
  const homeQuoteForm = document.getElementById('homeQuoteForm');
  if (homeQuoteForm) {
    homeQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const phone = document.getElementById('clientPhone')?.value || '';
      const service = document.getElementById('serviceCategory')?.value || 'Transport Inquiry';
      const pickup = document.getElementById('pickupLocation')?.value || '';
      const destination = document.getElementById('destinationLocation')?.value || '';
      let text = `Hello Too Fast Transport, I am ${name}. Phone: ${phone}. Required Service: ${service}.`;
      if (pickup) text += ` Pickup Location: ${pickup}.`;
      if (destination) text += ` Destination: ${destination}.`;
      window.open(`https://wa.me/971508535777?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // 6. Ensure Hero Video Autoplays & Is Strictly Locked Against Downloads/Clicks
  const heroVideo = document.querySelector('.hero-showcase-video, .hero-bg-video');
  const videoShowcase = document.querySelector('.hero-video-showcase');
  const videoShield = document.querySelector('.video-shield');

  [heroVideo, videoShowcase, videoShield].forEach(el => {
    if (el) {
      el.addEventListener('contextmenu', (e) => e.preventDefault());
      el.addEventListener('dragstart', (e) => e.preventDefault());
      el.addEventListener('selectstart', (e) => e.preventDefault());
      el.addEventListener('mousedown', (e) => {
        if (e.button === 2) e.preventDefault();
      });
    }
  });

  if (heroVideo) {
    heroVideo.setAttribute('controlsList', 'nodownload nofullscreen noremoteplayback');
    heroVideo.setAttribute('disablePictureInPicture', 'true');
    heroVideo.setAttribute('disableRemotePlayback', 'true');
    heroVideo.play().catch(() => {});
  }
});

