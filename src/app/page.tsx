import ContactCallToAction from "@/components/ContactCallToAction";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JCWPP - API WhatsApp Não Oficial",
  description:
    "Automatize e integre o WhatsApp com a JCWPP. Planos acessíveis e suporte 24 horas!",
  keywords: [
    "API WhatsApp",
    "automação",
    "integração",
    "JCWPP",
    "chatbot",
    "Make",
    "JCDEV",
  ],
  authors: [{ name: "JCDEV - Josué Carvalho" }],
  openGraph: {
    title: "JCWPP - API WhatsApp Não Oficial",
    description:
      "Automatize seu atendimento com nossa API completa de WhatsApp.",
    url: "https://jcwpp-lp.jcdev.com.br/",
    siteName: "JCWPP",
    images: [
      {
        url: "https://jcwpp-lp.jcdev.com.br/jc-wpp.png",
        width: 1200,
        height: 630,
        alt: "JCWPP - API WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCWPP - API WhatsApp Não Oficial",
    description:
      "Automatize seu atendimento com nossa API completa de WhatsApp.",
    images: ["https://jcwpp-lp.jcdev.com.br/jc-wpp.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
      <Hero />

      <Plans />

      <ContactCallToAction />
    </main>
  );
}
