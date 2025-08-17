import "./globals.css"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import Link from "next/link"

export const metadata = {
  title: "Mi Plataforma",
  description: "Aprendé con nuestros cursos",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <nav className="border-b p-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4">Inicio</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="px-4">About Us</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4">
                  <ul className="grid gap-2">
                    <li><Link href="/cursos/curso1">Curso 1</Link></li>
                    <li><Link href="/cursos/curso2">Curso 2</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/articulos" className="px-4">Artículos</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" className="px-4">Contacto</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
