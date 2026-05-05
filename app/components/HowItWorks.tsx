"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconMessages,
  IconFileDescription,
  IconCode,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";

const steps = [
  {
    icon: IconMessages,
    title: "Conversa",
    description:
      "Entendemos seu negócio, objetivos e prazo. Sem formulários complicados — apenas uma conversa no WhatsApp.",
  },
  {
    icon: IconFileDescription,
    title: "Proposta",
    description:
      "Enviamos um escopo detalhado com prazo e valor. Você aprova antes de começarmos qualquer coisa.",
  },
  {
    icon: IconCode,
    title: "Criação",
    description:
      "Desenvolvemos sua solução com checkpoints de aprovação pelo caminho. Você acompanha tudo em tempo real.",
  },
  {
    icon: IconRocket,
    title: "Entrega",
    description:
      "Solução no ar em até 15 dias. Domínio registrado e hospedagem configurada por nós. Zero dor de cabeça.",
  },
  {
    icon: IconHeadset,
    title: "Manutenção",
    description:
      "Suporte mensal incluso. Alterações, atualizações e renovação de domínio cuidados por nós todo mês.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-cyan text-sm font-body font-semibold uppercase tracking-widest"
          >
            Como funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-text-primary mt-3"
          >
            Da conversa à solução no ar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-secondary mt-4 max-w-xl mx-auto"
          >
            Um processo simples e transparente — do entendimento do seu problema à entrega da solução.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative flex items-start gap-6 pl-16"
              >
                {/* Icon circle */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface border border-white/20 flex items-center justify-center flex-shrink-0 z-10">
                  <step.icon size={18} className="text-primary" />
                </div>

                {/* Content */}
                <div>
                  <span className="font-heading font-bold text-5xl text-white/5 block leading-none">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-text-primary mt-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-text-secondary text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-6 rounded-2xl border border-cyan/20 bg-cyan/5 text-center"
        >
          <p className="font-body text-text-secondary">
            A mensalidade cobre{" "}
            <span className="text-text-primary font-semibold">hospedagem profissional</span>,{" "}
            <span className="text-text-primary font-semibold">domínio</span>,{" "}
            <span className="text-text-primary font-semibold">backups</span>,{" "}
            <span className="text-text-primary font-semibold">suporte técnico</span> e até{" "}
            <span className="text-text-primary font-semibold">1 hora de ajustes por mês</span>.{" "}
            Sua solução sempre no ar, sempre funcionando.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
