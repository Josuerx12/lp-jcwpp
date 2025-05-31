"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const ANIMATION_DURATION = 300;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
    setTimeout(() => setOpen(true), 10);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setVisible(false), ANIMATION_DURATION);
  };

  return (
    <>
      <button
        className="flex flex-col z-50 justify-center items-center w-10 h-10 focus:outline-none"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={visible ? handleClose : handleOpen}
      >
        <Menu size={30} />
      </button>

      {visible && (
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity" }}
        >
          <button
            className="absolute top-10 right-10"
            aria-label="Fechar menu"
            onClick={handleClose}
          >
            <X size={32} />
          </button>
          <a
            href="#planos"
            className="text-2xl text-gray-700 hover:text-green-600 transition"
            onClick={handleClose}
          >
            Planos
          </a>
          <a
            href="#contato"
            className="text-2xl text-gray-700 hover:text-green-600 transition"
            onClick={handleClose}
          >
            Contato
          </a>
          <Link
            href="https://app-jcwpp.jcdev.com.br/auth/login"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-xl hover:bg-green-700 transition"
            onClick={handleClose}
          >
            Login
          </Link>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
