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

    const lowbedGallery = [
      {
        src: 'assets/gallery/lowbed/lowbed-01.webp',
        caption: '150-Ton Capacity Multi-Axle Lowbed Trailer - Heavy Machinery Shifting in UAE'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-02.webp',
        caption: 'Heavy Crawler Excavator Loaded on Multi-Axle Lowbed with Heavy Chains'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-03.webp',
        caption: 'Hydraulic Piling Rig Undercarriage Mobilization for Deep Foundation Works'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-04.webp',
        caption: 'Telescopic Crane Counterweights and Track Modules Transport on Lowbed'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-05.webp',
        caption: 'Heavy Duty Caterpillar Bulldozer Staged for Highway Transit in Sharjah'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-06.webp',
        caption: 'Multi-Axle Step-Deck Lowbed Trailer Transporting Industrial Earthmoving Plant'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-07.webp',
        caption: 'Rotary Drilling Rig Base Mobilization to Active Infrastructure Site'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-08.webp',
        caption: 'Large Wheel Loader Secured with Grade 80 Transport Lashing Chains'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-09.webp',
        caption: 'Oversized Civil Construction Equipment Shifting Across UAE Emirates'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-10.webp',
        caption: 'Heavy Lowbed Trailer Fleet Mobilization at Al Saja a Industrial Yard'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-11.webp',
        caption: 'Crawler Crane Track Assembly Transport on Lowbed Heavy Carrier'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-12.webp',
        caption: 'Tracked Shoring Drill Rig Transport for Dubai High-Rise Foundation Site'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-13.webp',
        caption: 'Heavy Mining and Quarry Plant Machinery Transit on Multi-Axle Trailer'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-14.webp',
        caption: 'Komatsu Heavy Excavator Loaded for Site-to-Site Relocation in UAE'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-15.webp',
        caption: 'Low Ground Clearance Industrial Equipment Haulage with Certified Crew'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-16.webp',
        caption: 'Heavy Vibratory Soil Compactor Transit on Hydraulic Lowbed Deck'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-17.webp',
        caption: 'Foundation Drilling Equipment and Kelly Bar Modules Secured for Highway'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-18.webp',
        caption: 'Heavy Duty Prime Mover with Multi-Axle Lowbed at Construction Gateway'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-19.webp',
        caption: 'Industrial Transformer and Substation Powerpack Haulage in UAE'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-20.webp',
        caption: 'Heavy Piling Plant Rigging and Secure Transport Across E311 Corridor'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-21.webp',
        caption: 'Multi-Axle Lowbed Loading Ramp Operations for Tracked Plant Machinery'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-22.webp',
        caption: 'Heavy Tracked Trenching Machinery Shifting to Infrastructure Trench Works'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-23.webp',
        caption: 'Oversized Industrial Mechanical Module Secured with Timber Dunnage'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-24.webp',
        caption: 'Civil Engineering Foundation Equipment Transport Under Night Mobilization'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-25.webp',
        caption: 'Multi-Axle Lowbed Transporter Hauling Heavy Civil Earthmoving Fleet'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-26.webp',
        caption: 'Large Industrial Backhoe Loader Loaded for Immediate Site Dispatch'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-27.webp',
        caption: 'Heavy Concrete Crushing and Screening Plant Module Transport'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-28.webp',
        caption: 'Hydraulic Crawler Rig Mobilization for Substructure Geotechnical Project'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-29.webp',
        caption: '150-Ton Payload Multi-Axle Lowbed Deck with Reinforced Outriggers'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-30.webp',
        caption: 'Heavy Construction Plant Delivery at Active Dubai Civil Development'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-31.webp',
        caption: 'Rotary Piling Oscillator and Drilling Accessories Highway Transit'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-32.webp',
        caption: 'Heavy Duty Highway Transit with Police Escort Coordination for Over-Width'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-33.webp',
        caption: 'Heavy Duty Lowbed Trailer with Certified Heavy Machinery Rigging'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-34.webp',
        caption: 'Piling Tooling and Heavy Machinery Transport Across UAE Northern Emirates'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-35.webp',
        caption: 'Heavy Tracked Carrier Transport for Harsh Desert Terrain Construction'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-36.webp',
        caption: 'Heavy Plant Equipment Relocation for Abu Dhabi Industrial Projects'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-37.webp',
        caption: 'Multi-Axle Lowbed Trailer Transporting High-Tonnage Civil Excavator'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-38.webp',
        caption: 'Heavy Earthmoving Plant Secured with Multi-Point Ratchet Binders'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-39.webp',
        caption: 'Heavy Crawler Machine Transit on Sheikh Mohammed Bin Zayed Road (E311)'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-40.webp',
        caption: 'High-Capacity Hydraulic Lowbed Carrier Ready for 150-Ton Heavy Haulage'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-41.webp',
        caption: 'Telescopic Mast and Foundation Rig Modules Staged for Project Transit'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-42.webp',
        caption: 'Heavy Industrial Generator and Power Module Loaded on Lowbed Deck'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-43.webp',
        caption: 'Deep Excavation Heavy Plant Transport - Certified Operator & Driver Escort'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-44.webp',
        caption: 'Heavy Machinery Mobilization Fleet at Central Sharjah Yard'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-45.webp',
        caption: 'Lowbed Heavy Hauler Navigating UAE Highway Interchanges with Safety Clearance'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-46.webp',
        caption: 'Certified Transport of Continuous Flight Auger (CFA) Piling Machine'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-47.webp',
        caption: 'Heavy Construction Bulldozer with Ripper Shank Loaded for Demolition Site'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-48.webp',
        caption: 'Heavy Industrial Plant Equipment Rigged with Certified Grade 70/80 Chains'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-49.webp',
        caption: 'Multi-Axle Lowbed Transit Under Strict UAE Safety and Load Specifications'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-50.webp',
        caption: 'Heavy Equipment Site Offloading Monitored by Operations Dispatch Desk'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-51.webp',
        caption: '150-Ton Lowbed Heavy Haulage Solution Serving Contractors Across All 7 Emirates'
      },
      {
        src: 'assets/gallery/lowbed/lowbed-52.webp',
        caption: 'Heavy Plant and Machinery Shifting Complete Fleet Ready for Deployment'
      }
    ];

    const galleries = {
      flatbed: flatbedGallery,
      lowbed: lowbedGallery
    };

    let activeGalleryKey = 'flatbed';
    let currentIndex = 0;
    let isLightboxOpen = false;

    const getActiveGallery = () => galleries[activeGalleryKey] || flatbedGallery;

    const preloadNeighborImages = (idx) => {
      const gallery = getActiveGallery();
      const nextIdx = (idx + 1) % gallery.length;
      const prevIdx = (idx - 1 + gallery.length) % gallery.length;
      const nextImg = new Image();
      nextImg.src = gallery[nextIdx].src;
      const prevImg = new Image();
      prevImg.src = gallery[prevIdx].src;
    };

    const displayImage = (idx) => {
      const gallery = getActiveGallery();
      currentIndex = idx;
      const currentItem = gallery[currentIndex];

      if (lightboxImg) {
        lightboxImg.classList.add('animating');
        lightboxImg.src = currentItem.src;
        lightboxImg.alt = currentItem.caption;

        lightboxImg.onload = () => {
          lightboxImg.classList.remove('animating');
        };
      }

      if (lightboxCounter) {
        lightboxCounter.textContent = `${currentIndex + 1} / ${gallery.length}`;
      }

      if (lightboxCaption) {
        lightboxCaption.textContent = currentItem.caption;
      }

      preloadNeighborImages(currentIndex);
    };

    const openLightbox = (idx = 0, galleryKey = 'flatbed') => {
      activeGalleryKey = galleryKey;
      isLightboxOpen = true;
      if (lightboxTitle) {
        lightboxTitle.textContent = activeGalleryKey === 'lowbed'
          ? 'Lowbed Trailers for Heavy Machinery (Up to 150 Tons)'
          : 'FlatBed Trailer Services';
      }
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
      const gallery = getActiveGallery();
      const nextIdx = (currentIndex + 1) % gallery.length;
      displayImage(nextIdx);
    };

    const prevImage = () => {
      const gallery = getActiveGallery();
      const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
      displayImage(prevIdx);
    };

    // Attach trigger listeners
    const galleryTriggers = document.querySelectorAll('.lightbox-trigger[data-gallery]');
    galleryTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        // Prevent opening if clicking nested specs badge
        if (e.target.closest('.service-card-specs-badge')) return;
        const galleryKey = trigger.getAttribute('data-gallery') || 'flatbed';
        const initialIdx = parseInt(trigger.getAttribute('data-index') || '0', 10);
        openLightbox(isNaN(initialIdx) ? 0 : initialIdx, galleryKey);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const galleryKey = trigger.getAttribute('data-gallery') || 'flatbed';
          const initialIdx = parseInt(trigger.getAttribute('data-index') || '0', 10);
          openLightbox(isNaN(initialIdx) ? 0 : initialIdx, galleryKey);
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

