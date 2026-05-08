import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { BookOpen, ExternalLink, X, FileText, BookMarked, Library } from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type TipoMaterial = "pdf" | "externo";

interface Material {
  id: number;
  titulo: string;
  categoria: string;
  descricao: string;
  url: string;
  tipo: TipoMaterial;
}

// ─── Dados ────────────────────────────────────────────────────────────────────

const materiais: Material[] = [
  {
    id: 1,
    titulo: "Interações Amorosas sob uma Perspectiva Comportamental",
    categoria: "Relacionamentos",
    descricao:
      "Discussão analítico-comportamental sobre vínculos afetivos e interações amorosas.",
    url: "https://itcrcampinas.com.br/pdf/helio/interacoesamorosas.pdf",
    tipo: "pdf",
  },
  {
    id: 2,
    titulo: "Applied Behavior Analysis — Cooper, Heron & Heward",
    categoria: "Bases Teóricas",
    descricao:
      "Referência clássica e fundamental da Análise do Comportamento Aplicada.",
    url: "https://books.google.com.br/books?hl=pt-BR&lr=&id=jeksEAAAQBAJ&oi=fnd&pg=PA1967&dq=COOPER,+J.+O.%3B+HERON,+T.+E.%3B+HEWARD,+W.+L.+Applied+Behavior+Analysis.+3.+ed.+Hoboken:+Pearson,+2020.&ots=aHrvflGep-&sig=KseddxoKEwGGicHv8fa2tgT7CLo&redir_esc=y#v=onepage&q&f=false",
    tipo: "externo",
  },
  {
    id: 3,
    titulo: "The Evolution of Behavior — B. F. Skinner",
    categoria: "Análise do Comportamento",
    descricao:
      "Texto clássico sobre evolução e comportamento na perspectiva skinneriana.",
    url: "https://itcrcampinas.com.br/pdf/skinner/the_evolution_of_behavior.pdf",
    tipo: "pdf",
  },
  {
    id: 4,
    titulo: "Artigo Científico — ProQuest",
    categoria: "Pesquisa Científica",
    descricao:
      "Artigo acadêmico disponível via base científica ProQuest.",
    url: "https://www.proquest.com/docview/3110356352?fromopenview=true&pq-origsite=gscholar",
    tipo: "externo",
  },
];

// ─── Cores por categoria ──────────────────────────────────────────────────────

const categoriaCores: Record<string, string> = {
  "Relacionamentos":          "bg-rose-50   text-rose-700   border border-rose-200",
  "Bases Teóricas":           "bg-blue-50   text-blue-700   border border-blue-200",
  "Análise do Comportamento": "bg-violet-50 text-violet-700 border border-violet-200",
  "Pesquisa Científica":      "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

// ─── Ícone por tipo ───────────────────────────────────────────────────────────

const iconeCategoria: Record<string, React.ReactNode> = {
  "Relacionamentos":          <BookOpen className="w-5 h-5" />,
  "Bases Teóricas":           <BookMarked className="w-5 h-5" />,
  "Análise do Comportamento": <FileText className="w-5 h-5" />,
  "Pesquisa Científica":      <Library className="w-5 h-5" />,
};

// ─── URL do visualizador (Google Docs para PDFs) ──────────────────────────────

const urlVisualizador = (url: string) =>
  `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

// ─── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  material: Material;
  index: number;
  isInView: boolean;
  onAbrir: (m: Material) => void;
}

const MaterialCard = ({ material, index, isInView, onAbrir }: CardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, delay: 0.15 + index * 0.12, ease: "easeOut" }}
    className="group relative flex flex-col rounded-2xl bg-card border border-border/60
               hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
               transition-all duration-300 overflow-hidden"
  >
    {/* Linha de acento superior */}
    <div className="h-0.5 w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

    <div className="flex flex-col flex-1 p-7">
      {/* Topo: categoria + ícone */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
            categoriaCores[material.categoria] ?? "bg-muted text-muted-foreground"
          }`}
        >
          {material.categoria}
        </span>
        <span className="text-muted-foreground/50 group-hover:text-primary/60 transition-colors mt-0.5 flex-shrink-0">
          {iconeCategoria[material.categoria]}
        </span>
      </div>

      {/* Título */}
      <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-3
                     group-hover:text-primary transition-colors line-clamp-3">
        {material.titulo}
      </h3>

      {/* Descrição */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
        {material.descricao}
      </p>

      {/* Separador + botão */}
      <div className="mt-6 pt-5 border-t border-border/50">
        <button
          onClick={() => onAbrir(material)}
          aria-label={`Ler: ${material.titulo}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary
                     hover:gap-3 transition-all duration-200"
        >
          {material.tipo === "pdf" ? (
            <>
              <FileText className="w-4 h-4 flex-shrink-0" />
              Ler artigo
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              Acessar material
            </>
          )}
        </button>
      </div>
    </div>
  </motion.article>
);

// ─── Modal ────────────────────────────────────────────────────────────────────

interface ModalProps {
  material: Material;
  onFechar: () => void;
}

const Modal = ({ material, onFechar }: ModalProps) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onFechar();
    },
    [onFechar]
  );

  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6
                 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={material.titulo}
    >
      <motion.div
        key="modal-content"
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-card rounded-2xl w-full max-w-5xl flex flex-col shadow-2xl overflow-hidden"
        style={{ height: "clamp(500px, 90vh, 900px)" }}
      >
        {/* Header do modal */}
        <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-border/60 flex-shrink-0">
          <div className="flex-1 min-w-0">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1.5 ${
                categoriaCores[material.categoria] ?? "bg-muted text-muted-foreground"
              }`}
            >
              {material.categoria}
            </span>
            <h2 className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug line-clamp-2">
              {material.titulo}
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
            <a
              href={material.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border
                         text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40
                         transition-all duration-200"
              aria-label="Abrir original em nova aba"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Abrir original</span>
            </a>
            <button
              onClick={onFechar}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground
                         hover:bg-muted transition-all duration-200"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-hidden">
          {material.tipo === "pdf" ? (
            <iframe
              src={urlVisualizador(material.url)}
              title={material.titulo}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          ) : (
            /* Materiais externos que bloqueiam embedding */
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                {iconeCategoria[material.categoria]}
              </div>
              <div className="max-w-md">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {material.titulo}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                  {material.descricao}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-3">
                  Este material está disponível em plataforma externa que não permite
                  visualização incorporada.
                </p>
              </div>
              <a
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary
                           text-primary-foreground text-sm font-semibold
                           hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Acessar material
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Seção principal ──────────────────────────────────────────────────────────

const BibliotecaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selecionado, setSelecionado] = useState<Material | null>(null);

  return (
    <>
      <section
        id="biblioteca"
        aria-labelledby="biblioteca-titulo"
        className="py-24 bg-muted/30"
      >
        <div className="container mx-auto px-6" ref={ref}>
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-primary font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              Biblioteca
            </p>
            <h2
              id="biblioteca-titulo"
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Leituras{" "}
              <span className="italic text-primary">Recomendadas</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Materiais selecionados sobre Análise do Comportamento, relações humanas
              e ciência do comportamento.
            </p>
          </motion.div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {materiais.map((material, i) => (
              <MaterialCard
                key={material.id}
                material={material}
                index={i}
                isInView={isInView}
                onAbrir={setSelecionado}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal com visualizador */}
      <AnimatePresence>
        {selecionado && (
          <Modal material={selecionado} onFechar={() => setSelecionado(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default BibliotecaSection;
