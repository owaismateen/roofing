import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MobileStickyBar from "@/components/MobileStickyBar";
import { COMPANY_INFO, SERVICE_AREAS } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://roofingcompany.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roofing Company | Roofs Built to Last 30+ Years | Dallas-Fort Worth",
    template: "%s | Roofing Company",
  },
  description:
    "Roofing Company delivers engineered roof replacements, storm hail repair, and 25-year non-prorated warranties. Licensed & certified. Free 21-point roof inspection and written quote in 24 hours.",
  keywords: [
    "roofing company Dallas",
    "roof replacement DFW",
    "hail damage roof repair",
    "metal roofing Texas",
    "architectural shingles",
    "free roof inspection",
    "licensed roofer",
    "Roofing Company",
  ],
  authors: [{ name: "Roofing Company" }],
  creator: "Roofing Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roofingcompany.com",
    siteName: "Roofing Company",
    title: "Roofing Company | Roofs Built to Last 30+ Years",
    description:
      "Licensed and certified roofing contractor. Get a free 21-point inspection and written quote in 24 hours. Backed by our 25-Year Workmanship Warranty.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Finished architectural roof by Roofing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Company | Roofs Built to Last 30+ Years",
    description:
      "Licensed and certified roofing contractor. Free inspection and written quote in 24 hours.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness / RoofingContractor JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: COMPANY_INFO.name,
  description: "Licensed and certified roofing contractor offering roof replacement, storm damage repair, and free inspections.",
  url: "https://roofingcompany.com",
  telephone: COMPANY_INFO.phoneRaw,
  email: COMPANY_INFO.email,
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.state,
    postalCode: COMPANY_INFO.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.7970,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  areaServed: SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY_INFO.rating.toString(),
    reviewCount: COMPANY_INFO.reviewCount.toString(),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans antialiased text-slate-dark bg-surface-light selection:bg-accent selection:text-white pb-14 md:pb-0"
        suppressHydrationWarning
      >
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <MobileStickyBar />
      </body>
    </html>
  );
}
