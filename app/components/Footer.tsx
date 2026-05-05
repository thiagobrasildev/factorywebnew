import Link from "next/link";
import { IconBrandInstagram, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-xl text-text-primary">
              Factory<span className="text-primary">Web</span>
            </p>
            <p className="font-body text-text-secondary text-sm mt-3 leading-relaxed max-w-xs">
              Soluções digitais para negócios reais — sites, automações e inteligência artificial com suporte e manutenção incluídos.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Navegação
            </p>
            <ul className="space-y-3">
              {[
                { label: "Serviços", href: "#services" },
                { label: "Como funciona", href: "#how-it-works" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Sobre", href: "#about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/55SEUNUMERO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                >
                  <IconBrandWhatsapp size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@factoryweb.com.br"
                  className="flex items-center gap-2 font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                >
                  <IconMail size={16} />
                  contato@factoryweb.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/factoryweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                >
                  <IconBrandInstagram size={16} />
                  @factoryweb
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-text-secondary text-xs">
            © 2025 FactoryWeb · Todos os direitos reservados
          </p>
          <p className="font-body text-text-secondary text-xs">
            Desenvolvido com Next.js e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
