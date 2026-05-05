"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVercel,
  IconBrandTypescript,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandPython,
  IconBrandOpenai,
  IconSparkles,
  IconRobot,
} from "@tabler/icons-react";

const stackWeb = [
  { icon: IconBrandNextjs, label: "Next.js" },
  { icon: IconBrandTypescript, label: "TypeScript" },
  { icon: IconBrandTailwind, label: "Tailwind CSS" },
  { icon: IconBrandFramerMotion, label: "Framer Motion" },
  { icon: IconBrandVercel, label: "Vercel" },
  { icon: IconBrandGit, label: "Git" },
];

const stackAI = [
  { icon: IconBrandPython, label: "Python" },
  { icon: IconBrandOpenai, label: "OpenAI API" },
  { icon: IconSparkles, label: "Vercel AI SDK" },
  { icon: IconRobot, label: "LangChain" },
];

const highlights = [
  { value: "15 dias", label: "Prazo médio de entrega" },
  { value: "100%", label: "Responsivo e otimizado" },
  { value: "Sempre", label: "Suporte incluso no plano" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left — Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-cyan text-sm font-body font-semibold uppercase tracking-widest"
            >
              Sobre a FactoryWeb
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-4xl text-text-primary mt-3 leading-tight"
            >
              Tecnologia moderna para negócios reais.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-text-secondary mt-6 leading-relaxed"
            >
              A FactoryWeb nasceu para resolver problemas reais com tecnologia. Sites, automações, chatbots com IA — entregamos a solução certa para cada negócio, com um modelo simples: você paga uma vez para criar e uma mensalidade para manter tudo funcionando.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-text-secondary mt-4 leading-relaxed"
            >
              Usamos as tecnologias mais modernas do mercado para entregar soluções rápidas, seguras e de alto nível — do mesmo padrão de grandes empresas, acessível para qualquer negócio.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl border border-white/10 bg-surface"
                >
                  <p className="font-heading font-bold text-2xl text-primary">
                    {item.value}
                  </p>
                  <p className="font-body text-text-secondary text-xs mt-1 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Web */}
            <div>
              <p className="font-body text-text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
                Web
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stackWeb.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-surface hover:border-white/20 transition-all duration-200"
                  >
                    <item.icon size={20} className="text-primary flex-shrink-0" />
                    <span className="font-body text-text-primary text-sm font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI */}
            <div>
              <p className="font-body text-text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
                Inteligência Artificial
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stackAI.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + 0.05 * index }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-cyan/20 bg-cyan/5 hover:border-cyan/30 transition-all duration-200"
                  >
                    <item.icon size={20} className="text-cyan flex-shrink-0" />
                    <span className="font-body text-text-primary text-sm font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
