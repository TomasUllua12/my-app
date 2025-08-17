import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { GlobeIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b w-full flex justify-center bg-neutral-900 text-white">
      <div className="w-full p-4 flex items-center">
        {/* Bloque Izquierdo */}
        <div className="flex-1 flex">
          <Button variant="default">
            <GlobeIcon />
          </Button>
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
                <NavigationMenuContent className="p-4">
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
