import Link from "next/link";
import React from "react";
import { CheckCircle2, Users, Zap, ArrowRight } from "lucide-react";

const ContactCallToAction = () => {
  return (
    <section
      id="contato"
      className="bg-green-700 text-white text-center py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-2 animate-fade-in flex justify-center items-center gap-2">
        Pronto para transformar sua comunicação?
      </h2>
      <p className="mb-4 text-lg animate-fade-in">
        Fale agora com um especialista e descubra como aumentar a eficiência do
        seu atendimento.
      </p>
      <ul className="mb-6 flex flex-col gap-2 items-center animate-fade-in text-base">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="text-white w-5 h-5" />
          Soluções personalizadas para sua empresa
        </li>
        <li className="flex items-center gap-2">
          <Zap className="text-white w-5 h-5" />
          Suporte dedicado e rápido
        </li>
        <li className="flex items-center gap-2">
          <Users className="text-white w-5 h-5" />
          Mais de 500 empresas atendidas
        </li>
      </ul>
      <Link
        href="https://wa.me/5522997979633"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 animate-fade-in bg-white text-green-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-lg shadow-lg"
      >
        Quero Falar com um Especialista
        <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="mt-4 text-sm opacity-80 animate-fade-in flex items-center justify-center gap-1">
        <Zap className="w-4 h-4 text-white" />
        Atendimento rápido via WhatsApp. Sem compromisso!
      </p>
    </section>
  );
};

export default ContactCallToAction;
