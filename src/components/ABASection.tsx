import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const benefitsABA = [
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
            Análise do Comportamento:{" "}
            <span className="italic text-primary">ABA e TAC</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A Análise do Comportamento é a ciência que fundamenta minha prática clínica. 
            Ela se divide em duas vertentes complementares que utilizo no atendimento: 
            a <strong>Análise do Comportamento Aplicada (ABA)</strong> e a{" "}
            <strong>Terapia Analítico-Comportamental (TAC)</strong>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ABA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-2xl bg-lilac-light/30 border border-lilac-light"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              🧩 Análise do Comportamento Aplicada (ABA)
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                A ABA é voltada principalmente para o <strong>desenvolvimento de habilidades</strong> em 
                pessoas com Transtorno do Espectro Autista (TEA) e outras neurodivergências. Utiliza 
                procedimentos como DTT, NET e PRT para ensinar comunicação, habilidades sociais, 
                autonomia e regulação comportamental.
              </p>
              <p>
                Os programas são <strong>individualizados</strong>, baseados em avaliações detalhadas 
                e com coleta contínua de dados para garantir a eficácia das intervenções. Inclui também 
                orientação parental e supervisão de acompanhantes terapêuticos.
              </p>
            </div>
          </motion.div>

          {/* TAC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-2xl bg-accent/20 border border-accent/40"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              💬 Terapia Analítico-Comportamental (TAC)
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                A TAC é a abordagem utilizada na <strong>psicoterapia clínica</strong> com adolescentes 
                e adultos. Fundamentada nos mesmos princípios da Análise do Comportamento, ela foca na 
                compreensão da relação entre pensamentos, emoções e comportamentos no contexto de vida 
                de cada pessoa.
              </p>
              <p>
                O objetivo é promover <strong>autoconhecimento</strong>, flexibilidade psicológica e 
                mudanças significativas no repertório comportamental, sempre com base em evidências 
                científicas e respeito à história singular de cada indivíduo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Benefícios da Abordagem Comportamental
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefitsABA.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ABASection;
