import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Mobile Engineer & Solutions Architect building cross-platform apps with React Native, Expo and TypeScript — shipped to the App Store and Google Play. Based in Abuja, Nigeria.";

export const metadata: Metadata = {
  title: {
    default: "Chukwunonso Obi — Mobile Engineer & Solutions Architect",
    template: "%s — Chukwunonso Obi",
  },
  description,
  keywords: [
    "Mobile Engineer",
    "Solutions Architect",
    "React Native",
    "Expo",
    "TypeScript",
    "Next.js",
    "Flutter",
    "EAS Build",
    "Firebase",
    "Abuja",
    "Nigeria",
  ],
  authors: [{ name: "Chukwunonso Obi", url: "https://github.com/NonsoCoding" }],
  creator: "Chukwunonso Obi",
  openGraph: {
    title: "Chukwunonso Obi — Mobile Engineer & Solutions Architect",
    description,
    type: "website",
    locale: "en_US",
    siteName: "NonsoLovesCoding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwunonso Obi — Mobile Engineer & Solutions Architect",
    description,
  },
};

/* Runs before first paint so the saved theme is applied without a flash of the
   wrong palette. Kept inline and dependency-free on purpose. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-canvas text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
