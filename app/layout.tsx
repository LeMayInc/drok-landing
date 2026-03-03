import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drok — The Sovereign Code Platform",
  description:
    "Version control rebuilt from first principles in Rust. Post-quantum cryptography. Sub-200ms navigation. By LeMay Inc.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Drok — The Sovereign Code Platform",
    description:
      "Version control rebuilt from first principles in Rust. Post-quantum cryptography. Sub-200ms navigation.",
    url: "https://drok.us",
    siteName: "Drok",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drok — The Sovereign Code Platform",
    description:
      "Version control rebuilt from first principles in Rust. Post-quantum cryptography. Sub-200ms navigation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  );
}
