"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // si baja más de 10px, activa el blur
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-teal-950/40"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full px-4 py-3 md:py-4 flex items-center text-white">
        {/* Bloque Izquierdo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-28 md:w-36 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Menú centrado (Desktop) */}
        <div className="flex-[2] hidden lg:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4">
                  Inicio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="px-4">
                  Sobre nosotros
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white/90 text-black rounded-xl shadow-lg">
                  <ul className="grid gap-2 w-sm">
                    <li>
                      <Link href="/cursos/curso1">Análisis Técnico</Link>
                    </li>
                    <li>
                      <Link href="/cursos/curso2">Elliott Wave</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/articulos" className="px-4">
                  Artículos
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" className="px-4">
                  Contacto
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Bloque Derecho */}
        <div className="flex-1 flex justify-end gap-2 items-center">
          <div className="hidden lg:flex gap-2">
            <Button variant="cyan">
              Acceso servicio <ArrowTopRightIcon />
            </Button>
            <Button variant="teal">
              Campus virtual <ArrowTopRightIcon />
            </Button>
          </div>
          {/* Toggle móvil */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 text-white">
          <div className="rounded-xl border border-white/10 bg-teal-950/70 backdrop-blur-md shadow-lg overflow-hidden">
            <nav className="flex flex-col">
              <Link className="px-4 py-3 hover:bg-white/10" href="/" onClick={() => setMobileOpen(false)}>
                Inicio
              </Link>
              <Link className="px-4 py-3 hover:bg-white/10" href="/about" onClick={() => setMobileOpen(false)}>
                Sobre nosotros
              </Link>
              <details>
                <summary className="px-4 py-3 hover:bg-white/10 cursor-pointer list-none">Cursos</summary>
                <div className="flex flex-col border-t border-white/10">
                  <Link className="px-6 py-3 hover:bg-white/10" href="/cursos/curso1" onClick={() => setMobileOpen(false)}>
                    Análisis Técnico
                  </Link>
                  <Link className="px-6 py-3 hover:bg-white/10" href="/cursos/curso2" onClick={() => setMobileOpen(false)}>
                    Elliott Wave
                  </Link>
                </div>
              </details>
              <Link className="px-4 py-3 hover:bg-white/10" href="/articulos" onClick={() => setMobileOpen(false)}>
                Artículos
              </Link>
              <Link className="px-4 py-3 hover:bg-white/10" href="/contacto" onClick={() => setMobileOpen(false)}>
                Contacto
              </Link>
              <div className="flex gap-2 p-4 border-t border-white/10">
                <Button variant="cyan" className="flex-1">
                  Acceso servicio <ArrowTopRightIcon />
                </Button>
                <Button variant="teal" className="flex-1">
                  Campus virtual <ArrowTopRightIcon />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
