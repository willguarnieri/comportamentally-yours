import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <div className="pt-28 pb-24 container mx-auto px-6 max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Anamnese <span className="italic text-primary">Online</span>
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Preencha as informações abaixo para facilitar o início do seu acompanhamento.
            Todas as informações são confidenciais e protegidas pelo sigilo profissional.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados Pessoais */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Dados Pessoais
            </legend>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Nome completo *</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Data de nascimento *</label>
                <input required type="date" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Telefone *</label>
                <input required type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">E-mail *</label>
                <input required type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Estado civil</label>
                <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Selecione</option>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Viúvo(a)</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Profissão</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
          </fieldset>

          {/* Queixa Principal */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Queixa Principal
            </legend>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                O que motivou a busca por atendimento psicológico? *
              </label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Descreva como tem se sentido e o que o(a) levou a buscar ajuda..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Há quanto tempo percebe essas dificuldades?
              </label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </fieldset>

          {/* Histórico Emocional */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Histórico Emocional e Comportamental
            </legend>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Já fez acompanhamento psicológico ou psiquiátrico anteriormente?
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Selecione</option>
                <option>Sim, psicológico</option>
                <option>Sim, psiquiátrico</option>
                <option>Sim, ambos</option>
                <option>Não</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Se sim, conte um pouco sobre essa experiência
              </label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Como descreveria seu humor atualmente?
              </label>
              <input type="text" placeholder="Ex.: ansioso, triste, irritado, instável..." className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </fieldset>

          {/* Histórico Médico */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Histórico Médico
            </legend>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Possui algum diagnóstico médico ou psicológico?
              </label>
              <input type="text" placeholder="Ex.: TDAH, depressão, ansiedade..." className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Faz uso de alguma medicação?
              </label>
              <textarea rows={2} placeholder="Nome da medicação e dosagem, se souber" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
          </fieldset>

          {/* Informações Familiares */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Informações Familiares
            </legend>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Com quem você mora atualmente?
              </label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Há histórico de transtornos psicológicos na família?
              </label>
              <textarea rows={2} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
          </fieldset>

          {/* Observações */}
          <fieldset className="p-6 rounded-xl bg-card border border-border space-y-4">
            <legend className="font-display font-semibold text-foreground text-lg px-2">
              Observações
            </legend>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Há algo mais que gostaria de compartilhar?
              </label>
              <textarea rows={4} placeholder="Sinta-se à vontade para escrever qualquer informação que considere relevante..." className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Enviar Anamnese
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Todas as informações são protegidas pelo sigilo profissional (Código de Ética do Psicólogo).
          </p>
        </form>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Anamnese;
