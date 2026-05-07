import { appLinks } from "@/lib/appLinks";
import { services } from "@/data/services";
import type { LucideIcon } from "lucide-react";
import {
  Ambulance,
  ArrowRight,
  Bike,
  Boxes,
  Building2,
  Car,
  Check,
  ChevronDown,
  Clock3,
  Crown,
  Download,
  Facebook,
  Headphones,
  Home as HomeIcon,
  Instagram,
  MapPin,
  Menu,
  Navigation,
  Package,
  ShieldCheck,
  Star,
  Truck,
  User,
  Wallet,
} from "lucide-react";

import appScreenHome from "@/images/generated/app-screen-home.png";
import appScreenMap from "@/images/generated/app-screen-map.png";
import citySkyline from "@/images/generated/city-skyline-green.png";
import heroAuto from "@/images/generated/hero-auto-rickshaw.png";
import heroCab from "@/images/generated/hero-cab.png";
import heroPhone from "@/images/generated/hero-phone-mockup.png";
import qrPlaceholder from "@/images/generated/qr-placeholder.png";
import routeLines from "@/images/generated/route-lines.png";
import appStoreBadge from "@/images/generated/app store.png";
import googlePlayBadge from "@/images/generated/google play.png";
import logoLight from "@/images/web lite logo.png";

const navItems = ["Home", "Services", "How It Works", "For Partners", "Safety", "FAQ", "Contact"];

const trustItems = ["Pune-based brand", "Maharashtra-operated", "Verified partners", "Live tracking", "24/7 support"];

const localTrust = [
  {
    title: "Homegrown in Pune",
    text: "Pune city ke daily rides, parcels ani moving needs samjun RYDAP build kela aahe.",
    image: heroAuto,
  },
  {
    title: "Maharashtra-based company",
    text: "Local market, local routes, local support - aaplya Maharashtra sathi focused platform.",
    image: heroCab,
  },
  {
    title: "Marathi-operated service",
    text: "Brand operation Marathi-rooted team kadun, with clean tech experience for local users.",
    image: heroPhone,
  },
  {
    title: "Verified local partners",
    text: "Driver, delivery, moving ani ambulance partners local accountability sobat onboard hotat.",
    image: appScreenMap,
  },
  {
    title: "Built for local mobility needs",
    text: "Ride, parcel, moving ani emergency support ekach app madhye manage kara.",
    image: citySkyline,
  },
];

const whyItems = [
  { title: "Pune-focused Service", text: "Local mobility needs samjun built.", icon: MapPin },
  { title: "Maharashtra-rooted", text: "Aaplya Maharashtra sathi local brand.", icon: Building2 },
  { title: "Marathi-operated Support", text: "Local seva, fast support, smart app.", icon: Headphones },
  { title: "Verified Partners", text: "Drivers ani service partners verified.", icon: ShieldCheck },
  { title: "Live Tracking", text: "Trips, parcels ani updates app madhye.", icon: Navigation },
  { title: "Multiple Services", text: "Rides, delivery, moving ani emergency.", icon: Boxes },
  { title: "Affordable Local Pricing", text: "Daily city use sathi practical pricing.", icon: Wallet },
  { title: "24/7 Support", text: "Support-first approach for local users.", icon: Clock3 },
];

const steps = [
  { title: "App Download Kara", text: "Customer app install kara ani account setup kara.", icon: Download },
  { title: "Service Choose Kara", text: "Ride, parcel, moving kiwa ambulance option select kara.", icon: MapPin },
  { title: "Track & Manage Kara", text: "Partner info, live tracking ani updates app madhye bagha.", icon: Navigation },
];

const appFeatures = [
  "Booking sirf mobile app madhun hoti hai",
  "Service selection, live tracking ani support app madhye",
  "Rides, parcels, moving aur emergency support",
  "Google Play / App Store availability as per release status",
];

const partners = [
  {
    title: "Drive With Us",
    text: "Bike, auto kiwa cab driver mhanun join kara.",
    icon: Car,
    cta: "Join as Driver",
  },
  {
    title: "Deliver With Us",
    text: "Parcel delivery partner banke local deliveries handle kara.",
    icon: Package,
    cta: "Join as Delivery Partner",
  },
  {
    title: "Move With Us",
    text: "Moving vehicle kiwa packers support team sobat join kara.",
    icon: Truck,
    cta: "Join as Moving Partner",
  },
  {
    title: "Ambulance Partner",
    text: "Emergency support network cha part bana.",
    icon: Ambulance,
    cta: "Join as Partner",
  },
];

const safetyItems = [
  "Verified drivers & partners",
  "Live trip tracking",
  "Emergency support",
  "Transparent service details",
  "Customer support",
  "Local accountability",
];

const testimonials = [
  {
    name: "Sagar Patil",
    city: "Pune",
    text: "Sinhagad Road se office ride ke liye Bike Taxi use kiya. App smooth hai aur ride quickly mil gayi.",
  },
  {
    name: "Neha Sharma",
    city: "Pune",
    text: "Parcel delivery business ke liye kaafi useful laga. Local shipments manage karna easy ho gaya.",
  },
  {
    name: "Rahul Deshmukh",
    city: "Pune",
    text: "Moving service ka experience simple tha. App se details samajh aaye aur local shifting mein help mili.",
  },
];

const faqs = [
  {
    q: "Kya website se booking kar sakte hain?",
    a: "Nahi. Booking sirf RYDAP mobile app se hoti hai. Website par aap services, brand info, partner opportunities aur app download options dekh sakte hain.",
  },
  {
    q: "RYDAP app kaise download karein?",
    a: "Homepage par diye gaye Download App button ya QR code ke through app download kara.",
  },
  {
    q: "RYDAP kis city ka brand hai?",
    a: "RYDAP Pune-based, Maharashtra-operated homegrown mobility brand hai.",
  },
  {
    q: "Kya RYDAP Marathi-based company hai?",
    a: "Haan. RYDAP Maharashtra-based aur Marathi-operated company hai, jo local mobility needs ko dhyan mein rakhkar build ki gayi hai.",
  },
  {
    q: "Kya RYDAP abhi Pune mein available hai?",
    a: "RYDAP Pune-focused platform hai. Expansion updates app aur website par share kiye jayenge.",
  },
  {
    q: "Driver ya partner kaise join karein?",
    a: "Join as Partner button use kara. Team onboarding ke liye contact karegi.",
  },
];

const serviceIcons: Record<string, LucideIcon> = {
  "bike-taxi": Bike,
  "auto-rickshaw": Truck,
  cab: Car,
  "premium-cab": Crown,
  "parcel-delivery": Package,
  "moving-services": Truck,
  "movers-packers": Boxes,
  ambulance: Ambulance,
};

function StoreBadge({ type }: { type: "play" | "app" }) {
  const image = type === "play" ? googlePlayBadge : appStoreBadge;
  const label = type === "play" ? "Get it on Google Play" : "Download on the App Store";

  return (
    <a className="store-badge" href={type === "play" ? appLinks.customerAndroid : appLinks.customerIos} aria-label={label}>
      <img src={image} alt={label} />
    </a>
  );
}

function SectionTitle({ eyebrow, title, className = "" }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <div className={`reference-section-title ${className}`}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="reference-page">
      <header className="reference-header">
        <a className="reference-logo" href="#home" aria-label="Rydap home">
          <img src={logoLight} alt="Rydap" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a className={index === 0 ? "active" : ""} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="download-nav" href={appLinks.customerAndroid}>
          Download App <Download />
        </a>

        <button className="mobile-menu-button" aria-label="Open menu">
          <Menu />
        </button>
      </header>

      <section className="reference-hero" id="home">
        <img className="hero-skyline" src={citySkyline} alt="" aria-hidden="true" />
        <img className="hero-routes" src={routeLines} alt="" aria-hidden="true" />

        <div className="reference-container hero-grid">
          <div className="hero-copy">
            <div className="city-pill">
              <MapPin />
              Homegrown in Pune
              <ChevronDown />
            </div>

            <h1>
              Pune Ka <span>Homegrown</span> Mobility App
            </h1>

            <p>
              <strong>Rides, Parcels, Moving & Emergency Support - Sab Ek App Madhye.</strong>
            </p>

            <div className="hero-actions">
              <a className="primary-action" href={appLinks.customerAndroid}>
                Download Customer App <Download />
              </a>
              <a className="secondary-action" href={appLinks.partnerSignup}>
                Join as Partner <User />
              </a>
            </div>

            <div className="hero-download-card">
              <h3>Booking App Varach Hote</h3>
              <p>Website var services explore kara, app download kara, ani actual booking mobile app madhun complete kara.</p>
              <div className="app-download-row">
                <StoreBadge type="play" />
                <StoreBadge type="app" />
                <div className="qr-download">
                  <img src={qrPlaceholder} alt="Rydap QR code placeholder" />
                  <span>App release status nusar availability.</span>
                </div>
              </div>
            </div>

            <div className="hero-trust-row">
              {trustItems.map((item) => (
                <span key={item}>
                  <Check />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="pin-marker">
              <MapPin />
            </div>
            <img className="hero-auto" src={heroAuto} alt="Rydap auto rickshaw" />
            <img className="hero-cab" src={heroCab} alt="Rydap cab" />
            <img className="hero-phone" src={heroPhone} alt="Rydap app phone mockup" />
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="reference-container">
          <div className="services-header-row">
            <div className="services-heading">
              <span className="services-pill">
                <span />
                Our Services
              </span>
              <h2>
                All Your Everyday Needs,
                <br />
                Delivered With <em>Care</em>
              </h2>
            </div>
            <a className="services-view-all" href={appLinks.customerAndroid}>
              Download App
              <span>
                <ArrowRight />
              </span>
            </a>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug];
              const appFirst = service.slug === "bike-taxi" || service.slug === "auto-rickshaw" || service.slug === "cab" || service.slug === "premium-cab";
              return (
                <a
                  className={`service-card ${service.slug === "auto-rickshaw" ? "featured" : ""}`}
                  href={appLinks.customerAndroid}
                  key={service.title}
                >
                  <span className="service-card-media">
                    <img src={service.image} alt={service.title} />
                    <span className="service-icon-badge">
                      <Icon />
                    </span>
                    {service.slug === "auto-rickshaw" ? <span className="featured-star">*</span> : null}
                  </span>
                  <span className="service-card-content">
                    <span className="service-card-kicker">RYDAP Service</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="service-card-footer">
                      {appFirst ? "App Mein Dekhein" : "Download App"}
                      <span>
                        <ArrowRight />
                      </span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="local-trust-section">
        <div className="reference-container local-trust-panel">
          <div className="local-trust-copy">
            <span>Built In Pune. Made For Maharashtra.</span>
            <h2>Aaplya Maharashtra Sathi Local Mobility Brand</h2>
            <p>
              RYDAP ek local, Maharashtra-rooted brand hai jo rides, parcels, moving aur
              emergency transport ko smart app experience mein laata hai. Website var brand ani
              services samjun ghya; actual booking mobile app madhun complete kara.
            </p>
            <a className="primary-action" href={appLinks.customerAndroid}>
              Download RYDAP App <Download />
            </a>
          </div>

          <div className="local-trust-grid">
            {localTrust.map((item) => (
              <article className="local-trust-card" key={item.title}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="reference-container">
          <SectionTitle eyebrow="How It Works" title="RYDAP Kasa Kaam Karta?" className="center-title" />
          <div className="steps-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="step-card" key={step.title}>
                  <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="step-line" />
                  <Icon />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="app-download-section">
        <div className="reference-container app-download-card">
          <div className="app-copy">
            <h2>Sab Kuch <span>App Madhye</span></h2>
            <p>Website var RYDAP samjun ghya. Booking, tracking, service management ani support sathi app download kara.</p>
            <ul>
              {appFeatures.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="app-download-row">
              <StoreBadge type="play" />
              <StoreBadge type="app" />
              <div className="qr-download">
                <img src={qrPlaceholder} alt="Rydap QR code placeholder" />
                <span>Scan to Download</span>
              </div>
            </div>
          </div>

          <div className="app-phone-stack">
            <div className="flow-lines" />
            <img className="app-phone-one" src={appScreenHome} alt="Rydap app home screen" />
            <img className="app-phone-two" src={appScreenMap} alt="Rydap app live tracking screen" />
          </div>
        </div>
      </section>

      <section className="why-card-section">
        <div className="reference-container">
          <div className="why-panel">
            <span>RYDAP Ka / Kaay Choose Kara?</span>
            <h2>Local Seva, Smart Technology</h2>
            <p className="why-panel-copy">RYDAP ek local brand aahe jo Pune ani Maharashtra users sathi rides, parcel, moving ani emergency services la ekach app madhye simple banavto.</p>
            <div className="why-grid">
              {whyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="why-item" key={item.title}>
                    <Icon />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section" id="for-partners">
        <div className="reference-container partner-grid">
          <div className="partner-heading">
            <span>RYDAP Sobat Earn Kara</span>
            <p>Driver, delivery partner, moving partner kiwa ambulance partner banna hai? Local Maharashtra network ka part bano.</p>
          </div>

          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <article className="partner-card" key={partner.title}>
                <Icon />
                <div>
                  <h3>{partner.title}</h3>
                  <p>{partner.text}</p>
                  <a href={appLinks.partnerSignup}>
                    {partner.cta} <ArrowRight />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="safety-section" id="safety">
        <div className="reference-container safety-panel">
          <div>
            <span>Safety Ani Bharosa First</span>
            <h2>Verified Local Network, Transparent App Experience</h2>
            <p>RYDAP madhye verified partners, live tracking, support-first approach ani transparent service details mule har experience zasta safe ani reliable banto.</p>
          </div>
          <div className="safety-grid">
            {safetyItems.map((item) => (
              <div key={item}>
                <ShieldCheck />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="reference-container">
          <h2>What Pune Customers Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <div className="customer">
                  <div>{testimonial.name.charAt(0)}</div>
                  <span>
                    <strong>{testimonial.name}</strong>
                    {testimonial.city}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="reference-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <a href={appLinks.customerAndroid}>Download App <ArrowRight /></a>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <ChevronDown />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="reference-footer" id="contact">
        <div className="reference-container footer-grid">
          <div>
            <img src={logoLight} alt="Rydap" />
            <p>RYDAP Pune ka homegrown, Maharashtra-based, Marathi-operated mobility app hai. Rides, parcels, moving services ani emergency support sathi trusted local platform. Booking sathi app download kara.</p>
            <div className="social-row">
              <Facebook />
              <Instagram />
              <Building2 />
              <Navigation />
            </div>
          </div>

          <div>
            <h3>Services</h3>
            {services.map((service) => (
              <a href={appLinks.customerAndroid} key={service.slug}>{service.title}</a>
            ))}
          </div>

          <div>
            <h3>Company</h3>
            <a href="#home">Homegrown in Pune</a>
            <a href="#for-partners">Partner Network</a>
            <a href="#safety">Safety</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Terms</a>
            <a href="#contact">Privacy Policy</a>
          </div>

          <div id="cities">
            <h3>Contact</h3>
            <a href="#cities">Pune, Maharashtra</a>
            <a href="mailto:support@rydap.in">support@rydap.in</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <a href="#cities">Mumbai, Nashik, Nagpur coming soon</a>
          </div>

          <div>
            <h3>Download App</h3>
            <StoreBadge type="play" />
            <StoreBadge type="app" />
          </div>
        </div>
        <div className="footer-bottom reference-container">
          <span>(c) 2026 RYDAP. All rights reserved.</span>
          <span>Maharashtra-based | Marathi-operated</span>
        </div>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <a href="#home"><HomeIcon />Home</a>
        <a href="#services"><Boxes />Services</a>
        <a href="#how-it-works"><Clock3 />How</a>
        <a href="#contact"><User />Contact</a>
      </nav>
      <a className="mobile-floating-download" href={appLinks.customerAndroid}>
        Download RYDAP App <Download />
      </a>
    </main>
  );
}
