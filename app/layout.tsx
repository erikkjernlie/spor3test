import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Franklin, Oswald } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SPOR 3 Sandnes | Unik bar i hjertet av Sandnes",
  description:
    "Oppdag SPOR 3, en lun og folkelig bar i hjertet av Sandnes sentrum som serverer både mat og drikke. Vår bar byr på et utvalg av fantastiske cocktails, perfekt balansert for enhver smak og anledning.",
  metadataBase: new URL("https://www.spor3sandnes.no"),
  openGraph: {
    title: "SPOR 3 Sandnes | Unik bar i hjertet av Sandnes",
    description:
      "Oppdag SPOR 3, en lun og folkelig bar i hjertet av Sandnes sentrum som serverer både mat og drikke. Vår bar byr på et utvalg av fantastiske cocktails, perfekt balansert for enhver smak og anledning.",
    url: "https://www.spor3sandnes.no",
    siteName: "SPOR 3 Sandnes",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPOR 3 Sandnes",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPOR 3 Sandnes | Unik bar i hjertet av Sandnes",
    description:
      "En lun og folkelig bar i hjertet av Sandnes sentrum. Gode drinker og mat fra à la carte meny.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${libreFranklin.variable} ${ibmPlexMono.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
