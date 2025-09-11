import Navbar from "@/components/layout/navbar"
import "./critical.css"
import Footer from "@/components/layout/footer"
import { Inter } from "next/font/google";
import ClientYouTubeStickyCard from "@/components/ClientYouTubeStickyCard";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata = {
  title: "Mi Plataforma",
  description: "Aprendé con nuestros cursos",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-inter min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <ClientYouTubeStickyCard />
        <Footer />
      </body>
    </html>
  )
}
