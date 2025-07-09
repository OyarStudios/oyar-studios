import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Instagram, Tiktok, Mail, Send } from 'lucide-react';

const images = [
  '/media/video1.mp4',
  ...Array.from({ length: 38 }, (_, i) => `/media/foto${i + 1}.jpg`)
];

export default function OyarStudios() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-4 border-b border-white/10">
        <h1 className="text-2xl font-bold">Oyar Studios</h1>
        <nav className="flex gap-4">
          <a href="https://instagram.com" target="_blank"><Instagram /></a>
          <a href="https://tiktok.com" target="_blank"><Tiktok /></a>
          <a href="#contact"><Mail /></a>
        </nav>
      </header>

      <section className="p-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Producción Audiovisual Profesional</h2>
        <div className="relative w-full max-w-3xl">
          <Card className="overflow-hidden rounded-2xl">
            {images[current].endsWith('.mp4') ? (
              <video src={images[current]} controls className="w-full h-auto" />
            ) : (
              <img src={images[current]} alt={`foto ${current}`} className="w-full h-auto" />
            )}
          </Card>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Button onClick={prev}>&larr;</Button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Button onClick={next}>&rarr;</Button>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <a
          href="https://wa.me/5490000000000"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full text-white shadow-lg hover:bg-green-700 transition"
        >
          <Send className="w-4 h-4" /> Contactar por WhatsApp
        </a>
      </section>

      <section id="contact" className="p-8 bg-white/5 rounded-xl max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Formulario de Contacto</h3>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded bg-white/10 border border-white/10" />
          <input type="email" placeholder="Correo" className="p-3 rounded bg-white/10 border border-white/10" />
          <textarea placeholder="Mensaje" rows={4} className="p-3 rounded bg-white/10 border border-white/10" />
          <Button type="submit">Enviar</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-white/40 mt-16 p-4">
        © 2025 Oyar Studios. Todos los derechos reservados.
      </footer>
    </main>
  );
}
