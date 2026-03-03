import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Heart, Award, BookOpen, Users } from "lucide-react";

const timeline = [
  {
    period: "2019 – 2023",
    title: "Graduação em Psicologia",
    institution: "Universidade Anhembi Morumbi",
    icon: GraduationCap,
  },
  {
    period: "2022 – 2024",
    title: "AT Escolar e Clínica · Trainee em Psicologia",
    institution: "Clínica Avançar",
    description:
      "Acompanhamento de crianças com TEA e neurodivergências. Elaboração e aplicação de treinos de habilidades (NET, DTT, AVD e PRT). Gestão de acompanhantes terapêuticos.",
    icon: Users,
  },
  {
    period: "2024 – 2026",
    title: "Pós-Graduação em Análise do Comportamento Aplicada (ABA)",
    institution: "PUC Goiás",
    icon: BookOpen,
  },
  {
    period: "2024 – Atual",
    title: "Psicóloga Clínica · Supervisora ABA",
    institution: "Clínicas e Particular",
    description:
      "Psicoterapia, supervisão ABA, orientação parental, elaboração de PEI e atendimento em ambiente naturalístico. Atuação com crianças, adolescentes e adultos.",
    icon: Heart,
  },
  {
    period: "2024 – Atual",
    title: "Prestadora de Serviços em Psicoterapia",
    institution: "ONG Obra Assistencial Padre Achilles",
    description: "Atendimentos em psicoterapia, rastreio de habilidades e avaliações socioemocionais.",
    icon: Award,
  },
  {
    period: "2026 – 2027",
    title: "Pós-Graduação em Neuropsicologia",
    institution: "Faculdade de Medicina – USP (FMUSP)",
    description: "Formação em Reabilitação Cognitiva.",
    icon: Brain,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Sobre Mim
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Minha <span className="italic text-primary">Trajetória</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Apaixonada pela singularidade da mente humana. Psicóloga clínica com experiência
            em análise do comportamento, desenvolvimento infantojuvenil e neurodivergências.
            Criativa, resolutiva, respeitosa e didática — acredito que todo conhecimento é
            bem-vindo quando se trata de acolher e cuidar com leveza e ciência.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Atuo na área de ABA há 4 anos. Meu interesse pela prática surgiu a partir de uma
            experiência pessoal, ao acompanhar o processo terapêutico de um familiar autista, o
            que motivou o aprofundamento no estudo da neurodivergência. Desde então, desenvolvi
            uma forte identificação com essa área, que ocupa um lugar central na minha atuação
            profissional.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Atendimento para crianças, adolescentes e adultos, sempre com base em evidências
            científicas e respeito à história de cada pessoa.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className={`relative flex items-start mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium text-primary">{item.period}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mb-1">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
