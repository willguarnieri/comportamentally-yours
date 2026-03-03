import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, FileText, ClipboardList, ScrollText } from "lucide-react";

const tiposDocumento = [
  { value: "anamnese", label: "Anamnese", icon: ClipboardList },
  { value: "relatorio", label: "Relatório Psicológico", icon: ScrollText },
  { value: "laudo", label: "Laudo Psicológico", icon: FileText },
  { value: "declaracao", label: "Declaração de Acompanhamento", icon: FileText },
  { value: "encaminhamento", label: "Encaminhamento", icon: FileText },
  { value: "outro", label: "Outro documento", icon: FileText },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoDocumento: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tipoLabel = tiposDocumento.find((t) => t.value === formData.tipoDocumento)?.label || formData.tipoDocumento;

    const body = `
SOLICITAÇÃO DE DOCUMENTO

Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}

Tipo de documento: ${tipoLabel}

Descrição / Observações:
${formData.descricao}
    `.trim();

    const mailtoLink = `mailto:contato@isabellafava.com.br?subject=${encodeURIComponent(
      "Solicitação de Documento - " + tipoLabel + " - " + formData.nome
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Documentos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Solicitar{" "}
              <span className="italic text-primary">Documentos</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilize este formulário para solicitar anamneses, relatórios psicológicos, laudos,
              declarações de acompanhamento ou qualquer outro documento relacionado ao seu atendimento.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              O prazo para elaboração varia conforme o tipo de documento. Após o envio da solicitação,
              entrarei em contato para alinhar os detalhes.
            </p>

            <div className="space-y-5 mb-8">
              <a href="https://wa.me/5511991485931?text=Ol%C3%A1%20%F0%9F%A4%8D%21%20Fico%20feliz%20que%20tenha%20entrado%20em%20contato.%20Como%20posso%20te%20ajudar%3F" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">(11) 99148-5931</p>
                </div>
              </a>
              <a href="tel:+5511991485931" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--lilac-light))] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">(11) 99148-5931</p>
                </div>
              </a>
              <a href="mailto:contato@isabellafava.com.br" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--lilac-light))] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">contato@isabellafava.com.br</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--lilac-light))] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">São Paulo – SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="p-8 rounded-2xl bg-card border border-border text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Solicitação enviada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigada pelo seu contato. Retornarei o mais breve possível com as informações sobre o documento solicitado.
                </p>
              </div>
            ) : (
              <form
                className="p-8 rounded-2xl bg-card border border-border space-y-5"
                onSubmit={handleSubmit}
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Solicitar Documento
                </h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData((p) => ({ ...p, telefone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tipo de Documento</label>
                  <select
                    required
                    value={formData.tipoDocumento}
                    onChange={(e) => setFormData((p) => ({ ...p, tipoDocumento: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione o tipo de documento</option>
                    {tiposDocumento.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Descrição / Observações</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva o que precisa, inclua informações relevantes como finalidade do documento, prazo desejado, etc."
                    value={formData.descricao}
                    onChange={(e) => setFormData((p) => ({ ...p, descricao: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Enviar Solicitação
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
