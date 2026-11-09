import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 15-Minute Demo | Security Review Ready",
  description:
    "Schedule a live 15-minute walkthrough of Security Review Ready. See how our grounded citation engine auto-completes complex customer questionnaires in under 24 hours.",
  alternates: {
    canonical: "/demo",
  },
  openGraph: {
    title: "Book a Demo | Security Review Ready",
    description:
      "Schedule a live walkthrough of Security Review Ready. See how our grounded citation engine auto-completes complex customer questionnaires.",
    url: "https://securityreviewready.com/demo",
    siteName: "Security Review Ready",
    type: "website",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

