I'll examine the reference website to understand its structure and create a comprehensive prompt for you.Let me create a detailed prompt based on the website structure and your requirements:

---

# **MOSAIC Cultural Event Website - Development Prompt**

## **Project Overview**
Create a modern, interactive website for **Mosaic** - a university cultural event. The design should be inspired by the Srijan 2026 IIT(ISM) Dhanbad website (https://srijan2026.vercel.app/), featuring smooth animations, engaging interactions, and a vibrant cultural aesthetic.

---

## **Tech Stack Requirements**
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (.tsx)
- **Styling**: Tailwind CSS
- **Animations**: GSAP + Framer Motion
- **Database**: Supabase (use environment variables, NO public keys hardcoded)
- **Font & Colors**: Reference `guideline.jpg` image for:
  - Color palette (primary, secondary, accent, background colors)
  - Typography (font families, weights, sizes)

---

## **Website Structure & Pages**

### **1. Navbar (Sticky/Fixed)**
- Logo: "MOSAIC" with university branding
- Navigation links: Home | Events | About | Team | Gallery | Contact
- Mobile hamburger menu with smooth animation
- Transparent initially, solid background on scroll
- Active link indicator
- Smooth scroll to sections

### **2. Home Page**
**Hero Section:**
- Full-screen hero with animated title "MOSAIC [YEAR]"
- Subtitle: University name and event tagline
- Animated gradient background or particle effect
- Scroll indicator/mouse icon
- Parallax scrolling effect
- CTA buttons: "Register Now" + "View Events"

**About Preview Section:**
- Brief introduction to Mosaic (2-3 lines)
- Animated counter statistics:
  - Days of celebration
  - Expected participants
  - Number of events
  - Prize pool/sponsors
- Stagger animation on scroll

**Highlights Section:**
- 3-4 key highlights/features in cards
- Icon + Title + Description
- Hover effects with scale/glow
- Grid layout (responsive)

**Events Preview:**
- Featured events carousel/grid
- Event cards with:
  - Event image/thumbnail
  - Event name
  - Date & time
  - Category badge
  - "View Details" button
- Smooth hover animations

**Timeline Section:**
- Visual timeline showing event schedule
- Date markers with event names
- Scroll-triggered animations

**Sponsors Section:**
- Sponsor logos in marquee/grid
- Infinite scroll animation
- Grayscale to color on hover

**CTA Section:**
- Registration deadline countdown timer
- Prominent "Register Now" button
- Social media links

### **3. Events Page**
- **Filter/Category Tabs:**
  - All | Music | Dance | Drama | Art | Literary | Sports
  - Active tab highlighting
  
- **Events Grid/List:**
  - Each event card shows:
    - Event poster/image
    - Event name & category
    - Date, time, venue
    - Prize money/rewards
    - Team size (Solo/Team)
    - Short description
    - "Register" + "Details" buttons
  
- **Event Detail Modal/Page:**
  - Full event description
  - Rules & regulations
  - Judging criteria
  - Contact person details
  - Registration form (if open)
  - Related events section

- **Search & Filter:**
  - Search by event name
  - Filter by date, category, prize range
  - Sort by: Date | Prize | Popularity

### **4. About Page**
**About Mosaic:**
- What is Mosaic?
- Vision & mission
- History/past editions
- Theme of this year

**About University:**
- University introduction
- Campus culture
- Why attend Mosaic?

**Team Behind Mosaic:**
- Organizing committee
- Faculty coordinators
- Student coordinators
- Cultural club heads

**Statistics/Achievements:**
- Past edition highlights
- Participant numbers
- Success stories

### **5. Team Page** (Based on Srijan pattern)
- **Core Team Section:**
  - Faculty advisors
  - Event heads
  - Technical team
  - Media & PR team
  - Sponsorship team

- **Team Member Cards:**
  - Photo (hover reveal effect)
  - Name
  - Designation/Role
  - Department/Year
  - Social links (LinkedIn, Instagram, Email)
  - Flip card animation

### **6. Gallery Page**
- **Past Events Gallery:**
  - Masonry grid layout
  - Categories: Dance | Music | Drama | Fun Moments
  - Lightbox on click
  - Lazy loading
  - Filter by year/category

- **Video Gallery:**
  - Embedded YouTube/Vimeo videos
  - Event highlights
  - Testimonials

### **7. Contact Page**
- **Contact Form:**
  - Name, Email, Phone, Subject, Message
  - Form validation
  - Success/Error toast notifications
  - Submit to Supabase

- **Contact Information:**
  - Email addresses (general, specific departments)
  - Phone numbers
  - University address with embedded Google Maps
  - Office hours

- **Social Media:**
  - Instagram, Facebook, Twitter, YouTube, LinkedIn
  - Social feed integration (optional)

- **FAQ Section:**
  - Accordion-style FAQs
  - Common queries about registration, events, accommodation

### **8. Footer**
- **4-Column Layout:**
  - Column 1: Mosaic logo + tagline + social links
  - Column 2: Quick Links (All pages)
  - Column 3: Events categories
  - Column 4: Contact info

- **Bottom Bar:**
  - Copyright notice
  - Privacy Policy | Terms & Conditions
  - Developed by [Team Name]

---

## **Additional Pages to Include (From Srijan Reference)**

### **9. Registration/Login Page**
- User authentication via Supabase
- Email/password or social login
- User dashboard after login

### **10. User Dashboard** (If registration enabled)
- Registered events
- Payment status
- Ticket downloads
- Profile management

### **11. Schedule Page**
- Day-wise event schedule
- Venue-wise categorization
- Calendar view
- Export to Google Calendar option

### **12. Sponsors Page**
- Sponsor tiers (Title, Platinum, Gold, Silver)
- Sponsor logos with links
- Sponsor benefits listed

### **13. Accommodation/Travel Page** (If applicable)
- Hostel booking information
- Travel guide to university
- Local attractions
- Campus map

---

## **Design & Animation Requirements**

### **GSAP Animations:**
- Scroll-triggered animations (fade-in, slide-up, stagger)
- Parallax effects on hero sections
- Text reveal animations
- Number counters
- Timeline animations
- Custom cursor follow effect (optional)

### **Framer Motion:**
- Page transitions
- Modal animations
- Hover effects on cards
- Stagger animations for lists/grids
- Gesture-based interactions

### **Tailwind CSS:**
- Use color palette from `guideline.jpg`
- Custom font families from guideline
- Responsive breakpoints: mobile → tablet → desktop
- Dark mode toggle (optional)
- Glassmorphism effects
- Gradient backgrounds
- Custom shadows and borders

---

## **Supabase Database Schema**

### **Tables Needed:**

**1. events**
- id (UUID, primary key)
- name (text)
- category (text)
- description (text)
- rules (text)
- date (timestamp)
- time (text)
- venue (text)
- prize_money (integer)
- team_size (text)
- image_url (text)
- is_registration_open (boolean)
- created_at (timestamp)

**2. registrations**
- id (UUID, primary key)
- event_id (foreign key → events)
- user_id (foreign key → users)
- team_name (text)
- team_members (jsonb)
- payment_status (text)
- created_at (timestamp)

**3. users**
- id (UUID, primary key, from Supabase Auth)
- full_name (text)
- email (text)
- phone (text)
- university (text)
- year (text)
- created_at (timestamp)

**4. team_members**
- id (UUID, primary key)
- name (text)
- role (text)
- department (text)
- image_url (text)
- linkedin (text)
- instagram (text)
- email (text)
- order (integer)

**5. gallery_images**
- id (UUID, primary key)
- image_url (text)
- category (text)
- year (text)
- created_at (timestamp)

**6. contact_submissions**
- id (UUID, primary key)
- name (text)
- email (text)
- phone (text)
- subject (text)
- message (text)
- created_at (timestamp)

### **Environment Variables Setup:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## **Key Features to Implement**

### **Performance:**
- Image optimization with Next.js Image
- Lazy loading for images/components
- Code splitting
- SEO optimization (meta tags, Open Graph)

### **Interactivity:**
- Smooth scroll
- Loading states
- Error handling
- Toast notifications
- Form validation
- Search functionality
- Infinite scroll for gallery

### **Responsiveness:**
- Mobile-first approach
- Touch-friendly interactions
- Optimized for all screen sizes

---

## **Folder Structure**
```
mosaic-website/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx (Home)
│   │   ├── events/
│   │   ├── about/
│   │   ├── team/
│   │   ├── gallery/
│   │   ├── contact/
│   │   └── schedule/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (buttons, cards, modals)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/
│   ├── supabase.ts
│   └── utils.ts
├── public/
│   ├── guideline.jpg
│   └── images/
└── styles/
```

---

## **Deliverables**
1. Fully functional Next.js website with all pages
2. Responsive design matching guideline.jpg aesthetics
3. Supabase integration with all CRUD operations
4. Smooth GSAP + Framer animations throughout
5. Admin panel to manage events/registrations (optional)
6. Deployment-ready code

---

**Note:** Reference the exact colors, fonts, spacing, and design patterns from `guideline.jpg`. Ensure all animations are smooth (60fps), and the website loads quickly with optimized assets.