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

---

## 4. Key File Manifest

| File Path | Description / Changes Made |
| :--- | :--- |
| [`index.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/index.html) | Card 4 added for Lowbed Trailers (150 Tons), navigation dropdown updated. |
| [`services.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/services.html) | Card 4 added for Lowbed Trailers, navigation dropdown updated. |
| [`service-lowbed-trailer.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-lowbed-trailer.html) | Dedicated high-intent 150-ton heavy machinery shifting landing page. |
| [`service-trailers-pickup.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-trailers-pickup.html) | High-intent flatbed page, cross-linked to lowbed trailer service. |
| [`js/main.js`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/js/main.js) | Multi-gallery lightbox supporting flatbed (30) and lowbed (52). |
| [`sitemap.xml`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/sitemap.xml) | 18 URLs indexed with priorities and lastmod. |
| [`docs/content/lowbed_images_record.md`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/docs/content/lowbed_images_record.md) | Complete inventory and SHA256 record of all 52 lowbed photos. |
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
