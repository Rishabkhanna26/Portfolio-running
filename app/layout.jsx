import './globals.css'
import PageLoader from '@/app/components/PageLoader'
import Analytics from '@/app/components/Analytics'

export const metadata = {
  title: 'RISHAB Portfolio',
  description: 'Rebuilt Next.js App Router project',
  verification: {
    google: 'QvkOwLGubR6qEoYYAaQ60xCjD5GBvLgVTefAeqVFr40'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PageLoader />
        {/* Client-side analytics (gtag) */}
        <Analytics />
        {children}
      </body>
    </html>
  )
}
