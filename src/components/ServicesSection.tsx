import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Handshake, Brain, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Psicoterapia Individual",
    description:
      "Atendimento para crianças, adolescentes e adultos. Um espaço de escuta, desenvolvimento emocional e manejo de dificuldades do dia a dia.",
    color: "bg-lilac-light text-lilac-dark",
  },
  {
    icon: Handshake,
    title: "Terapia de Casal",
    description:
      "Foco em comunicação, compreensão mútua e construção de relações saudáveis. Um espaço seguro para fortalecer o vínculo e resolver conflitos.",
    color: "bg-secondary/30 text-blue-soft-dark",
  },
  {
    icon: Brain,
    title: "Atendimento ABA, Orientação Parental e Supervisão ABA",
    description:
      "Intervenção baseada em Análise do Comportamento Aplicada: desenvolvimento de habilidades, autonomia e regulação comportamental em ambiente naturalístico e individualizado. Inclui orientação parental com estratégias baseadas em ciência comportamental, e supervisão técnica para profissionais e acompanhantes terapêuticos, com elaboração e acompanhamento de PEI e discussão de casos.",
    color: "bg-accent/30 text-green-sage-dark",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modalidades de{" "}
            <span className="italic text-primary">Atendimento</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Os atendimentos são realizados com crianças, adolescentes e adultos,
            sempre com base em evidências científicas e respeito à singularidade de cada pessoa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/agendar"
            className="inline-flex px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Agendar Atendimento
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
