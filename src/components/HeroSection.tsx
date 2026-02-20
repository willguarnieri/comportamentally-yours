import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, ClipboardList } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
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
            adolescentes e adultos até a meia-idade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/5511959663087?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendar Atendimento
            </a>
            <a
              href="#contato"
              className="px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-center hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Entrar em Contato
            </a>
            <a
              href="/anamnese"
              className="px-6 py-3.5 rounded-lg border border-primary/30 text-primary font-medium text-center hover:bg-lilac-light transition-colors flex items-center justify-center gap-2"
            >
              <ClipboardList className="w-4 h-4" />
              Preencher Anamnese
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
