# Project Handover & Agent Continuity Guide: Too Fast Transport LLC

> **Date / Timestamp**: 2026-10-20  
> **Repository Path**: `C:\Users\Mujtaba Hasan\Downloads\TooFastTransport`  
> **Git Remote**: `https://github.com/mujtaba9598-hasan/toofasttransport.git` (Branch: `main`)  
> **Working Tree Status**: Active Dev / Multi-Fleet Upgrade

---

## 1. Brain & Conversation Session Reference (Critical for New Agent)

Any new agent picking up this workspace can access the complete history, reasoning traces, and logs from our development sessions:

- **Session 3 (Current / Latest - 2026-10-20)**:
  - **Conversation ID**: `b4b074d2-a155-4887-a7d1-e065c04c1f88`
  - **Brain Directory Path**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\b4b074d2-a155-4887-a7d1-e065c04c1f88`
  - **Compact Conversation Transcript**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\b4b074d2-a155-4887-a7d1-e065c04c1f88\.system_generated\logs\transcript.jsonl`
  - **Full Conversation Transcript**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\b4b074d2-a155-4887-a7d1-e065c04c1f88\.system_generated\logs\transcript_full.jsonl`
  - **Automated Verification Script**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\b4b074d2-a155-4887-a7d1-e065c04c1f88\scratch\verify_lowbed_feature.js`
  - **Asset Manifest & Records**: [`docs/content/lowbed_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/lowbed_images_record.md)
- **Session 2 (2026-10-14)**:
  - **Conversation ID**: `64ae5d62-bc3b-4244-a7d2-bc06620eabe4`
  - **Brain Directory Path**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4`
- **Session 1 (2026-10-12)**:
  - **Conversation ID**: `9ef7826a-2991-4115-a972-30800f20db06`
  - **Brain Directory Path**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\9ef7826a-2991-4115-a972-30800f20db06`

---

## 2. Core User Rules & Operational Protocols (STRICT)

1. **Language & Communication Policy**:
   - The user speaks **Urdu (NOT Hindi)**.
   - **Allowed Output Languages**: English or **Roman Urdu** (Urdu written in Latin letters) ONLY.
   - **NO Hindi**: Absolutely no Hindi words, Devanagari script, or Hindi vocabulary under any circumstance.
   - **NO Urdu Script (Rasmul Khat)**: Do NOT output Arabic/Urdu script in terminal or chat responses (terminal RTL scrambles it).
   - Responses must be concise, structured, and to the point.
2. **Direct Native Coding Standards**:
   - **NEVER** write Python scripts to generate project files (HTML, CSS, JS, configs).
   - Edit files directly using native agent capabilities (`replace_file_content`, `write_to_file`).
3. **Screenshot Rule ("check ss")**:
   - When the user says "check ss", exclusively inspect directory: `C:\Users\Mujtaba Hasan\Pictures\Screenshots\velora_bugs`.
4. **LangGraph Swarm Progression**:
   - Work fragment-by-fragment with Human-in-the-Loop checkpoints before making major changes.

---

## 3. Work Completed in This Session

### A. Video Flash Glitch Resolution (`index.html`)
- **Problem**: When the hero video loaded on `index.html`, a white/daylight boom lift image flashed briefly before the dark background animation played.
- **Solution**: Removed `poster="assets/fleet/fleet-1.webp"` from the `<video>` tag. Container `#030303` now blends seamlessly into the dark video start frames with zero flash.

### B. Client Shared Images Organization
- Client provided 31 raw files in `Client Shared Images`.
- Created structured dated subfolder: `Client Shared Images/2026-10-13_Flatbed-Trailers/`.
- Renamed all 30 photos and 1 video descriptively (identifying Volvo prime movers, steel casing pipes, Sany crawler crane booms, piling rig kelly bars, precast slabs, tremie pipes, etc.).

### C. FlatBed Trailer Card Update & Cleanup
- Renamed Card 3 on `index.html` from *"Trailers and Small Pick-Up Services"* to **"FlatBed Trailer Services"**.
- Updated hero card image to `assets/services/flatbed-trailer-large-steel-pipes-volvo-front-09.jpeg`.
- Removed old `assets/services/trailers-pickup.webp` locally and from git.
- Updated `services.html` reference so no broken image links exist.

### D. 30-Photo Interactive Lightbox Gallery
- Copied 30 non-video flatbed images to `assets/gallery/flatbed/`.
- Built custom lightbox modal (`#fleetLightbox`) in `css/style.css`, `index.html`, and `js/main.js`.
- Features:
  - Starts at active card photo (Index 0: `flatbed-trailer-large-steel-pipes-volvo-front-09.jpeg`).
  - Next/Previous cycling through all 30 photos with human-readable engineering captions and counter (`1 / 30`).
  - Desktop keyboard controls: `ArrowRight` (next), `ArrowLeft` (prev), `Escape` (close).
  - Mobile touch swipe detection: Horizontal swipe threshold calculation (`deltaX > 40`).
  - Neighborhood image preloading for instant image transitions.
  - Collision protection: `Specs ↗` badge has `event.stopPropagation()` so clicking it navigates to specs without launching the modal.
  - Card media indicator badge: `30 Photos 📷`.

### E. Comprehensive Overhaul of `service-trailers-pickup.html`
- Optimized for UAE B2B procurement & logistics managers:
  - **Keywords**: 40ft flatbed trailer rental UAE, steel casing pipe haulage, crane lattice booms, piling rig kelly bars, precast concrete slabs, 45T payload, CICPA/ADNOC security clearance.
  - **Stats Patti**: 45 Tons Max Payload | CICPA & Port Pass Ready | 2 to 4 Hours Mobilization.
  - **Engineering Spec Table**: 40ft Heavy Flatbed (3-Axle), 40ft Casing & Pipe Hauler, Lowbed / Step-Deck, 10-Ton Support Truck, 3-7 Ton Pickups.
  - **Live Field Operations Gallery**: 6 curated photo cards each with `data-gallery="flatbed"` and `data-index="..."`. Clicking any card opens the lightbox directly at that photo.
  - **Authentic B2B FAQs (Zero Fake Questions)**: Real operational questions covering deck dimensions, CICPA passes, overhanging cargo, lashing equipment, mobilization lead time, and spot vs monthly contracts.
  - **Double Number CTA**: Call & WhatsApp buttons for both numbers: `+971 50 853 5777` and `+971 55 455 1928`.

### F. Search Engine Infrastructure (`sitemap.xml` & `robots.txt`)
- **`sitemap.xml`**: Indexes all 18 HTML pages with accurate priority and `lastmod="2026-10-20"`.
- **`robots.txt`**: Standard robot crawler configuration referencing `https://www.toofasttransport.com/sitemap.xml`.

### G. Lowbed Trailers for Heavy Machinery - Up to 150 Tons (Session 3 - 2026-10-20)
- **Client Voice Note Scope**: "Heavy heavy machinery shifting, up to 150 ton. Low bed trailer for heavy machinery, up to 150 tons within UAE."
- **Raw Asset Ingestion**: Moved 59 raw files from Downloads to [`Client Shared Images/2026-10-16_Lowbed-Trailers/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-16_Lowbed-Trailers/).
- **Deduplication & WebP Conversion**: Filtered out 7 duplicate pairs; converted all 52 unique photos to WebP in [`assets/gallery/lowbed/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/lowbed/).
- **Card Main Hero Image**: Specified image `WhatsApp Image 2026-10-16 at 12.45.24 AM (26).jpeg` converted to [`assets/services/lowbed-trailer-heavy-machinery.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/lowbed-trailer-heavy-machinery.webp).
- **Master Manifest**: Comprehensive record in [`docs/content/lowbed_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/lowbed_images_record.md).
- **Multi-Gallery Fleet Lightbox**: Upgraded `js/main.js` controller to support both `flatbed` (30 items) and `lowbed` (52 items) with dynamic title switching, swipe, and arrow navigation.
- **New Card 4 on `index.html` & `services.html`**: "Lowbed Trailers for Heavy Machinery", 52-photo indicator, Specs badge, and Call/WhatsApp CTAs.
- **Dedicated Service Landing Page**: Built [`service-lowbed-trailer.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-lowbed-trailer.html) featuring:
  - 150-ton trust bar / stats patti.
  - 6 cargo capability cards (Excavators, Piling Rigs, Bulldozers, Crane Tracks, Crushing Plants, Transformers).
  - 4-tier specification table (3-Axle 50T, 4-Axle 80T, RGN Lowbed 100T, Modular 150T).
  - 6 curated live operations photo cards directly wired to `#fleetLightbox`.
  - 6 authentic B2B FAQs answering dimensions, permits, escort coordination, and CICPA/ADNOC clearance.
  - Dual hotline CTA desk (+971 50 853 5777 & +971 55 455 1928).
- **Automated Verification**: Validated with Puppeteer test suite (`scratch/verify_lowbed_feature.js`).

### H. Cranes Up to 200 Tons - Heavy Lifting & High Places (Session 3 - 2026-10-20)
- **Client Voice Note Scope**: "Sir yeh crane ki already udhar aik photo lagi hui hai, crane. For lifting heavy material or high places, up places. Iss ko crane kaha jata hai sir. Yeh 200 ton capacity tak hamare paas hain already. Crane iss ko bolte hain sir."
- **Raw Asset Ingestion**: Moved 17 raw files (12 photos, 5 MP4 operational videos) from Downloads to [`Client Shared Images/2026-10-18_Cranes/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-18_Cranes/).
- **WebP Conversion**: Converted all 12 unique photos to WebP in [`assets/gallery/cranes/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/cranes/) (`crane-01.webp` through `crane-12.webp`).
- **Card Main Hero Image**: Specified image `WhatsApp Image 2026-10-18 at 2.12.24 PM.jpeg` converted to [`assets/services/cranes-upto-200-tons.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/cranes-upto-200-tons.webp).
- **Master Manifest**: Complete file record in [`docs/content/cranes_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/cranes_images_record.md).
- **Multi-Gallery Fleet Lightbox**: Upgraded `js/main.js` controller to support `cranes` (12 items) alongside `flatbed` (30) and `lowbed` (52).
- **New Card on `index.html` & `services.html`**: "Cranes Up to 200 Tons", 12-photo indicator, Specs badge (`service-cranes-200-ton.html`), and Call/WhatsApp CTAs.
- **Dedicated Service Landing Page**: Built [`service-cranes-200-ton.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-cranes-200-ton.html) featuring:
  - 200-ton trust bar / stats patti (Up to 200 Tons | High Elevations & Reach | Certified Crew).
  - 6 lifting capability cards (High-Rise HVAC & Chillers, Structural Steel Erection, Heavy Industrial Generators, Telecom & Antenna Masts, Bridge Beams, Plant Maintenance).
  - 4-tier specification table (50-Ton All-Terrain, 100-Ton Heavy Mobile, 160-Ton High-Reach, 200-Ton Flagship Mobile).
  - 6 curated live operations photo cards directly wired to `#fleetLightbox` with `data-gallery="cranes"`.
  - 6 authentic B2B FAQs answering lift plans, ground bearing, wind limits, permits, certified riggers, and night lifting.
  - Dual hotline CTA desk (+971 50 853 5777 & +971 55 455 1928).
- **Search Engine Registration**: Added `service-cranes-200-ton.html` to [`sitemap.xml`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/sitemap.xml).

### I. Heavy Excavators & Earth Breaking Division (Session 3 - 2026-10-20)
- **Client Voice Note Scope**: "Yeh sir excavator hai, excavator department alag se hoti hai samjho. For the excavation and uh earth breaking. Matlab koi cheez break karne ke liye hoti hai na, like koi deewar todni hai, kuch bhi iss qisam ka wo karna hota hai, yeh us ke kaam aati hain cheezein."
- **Raw Asset Ingestion**: Moved 8 raw files from Downloads to [`Client Shared Images/2026-10-20_Excavators/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-20_Excavators/). Deduplication identified 4 unique operational images.
- **Card Main Hero Image**: Specified image `WhatsApp Image 2026-10-19 at 5.53.51 PM (7).jpeg` converted to [`assets/services/excavator-earth-breaking.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/excavator-earth-breaking.webp).
- **WebP Gallery**: Generated 4 unique WebP gallery photos in [`assets/gallery/excavators/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/excavators/) (`excavator-01.webp` through `excavator-04.webp`).
- **Master Manifest**: Complete record in [`docs/content/excavators_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/excavators_images_record.md).
- **Multi-Gallery Fleet Lightbox**: Upgraded `js/main.js` to support `excavators` (4 items) alongside `flatbed`, `lowbed`, and `cranes`.
- **New Card on `index.html` & `services.html`**: "Heavy Excavators & Earth Breaking" with 4-photo indicator, Specs badge, and Call/WhatsApp CTAs.
- **Dedicated Service Landing Page**: Built [`service-excavator-earth-breaking.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-excavator-earth-breaking.html) featuring:
  - Trust stats patti (Rock Breakers | Wall Demolition | Certified Crew | Rapid Mobilization).
  - 6 excavator application cards (Hydraulic Rock Breaking, Concrete Wall Demolition, Deep Basement Excavation, Utility Trenching, Spoil Loading, Site Levelling).
  - 5-tier technical specification matrix.
  - 4 curated live operations photo cards directly wired to `#fleetLightbox`.
  - 6 authentic B2B contractor FAQs (breaker vs bucket quick coupler, certified operators, controlled wall demolition, mobilization lead time).
  - Dual hotline CTA desk (+971 50 853 5777 & +971 55 455 1928).
- **Crane Page Alignment**: Updated [`service-cranes-heavy-lifting.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-cranes-heavy-lifting.html) to consistently feature Up to 200 Tons capacity across hero, matrix table, and a cross-link callout banner to the 200-ton showcase page.
- **Search Engine Registration**: Added `service-excavator-earth-breaking.html` to [`sitemap.xml`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/sitemap.xml).

---

## 4. Key File Manifest

| File Path | Description / Changes Made |
| :--- | :--- |
| [`index.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/index.html) | Added Heavy Excavators & Earth Breaking card, 200-Ton Cranes card, Lowbed card. |
| [`services.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/services.html) | Added Heavy Excavators & Earth Breaking card, updated Cranes capacity to 200T. |
| [`service-excavator-earth-breaking.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-excavator-earth-breaking.html) | Dedicated high-intent hydraulic excavator & earth breaking landing page. |
| [`service-cranes-heavy-lifting.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-cranes-heavy-lifting.html) | Updated to include Up to 200 Tons capacity, matrix table, and cross-link banner. |
| [`service-cranes-200-ton.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-cranes-200-ton.html) | Dedicated high-intent 200-ton crane heavy lifting landing page. |
| [`service-lowbed-trailer.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-lowbed-trailer.html) | Dedicated high-intent 150-ton heavy machinery shifting landing page. |
| [`service-trailers-pickup.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-trailers-pickup.html) | High-intent flatbed page, cross-linked to other heavy services. |
| [`js/main.js`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/js/main.js) | Multi-gallery lightbox supporting flatbed (30), lowbed (52), cranes (12), and excavators (4). |
| [`sitemap.xml`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/sitemap.xml) | 20 URLs indexed with priorities and lastmod. |
| [`docs/content/excavators_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/excavators_images_record.md) | Complete inventory and SHA256 record of all 8 excavator files. |
| [`docs/content/cranes_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/cranes_images_record.md) | Complete inventory and SHA256 record of all 12 crane photos and 5 videos. |
| [`docs/content/lowbed_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/lowbed_images_record.md) | Complete inventory and SHA256 record of all 52 lowbed photos. |
| [`assets/services/excavator-earth-breaking.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/excavator-earth-breaking.webp) | Primary card image converted from WhatsApp Image (7). |
| [`assets/gallery/excavators/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/excavators/) | 4 optimized WebP fleet photos for interactive lightbox. |
| [`Client Shared Images/2026-10-20_Excavators/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-20_Excavators/) | All 8 raw source images preserved safely in project repo. |
| [`assets/services/cranes-upto-200-tons.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/cranes-upto-200-tons.webp) | Primary card image converted from WhatsApp Image 2026-10-18 at 2.12.24 PM.jpeg. |
| [`assets/gallery/cranes/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/cranes/) | 12 optimized WebP fleet photos for interactive lightbox. |
| [`Client Shared Images/2026-10-18_Cranes/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-18_Cranes/) | All 17 raw source items (12 images, 5 MP4 videos) preserved safely. |
| [`assets/services/lowbed-trailer-heavy-machinery.webp`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/services/lowbed-trailer-heavy-machinery.webp) | Primary card image converted from WhatsApp Image (26). |
| [`assets/gallery/lowbed/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/lowbed/) | 52 optimized WebP fleet photos for interactive lightbox. |
| [`Client Shared Images/2026-10-16_Lowbed-Trailers/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/2026-10-16_Lowbed-Trailers/) | All 59 raw source images preserved safely in project repo. |

---

## 5. Contact Information Across the Project

- **Primary Direct Dispatch Hotline**: `+971 50 853 5777`
- **Secondary Operations / Movers Hotline**: `+971 55 455 1928`
- **Official Email**: `info@toofasttransport.com`
- **Domain**: `https://www.toofasttransport.com`
- **Office Location**: United Arab Emirates (Coverage across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah).
