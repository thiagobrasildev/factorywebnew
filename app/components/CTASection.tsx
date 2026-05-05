"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconBrandWhatsapp, IconArrowRight } from "@tabler/icons-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan text-sm font-body font-semibold uppercase tracking-widest"
        >
          Vamos começar?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-5xl text-text-primary mt-3 leading-tight"
        >
          Tem um problema digital?{" "}
          <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
            A gente resolve.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-text-secondary mt-6 text-lg max-w-2xl mx-auto"
        >
          Site, automação, chatbot ou sistema — fale com a gente e descubra qual solução faz mais sentido para o seu negócio. Sem compromisso, sem formulário complicado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-body font-semibold hover:bg-primary/90 transition-all
  duration-200"
          >
            <IconBrandWhatsapp size={20} />
            Falar no WhatsApp
            <IconArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-text-primary font-body font-semibold hover:border-white/40
  hover:bg-white/5 transition-all duration-200"
          >
            Ver planos e preços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
