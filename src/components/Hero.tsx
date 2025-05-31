import Link from "next/link";
import React from "react";
import { MessageCircle, UserCheck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center py-20 px-2 bg-gradient-to-r from-green-500 to-green-700 text-white"
    >
      <h1 className="animate-fade-in text-5xl font-extrabold mb-4">
        Automatize seu WhatsApp com a JCWPP
      </h1>
      <p className="animate-fade-in max-w-2xl mx-auto text-xl font-medium mb-2">
        Mais agilidade, integração e suporte para o seu atendimento.
      </p>
      <p className="animate-fade-in max-w-2xl mx-auto text-lg opacity-90">
        Planos flexíveis, integração fácil com Make e suporte dedicado para sua
        empresa crescer sem limites.
      </p>

      <div className="mt-8 animate-fade-in flex flex-col md:flex-row justify-center gap-4">
        <Link
          href="https://jcwpp.jcdev.com.br/auth/login"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          <UserCheck className="w-5 h-5" />
          Já sou cliente
        </Link>
        <Link
          href="https://wa.me/5522997979633"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-700 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Falar com Consultor
        </Link>
      </div>
    </section>
  );
};

export default Hero;
