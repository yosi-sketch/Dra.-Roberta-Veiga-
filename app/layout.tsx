import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#140306",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.robertaveiga.adv.br"),
  title:
    "Dra. Roberta Veiga · Advogada Criminalista & Especialista em Execução Penal | Rio Pomba - MG",
  description:
    "Defesa criminal estratégica, ética e resolutiva. Dra. Roberta Veiga (OAB/MG 210.863). Especialista em Execução Penal pela PUC MG: progressão de regime, liberdade antecipada, remição e livramento. Plantão 24h, audiência de custódia e habeas corpus. R. Floripes Maria de Jesus, 15 - Centro, Rio Pomba - MG. 5,0 ★ com 114 avaliações no Google.",
  keywords: [
    "Dra. Roberta Veiga",
    "Roberta Veiga Advogada",
    "Roberta Andrade Veiga Medeiros",
    "Advogada Criminalista Rio Pomba MG",
    "Especialista em Execução Penal",
    "Execução Penal Rio Pomba MG",
    "Advogado Criminal Rio Pomba",
    "Progressão de Regime",
    "Liberdade Antecipada Execução Penal",
    "Livramento Condicional",
    "Audiência de Custódia Rio Pomba",
    "Plantão Criminal 24 Horas Rio Pomba",
    "Habeas Corpus Minas Gerais",
    "OAB MG 210863",
    "Advogada Criminal Zona da Mata",
  ],
  authors: [
    { name: "Dra. Roberta Veiga" },
  ],
  creator: "Dra. Roberta Veiga Advocacia Criminal",
  publisher: "Dra. Roberta Veiga Advocacia Criminal",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.robertaveiga.adv.br",
    title:
      "Dra. Roberta Veiga · Advogada Criminalista & Especialista em Execução Penal | Rio Pomba - MG",
    description:
      "Defesa criminal técnica, ágil e combativa. Especialista em Execução Penal pela PUC MG. Plantão penal 24 horas. Avaliação máxima de 5,0 ★ com 114 avaliações no Google.",
    siteName: "Dra. Roberta Veiga Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 402,
        alt: "Dra. Roberta Veiga - Logotipo Oficial - OAB/MG 210.863",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Dra. Roberta Veiga Advocacia Criminal",
    alternateName: "Roberta Andrade Veiga Medeiros Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Roberta Veiga",
        jobTitle: "Advogada Criminalista",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Floripes Maria de Jesus, 15 - Loja 1 - Centro",
      addressLocality: "Rio Pomba",
      addressRegion: "MG",
      postalCode: "36180-000",
      addressCountry: "BR",
    },
    telephone: "+55-32-99909-7028",
    url: "https://www.robertaveiga.adv.br",
    image: "https://www.robertaveiga.adv.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "114",
    },
    areaServed: [
      "Rio Pomba",
      "Ubá",
      "Juiz de Fora",
      "Muriaé",
      "Viçosa",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/ravgms.adv",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-pearl font-sans text-ink antialiased selection:bg-brand-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
