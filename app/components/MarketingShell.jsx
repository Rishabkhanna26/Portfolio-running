import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function MarketingShell({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
