import Link from "next/link";
import {
  CheckCircle,
  Zap,
  MessageCircle,
  InfinityIcon,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    price: "R$79,99",
    instances: "1 Instância",
    benefits: [
      {
        icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        text: "1 Instância exclusiva",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte via WhatsApp em horário comercial",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Integração com Make",
      },
      {
        icon: <ShieldCheck className="text-green-600 w-5 h-5" />,
        text: "Documentação completa",
      },
    ],
    featured: false,
  },
  {
    name: "Plano Profissional",
    price: "R$199,99",
    instances: "3 Instâncias",
    benefits: [
      {
        icon: <CheckCircle className="text-green-600 w-5 h-5" />,
        text: "3 Instâncias simultâneas",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte via WhatsApp 24h",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Integração com Make e APIs personalizadas",
      },
      {
        icon: <ShieldCheck className="text-green-600 w-5 h-5" />,
        text: "Monitoramento ativo das instâncias",
      },
    ],
    featured: true,
  },
  {
    name: "Plano Ilimitado",
    price: "R$399,99",
    instances: "Instâncias Ilimitadas",
    benefits: [
      {
        icon: <InfinityIcon className="text-green-600 w-5 h-5" />,
        text: "Instâncias Ilimitadas para escalar sem limites",
      },
      {
        icon: <MessageCircle className="text-green-600 w-5 h-5" />,
        text: "Suporte VIP 24h via WhatsApp e email",
      },
      {
        icon: <Zap className="text-green-600 w-5 h-5" />,
        text: "Prioridade máxima no suporte técnico",
      },
      {
        icon: <Rocket className="text-green-600 w-5 h-5" />,
        text: "Acesso antecipado a novas funcionalidades",
      },
    ],
    featured: false,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-green-500 to-green-700 text-white">
        <h1 className="animate-fade-in text-5xl font-extrabold mb-4">
          Automatize com a JCWPP
        </h1>
        <p className="animate-fade-in max-w-2xl mx-auto text-lg">
          A API não oficial do WhatsApp mais completa. Planos flexíveis, suporte
          dedicado e integração fácil com Make.
        </p>

        <div className="mt-8 animate-fade-in flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="inline-block  bg-white text-green-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Já sou cliente
          </Link>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener"
            className="inline-block  border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-700 transition"
          >
            Falar com Consultor
          </a>
        </div>
      </section>

      {/* PLANOS */}
      <section className="container mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12">
          Escolha seu Plano
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white shadow-lg rounded-2xl p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured ? "border-4 border-green-600" : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  Mais Vendido
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-green-600 text-3xl font-extrabold">
                {plan.price}
              </p>
              <p className="mt-2 text-sm">{plan.instances}</p>

              <ul className="mt-6 space-y-3 text-left">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    {benefit.icon}
                    <span className="ml-2">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noopener"
                className={`block ${
                  plan.featured && "animate-bounce"
                } mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition`}
              >
                Assinar Agora
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-green-700 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          Pronto para transformar sua comunicação?
        </h2>
        <p className="mb-6 animate-fade-in">
          Entre em contato com nosso consultor e descubra a melhor solução para
          sua empresa.
        </p>
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener"
          className="inline-block animate-fade-in bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Fale com um Consultor
        </a>
      </section>
    </main>
  );
}
