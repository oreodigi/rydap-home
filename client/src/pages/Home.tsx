import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  Facebook,
  Headphones,
  Instagram,
  LifeBuoy,
  MapPin,
  Menu,
  Navigation,
  Package,
  Phone,
  Route,
  ShieldCheck,
  Smartphone,
  Star,
  Truck,
  Wallet,
} from "lucide-react";

import { appLinks } from "@/lib/appLinks";
import appStoreBadge from "@/images/generated/app store.png";
import googlePlayBadge from "@/images/generated/google play.png";
import logoLight from "@/images/web lite logo.png";
import { services as serviceCatalog } from "@/data/services";

const asset = (file: string) => `/assets/rydap/placeholders/${file}`;

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why RYDAP", href: "#why-rydap" },
  { label: "Drivers", href: "#drivers" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  {
    title: "Bike Taxi",
    copy: "Fast daily commute",
    image: asset("service-bike-taxi.png"),
    icon: Bike,
  },
  {
    title: "Auto Rickshaw",
    copy: "Local Pune rides",
    image: asset("service-auto.png"),
    icon: Truck,
    featured: true,
  },
  {
    title: "Cab",
    copy: "Comfortable city travel",
    image: asset("service-cab.png"),
    icon: Car,
  },
  {
    title: "Rentals",
    copy: "Hourly ride convenience",
    image: asset("service-rental.png"),
    icon: Clock3,
  },
  {
    title: "Delivery",
    copy: "Local parcel movement",
    image: asset("service-delivery.png"),
    icon: Package,
  },
  {
    title: "Outstation",
    copy: "Maharashtra travel made easy",
    image: asset("service-outstation.png"),
    icon: Route,
  },
];

const whyCards = [
  { title: "Maharashtra-based", text: "Local brand, local operations, Pune-first growth.", icon: MapPin },
  { title: "Verified Drivers", text: "Partner onboarding with documents and local accountability.", icon: BadgeCheck },
  { title: "Transparent Pricing", text: "Clear app-led ride details before every trip.", icon: Wallet },
  { title: "Live Tracking", text: "Trip status, driver info and updates inside the app.", icon: Navigation },
  { title: "Ride History", text: "Past rides, support and service records app madhye.", icon: Smartphone },
  { title: "Local Support", text: "Marathi/Hinglish friendly support for daily users.", icon: Headphones },
];

const downloadBullets = ["Quick booking", "Live tracking", "Safe local rides"];

const logisticsServices = [
  {
    title: "Parcel Delivery",
    tag: "Two-wheeler local delivery",
    text: "Documents, small boxes aur business parcels Pune ke andar app se dispatch kara.",
    image: asset("parcel-box.png"),
    icon: Package,
  },
  {
    title: "Mini Truck & Tempo",
    tag: "Goods movement",
    text: "Shop stock, appliances, furniture ani bulky items ke liye local truck support.",
    image: asset("parcel-truck.png"),
    icon: Truck,
    featured: true,
  },
  {
    title: "Packers & Movers",
    tag: "Managed shifting",
    text: "Packing, loading, transport aur unloading support for home and office shifting.",
    image: asset("packers-movers.png"),
    icon: ShieldCheck,
  },
];

const logisticsHighlights = [
  "App-based request and tracking",
  "Bike, mini truck and shifting partner options",
  "Local Pune/Maharashtra partner network",
  "Support for parcels, goods and full shifting",
];

const driverSteps = [
  { title: "Register", text: "Basic details submit kara.", icon: Phone },
  { title: "Verify Documents", text: "License, vehicle ani KYC check.", icon: ShieldCheck },
  { title: "Start Earning", text: "Approved zala ki rides accept kara.", icon: Wallet },
];

const areas = [
  "Pune",
  "Pimpri-Chinchwad",
  "Baner",
  "Wakad",
  "Hinjewadi",
  "Kothrud",
  "Hadapsar",
  "Viman Nagar",
  "Shivajinagar",
  "Maharashtra expansion coming soon",
];

const safetyItems = [
  { title: "Verified drivers", icon: BadgeCheck },
  { title: "Ride tracking", icon: Navigation },
  { title: "Emergency support", icon: LifeBuoy },
  { title: "Transparent details", icon: CheckCircle2 },
  { title: "Driver/customer support", icon: Headphones },
  { title: "Secure app experience", icon: ShieldCheck },
];

const testimonials = [
  {
    text: "RYDAP app se auto booking simple ho gaya. Pune local travel ke liye useful hai.",
    name: "Amit",
    area: "Kothrud",
  },
  {
    text: "Office commute ke liye bike taxi fast milti hai. App clean aur tracking clear hai.",
    name: "Priya",
    area: "Hinjewadi",
  },
  {
    text: "Local parcel movement ke liye RYDAP practical option lagla. Pune business sathi helpful.",
    name: "Sagar",
    area: "Baner",
  },
];

const faqs = [
  {
    q: "Can I book a ride from the website?",
    a: "No. Ride booking is available only through the RYDAP mobile app. Website pe services explore karein aur app download karein.",
  },
  {
    q: "Is RYDAP available in Pune?",
    a: "Yes. RYDAP is Pune-first and Maharashtra-based, with expansion planned for more Maharashtra markets.",
  },
  {
    q: "Which services are available?",
    a: "Bike taxi, auto, cab, rentals, delivery, and outstation services are shown on the app depending on availability.",
  },
  {
    q: "Can drivers join RYDAP?",
    a: "Yes. Drivers can register through the Become a Driver CTA or contact flow. The team will guide onboarding.",
  },
  {
    q: "Is the app required?",
    a: "Yes. Customers need the RYDAP app to book rides, track trips and manage ride history.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function StoreBadge({ type }: { type: "play" | "app" }) {
  const image = type === "play" ? googlePlayBadge : appStoreBadge;
  const href = type === "play" ? appLinks.customerAndroid : appLinks.customerIos;
  const label = type === "play" ? "Get it on Google Play" : "Download on the App Store";

  return (
    <a className="r-store-badge" href={href} aria-label={label}>
      <img src={image} alt={label} loading="lazy" />
    </a>
  );
}

function SectionBadge({ children }: { children: string }) {
  return (
    <span className="r-section-badge">
      <span />
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="r-btn r-btn-primary" href={href}>
      {children}
      <span>
        <ArrowRight />
      </span>
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="r-btn r-btn-secondary" href={href}>
      {children}
      <span>
        <ArrowRight />
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="r-header">
      <a className="r-logo" href="#home" aria-label="RYDAP home">
        <img src={logoLight} alt="RYDAP" />
      </a>

      <nav className="r-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="r-header-actions">
        <a className="r-header-partner" href={appLinks.partnerSignup}>
          Become a Driver
        </a>
        <a className="r-header-download" href={appLinks.customerAndroid}>
          Download App
          <Download />
        </a>
      </div>

      <button className="r-menu-button" aria-label="Open menu" onClick={() => setMenuOpen((value) => !value)}>
        <Menu />
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="r-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={appLinks.partnerSignup} onClick={() => setMenuOpen(false)}>
              Become a Driver
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="r-section r-hero" id="home">
      <Header />
      <div className="r-hero-orb r-hero-orb-one" />
      <div className="r-hero-orb r-hero-orb-two" />

      <div className="r-container r-hero-grid">
        <motion.div className="r-hero-copy" initial="hidden" animate="show" variants={stagger}>
          <motion.div className="r-local-badge" variants={fadeUp}>
            <MapPin />
            Made for Pune • Built in Maharashtra
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Pune ka <span>Homegrown</span> Mobility App
          </motion.h1>

          <motion.p className="r-hero-line" variants={fadeUp}>
            Auto, Cab, Bike Taxi - Sab Ek App Mein
          </motion.p>

          <motion.p className="r-hero-text" variants={fadeUp}>
            RYDAP is a Maharashtra-based mobility platform built for fast, safe, and affordable local rides.
          </motion.p>

          <motion.div className="r-hero-actions" variants={fadeUp}>
            <PrimaryButton href={appLinks.customerAndroid}>Download App</PrimaryButton>
            <SecondaryButton href={appLinks.partnerSignup}>Become a Driver</SecondaryButton>
          </motion.div>

          <motion.div className="r-booking-note" variants={fadeUp}>
            <ShieldCheck />
            Website pe booking nahi hoti - ride book karne ke liye app download karein.
          </motion.div>
        </motion.div>

        <motion.div
          className="r-hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="r-hero-visual-shell">
            <img className="r-hero-phone" src={asset("hero-phone-mockup.png")} alt="RYDAP app phone mockup" />
            <div className="r-hero-service-cloud" aria-label="RYDAP services">
              {serviceCatalog.map((service) => (
                <img key={service.slug} src={service.image} alt={`RYDAP ${service.title} service`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="r-section r-services" id="services">
      <div className="r-container">
        <motion.div className="r-section-head r-split-head" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Services</SectionBadge>
            <h2>All Your Everyday Rides, One RYDAP App Mein</h2>
            <p>Rozcha travel easy kara - bike, auto, cab, delivery aur outstation rides.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <PrimaryButton href={appLinks.customerAndroid}>Download App</PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div className="r-service-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`r-service-card ${service.featured ? "is-featured" : ""}`}
                href={appLinks.customerAndroid}
                key={service.title}
              >
                <div className="r-service-media">
                  <img src={service.image} alt={`RYDAP ${service.title} service`} loading="lazy" />
                  <span className="r-service-icon">
                    <Icon />
                  </span>
                </div>
                <div className="r-service-body">
                  <span>Available on App</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyRydap() {
  return (
    <section className="r-section r-why" id="why-rydap">
      <div className="r-container">
        <motion.div className="r-section-head r-centered-head" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Local Trust</SectionBadge>
            <h2>RYDAP kyu choose kare?</h2>
            <p>Pune-first mobility brand, local drivers, app-based booking ani support ekach platform madhye.</p>
          </motion.div>
        </motion.div>

        <motion.div className="r-stat-row" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {["Pune-first", "Verified Drivers", "App-based Booking", "Local Support"].map((stat) => (
            <motion.div className="r-stat-card" variants={fadeUp} key={stat}>
              {stat}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="r-benefit-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          {whyCards.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article className="r-benefit-card" variants={fadeUp} whileHover={{ y: -6 }} key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function LogisticsMovingSection() {
  return (
    <section className="r-section r-logistics">
      <div className="r-container">
        <motion.div className="r-logistics-head" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Parcels & Moving</SectionBadge>
            <h2>Parcel bhejna ho ya ghar shift karna ho - RYDAP app madhye.</h2>
            <p>
              Porter-style instant delivery convenience aur packers-movers level managed shifting ko RYDAP local Pune network ke saath simple banata hai.
              Website par rates ya booking form nahi - app download karke service request kara.
            </p>
          </motion.div>
          <motion.div className="r-logistics-cta" variants={fadeUp}>
            <PrimaryButton href={appLinks.customerAndroid}>Download App</PrimaryButton>
            <SecondaryButton href={appLinks.partnerSignup}>Join Moving Network</SecondaryButton>
          </motion.div>
        </motion.div>

        <motion.div className="r-logistics-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          {logisticsServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article className={`r-logistics-card ${service.featured ? "is-featured" : ""}`} variants={fadeUp} whileHover={{ y: -8 }} key={service.title}>
                <div className="r-logistics-image">
                  <img src={service.image} alt={`RYDAP ${service.title}`} loading="lazy" />
                  <span>
                    <Icon />
                  </span>
                </div>
                <div>
                  <small>{service.tag}</small>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <a href={appLinks.customerAndroid}>
                  App Mein Dekhein
                  <ArrowRight />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div className="r-logistics-bottom" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div className="r-logistics-note" variants={fadeUp}>
            <h3>Built for local businesses, homes ani daily movement.</h3>
            <p>
              Retail parcel, same-city goods movement, furniture shifting, office relocation and home shifting - all service discovery happens here, actual request app se hoti hai.
            </p>
          </motion.div>
          <motion.div className="r-logistics-points" variants={stagger}>
            {logisticsHighlights.map((item) => (
              <motion.span variants={fadeUp} key={item}>
                <CheckCircle2 />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AppDownloadSection() {
  return (
    <section className="r-section r-download-section">
      <div className="r-container">
        <motion.div className="r-download-panel" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div className="r-download-copy" variants={fadeUp}>
            <SectionBadge>Book on App</SectionBadge>
            <h2>Ride book karna hai? App download karo.</h2>
            <p>RYDAP website par direct booking nahi hoti. Booking ke liye mobile app install karein.</p>
            <div className="r-download-bullets">
              {downloadBullets.map((item) => (
                <span key={item}>
                  <CheckCircle2 />
                  {item}
                </span>
              ))}
            </div>
            <div className="r-store-row">
              <StoreBadge type="play" />
              <StoreBadge type="app" />
              <img className="r-qr" src={asset("qr-placeholder.png")} alt="RYDAP app download QR placeholder" loading="lazy" />
            </div>
          </motion.div>

          <motion.div className="r-download-visual" variants={fadeUp}>
            <img src={asset("app-download-phone.png")} alt="RYDAP app booking screen" loading="lazy" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DriverPartnerSection() {
  return (
    <section className="r-section r-driver" id="drivers">
      <div className="r-container r-driver-grid">
        <motion.div className="r-driver-copy" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>For Drivers</SectionBadge>
            <h2>Driver ho? RYDAP ke saath kamaai start karo.</h2>
            <p>Auto, bike taxi, cab aur local delivery partners ke liye simple onboarding.</p>
            <PrimaryButton href={appLinks.partnerSignup}>Become a Driver</PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div className="r-driver-panel" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.img variants={fadeUp} src={asset("driver-partner.png")} alt="RYDAP driver partner onboarding" loading="lazy" />
          <div className="r-driver-timeline">
            {driverSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article className="r-driver-step" variants={fadeUp} key={step.title}>
                  <span>
                    <Icon />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoverageAreas() {
  return (
    <section className="r-section r-coverage">
      <div className="r-container">
        <motion.div className="r-section-head r-centered-head" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Coverage</SectionBadge>
            <h2>Pune se shuru, Maharashtra ke liye.</h2>
            <p>Local routes, daily commute zones aur expansion markets - RYDAP grows with Maharashtra.</p>
          </motion.div>
        </motion.div>
        <motion.div className="r-area-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {areas.map((area) => (
            <motion.span variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} key={area}>
              <MapPin />
              {area}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustSafetySection() {
  return (
    <section className="r-section r-safety" id="safety">
      <div className="r-container r-safety-grid">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Safety</SectionBadge>
            <h2>Safe rides. Local trust.</h2>
            <p>Verified local partners, transparent ride details and app-led support keep the ride experience simple and dependable.</p>
          </motion.div>
        </motion.div>
        <motion.div className="r-safety-list" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {safetyItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article variants={fadeUp} key={item.title}>
                <Icon />
                <span>{item.title}</span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="r-section r-testimonials">
      <div className="r-container">
        <motion.div className="r-section-head r-centered-head" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>Testimonials</SectionBadge>
            <h2>What Pune customers say</h2>
          </motion.div>
        </motion.div>
        <motion.div className="r-testimonial-grid" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {testimonials.map((item) => (
            <motion.article className="r-testimonial-card" variants={fadeUp} key={item.name}>
              <div className="r-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} />
                ))}
              </div>
              <p>{item.text}</p>
              <strong>
                {item.name}, {item.area}
              </strong>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="r-section r-faq" id="faq">
      <div className="r-container r-faq-grid">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionBadge>FAQ</SectionBadge>
            <h2>Clear answers before you download.</h2>
            <p>No website booking confusion. RYDAP is built around the mobile app experience.</p>
          </motion.div>
        </motion.div>

        <div className="r-faq-list">
          {faqs.map((faq, index) => (
            <article className={`r-faq-item ${open === index ? "is-open" : ""}`} key={faq.q}>
              <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                {faq.q}
                <ChevronDown />
              </button>
              <AnimatePresence initial={false}>
                {open === index ? (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p>{faq.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <footer className="r-footer" id="contact">
      <div className="r-container r-footer-grid">
        <div className="r-footer-brand">
          <img src={logoLight} alt="RYDAP" loading="lazy" />
          <p>RYDAP is a Pune-born, Maharashtra-based mobility platform built for local rides, drivers, and daily travel.</p>
          <div className="r-store-row">
            <StoreBadge type="play" />
            <StoreBadge type="app" />
          </div>
        </div>
        <FooterColumn title="Company" links={["Home", "Services", "Why RYDAP", "Safety", "FAQ"]} />
        <FooterColumn title="Services" links={services.map((item) => item.title)} />
        <div className="r-footer-column">
          <h3>Contact</h3>
          <a href="mailto:support@rydap.in">support@rydap.in</a>
          <a href="tel:+910000000000">+91 00000 00000</a>
          <span>Pune, Maharashtra</span>
          <div className="r-socials">
            <Facebook />
            <Instagram />
            <Navigation />
          </div>
        </div>
      </div>
      <div className="r-container r-footer-bottom">
        <span>© 2026 RYDAP. All rights reserved.</span>
        <span>Maharashtra-based brand • Booking only on app</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="r-footer-column">
      <h3>{title}</h3>
      {links.map((link) => (
        <a href={link === "Home" ? "#home" : link === "FAQ" ? "#faq" : "#services"} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

function MobileDownloadCTA() {
  return (
    <a className="r-mobile-download" href={appLinks.customerAndroid}>
      Download RYDAP App
      <Download />
    </a>
  );
}

export default function Home() {
  return (
    <main className="rydap-home">
      <HeroSection />
      <ServiceGrid />
      <LogisticsMovingSection />
      <WhyRydap />
      <AppDownloadSection />
      <DriverPartnerSection />
      <CoverageAreas />
      <TrustSafetySection />
      <TestimonialsSection />
      <FAQSection />
      <FooterCTA />
      <MobileDownloadCTA />
    </main>
  );
}
