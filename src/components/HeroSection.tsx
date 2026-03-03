import { motion } from "framer-motion";
import { CalendarCheck, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import isabellaPhoto from "@/assets/isabella-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean gradient background using brand palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--lilac-light))] via-background to-[hsl(var(--blue-soft)_/_0.3)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--green-sage)_/_0.15)] to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-2xl flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4"
            >
              Psicóloga Clínica · Terapeuta ABA · Neuropsicologia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-4"
            >
              Isabella Fava
              <br />
              <span className="text-xl md:text-2xl italic text-primary font-medium">
                Psicóloga | CRP 06/205699
              </span>
            </motion.h1>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-foreground/80 italic border-l-4 border-primary pl-4 mb-6"
            >
              "Um espaço de escuta, ciência e cuidado, respeitando a singularidade de cada história."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Psicóloga clínica com pós-graduação em Análise do Comportamento Aplicada (ABA) e
              formação em Neuropsicologia e Reabilitação Cognitiva. Atendimento para crianças,
              adolescentes e adultos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/agendar"
                className="px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                Agendar Atendimento
              </Link>
              <a
                href="#contato"
                className="px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-center hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Solicitar Documentos
              </a>
            </motion.div>
          </div>

          {/* Photo frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-4 border-[hsl(var(--lilac)_/_0.3)] shadow-lg">
                <img
                  src={isabellaPhoto}
                  alt="Isabella Fava — Psicóloga"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-xl px-4 py-2 shadow-md">
                <p className="font-display text-xs font-semibold text-primary">CRP 06/205699</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
