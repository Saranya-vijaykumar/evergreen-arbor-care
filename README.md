# ArborPro Operations — Real-Time Arborist Platform

A modern, high-performance web application converted directly from Stitch project **`2739260002920341941`** (*Arborist Service HTML Template*).

## 🌲 Overview

**ArborPro Operations** is designed for certified professional arborists, commercial campus managers, and field-service dispatch operations. Built with a rugged, high-utility aesthetic anchored in living forest green (`#012d1d` / `#1b4332`), warm timber amber (`#7d562d` / `#ffca98`), and crisp Inter typography.

---

## 🧭 Navigation Flow

Following the required natural flow, **About** is placed right next to **Home**:
1. **Home** (`index.html`)
2. **Home 2** (`home-2.html`)
3. **About** (`about.html`)
4. **Services** (`services.html`)
5. **Pricing** (`pricing.html`)
6. **Contact** (`contact.html`)
7. **Admin Dashboard** (`admin.html`)

---

## 🚀 Features & Screens

1. **Home (`index.html`)**
   - Hero with certified credentials & 24/7 emergency dispatch alert.
   - **Interactive Instant Quote Calculator**: Adjust service type, tree height/canopy scale, and urgency to see real-time price estimates.
   - One-click **"Lock In Rate"** modal that directly registers the order in the Admin dispatch queue.
   - Customer testimonials and trust credentials.

2. **Home 2 — Heavy & Commercial Field Ops (`home-2.html`)**
   - Live **Operations Status Ticker** with real-time response time and active crew locations.
   - **Interactive Tree Hazard Evaluator**: 3-step self-assessment tool evaluating visual defect and target proximity, instantly calculating hazard severity (Level 1 Emergency, Level 2 High Risk, Level 3 Preventative) and triggering direct booking into `ArborStore`.
   - **Heavy Operations Fleet Showcase**: 60-Ton Knuckle Boom Crane, Air-Spade 2000, Vermeer SC852 Grinder, and IML Resistograph.
   - Trusted institution partner credentials (Seattle Parks, King County, Apex Commercial).

3. **About Us & Team (`about.html`) — *Expanded Edition***
   - **Company Origins & Heritage**: The 20-year story of Marcus Vance and the team's evolution in the Pacific Northwest.
   - **Scientific Diagnostic Technology**: Acoustic Tomography, Supersonic Air Knife decompaction, and Dynamic Cobra Cabling.
   - **Expanded Leadership Profiles**: Certified Master Arborists, Safety Directors, and Fleet leads with verifiable ISA & TRAQ badges.
   - **Community Canopy Stewardship**: 4,500+ climate-resilient saplings planted and annual school workshops.
   - 20-year milestone timeline and ANSI A300 / ISA gold compliance.

4. **Services Catalog (`services.html`)**
   - **Interactive Category Filtering**: Pruning & Care, Removal & Safety, Health & Soil, Commercial Grounds.
   - **Live Search**: Instant keyword filtering across service scopes and descriptions.
   - **Consultation Modal**: Directly book consultations for any specific service.
   - 4-step ANSI A300 operational methodology process timeline.

5. **Pricing & Packages (`pricing.html`)**
   - **Interactive Billing Switch**: Toggle between Standard Project Rates and Annual Maintenance Contracts (-15% discount) with dynamic price calculation.
   - Comprehensive **Service Tier Feature Matrix**.
   - Collapsible **FAQ Accordion**.

6. **Direct Dispatch & Contact (`contact.html`)**
   - 24/7 emergency storm dispatch banner with direct phone link.
   - **Full Intake Form**: Name, address, service type, and urgency flags.
   - Submissions dynamically feed into the Admin Dashboard in real time.
   - Headquarters location and Puget Sound service coverage map.

7. **Operations Dashboard (`admin.html`)**
   - **Dynamic KPI Cards**: Active Work Orders, Pending Assessments, Monthly Revenue, Active Field Crews.
   - **Interactive Volume Chart**: Toggle between weekly and monthly financial metrics.
   - **Live Work Orders Table**: Real-time status indicators (In Progress, Scheduled, Pending Review, Completed).
   - **Real-Time Cross-Tab Synchronization**: New bookings made on the customer site appear instantly without page reload.
   - Quick Actions: Manual order creator, quick priority crew dispatch, and status changer.

---

## 🛠️ Quick Start

### 1. Development Server
Run Vite with hot module replacement:
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

### 2. Production Build
Compile optimized static assets:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```
