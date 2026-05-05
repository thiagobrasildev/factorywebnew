"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconRocket, IconBuildingStore, IconBrain } from "@tabler/icons-react";

const services = [
  {
    icon: IconRocket,
    plan: "Starter",
    tagline: "Sua presença digital no ar em 7 dias",
    description:
      "Ideal para quem precisa aparecer online rapidamente. Perfeito para profissionais autônomos, criadores de conteúdo e pequenos negócios dando o primeiro passo digital.",
    examples: ["Landing page", "Página de bio para Instagram", "Cardápio digital", "Página de captura de leads"],
    price: "R$ 297",
    monthly: "R$ 97/mês",
  },
  {
    icon: IconBuildingStore,
    plan: "Pro",
    tagline: "Um site completo que trabalha por você",
    description:
      "Para negócios que precisam de mais presença, credibilidade e funcionalidade. Seu cliente encontra, confia e entra em contato — tudo pelo site.",
    examples: ["Mini site até 5 páginas", "Site institucional", "Site com agendamento online", "Portfólio profissional"],
    price: "R$ 497",
    monthly: "R$ 127/mês",
    featured: true,
  },
  {
    icon: IconBrain,
    plan: "Business",
    tagline: "Tecnologia para vender mais e trabalhar menos",
    description:
      "Para quem quer ir além do site. Automações, chatbots e inteligência artificial integrados ao seu negócio para reduzir trabalho manual e aumentar vendas.",
    examples: ["Chatbot com IA no site ou WhatsApp", "Sistema de automação", "Dashboard e relatórios", "Soluções customizadas"],
    price: "R$ 997",
    monthly: "R$ 197/mês",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-cyan text-sm font-body font-semibold uppercase tracking-widest"
          >
            Nossas soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl text-text-primary mt-3"
          >
            Escolha o plano ideal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-secondary mt-4 max-w-xl mx-auto"
          >
            Todos os planos incluem hospedagem, domínio, manutenção e suporte. Sem surpresas na fatura.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.plan}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                service.featured
                  ? "bg-primary/10 border-primary/40"
                  : "bg-background border-white/10 hover:border-white/20"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-body font-semibold whitespace-nowrap">
                  Mais popular
                </span>
              )}

              <service.icon size={32} className="text-primary mb-4" />

              <p className="font-body text-cyan text-xs font-semibold uppercase tracking-widest mb-1">
                {service.plan}
              </p>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                {service.tagline}
              </h3>
              <p className="font-body text-text-secondary text-sm mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {service.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 font-body text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6">
                <p className="font-body text-text-secondary text-sm">Investimento inicial</p>
                <p className="font-heading font-bold text-2xl text-text-primary mt-1">
                  {service.price}
                </p>
                <p className="font-body text-cyan text-sm mt-1">
                  + {service.monthly} tudo incluso
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center font-body text-text-secondary text-sm mt-8"
        >
          Não tem certeza qual plano escolher?{" "}
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Fale com a gente
          </a>{" "}
          e te ajudamos a decidir.
        </motion.p>

      </div>
    </section>
  );
}
