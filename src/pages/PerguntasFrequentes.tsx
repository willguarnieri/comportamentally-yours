import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como escolher a abordagem terapêutica ideal para mim?",
    answer: `A escolha da abordagem terapêutica depende das suas necessidades, objetivos e do tipo de dificuldade que você enfrenta. Existem diversas abordagens na psicologia, como a Terapia Analítico-Comportamental (TAC), a Terapia Cognitivo-Comportamental (TCC), a Psicanálise, entre outras. Cada uma possui fundamentos teóricos e técnicas próprias.

O mais importante é que você se sinta acolhido(a) e confortável com o profissional. Na primeira sessão, conversamos sobre suas expectativas e explico como funciona a abordagem que utilizo — a Análise do Comportamento — para que você possa avaliar se faz sentido para o seu momento.

Caso sinta que outra abordagem seria mais adequada, posso indicar colegas de confiança que trabalham com outras linhas teóricas.`,
  },
  {
    question: "Como funciona a primeira sessão?",
    answer: `A primeira sessão é um momento de acolhimento e escuta. Não existe expectativa de que você chegue "pronto(a)" — é um espaço para compartilhar o que te trouxe até ali, no seu tempo.

Nesse encontro, vamos conversar sobre:
• O que motivou a busca por psicoterapia
• Suas principais queixas e expectativas
• Um pouco da sua história de vida
• Como funciona o processo terapêutico

Também é o momento de esclarecer dúvidas sobre frequência, valores, sigilo e a abordagem utilizada. A primeira sessão é fundamental para construirmos juntos um plano de cuidado que faça sentido para você.`,
  },
  {
    question: "Toda terapeuta é uma psicóloga?",
    answer: `Não. Embora os termos sejam frequentemente usados como sinônimos, existe uma diferença importante:

Psicólogo(a) é o profissional graduado em Psicologia, com registro ativo no Conselho Regional de Psicologia (CRP). Somente psicólogos podem realizar psicoterapia, avaliação psicológica e diagnóstico psicológico.

Terapeuta é um termo mais amplo que pode se referir a profissionais de diversas áreas — como terapeutas ocupacionais, terapeutas holísticos, entre outros. Nem todo terapeuta possui formação em Psicologia.

Por isso, ao buscar atendimento em saúde mental, é fundamental verificar se o profissional é psicólogo(a) com CRP ativo, garantindo que o atendimento seja realizado por alguém habilitado e regulamentado.`,
  },
  {
    question: "Qual a diferença entre atendimento online e presencial?",
    answer: `Ambas as modalidades são eficazes e reconhecidas pelo Conselho Federal de Psicologia (CFP). A escolha entre online e presencial depende da sua rotina, preferência e conforto.

O atendimento online oferece praticidade, flexibilidade de horário e pode ser realizado de qualquer lugar com internet. Já o presencial permite uma interação mais próxima no ambiente clínico.

O mais importante é que o vínculo terapêutico e a qualidade do atendimento sejam preservados em ambas as modalidades.`,
  },
  {
    question: "Com que frequência devo ir à terapia?",
    answer: `A frequência das sessões é definida em conjunto, considerando suas necessidades e disponibilidade. O mais comum é o atendimento semanal, que favorece a continuidade do processo terapêutico e a construção de mudanças consistentes.

Em alguns casos, pode-se iniciar com frequência maior (duas vezes por semana) ou, ao longo do processo, espaçar as sessões conforme a evolução do tratamento. Essa decisão é sempre conversada e ajustada de acordo com o seu momento.`,
  },
];

const PerguntasFrequentes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                Dúvidas
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas{" "}
                <span className="italic text-primary">Frequentes</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Reunimos aqui as dúvidas mais comuns sobre psicoterapia para
                ajudar você a dar o primeiro passo com mais segurança e clareza.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Perguntas e Respostas
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-10"
            >
              <p className="text-muted-foreground mb-4">
                Ainda tem dúvidas? Entre em contato e terei prazer em ajudar.
              </p>
              <a
                href="https://wa.me/5511991485931?text=Ol%C3%A1%20%F0%9F%A4%8D%21%20Fico%20feliz%20que%20tenha%20entrado%20em%20contato.%20Como%20posso%20te%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Falar pelo WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PerguntasFrequentes;
