# 🚀 Portfolio — Alif | Web Developer

Portofolio personal yang dibangun dengan **React + Vite**, menggunakan CSS Modules dan animasi CSS murni.

---

## 📁 Struktur File

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component
    ├── components/
    │   ├── Navbar.jsx        # Navigasi fixed dengan hamburger menu
    │   └── Footer.jsx        # Footer sederhana
    ├── pages/
    │   ├── Home.jsx          # Hero section
    │   ├── About.jsx         # Tentang + skills + statistik
    │   ├── Project.jsx       # Grid proyek
    │   ├── Sertifikat.jsx    # Kartu sertifikat
    │   └── Contact.jsx       # Form kontak + sosial media
    ├── data/
    │   └── portfolioData.js  # Semua data (proyek, sertifikat, dll)
    ├── hooks/
    │   └── useScroll.js      # useScrollReveal + useActiveSection
    └── styles/
        ├── globals.css           # Variabel CSS, base styles, animasi
        ├── Navbar.module.css
        ├── Home.module.css
        ├── About.module.css
        ├── Project.module.css
        ├── Sections.module.css   # Sertifikat + Contact
        └── Footer.module.css
```

---

## ⚡ Cara Menjalankan

```bash
# 1. Masuk ke folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser di `http://localhost:5173`

---

## ✏️ Cara Kustomisasi

Semua data portofolio ada di **`src/data/portfolioData.js`**:

- `projects` → Daftar proyek
- `certificates` → Daftar sertifikat
- `skills` → Daftar skill/teknologi
- `stats` → Statistik (tahun, proyek, klien)
- `socials` → Link sosial media

Ganti nama **Alify** di:
- `src/pages/Home.jsx` (heading hero)
- `src/components/Footer.jsx`
- `index.html` (title & meta description)

---

## 🛠️ Build untuk Production

```bash
npm run build
npm run preview
```
