import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SobreMi } from "@/components/sections/SobreMi";
import { Proyectos } from "@/components/sections/Proyectos";
import { Servicios } from "@/components/sections/Servicios";
import { Experiencia } from "@/components/sections/Experiencia";
import { Contacto } from "@/components/sections/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos />
        <Servicios />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
