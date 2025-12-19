# Cardiff Compass Luxury 🏛️
**A Curated Guide to Cardiff’s Premium Attractions**

**Live Demo:** [cardiff-compass-luxury.vercel.app](https://cardiff-compass-luxury.vercel.app)

---

## 📖 Project Overview
Cardiff Compass is a high-end web application designed to guide visitors through the Welsh Capital’s most prestigious venues. The platform employs a **"Quiet Luxury"** aesthetic, utilizing negative spacing, minimalist layouts, and curated content to provide a cultivated user experience.

---

## 🛠️ Technology Stack
* **Frontend:** React v18 (Virtual DOM for high-efficiency UI updates)
* **Build Tool:** Vite (Native ES module support for near-instant startup)
* **Backend:** Supabase (PostgreSQL with integrated Authentication and Realtime)
* **Performance Engine:** Custom In-Memory **Search Trie** (Prefix Tree)
* **Styling:** Tailwind CSS (Modular, utility-first CSS)
* **Testing:** Vitest (Automated Unit and Integration testing)

---

## ✨ Key Features
* **Instant $O(L)$ Search:** Implements an advanced Trie data structure to provide instant search results based on the length of user input ($L$), ensuring performance stays constant as the venue database scales.
* **Secure CRUD Operations:** Club Members can Create, Read, Update, and Delete bookings via a secure interface managed by PostgreSQL Row Level Security (RLS).
* **Real-time Updates:** Utilizes WebSocket (WSS) via Supabase Realtime to push database changes instantly to the UI.
* **Quiet Luxury UI:** WCAG-compliant design focusing on accessibility, luxury serif typography, and immersive imagery.

---

## 🏗️ Software Architecture
The application follows the **Model-View-Controller (MVC)** architectural pattern to ensure strict separation of concerns:

* **Model:** Supabase (Database Schema & RLS Policies)
* **View:** React Components (Presentation Layer)
* **Controller:** TypeScript Service Modules (Business Logic & Database interaction)

### Design Principles
* **Singleton Pattern:** Ensures only one database connection is shared across the app to prevent resource exhaustion.
* **SOLID Compliance:** Adheres to Single Responsibility (SRP) and Interface Segregation (ISP) for maintainability.
* **DRY Logic:** Centralized service modules and reusable components (e.g., `VenueCard`) reduce code duplication.

---

## 📂 Project Structure
Following a **Component-Based Architecture**, the project directory is strictly organized to decouple presentation from business logic:

```text
cardiff_compass_luxury/
├── src/
│   ├── assets/       # Immersive imagery and branding assets
│   ├── components/   # Reusable UI components (DRY compliant)
│   ├── data/         # Static data and venue definitions
│   ├── lib/          # Core logic (Supabase client, Search Trie, Error Handler)
│   ├── pages/        # View layer and route-specific components
│   └── tests/        # Unit and Integration test suites
├── public/           # Static public assets
└── tsconfig.json     # Strict TypeScript configuration

🧪 Testing & Validation

The project maintains a 100% pass rate ($7/7$ tests) across automated test suites:

Unit Tests: Validates the core Search Trie logic, including case insensitivity and partial matching.

Integration Tests: Validates authentication redirects, protected route access, and end-to-end booking data persistence.

Run Tests Locally
To execute the test suites, run the following command in your terminal:

Bash

npm run test

🚀 Getting Started
Follow these steps to set up the project locally on your machine:

1. Prerequisites
Node.js (v18.0.0 or higher)
npm (comes with Node.js)

2. Installation
Clone the repository:
Bash
git clone [https://github.com/J1sh1505/cardiff_compass_luxury.git](https://github.com/J1sh1505/cardiff_compass_luxury.git)

Install dependencies:
Bash
npm install

Environment Configuration
Create a file named .env in the root directory and add your Supabase credentials:
Code snippet
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key

Launch
Start the development server:
Bash
npm run dev

Developed by: Joshua C J. Watkins
Student ID: ST20275355
University: Cardiff Metropolitan School of Technology
Module: SEN6000 - Advanced Programming