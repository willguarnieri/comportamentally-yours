import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

type Category = "Todos" | "ABA" | "TAC" | "Neuropsicologia";

const posts = [
  // ABA
  {
    title: "Entendendo a Análise do Comportamento Aplicada no dia a dia",
    excerpt:
      "Descubra como os princípios da ABA podem ser aplicados em situações cotidianas para promover desenvolvimento e autonomia.",
    date: "10 Fev 2026",
    tag: "ABA" as const,
    reference:
      "COOPER, J. O.; HERON, T. E.; HEWARD, W. L. Applied Behavior Analysis. 3. ed. Hoboken: Pearson, 2020.",
  },
  {
    title: "Reforçamento positivo: fundamentos e aplicações práticas",
    excerpt:
      "Como o reforçamento positivo pode ser utilizado para ensinar novas habilidades e fortalecer comportamentos adaptativos.",
    date: "17 Fev 2026",
    tag: "ABA" as const,
    reference:
      "SKINNER, B. F. Ciência e Comportamento Humano. 11. ed. São Paulo: Martins Fontes, 2003.",
  },
  // TAC
  {
    title: "O papel da família na intervenção comportamental",
    excerpt:
      "A participação ativa da família é fundamental para o sucesso da terapia. Saiba como você pode contribuir.",
    date: "03 Fev 2026",
    tag: "TAC" as const,
    reference:
      "HAYES, S. C.; STROSAHL, K. D.; WILSON, K. G. Terapia de Aceitação e Compromisso. 2. ed. Porto Alegre: Artmed, 2021.",
  },
  {
    title: "Flexibilidade psicológica e bem-estar emocional",
    excerpt:
      "A Terapia de Aceitação e Compromisso nos ensina a lidar com pensamentos e sentimentos difíceis de forma funcional.",
    date: "20 Jan 2026",
    tag: "TAC" as const,
    reference:
      "SKINNER, B. F. Contingências do Reforço: Uma Análise Teórica. São Paulo: Abril Cultural, 1969.",
  },
  // Neuropsicologia
  {
    title: "Neuropsicologia e comportamento: uma visão integrada",
    excerpt:
      "Como a neuropsicologia complementa a análise do comportamento para uma compreensão mais completa do indivíduo.",
    date: "25 Jan 2026",
    tag: "Neuropsicologia" as const,
    reference:
      "LURIA, A. R. Fundamentos de Neuropsicologia. São Paulo: Editora da Universidade de São Paulo, 1981.",
  },
  {
    title: "Reabilitação cognitiva: quando e por que indicar",
    excerpt:
      "Entenda o papel da reabilitação cognitiva no tratamento de déficits neuropsicológicos e como ela pode transformar a qualidade de vida.",
    date: "12 Jan 2026",
    tag: "Neuropsicologia" as const,
    reference:
      "MALLOY-DINIZ, L. F. et al. Avaliação Neuropsicológica. 2. ed. Porto Alegre: Artmed, 2018.",
  },
];

const categories: Category[] = ["Todos", "ABA", "TAC", "Neuropsicologia"];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filtered = activeCategory === "Todos"
    ? posts
    : posts.filter((p) => p.tag === activeCategory);

  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Blog
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artigos sobre{" "}
            <span className="italic text-primary">saúde e comportamento</span>
          </h2>
          <p className="text-muted-foreground">
            Artigos e reflexões sobre análise do comportamento, neuropsicologia e bem-estar,
            com referências científicas atualizadas.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group rounded-xl bg-card border border-border p-6 hover:shadow-lg transition-all flex flex-col"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-lilac-light text-lilac-dark text-xs font-medium mb-4 w-fit">
                {post.tag}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="border-t border-border pt-3 mb-3">
                <div className="flex items-start gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {post.reference}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
