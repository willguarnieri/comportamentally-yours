import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Heart, Award } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Psicóloga",
    description: "Formação em Psicologia com foco em análise do comportamento",
  },
  {
    icon: Brain,
    title: "Terapeuta ABA",
    description: "Especialista em Análise do Comportamento Aplicada",
  },
  {
    icon: Award,
    title: "Pós-graduanda",
    description: "Em formação em Neuropsicologia",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Prática baseada em evidências com acolhimento",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Sobre Mim
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Compromisso com o seu{" "}
              <span className="italic text-primary">bem-estar</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou psicóloga com especialização em Análise do Comportamento Aplicada (ABA),
                uma abordagem científica reconhecida mundialmente pela sua eficácia em
                promover mudanças comportamentais significativas e duradouras.
              </p>
              <p>
                Como terapeuta ABA e pós-graduanda em Neuropsicologia, combino conhecimento
                científico rigoroso com uma prática acolhedora e individualizada. Cada pessoa
                é única, e meu objetivo é criar intervenções personalizadas que respeitem as
                necessidades e potencialidades de cada indivíduo.
              </p>
              <p>
                Acredito que a ciência do comportamento pode transformar vidas, e trabalho
                todos os dias para tornar isso realidade para meus pacientes e suas famílias.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {credentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
