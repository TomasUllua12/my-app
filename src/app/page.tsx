import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Hola Tailwind v4 👋</h1>
        <p className="text-lg">Esta es una plantilla básica para empezar a usar Tailwind CSS con Next.js.</p>
      </main>
    </div>
  );
}
