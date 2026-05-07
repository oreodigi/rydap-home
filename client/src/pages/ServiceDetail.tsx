import { appLinks } from "@/lib/appLinks";
import { services } from "@/data/services";
import logoLight from "@/images/web lite logo.png";
import { ArrowLeft, ArrowRight, Check, Download, MapPin } from "lucide-react";
import { useParams } from "wouter";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="service-detail-page">
        <section className="service-detail-hero compact">
          <div className="reference-container">
            <a className="service-detail-logo" href="/">
              <img src={logoLight} alt="Rydap" />
            </a>
            <h1>Service not found</h1>
            <a className="primary-action" href="/#services">
              View Services <ArrowLeft />
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="reference-container service-detail-nav">
          <a className="service-detail-logo" href="/" aria-label="Rydap home">
            <img src={logoLight} alt="Rydap" />
          </a>
          <a className="service-back-link" href="/#services">
            <ArrowLeft /> Back to Services
          </a>
        </div>

        <div className="reference-container service-detail-grid">
          <div className="service-detail-copy">
            <span>
              <MapPin /> Now Serving Pune
            </span>
            <h1>{service.title}</h1>
            <p>{service.detail}</p>
            <div className="service-detail-actions">
              <a className="primary-action" href={appLinks.customerAndroid}>
                Download App <Download />
              </a>
              <a className="secondary-action" href={appLinks.partnerSignup}>
                Partner With Rydap <ArrowRight />
              </a>
            </div>
          </div>

          <div className="service-detail-visual">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </section>

      <section className="service-detail-body">
        <div className="reference-container service-detail-body-grid">
          <div>
            <span className="service-detail-eyebrow">Why this service</span>
            <h2>Built For Fast, Reliable City Movement</h2>
            <p>
              Book directly from the Rydap app, track the assigned partner live, and keep every
              trip or delivery organized from one customer account.
            </p>
          </div>

          <div className="service-highlight-grid">
            {service.highlights.map((highlight) => (
              <article className="service-highlight-card" key={highlight}>
                <Check />
                <h3>{highlight}</h3>
                <p>Designed to reduce waiting, improve visibility and make repeat bookings easier.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
