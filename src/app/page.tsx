import ContactCallToAction from "@/components/ContactCallToAction";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JCWPP - API WhatsApp Não Oficial | Automatize seu Atendimento",
  description:
    "Automatize, integre e otimize o WhatsApp da sua empresa com a JCWPP. Planos acessíveis, integração fácil com Make e suporte 24 horas para seu negócio crescer.",
  keywords: [
    "API WhatsApp",
    "automação WhatsApp",
    "integração WhatsApp",
    "JCWPP",
    "chatbot WhatsApp",
    "Make",
    "suporte WhatsApp",
    "JCDEV",
    "atendimento digital",
    "WhatsApp empresas",
  ],
  authors: [{ name: "JCDEV - Josué Carvalho", url: "https://jcdev.com.br" }],
  openGraph: {
    title: "JCWPP - API WhatsApp Não Oficial | Automatize seu Atendimento",
    description:
      "Automatize seu atendimento e vendas com a API WhatsApp JCWPP. Planos flexíveis, integração com Make e suporte dedicado para empresas.",
    url: "https://jcwpp-lp.jcdev.com.br/",
    siteName: "JCWPP",
    images: [
      {
        url: "https://jcwpp-lp.jcdev.com.br/jc-wpp.png",
        width: 1200,
        height: 630,
        alt: "JCWPP - API WhatsApp para empresas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCWPP - API WhatsApp Não Oficial | Automatize seu Atendimento",
    description:
      "Automatize seu atendimento e vendas com a API WhatsApp JCWPP. Planos flexíveis, integração com Make e suporte dedicado para empresas.",
    images: ["https://jcwpp-lp.jcdev.com.br/jc-wpp.png"],
    site: "@jcdevbr",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jcwpp-lp.jcdev.com.br/",
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
