import { Button } from "@/components/ui/button";
import { rydapConfig } from "@/config/rydap";
import { ArrowRight, Download, Play, QrCode, Smartphone } from "lucide-react";

type AppDownloadCTAProps = {
  variant?: "light" | "dark" | "compact";
  showQr?: boolean;
  partnerLabel?: string;
};

export function AppDownloadCTA({
  variant = "light",
  showQr = false,
  partnerLabel = "Become a Partner",
}: AppDownloadCTAProps) {
  const isDark = variant === "dark";

  return (
    <div className={`app-download-cta app-download-cta-${variant}`}>
      <div className="store-buttons" aria-label="Rydap app download links">
        <Button asChild className="cta-primary">
          <a href={rydapConfig.appLinks.customerAndroid}>
            <Download /> Download App
          </a>
        </Button>
        <Button asChild variant="outline" className={isDark ? "cta-outline-dark" : "cta-outline"}>
          <a href={rydapConfig.appLinks.deepLink}>
            <Play /> Open App
          </a>
        </Button>
        <Button asChild variant="ghost" className={isDark ? "cta-ghost-dark" : "cta-ghost"}>
          <a href="#partners">
            {partnerLabel} <ArrowRight />
          </a>
        </Button>
      </div>

      {showQr ? (
        <div className="qr-card" aria-label="Scan QR code to get Rydap app">
          <div className="qr-mark">
            <QrCode />
          </div>
          <div>
            <strong>Scan to install</strong>
            <span>Customer, driver, and partner app links</span>
          </div>
        </div>
      ) : null}

      <div className="platform-note">
        <Smartphone />
        <span>Available on Android & iPhone</span>
      </div>
    </div>
  );
}
