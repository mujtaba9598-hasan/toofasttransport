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

  // 7. Interactive Fleet Lightbox Gallery (Keyboard, Touch Swipe, Preloading)
  const fleetLightbox = document.getElementById('fleetLightbox');
  if (fleetLightbox) {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxStage = document.getElementById('lightboxStage');

    const flatbedGallery = [
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-large-steel-pipes-volvo-front-09.jpeg',
        caption: 'Heavy Duty Flatbed Trailer with Large Diameter Steel Pipes & Volvo Prime Mover'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-large-steel-pipes-volvo-side-10.jpeg',
        caption: 'Side Profile - Secured Industrial Steel Pipeline Haulage on 40ft Flatbed'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-large-steel-pipes-sunset-02.jpeg',
        caption: 'Golden Hour Highway Transit - Long Distance Heavy Pipe Transport'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-steel-pipes-dusk-red-truck-03.jpeg',
        caption: 'Inter-Emirate Cargo Haulage - Heavy Pipe Sections Delivery'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-steel-casing-pipes-crawler-crane-05.jpeg',
        caption: 'On-Site Delivery alongside Heavy Crawler Crane at Foundation Works'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-steel-casing-pipes-roadside-15.jpeg',
        caption: 'Secured Foundation Casing Pipes with Heavy Tension Straps'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-large-casing-pipes-welded-flanges-16.jpeg',
        caption: 'Flanged Heavy Industrial Casing Tubes Loaded for Civil Project'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-stacked-casing-pipes-yard-18.jpeg',
        caption: 'Staged Casing Pipes in Logistic Yard Ready for Immediate Dispatch'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-precast-concrete-panels-volvo-01.jpeg',
        caption: 'Precast Concrete Wall Panels Secured on Heavy Flatbed Trailer'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-precast-concrete-slabs-blocks-27.jpeg',
        caption: 'Reinforced Concrete Structural Slabs & Heavy Foundation Blocks'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-concrete-counterweight-blocks-12.jpeg',
        caption: 'Modular Concrete Counterweights for High-Tonnage Mobile Cranes'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-crane-lattice-boom-sany-crane-13.jpeg',
        caption: 'Sany Crawler Crane Heavy Lattice Boom Section Under Transit'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-crane-lattice-boom-riggers-23.jpeg',
        caption: 'Specialized Lattice Boom Section Secured by Certified Riggers'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-crane-counterweights-and-jib-08.jpeg',
        caption: 'Combined Mobile Crane Jib Sections & Heavy Ballast Counterweights'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-crane-lattice-mast-tmf-eurofoundations-19.jpeg',
        caption: 'TMF Eurofoundations Crane Mast Section Haulage to Drilling Site'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-crane-boom-tmf-eurofoundations-side-28.jpeg',
        caption: 'Heavy Extended Lattice Boom Sections on Highway Corridor'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-long-crane-lattice-boom-overhang-25.jpeg',
        caption: 'Oversized Crane Lattice Boom with Compliant Escort & Flagging'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-rig-kelly-bar-mast-04.jpeg',
        caption: 'Piling Rig Heavy Telescopic Kelly Bar Mast for Deep Foundation Works'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-side-view-07.jpeg',
        caption: 'Deep Foundation Telescopic Kelly Bar - Precision Lashing & Chocking'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-drive-shaft-17.jpeg',
        caption: 'Heavy Rotary Drilling Kelly Bar Shaft Dispatched to Construction Yard'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-warning-tape-20.jpeg',
        caption: 'Specialized Rotary Tooling Transport with High-Visibility Markings'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-site-supervisor-26.jpeg',
        caption: 'Project Site Offloading Inspected by Site Logistics Supervisor'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-industrial-facade-29.jpeg',
        caption: 'Urban Industrial Transit of Specialized Foundation Equipment'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-piling-kelly-bar-night-14.jpeg',
        caption: 'Night Shift Equipment Relocation - 24/7 Project Mobilization'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-red-tremie-pipe-powerpack-crane-21.jpeg',
        caption: 'Concrete Tremie Pipe Setup & Hydraulic Power Pack Haulage'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-red-tremie-pipe-worker-towers-22.jpeg',
        caption: 'High-Rise Foundation Concrete Tremie Pipe Rigging Logistics'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-construction-materials-cement-compressor-06.jpeg',
        caption: 'Industrial Compressor Modules & Construction Site Materials'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-heavy-cylindrical-machinery-module-24.jpeg',
        caption: 'Heavy Cylindrical Process Machinery & Mechanical Assemblies'
      },
      {
        src: 'assets/gallery/flatbed/lowbed-trailer-sany-crawler-crane-undercarriage-30.jpeg',
        caption: 'Heavy Lowbed / Flatbed Carrier - Crawler Crane Track Undercarriage'
      },
      {
        src: 'assets/gallery/flatbed/flatbed-trailer-large-steel-pipes-sunset-duplicate-11.jpeg',
        caption: 'Heavy Industrial Freight Movement Across UAE Highway Network'
      }
    ];

    let currentIndex = 0;
    let isLightboxOpen = false;

    const preloadNeighborImages = (idx) => {
      const nextIdx = (idx + 1) % flatbedGallery.length;
      const prevIdx = (idx - 1 + flatbedGallery.length) % flatbedGallery.length;
      const nextImg = new Image();
      nextImg.src = flatbedGallery[nextIdx].src;
      const prevImg = new Image();
      prevImg.src = flatbedGallery[prevIdx].src;
    };

    const displayImage = (idx) => {
      currentIndex = idx;
      const currentItem = flatbedGallery[currentIndex];

      if (lightboxImg) {
        lightboxImg.classList.add('animating');
        lightboxImg.src = currentItem.src;
        lightboxImg.alt = currentItem.caption;

        lightboxImg.onload = () => {
          lightboxImg.classList.remove('animating');
        };
      }

      if (lightboxCounter) {
        lightboxCounter.textContent = `${currentIndex + 1} / ${flatbedGallery.length}`;
      }

      if (lightboxCaption) {
        lightboxCaption.textContent = currentItem.caption;
      }

      preloadNeighborImages(currentIndex);
    };

    const openLightbox = (idx = 0) => {
      isLightboxOpen = true;
      displayImage(idx);
      fleetLightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      fleetLightbox.focus();
    };

    const closeLightbox = () => {
      isLightboxOpen = false;
      fleetLightbox.style.display = 'none';
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
    };

    const nextImage = () => {
      const nextIdx = (currentIndex + 1) % flatbedGallery.length;
      displayImage(nextIdx);
    };

    const prevImage = () => {
      const prevIdx = (currentIndex - 1 + flatbedGallery.length) % flatbedGallery.length;
      displayImage(prevIdx);
    };

    // Attach trigger listeners
    const galleryTriggers = document.querySelectorAll('.lightbox-trigger[data-gallery="flatbed"]');
    galleryTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        // Prevent opening if clicking nested specs badge
        if (e.target.closest('.service-card-specs-badge')) return;
        const initialIdx = parseInt(trigger.getAttribute('data-index') || '0', 10);
        openLightbox(isNaN(initialIdx) ? 0 : initialIdx);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const initialIdx = parseInt(trigger.getAttribute('data-index') || '0', 10);
          openLightbox(isNaN(initialIdx) ? 0 : initialIdx);
        }
      });
    });

    // Control buttons
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
      });
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
      });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    });

    // Mobile touch swipe handling
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleSwipe = () => {
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;

      // Ensure horizontal swipe is dominant and exceeds threshold
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          // Swiped left -> Next Image
          nextImage();
        } else {
          // Swiped right -> Previous Image
          prevImage();
        }
      }
    };

    if (lightboxStage) {
      lightboxStage.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      lightboxStage.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          touchEndX = e.changedTouches[0].clientX;
          touchEndY = e.changedTouches[0].clientY;
          handleSwipe();
        }
      }, { passive: true });
    }
  }
});

