import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Baby, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const textareaClass = `${inputClass} resize-none`;
const labelClass = "block text-sm font-medium text-foreground mb-1";
const checkboxGroupClass = "flex flex-wrap gap-x-6 gap-y-2 mt-1";

const CheckOption = ({ label }: { label: string }) => (
  <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
    <input type="checkbox" className="rounded border-input text-primary focus:ring-ring" />
    {label}
  </label>
);

const Anamnese = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24 container mx-auto px-6 text-center max-w-lg">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Anamnese recebida!
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Obrigada por preencher a anamnese. As informações serão analisadas com cuidado e sigilo
              antes da nossa primeira sessão. Entrarei em contato em breve.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-24 container mx-auto px-6 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
            Anamnese <span className="italic text-primary">Online</span>
          </h1>
          <p className="text-sm text-primary font-medium mb-2">Isabella Fava — Psicóloga e Especialista ABA</p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Selecione o tipo de anamnese e preencha as informações para facilitar o início do seu acompanhamento.
            Todas as informações são confidenciais e protegidas pelo sigilo profissional.
          </p>
        </motion.div>

        <Tabs defaultValue="adulto" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="infantil" className="flex items-center gap-2">
              <Baby className="w-4 h-4" /> Infantil
            </TabsTrigger>
            <TabsTrigger value="adolescente" className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Adolescente
            </TabsTrigger>
            <TabsTrigger value="adulto" className="flex items-center gap-2">
              <User className="w-4 h-4" /> Adulto
            </TabsTrigger>
          </TabsList>

          {/* INFANTIL TAB */}
          <TabsContent value="infantil">
            <div className="p-8 rounded-2xl bg-card border border-border text-center flex flex-col items-center justify-center min-h-[300px]">
              <Baby className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Anamnese Infantil
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                A anamnese infantil é realizada por meio de um formulário específico.
                Clique no botão abaixo para acessá-lo.
              </p>
              <a
                href="https://wa.me/5511991485931?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20a%20anamnese%20infantil."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Solicitar Anamnese Infantil
              </a>
            </div>
          </TabsContent>

          {/* ADOLESCENTE TAB */}
          <TabsContent value="adolescente">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1 - Identificação */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  1 – Identificação do Adolescente
                </legend>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Nome *</label><input required type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Apelido</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Nome da Mãe</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Nome do Pai</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Data de Nascimento *</label><input required type="date" className={inputClass} /></div>
                  <div><label className={labelClass}>Idade</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Sexo</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Escolaridade</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Religião</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Endereço</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Telefone Residencial</label><input type="tel" className={inputClass} /></div>
                  <div><label className={labelClass}>Telefone Celular</label><input type="tel" className={inputClass} /></div>
                </div>
              </fieldset>

              {/* 2 - Dinâmica Familiar */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  2 – Dinâmica Familiar
                </legend>
                <div><label className={labelClass}>Quem são as pessoas que moram com você?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Como é o relacionamento com seus irmãos?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>E o relacionamento com os seus pais?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Quando você faz algo que desagrada os seus pais, o que eles fazem?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Com quem você gosta mais de conversar e resolver seus problemas?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Você identifica alguém na sua família com quem tenha dificuldade de relacionamento?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Como você percebe o clima em sua casa?</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              {/* 2.2 - Situação Escolar */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  Situação Escolar
                </legend>
                <div><label className={labelClass}>Qual o nome da sua escola?</label><input type="text" className={inputClass} /></div>
                <div><label className={labelClass}>Você frequenta normalmente a escola?</label><input type="text" className={inputClass} /></div>
                <div><label className={labelClass}>Como está o seu desempenho escolar?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>O que você gosta e o que não gosta na sua escola?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Fale sobre o relacionamento com seus colegas e professores</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Qual o profissional de referência para você na escola?</label><input type="text" className={inputClass} /></div>
                <div><label className={labelClass}>Você realiza alguma atividade extra escolar?</label><input type="text" className={inputClass} /></div>
              </fieldset>

              {/* Sexualidade e Relacionamentos */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  Sexualidade e Relacionamentos
                </legend>
                <div><label className={labelClass}>Você tem namorado(a)?</label><input type="text" className={inputClass} /></div>
                <div><label className={labelClass}>Você já recebeu alguma orientação sexual em sua casa? E na escola?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Relação com amigos (facilidade/dificuldade de estabelecer relações de amizade)</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Lugares que gosta de frequentar</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              {/* Vivências e Reflexões */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  Vivências e Reflexões
                </legend>
                <div><label className={labelClass}>O que faz no tempo livre?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Quais as lembranças mais marcantes da sua infância?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Que mudanças aconteceram na sua vida? Foram positivas ou negativas?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Como é sua casa? É tranquila ou agitada? É um lugar seguro?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>O que as pessoas dizem de você? Você concorda?</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>O que você mais gosta em você? E o que menos gosta?</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              {/* Expectativas */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  Expectativas em Relação ao Futuro
                </legend>
                <div><label className={labelClass}>O que você espera do futuro?</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Que atividade profissional gostaria de exercer?</label><input type="text" className={inputClass} /></div>
                <div><label className={labelClass}>Como você espera realizar esse desejo?</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              <button type="submit" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity">
                Enviar Anamnese
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Todas as informações são protegidas pelo sigilo profissional (Código de Ética do Psicólogo).
              </p>
            </form>
          </TabsContent>

          {/* ADULTO TAB */}
          <TabsContent value="adulto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1 - Identificação */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  1 – Identificação
                </legend>
                <div><label className={labelClass}>Data do atendimento</label><input type="date" className={inputClass} /></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Nome *</label><input required type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Idade</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Sexo</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Nacionalidade</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Estado Civil</label>
                    <select className={inputClass}>
                      <option value="">Selecione</option>
                      <option>Solteiro(a)</option>
                      <option>Casado(a)</option>
                      <option>Divorciado(a)</option>
                      <option>Viúvo(a)</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div><label className={labelClass}>Data de nascimento</label><input type="date" className={inputClass} /></div>
                  <div><label className={labelClass}>Grau de instrução</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Profissão</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Residência (Cidade/Estado)</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Telefones para contato</label><input type="tel" className={inputClass} /></div>
                </div>
              </fieldset>

              {/* 2 - Atendimento */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  2 – Atendimento
                </legend>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Frequência</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Data/hora</label><input type="text" className={inputClass} /></div>
                </div>
                <div><label className={labelClass}>Queixa Principal *</label><textarea required rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Queixa Secundária</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Sintomas</label><textarea rows={3} className={textareaClass} /></div>
              </fieldset>

              {/* 3 - Histórico da Doença Atual */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  3 – Histórico da Doença Atual
                </legend>
                <div><label className={labelClass}>Início da patologia</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Frequência</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Intensidade</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Tratamentos anteriores</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Medicamentos</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              {/* 4 - Histórico Pessoal */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  4 – Histórico Pessoal
                </legend>
                <div><label className={labelClass}>Infância</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Rotina</label><textarea rows={3} className={textareaClass} /></div>
                <div><label className={labelClass}>Vícios</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Hobbies</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Trabalho</label><textarea rows={2} className={textareaClass} /></div>
              </fieldset>

              {/* 5 - Histórico Familiar */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  5 – Histórico Familiar
                </legend>
                <div><label className={labelClass}>Pais</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Irmãos</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Cônjuge</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Filhos</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Lar</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Patológica Pregressa (enfermidades e tratamentos atuais e anteriores)</label><textarea rows={3} className={textareaClass} /></div>
              </fieldset>

              {/* 6 - Exame Psíquico */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  6 – Exame Psíquico
                </legend>
                <div><label className={labelClass}>Aparência</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Comportamento</label><textarea rows={2} className={textareaClass} /></div>

                <div>
                  <label className={labelClass}>Atitude para com o entrevistador</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Cooperativo" />
                    <CheckOption label="Resistente" />
                    <CheckOption label="Indiferente" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Orientação</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Autoidentificatória" />
                    <CheckOption label="Corporal" />
                    <CheckOption label="Temporal" />
                    <CheckOption label="Espacial" />
                    <CheckOption label="Orientado em relação à patologia" />
                  </div>
                  <label className={`${labelClass} mt-3`}>Observações</label>
                  <textarea rows={2} className={textareaClass} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Atenção – Vigilância</label><input type="text" className={inputClass} /></div>
                  <div><label className={labelClass}>Atenção – Tenacidade</label><input type="text" className={inputClass} /></div>
                </div>

                <div><label className={labelClass}>Memória</label><textarea rows={2} className={textareaClass} /></div>
                <div><label className={labelClass}>Inteligência</label><textarea rows={2} className={textareaClass} /></div>

                <div>
                  <label className={labelClass}>Senso-percepção</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Normal" />
                    <CheckOption label="Alucinação" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Pensamento – Curso</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Acelerado" />
                    <CheckOption label="Retardado" />
                    <CheckOption label="Fuga" />
                    <CheckOption label="Bloqueio" />
                    <CheckOption label="Prolixo" />
                    <CheckOption label="Repetição" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Pensamento – Conteúdo</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Obsessões" />
                    <CheckOption label="Hipocondrias" />
                    <CheckOption label="Fobias" />
                    <CheckOption label="Delírios" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Expansão do Eu</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Grandeza" />
                    <CheckOption label="Ciúme" />
                    <CheckOption label="Reivindicação" />
                    <CheckOption label="Genealógico" />
                    <CheckOption label="Místico / Missão salvadora" />
                    <CheckOption label="Deificação" />
                    <CheckOption label="Erótico" />
                    <CheckOption label="Invenção ou reforma" />
                    <CheckOption label="Ideias fantásticas" />
                    <CheckOption label="Excessiva saúde" />
                    <CheckOption label="Capacidade física" />
                    <CheckOption label="Beleza" />
                  </div>
                  <div className="mt-2"><label className={labelClass}>Outros</label><input type="text" className={inputClass} /></div>
                </div>

                <div>
                  <label className={labelClass}>Retração do Eu</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Prejuízo" />
                    <CheckOption label="Auto-referência" />
                    <CheckOption label="Perseguição" />
                    <CheckOption label="Influência" />
                    <CheckOption label="Possessão" />
                    <CheckOption label="Humildades" />
                    <CheckOption label="Experiências apocalípticas" />
                  </div>
                  <div className="mt-2"><label className={labelClass}>Outros</label><input type="text" className={inputClass} /></div>
                </div>

                <div>
                  <label className={labelClass}>Negação do Eu</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Hipocondríaco" />
                    <CheckOption label="Negação e transformação corporal" />
                    <CheckOption label="Autoacusação" />
                    <CheckOption label="Culpa" />
                    <CheckOption label="Ruína" />
                    <CheckOption label="Niilismo" />
                    <CheckOption label="Tendência ao suicídio" />
                  </div>
                  <div className="mt-2"><label className={labelClass}>Outros</label><input type="text" className={inputClass} /></div>
                </div>

                <div>
                  <label className={labelClass}>Linguagem</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Disartrias (má articulação)" />
                    <CheckOption label="Afasias / Verbigeração" />
                    <CheckOption label="Parafasia" />
                    <CheckOption label="Neologismo" />
                    <CheckOption label="Mussitação" />
                    <CheckOption label="Logorréia" />
                    <CheckOption label="Para-respostas" />
                  </div>
                </div>

                <div><label className={labelClass}>Afetividade</label><textarea rows={2} className={textareaClass} /></div>

                <div>
                  <label className={labelClass}>Humor</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Normal" />
                    <CheckOption label="Exaltado" />
                    <CheckOption label="Baixa de humor" />
                    <CheckOption label="Quebra súbita da tonalidade do humor" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Consciência da doença atual</label>
                  <div className={checkboxGroupClass}>
                    <CheckOption label="Sim" />
                    <CheckOption label="Parcialmente" />
                    <CheckOption label="Não" />
                  </div>
                </div>
              </fieldset>

              {/* 7 - Hipótese Diagnóstica */}
              <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
                <legend className="font-display font-semibold text-foreground text-lg px-2">
                  7 – Hipótese Diagnóstica
                </legend>
                <div><label className={labelClass}>Hipótese diagnóstica</label><textarea rows={4} className={textareaClass} /></div>
              </fieldset>

              <button type="submit" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity">
                Enviar Anamnese
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Todas as informações são protegidas pelo sigilo profissional (Código de Ética do Psicólogo).
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Anamnese;
