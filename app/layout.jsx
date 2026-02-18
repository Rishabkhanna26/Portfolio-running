import './globals.css'
import PageLoader from '@/app/components/PageLoader'
import Analytics from '@/app/components/Analytics'

export const metadata = {
  title: 'RISHAB Portfolio',
  description: 'Rebuilt Next.js App Router project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {/* Client-side analytics (gtag) */}
        <Analytics />
        {children}
      </body>
    </html>
  )
}
