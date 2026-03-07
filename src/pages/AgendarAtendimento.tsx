import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, ArrowLeft, Heart, Send, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const getHorariosForDay = (date: Date): string[] => {
  const day = date.getDay();
  if (day === 6) {
    // Sábado: 8h às 15h
    return ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  }
  if (day === 5) {
    // Sexta: 8h às 18h
    return ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  }
  // Segunda a quinta: 8h às 21h
  return ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
};

const situacoesProfissionais = [
  "Empregado CLT", "Autônomo / PJ", "Estudante",
  "Desempregado", "Afastado pelo INSS", "Aposentado",
];

const faixasRenda = [
  "Até 1 salário mínimo", "1 a 2 salários mínimos",
  "2 a 4 salários mínimos", "4 a 8 salários mínimos",
  "Acima de 8 salários mínimos",
];

const despesasFixas = [
  "Aluguel/financiamento", "Plano de saúde", "Medicamentos contínuos",
  "Faculdade/curso", "Filhos", "Dívidas em andamento",
];

const situacoesFinanceiras = [
  "Muito apertada — dificuldades para despesas básicas",
  "Apertada — preciso controlar bastante gastos",
  "Estável — consigo manter despesas mensais",
  "Confortável — consigo investir em saúde e bem-estar",
];

interface SelectedSlot {
  date: Date;
  horarios: string[];
}

const AgendarAtendimento = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1 - Scheduling
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlot[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | undefined>();
  const [currentHorarios, setCurrentHorarios] = useState<string[]>([]);
  const [nomeAgendamento, setNomeAgendamento] = useState("");
  const [emailAgendamento, setEmailAgendamento] = useState("");
  const [telefoneAgendamento, setTelefoneAgendamento] = useState("");

  // Step 2 - Financial
  const [formData, setFormData] = useState({
    situacaoProfissional: "",
    situacaoProfissionalOutro: "",
    faixaRenda: "",
    dependentes: "",
    despesas: [] as string[],
    despesasOutro: "",
    situacaoFinanceira: "",
    valorInvestimento: "",
    observacoes: "",
  });

  const toggleHorario = (h: string) => {
    setCurrentHorarios((prev) =>
      prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]
    );
  };

  const addSlot = () => {
    if (!currentDate || currentHorarios.length === 0) return;
    setSelectedSlots((prev) => {
      const existing = prev.find(
        (s) => s.date.toDateString() === currentDate.toDateString()
      );
      if (existing) {
        return prev.map((s) =>
          s.date.toDateString() === currentDate.toDateString()
            ? { ...s, horarios: [...new Set([...s.horarios, ...currentHorarios])] }
            : s
        );
      }
      return [...prev, { date: currentDate, horarios: [...currentHorarios] }];
    });
    setCurrentDate(undefined);
    setCurrentHorarios([]);
  };

  const removeSlot = (index: number) => {
    setSelectedSlots((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRadio = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      despesas: prev.despesas.includes(value)
        ? prev.despesas.filter((d) => d !== value)
        : [...prev.despesas, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const slotsText = selectedSlots
      .map(
        (s) =>
          `${format(s.date, "dd/MM/yyyy (EEEE)", { locale: ptBR })}: ${s.horarios.join(", ")}`
      )
      .join("\n");

    const body = `
AGENDAMENTO + AVALIAÇÃO FINANCEIRA

Dados do paciente:
Nome: ${nomeAgendamento}
E-mail: ${emailAgendamento}
Telefone: ${telefoneAgendamento}

--- PASSO 1: HORÁRIOS DISPONÍVEIS ---
${slotsText}

--- PASSO 2: AVALIAÇÃO FINANCEIRA ---
1. Situação profissional: ${formData.situacaoProfissional === "Outro" ? formData.situacaoProfissionalOutro : formData.situacaoProfissional}
2. Faixa de renda mensal: ${formData.faixaRenda}
3. Dependentes financeiros: ${formData.dependentes}
4. Despesas fixas: ${formData.despesas.join(", ")}${formData.despesasOutro ? `, ${formData.despesasOutro}` : ""}
5. Situação financeira atual: ${formData.situacaoFinanceira}
6. Valor mensal para psicoterapia: R$ ${formData.valorInvestimento}
7. Observações: ${formData.observacoes || "Nenhuma"}
    `.trim();

    const mailtoLink = `mailto:contato@isabellafava.com.br?subject=${encodeURIComponent(
      "Agendamento + Avaliação Financeira - " + nomeAgendamento
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center p-10 rounded-2xl bg-card border border-border"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Obrigada pelas informações!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A psicóloga entrará em contato para finalizar o agendamento.
              Suas informações financeiras serão tratadas com total confidencialidade.
            </p>
            <a
              href="/"
              className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Voltar ao Início
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

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
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${step === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <CalendarCheck className="w-4 h-4" />
                Passo 1 — Agendamento
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${step === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <Heart className="w-4 h-4" />
                Passo 2 — Avaliação Financeira
              </div>
            </div>

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-6">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Agendar <span className="italic text-primary">Atendimento</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Selecione as datas e horários em que você tem disponibilidade. A psicóloga entrará em contato para confirmar.
                  </p>
                </div>

                {/* Personal data */}
                <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <h2 className="font-display text-lg font-semibold text-foreground">Seus Dados</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Nome completo *</label>
                      <input
                        required
                        type="text"
                        value={nomeAgendamento}
                        onChange={(e) => setNomeAgendamento(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                      <input
                        required
                        type="email"
                        value={emailAgendamento}
                        onChange={(e) => setEmailAgendamento(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Telefone *</label>
                    <input
                      required
                      type="tel"
                      value={telefoneAgendamento}
                      onChange={(e) => setTelefoneAgendamento(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Calendar + Time selection */}
                <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Selecione Data e Horários Disponíveis
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Calendar
                        mode="single"
                        selected={currentDate}
                        onSelect={setCurrentDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-lg border border-border pointer-events-auto"
                        locale={ptBR}
                      />
                    </div>
                    {currentDate && (
                      <div className="flex-1 space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          Horários para {format(currentDate, "dd/MM/yyyy (EEEE)", { locale: ptBR })}:
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {getHorariosForDay(currentDate).map((h) => (
                            <button
                              key={h}
                              type="button"
                              onClick={() => toggleHorario(h)}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                                currentHorarios.includes(h)
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "border-input text-foreground hover:bg-muted"
                              }`}
                            >
                              {h}
                            </button>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={addSlot}
                          disabled={currentHorarios.length === 0}
                          className="mt-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-40"
                        >
                          Adicionar disponibilidade
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected slots */}
                {selectedSlots.length > 0 && (
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      Suas Disponibilidades
                    </h2>
                    <div className="space-y-2">
                      {selectedSlots.map((slot, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50 border border-border"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {format(slot.date, "dd/MM/yyyy (EEEE)", { locale: ptBR })}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {slot.horarios.join(", ")}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeSlot(i)}
                            className="text-xs text-destructive hover:underline"
                          >
                            Remover
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={selectedSlots.length === 0 || !nomeAgendamento || !emailAgendamento || !telefoneAgendamento}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-40"
                  >
                    Próximo Passo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="text-center mb-8">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Avaliação de Possibilidade de{" "}
                    <span className="italic text-primary">Investimento em Psicoterapia</span>
                  </h1>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    Utilizo este formulário breve para ajustar os honorários de forma justa e possível
                    para cada pessoa, respeitando a realidade financeira individual. Todas as informações
                    são <strong>confidenciais</strong> e o valor será definido em conjunto.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* 1. Situação profissional */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">1. Situação Profissional</h2>
                    <div className="space-y-2">
                      {situacoesProfissionais.map((s) => (
                        <label key={s} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                          <input type="radio" name="situacao" checked={formData.situacaoProfissional === s} onChange={() => handleRadio("situacaoProfissional", s)} className="accent-primary" />
                          {s}
                        </label>
                      ))}
                      <label className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                        <input type="radio" name="situacao" checked={formData.situacaoProfissional === "Outro"} onChange={() => handleRadio("situacaoProfissional", "Outro")} className="accent-primary" />
                        Outro:
                        {formData.situacaoProfissional === "Outro" && (
                          <input type="text" value={formData.situacaoProfissionalOutro} onChange={(e) => setFormData((p) => ({ ...p, situacaoProfissionalOutro: e.target.value }))} className="flex-1 px-3 py-1.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        )}
                      </label>
                    </div>
                  </div>

                  {/* 2. Faixa de renda */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">2. Faixa de Renda Mensal Individual</h2>
                    <div className="space-y-2">
                      {faixasRenda.map((f) => (
                        <label key={f} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                          <input type="radio" name="renda" checked={formData.faixaRenda === f} onChange={() => handleRadio("faixaRenda", f)} className="accent-primary" />
                          {f}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 3. Dependentes */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">3. Dependentes Financeiros</h2>
                    <label className="text-sm text-muted-foreground mb-1 block">Quantas pessoas dependem da sua renda?</label>
                    <input type="number" min={0} max={20} value={formData.dependentes} onChange={(e) => setFormData((p) => ({ ...p, dependentes: e.target.value }))} className="w-24 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>

                  {/* 4. Despesas fixas */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">4. Principais Despesas Fixas</h2>
                    <p className="text-sm text-muted-foreground">Marque as que se aplicam:</p>
                    <div className="space-y-2">
                      {despesasFixas.map((d) => (
                        <label key={d} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" checked={formData.despesas.includes(d)} onChange={() => handleCheckbox(d)} className="accent-primary" />
                          {d}
                        </label>
                      ))}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-foreground">Outros:</span>
                        <input type="text" value={formData.despesasOutro} onChange={(e) => setFormData((p) => ({ ...p, despesasOutro: e.target.value }))} className="flex-1 px-3 py-1.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                    </div>
                  </div>

                  {/* 5. Autoavaliação */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">5. Situação Financeira Atual</h2>
                    <p className="text-sm text-muted-foreground">Como você descreve sua situação financeira hoje?</p>
                    <div className="space-y-2">
                      {situacoesFinanceiras.map((s) => (
                        <label key={s} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                          <input type="radio" name="financeira" checked={formData.situacaoFinanceira === s} onChange={() => handleRadio("situacaoFinanceira", s)} className="accent-primary" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 6. Valor investimento */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">6. Expectativa de Investimento</h2>
                    <p className="text-sm text-muted-foreground">Qual valor mensal você acredita conseguir investir em psicoterapia atualmente?</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">R$</span>
                      <input type="text" value={formData.valorInvestimento} onChange={(e) => setFormData((p) => ({ ...p, valorInvestimento: e.target.value }))} className="w-40 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="0,00" />
                    </div>
                  </div>

                  {/* 7. Observações */}
                  <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                    <h2 className="font-display text-lg font-semibold text-foreground">7. Informações Adicionais (opcional)</h2>
                    <p className="text-sm text-muted-foreground">Existe alguma informação sobre sua situação financeira que considera importante compartilhar?</p>
                    <textarea rows={4} value={formData.observacoes} onChange={(e) => setFormData((p) => ({ ...p, observacoes: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Sinta-se à vontade para compartilhar..." />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4" />
                      Enviar
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Suas informações são confidenciais e serão utilizadas apenas para adequação dos honorários.
                  </p>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AgendarAtendimento;
