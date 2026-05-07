# Isabella Fava — Site Profissional

Site da Psicóloga Clínica Isabella Fava (CRP 06/205699), especialista em Análise do Comportamento Aplicada (ABA) e Neuropsicologia.

**Domínios:** [isabellafava.com.br](https://isabellafava.com.br) · [isabelafava.com.br](https://isabelafava.com.br)

## Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 6
- **Estilização:** Tailwind CSS + shadcn/ui
- **Deploy:** Cloudflare Workers (via Wrangler)
- **Package manager:** Bun

## Desenvolvimento local

```bash
bun install
bun run dev
```

## Build e deploy

```bash
bun run build       # build de produção
bun run deploy      # build + deploy no Cloudflare
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Página principal (Hero, Sobre, Serviços, ABA, Blog, Contato) |
| `/perguntas-frequentes` | FAQ |
| `/agendar` | Agendamento de atendimento |
