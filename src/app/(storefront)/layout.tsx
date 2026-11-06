import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteHelpChat } from "@/components/layout/SiteHelpChat";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-button bg-foreground px-4 py-2 text-sm font-semibold text-background transition focus:translate-y-0">Skip to main content</a>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <SiteHelpChat />
    </div>
  );
}
