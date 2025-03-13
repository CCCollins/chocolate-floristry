import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Кондитерская СофиКо | Шоколадная флористика",
  description: "Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!",
  robots: "index, follow",
  keywords: [
    "онлайн-курс", "шоколадная флористика", "десерты", "Санкт-Петербург", "курсы по флористике",
    "шоколадные изделия", "кондитерская", "шоколадные цветы", "обучение флористике",
    "курсы в Санкт-Петербурге", "шоколадные десерты", "флористика онлайн", "шоколадные курсы",
    "флористика Санкт-Петербург", "шоколадные курсы Санкт-Петербург"
  ],
  authors: [{ name: "Кондитерская СофиКо", url: "https://sofiko.vercel.app" }],
  metadataBase: new URL("https://sofiko.vercel.app"),
  openGraph: {
    title: "Кондитерская СофиКо | Шоколадная флористика",
    description: "Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!",
    url: "https://sofiko.vercel.app",
    siteName: "Кондитерская СофиКо",
    images: [
      {
        url: "https://sofiko.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кондитерская СофиКо | Шоколадная флористика",
    description: "Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!",
    images: ["https://sofiko.vercel.app/preview.png"],
    creator: "@sofiko",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          Кондитерская СофиКо | Шоколадная флористика
        </title>
        <meta
          name="description"
          content="Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!"
        />
        
        <meta
          name="keywords"
          content="онлайн-курс, шоколадная флористика, десерты, Санкт-Петербург, курсы по флористике, шоколадные изделия, кондитерская, шоколадные цветы, обучение флористике, курсы в Санкт-Петербурге, шоколадные десерты, флористика онлайн, шоколадные курсы, флористика Санкт-Петербург, шоколадные курсы Санкт-Петербург"
        />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sofiko.vercel.app" />
        <meta
          property="og:title"
          content="Кондитерская СофиКо | Шоколадная флористика"
        />
        <meta 
          property="og:description"
          content="Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!"
        />
        <meta property="og:image" content="/preview.png" />

        <meta name="author" content="Кондитерская СофиКо" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sofiko.vercel.app" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta property="og:site_name" content="Student Saver" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sofiko" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Кондитерская СофиКо",
              "description": "Онлайн-курс по шоколадной флористике и продажа десертов в Санкт-Петербурге!",
              "url": "https://sofiko.vercel.app",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Any",
              "inLanguage": "ru-RU"
            }
          `}
        </script>
      </head>
      <body className="font-Dihjauti">{children}</body>
    </html>
  );
}