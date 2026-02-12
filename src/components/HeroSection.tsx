import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
          >
            Psicóloga · Terapeuta ABA · Neuropsicologia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
          >
            Transformando vidas
            <br />
            <span className="italic text-primary">através da ciência</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Especialista em Análise do Comportamento Aplicada (ABA), oferecendo
            atendimento personalizado e baseado em evidências científicas para
            promover desenvolvimento e qualidade de vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity"
            >
              Agendar Consulta
            </a>
            <a
              href="#aba"
              className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-center hover:bg-muted transition-colors"
            >
              Saiba Mais
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
