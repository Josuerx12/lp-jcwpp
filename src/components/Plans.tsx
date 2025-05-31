import { plans } from "@/data/data";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Plans = () => {
  return (
    <section
      id="planos"
      className="container mx-auto py-20 px-4 animate-fade-in"
      aria-labelledby="planos-heading"
    >
      <h2 id="planos-heading" className="text-4xl font-bold text-center mb-12">
        Escolha seu Plano
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative bg-white shadow-lg rounded-2xl p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl ${
              plan.featured ? "border-4 border-green-600" : ""
            }`}
            aria-labelledby={`plan-${plan.name.toLowerCase()}-title`}
          >
            {plan.featured && (
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Mais Vendido
              </span>
            )}
            <h3
              id={`plan-${plan.name.toLowerCase()}-title`}
              className="text-2xl font-bold mb-2"
            >
              {plan.name}
            </h3>
            <p
              className="text-green-600 text-3xl font-extrabold"
              aria-label={`Preço do plano ${plan.name}`}
            >
              {plan.price}
            </p>
            <p className="mt-2 text-sm">{plan.instances}</p>

            <ul
              className="mt-6 space-y-3 text-left"
              aria-label={`Benefícios do plano ${plan.name}`}
            >
              {plan.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  {benefit.icon}
                  <span className="ml-2">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/5522997979633"
              target="_blank"
              rel="noopener"
              aria-label={`Assinar plano ${plan.name} pelo WhatsApp`}
              className={`block ${
                plan.featured && "animate-bounce"
              } mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2`}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Assinar Agora
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Plans;
