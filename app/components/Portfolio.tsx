"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "Dra. Tatiana Brasil",
    tag: "Institucional",
    description:
      "Site profissional para gastroenterologista veterinária com seções de procedimentos, sobre e contato via WhatsApp.",
    color: "from-blue-500/20 to-cyan-500/10",
    image: "/portfolio/tatiana-desktop.png",
    imageHover: "/portfolio/tatiana-mobile.png",
  },
  {
    title: "Clínica Sorrir",
    tag: "Institucional",
    description:
      "Site completo para clínica odontológica com agendamento online e galeria de procedimentos.",
    color: "from-blue-500/20 to-cyan-500/10",
    image: undefined,
    imageHover: undefined,
  },
  {
    title: "Advocacia Silva",
    tag: "Mini Site",
    description:
      "Presença digital profissional para escritório de advocacia com foco em captação de clientes.",
    color: "from-purple-500/20 to-blue-500/10",
    image: undefined,
    imageHover: undefined,
  },
  {
    title: "Lançamento Curso X",
    tag: "Landing Page",
    description: "Página de vendas de alta conversão para lançamento de curso online.",
    color: "from-cyan-500/20 to-primary/10",
    image: undefined,
    imageHover: undefined,
  },
  {
    title: "Studio Fit",
    tag: "Mini Site",
    description:
      "Site moderno para academia com tabela de planos, horários e formulário de matrícula.",
    color: "from-green-500/20 to-cyan-500/10",
    image: undefined,
    imageHover: undefined,
  },
  {
    title: "Restaurante Sabor",
    tag: "Institucional",
    description:
      "Site institucional com cardápio digital, reservas online e integração com redes sociais.",
    color: "from-orange-500/20 to-red-500/10",
    image: undefined,
    imageHover: undefined,
  },
  {
    title: "Imobiliária Central",
    tag: "Institucional",
    description:
      "Site completo com listagem de imóveis, filtros de busca e formulário de contato.",
    color: "from-primary/20 to-purple-500/10",
    image: undefined,
    imageHover: undefined,
  },
];

const tagColors: Record<string, string> = {
  Institucional: "bg-primary/20 text-primary border-primary/30",
  "Mini Site": "bg-cyan/20 text-cyan border-cyan/30",
  "Landing Page": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const currentProjects = projects.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage,
  );

  const goTo = (next: number) => {
    setPage(Math.min(Math.max(next, 0), totalPages - 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16" ref={ref}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-cyan text-sm font-body font-semibold uppercase tracking-widest"
            >
              Portfólio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-5xl text-text-primary mt-3"
            >
              Nossos projetos
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:border-white/40 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <IconChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:border-white/40 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <IconChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) goTo(page + 1);
              else if (info.offset.x > 50) goTo(page - 1);
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 cursor-grab active:cursor-grabbing"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group relative rounded-2xl border border-white/10 bg-background overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                {/* Image area */}
                <div
                  className={`h-56 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={project.imageHover}
                        alt={`${project.title} mobile`}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </>
                  ) : (
                    <span className="font-heading font-bold text-6xl text-white/10">
                      {project.title.charAt(0)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <IconExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-body font-semibold border ${tagColors[project.tag]}`}
                  >
                    {project.tag}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-text-primary mt-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
