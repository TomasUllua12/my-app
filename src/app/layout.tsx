import Navbar from "@/components/navbar"
import "./globals.css"

export const metadata = {
  title: "Mi Plataforma",
  description: "Aprendé con nuestros cursos",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
