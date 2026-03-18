import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function MarketingShell({ children }) {
  return (
    <div className="site-page-shell min-h-screen overflow-x-hidden text-white">
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
