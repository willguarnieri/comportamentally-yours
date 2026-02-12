import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Baseada em evidências científicas rigorosas",
  "Intervenções individualizadas para cada paciente",
  "Foco no desenvolvimento de habilidades funcionais",
  "Melhora na comunicação e interação social",
  "Redução de comportamentos desafiadores",
  "Envolvimento ativo da família no processo",
];

const ABASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aba" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Abordagem Terapêutica
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que é <span className="italic text-primary">Análise do Comportamento?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A Análise do Comportamento Aplicada (ABA) é uma ciência que estuda o
            comportamento humano e aplica seus princípios para promover mudanças
            significativas e melhorar a qualidade de vida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-2xl bg-lilac-light/30 border border-lilac-light"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Como funciona a terapia ABA?
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A terapia ABA utiliza princípios da ciência do comportamento para
                compreender por que determinados comportamentos ocorrem e como o ambiente
                pode ser modificado para promover aprendizagens positivas.
              </p>
              <p>
                Através de avaliações detalhadas, são criados programas individualizados
                que visam desenvolver habilidades sociais, de comunicação, acadêmicas e
                de vida diária, sempre respeitando o ritmo e as particularidades de cada pessoa.
              </p>
              <p>
                Os dados são coletados e analisados continuamente, garantindo que as
                intervenções sejam eficazes e possam ser ajustadas conforme necessário.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Benefícios da Abordagem
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ABASection;
