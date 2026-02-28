import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const situacoesProfissionais = [
  "Empregado CLT",
  "Autônomo / PJ",
  "Estudante",
  "Desempregado",
  "Afastado pelo INSS",
  "Aposentado",
];

const faixasRenda = [
  "Até 1 salário mínimo",
  "1 a 2 salários mínimos",
  "2 a 4 salários mínimos",
  "4 a 8 salários mínimos",
  "Acima de 8 salários mínimos",
];

const despesasFixas = [
  "Aluguel/financiamento",
  "Plano de saúde",
  "Medicamentos contínuos",
  "Faculdade/curso",
  "Filhos",
  "Dívidas em andamento",
];

const situacoesFinanceiras = [
  "Muito apertada — dificuldades para despesas básicas",
  "Apertada — preciso controlar bastante gastos",
  "Estável — consigo manter despesas mensais",
  "Confortável — consigo investir em saúde e bem-estar",
];

const AvaliacaoFinanceira = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
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
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const body = `
AVALIAÇÃO DE POSSIBILIDADE DE INVESTIMENTO EM PSICOTERAPIA

Dados do paciente:
Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}

1. Situação profissional: ${formData.situacaoProfissional === "Outro" ? formData.situacaoProfissionalOutro : formData.situacaoProfissional}

2. Faixa de renda mensal: ${formData.faixaRenda}

3. Dependentes financeiros: ${formData.dependentes}

4. Despesas fixas: ${formData.despesas.join(", ")}${formData.despesasOutro ? `, ${formData.despesasOutro}` : ""}

5. Situação financeira atual: ${formData.situacaoFinanceira}

6. Valor mensal para psicoterapia: R$ ${formData.valorInvestimento}

7. Observações: ${formData.observacoes || "Nenhuma"}
    `.trim();

    const mailtoLink = `mailto:contato@isabellafava.com.br?subject=${encodeURIComponent("Avaliação de Investimento em Psicoterapia - " + formData.nome)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");

    setSending(false);
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
              Formulário enviado com sucesso!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Obrigada por compartilhar essas informações. Elas serão utilizadas de forma
              confidencial para que possamos definir, juntos, um valor justo e acessível
              para o seu acompanhamento.
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
            <div className="text-center mb-10">
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                Avaliação Financeira
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              {/* Dados pessoais */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" /> Seus Dados
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Nome completo *</label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      value={formData.nome}
                      onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Telefone *</label>
                  <input
                    required
                    type="tel"
                    maxLength={20}
                    value={formData.telefone}
                    onChange={(e) => setFormData((p) => ({ ...p, telefone: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* 1. Situação profissional */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  1. Situação Profissional
                </h2>
                <div className="space-y-2">
                  {situacoesProfissionais.map((s) => (
                    <label key={s} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                      <input
                        type="radio"
                        name="situacao"
                        checked={formData.situacaoProfissional === s}
                        onChange={() => handleRadio("situacaoProfissional", s)}
                        className="accent-primary"
                      />
                      {s}
                    </label>
                  ))}
                  <label className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="situacao"
                      checked={formData.situacaoProfissional === "Outro"}
                      onChange={() => handleRadio("situacaoProfissional", "Outro")}
                      className="accent-primary"
                    />
                    Outro:
                    {formData.situacaoProfissional === "Outro" && (
                      <input
                        type="text"
                        maxLength={100}
                        value={formData.situacaoProfissionalOutro}
                        onChange={(e) => setFormData((p) => ({ ...p, situacaoProfissionalOutro: e.target.value }))}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    )}
                  </label>
                </div>
              </div>

              {/* 2. Faixa de renda */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  2. Faixa de Renda Mensal Individual
                </h2>
                <div className="space-y-2">
                  {faixasRenda.map((f) => (
                    <label key={f} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                      <input
                        type="radio"
                        name="renda"
                        checked={formData.faixaRenda === f}
                        onChange={() => handleRadio("faixaRenda", f)}
                        className="accent-primary"
                      />
                      {f}
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Dependentes */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  3. Dependentes Financeiros
                </h2>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Quantas pessoas dependem da sua renda?
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={formData.dependentes}
                    onChange={(e) => setFormData((p) => ({ ...p, dependentes: e.target.value }))}
                    className="w-24 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* 4. Despesas fixas */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  4. Principais Despesas Fixas
                </h2>
                <p className="text-sm text-muted-foreground">Marque as que se aplicam:</p>
                <div className="space-y-2">
                  {despesasFixas.map((d) => (
                    <label key={d} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.despesas.includes(d)}
                        onChange={() => handleCheckbox(d)}
                        className="accent-primary"
                      />
                      {d}
                    </label>
                  ))}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-foreground">Outros:</span>
                    <input
                      type="text"
                      maxLength={200}
                      value={formData.despesasOutro}
                      onChange={(e) => setFormData((p) => ({ ...p, despesasOutro: e.target.value }))}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Autoavaliação */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  5. Situação Financeira Atual
                </h2>
                <p className="text-sm text-muted-foreground">Como você descreve sua situação financeira hoje?</p>
                <div className="space-y-2">
                  {situacoesFinanceiras.map((s) => (
                    <label key={s} className="flex items-center gap-3 text-sm text-foreground cursor-pointer">
                      <input
                        type="radio"
                        name="financeira"
                        checked={formData.situacaoFinanceira === s}
                        onChange={() => handleRadio("situacaoFinanceira", s)}
                        className="accent-primary"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {/* 6. Valor investimento */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  6. Expectativa de Investimento
                </h2>
                <p className="text-sm text-muted-foreground">
                  Qual valor mensal você acredita conseguir investir em psicoterapia atualmente?
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">R$</span>
                  <input
                    type="text"
                    maxLength={20}
                    value={formData.valorInvestimento}
                    onChange={(e) => setFormData((p) => ({ ...p, valorInvestimento: e.target.value }))}
                    className="w-40 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="0,00"
                  />
                </div>
              </div>

              {/* 7. Observações */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  7. Informações Adicionais (opcional)
                </h2>
                <p className="text-sm text-muted-foreground">
                  Existe alguma informação sobre sua situação financeira que considera importante compartilhar?
                </p>
                <textarea
                  maxLength={1000}
                  rows={4}
                  value={formData.observacoes}
                  onChange={(e) => setFormData((p) => ({ ...p, observacoes: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Sinta-se à vontade para compartilhar..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Enviando..." : "Enviar Avaliação"}
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  Suas informações são confidenciais e serão utilizadas apenas para adequação dos honorários.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AvaliacaoFinanceira;
