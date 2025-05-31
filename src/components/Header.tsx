import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { LogIn, FileText, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md sticky top-0 z-50">
      <Logo />

      <nav
        aria-label="Menu principal"
        className="hidden md:flex gap-6 items-center"
      >
        <a
          href="#planos"
          className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
        >
          <FileText className="w-4 h-4" />
          Planos
        </a>
        <a
          href="#contato"
          className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
        >
          <Phone className="w-4 h-4" />
          Contato
        </a>

        <Link
          href="https://jcwpp.jcdev.com.br/auth/login"
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition flex items-center gap-2"
        >
          <LogIn className="w-4 h-4" />
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
