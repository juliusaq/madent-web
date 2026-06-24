import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madent.com.mx"),
  title: {
    default: "MADENT | Software para Odontólogos Independientes",
    template: "%s | MADENT",
  },
  description: "Software para odontólogos independientes. Organiza citas, expedientes clínicos, odontogramas, presupuestos y seguimiento de pacientes desde un solo lugar.",
  keywords: [
    "software dental",
    "odontología",
    "expediente clínico digital",
    "odontograma",
    "agenda dental",
    "consultorio dental",
    "presupuesto dental",
    "receta médica dental"
  ],
  authors: [{ name: "MADENT" }],
  creator: "MADENT",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "MADENT | Software para Odontólogos Independientes",
    description: "Organiza tu consultorio con más orden y tranquilidad.",
    type: "website",
    locale: "es_MX",
    siteName: "MADENT",
    url: "https://madent.com.mx",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MADENT | Software para Odontólogos Independientes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MADENT | Software para Odontólogos Independientes",
    description: "Organiza tu consultorio con más orden y tranquilidad.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
