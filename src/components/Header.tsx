import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { LogIn, FileText, Phone } from "lucide-react";

const Header = () => {
  return (
    <header
      className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md sticky top-0 z-50"
      role="banner"
    >
      <Link href="#hero" aria-label="Página inicial">
        <Logo />
      </Link>

      <nav
        aria-label="Menu principal"
        className="hidden md:flex gap-6 items-center"
        role="navigation"
      >
        <a
          href="#planos"
          className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
          aria-label="Ver planos"
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          Planos
        </a>
        <a
          href="#contato"
          className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
          aria-label="Ir para contato"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Contato
        </a>
        <Link
          href="https://app-jcwpp.jcdev.com.br/auth/login"
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition flex items-center gap-2"
          aria-label="Área do cliente"
        >
          <LogIn className="w-4 h-4" aria-hidden="true" />
          Login
        </Link>
      </nav>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
