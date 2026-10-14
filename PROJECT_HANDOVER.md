# Project Handover & Agent Continuity Guide: Too Fast Transport LLC

> **Date / Timestamp**: 2026-10-14  
> **Repository Path**: `C:\Users\Mujtaba Hasan\Downloads\TooFastTransport`  
> **Git Remote**: `https://github.com/mujtaba9598-hasan/toofasttransport.git` (Branch: `main`)  
> **Latest Git Commit**: `da2a7ea`  
> **Working Tree Status**: Clean

---

## 1. Brain & Conversation Session Reference (Critical for New Agent)

Any new agent picking up this workspace can access the complete history, reasoning traces, and logs from this session:

- **Conversation ID**: `64ae5d62-bc3b-4244-a7d2-bc06620eabe4`
- **Brain Directory Path**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4`
- **Compact Conversation Transcript**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4\.system_generated\logs\transcript.jsonl`
- **Full Conversation Transcript**: `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4\.system_generated\logs\transcript_full.jsonl`
- **Scratch & Test Verification Scripts**:
  - `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4\scratch\test_lightbox.js` (Puppeteer test for lightbox keyboard & swipe)
  - `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4\scratch\test_service_page.js` (Puppeteer test for service page FAQ & gallery)
  - `C:\Users\Mujtaba Hasan\.gemini\antigravity-cli\brain\64ae5d62-bc3b-4244-a7d2-bc06620eabe4\scratch\take_screenshots.js` (Automated screenshot capture)

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
- **`sitemap.xml`**: Indexes all 17 HTML pages with accurate priority and `lastmod="2026-10-13"`.
- **`robots.txt`**: Standard robot crawler configuration referencing `https://www.toofasttransport.com/sitemap.xml`.

---

## 4. Key File Manifest

| File Path | Description / Changes Made |
| :--- | :--- |
| [`index.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/index.html) | Card 3 renamed to FlatBed Trailer Services, new image, lightbox trigger, modal markup added before `</body>`. |
| [`service-trailers-pickup.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/service-trailers-pickup.html) | High-intent UAE enterprise content, 6-card gallery, authentic FAQs, double CTA numbers. |
| [`services.html`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/services.html) | Updated image path for card 3 to prevent broken asset reference. |
| [`css/style.css`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/css/style.css) | Added `.fleet-lightbox`, `.lightbox-stage`, `.lightbox-nav`, `.card-gallery-indicator` styles. |
| [`js/main.js`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/js/main.js) | Lightbox controller, 30-item array, touch swipe, keyboard navigation, `data-index` support. |
| [`sitemap.xml`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/sitemap.xml) | 17 URLs indexed with priorities and weekly/monthly change frequencies. |
| [`robots.txt`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/robots.txt) | Search crawler permissions and sitemap link. |
| [`assets/gallery/flatbed/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/assets/gallery/flatbed/) | 30 non-video flatbed trailer photos. |
| [`Client Shared Images/`](file:///C:/Users/Mujtaba%20Hasan/Downloads/TooFastTransport/Client%20Shared%20Images/) | Dated folder `2026-10-13_Flatbed-Trailers` with all 31 renamed source assets. |

---

## 5. Contact Information Across the Project

- **Primary Direct Dispatch Hotline**: `+971 50 853 5777`
- **Secondary Operations / Movers Hotline**: `+971 55 455 1928`
- **Official Email**: `info@toofasttransport.com`
- **Domain**: `https://www.toofasttransport.com`
- **Office Location**: United Arab Emirates (Coverage across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah).
