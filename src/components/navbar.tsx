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
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          ? "backdrop-blur-md bg-teal-950/60"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full p-4 flex items-center text-white">
        {/* Bloque Izquierdo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Menú centrado */}
        <div className="flex-1 flex justify-center">
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
          <Button variant="cyan">
            Acceso servicio <ArrowTopRightIcon />
          </Button>
          <Button variant="teal">
            Campus virtual <ArrowTopRightIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
