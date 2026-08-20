import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Johnson Samuel Oluwatoyosi — AI Engineer & Backend Architect",
  description:
    "AI engineer who builds and ships intelligent systems end to end — LLM agents, RAG pipelines, and the production backends that power them. Python / TypeScript.",
  keywords: [
    "AI Engineer",
    "Backend Architect",
    "LLM",
    "RAG",
    "FastAPI",
    "Django",
    "Generative AI",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Johnson Samuel Oluwatoyosi" }],
  openGraph: {
    title: "Johnson Samuel Oluwatoyosi — AI Engineer & Backend Architect",
    description:
      "LLM agents, RAG pipelines, and production APIs. Live systems on iOS, Google Play, and the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#191919] text-[#D3D3D3] antialiased">
        {children}
      </body>
    </html>
  );
}
