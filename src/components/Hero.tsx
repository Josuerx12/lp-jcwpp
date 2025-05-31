import Link from "next/link";
import React from "react";
import { MessageCircle, UserCheck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center py-20 px-2 bg-gradient-to-r from-green-500 to-green-700 text-white"
      aria-label="Introdução JCWPP"
    >
      <header>
        <h1 className="animate-fade-in text-5xl font-extrabold mb-4">
          Automatize seu WhatsApp com a JCWPP
        </h1>
        <p
          className="animate-fade-in max-w-2xl mx-auto text-xl font-medium mb-2"
          aria-label="Slogan"
        >
          Mais agilidade, integração e suporte para o seu atendimento.
        </p>
        <p className="animate-fade-in max-w-2xl mx-auto text-lg opacity-90">
          Planos flexíveis, integração fácil com Make e suporte dedicado para
          sua empresa crescer sem limites.
        </p>
      </header>

      <nav
        className="mt-8 animate-fade-in flex flex-col md:flex-row justify-center gap-4"
        aria-label="Ações principais"
      >
        <Link
          href="https://app-jcwpp.jcdev.com.br/auth/login"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          aria-label="Área do cliente JCWPP"
        >
          <UserCheck className="w-5 h-5" aria-hidden="true" />
          Já sou cliente
        </Link>
        <Link
          href="https://wa.me/5522997979633"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-700 transition"
          aria-label="Falar com consultor JCWPP no WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Falar com Consultor
        </Link>
      </nav>
    </section>
  );
};

export default Hero;
