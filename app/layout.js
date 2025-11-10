import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Viking Name Generator - Create Your Norse Warrior Name | Free Tool',
  description: 'Generate authentic Viking names instantly. Our free Viking name generator creates unique Norse warrior names based on historical traditions. Try it now!',
  authors: [{ name: 'Viking Name Forge' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Viking Name Generator - Free Norse Name Tool',
    description: 'Create your Viking warrior name instantly. Based on historical Norse naming traditions.',
    type: 'website',
    url: 'https://vikingnameforge.online',
    siteName: 'Viking Name Forge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viking Name Generator',
    description: 'Generate authentic Viking names based on historical traditions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Viking Name Generator",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Generate authentic Viking names based on historical Norse traditions",
    "operatingSystem": "Web browser"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What would my viking name be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Viking name would traditionally consist of a given name with Old Norse origins, followed by an epithet that describes your characteristics, deeds, or appearance. Use our viking name generator to discover your unique Norse identity. The generator combines authentic historical names with traditional epithets to create names that reflect actual Viking naming conventions."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our viking name generator uses authentic Old Norse names and epithets documented in historical records, sagas, and runestones from the Viking Age. The names are based on real Vikings who lived between 793-1066 CE. While the combinations are randomized, each element is historically accurate and reflects genuine Norse naming traditions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Viking and Norse names?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Viking and Norse names are essentially the same thing. Vikings were Norse people from Scandinavia, and their names came from Old Norse language and culture. The terms are often used interchangeably when discussing historical names from this period."
        }
      },
      {
        "@type": "Question",
        "name": "Were Viking women warriors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, though the extent is debated by historians. Historical records mention shield-maidens, and archaeological evidence has identified some female Viking Age burials with weapons and warrior grave goods. Famous examples from sagas include Lagertha and Freydis Eriksdottir."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
