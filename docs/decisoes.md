# Decisões Técnicas

Registro das decisões do projeto: o que foi decidido, por quê e o que ainda está em aberto.
Cada decisão tem um código (D-001, D-002...) para ser citada em outros documentos.

**Status possíveis:** ✅ Decidido · ⏳ Pendente · ❌ Descartado

---

## Resumo

| Código | Decisão | Status |
|---|---|---|
| D-001 | Vite + React + TypeScript | ✅ |
| D-002 | Tailwind CSS v4 | ✅ |
| D-003 | React Router DOM | ✅ |
| D-004 | Fontes via Fontsource | ✅ |
| D-005 | ESLint como linter | ✅ |
| D-006 | Documentação em `docs/` na raiz | ✅ |
| D-007 | Origem dos dados do catálogo | ⏳ |
| D-008 | Gateway de pagamento | ⏳ |
| D-009 | Cálculo de frete | ⏳ |
| D-010 | SEO em SPA (pré-renderização) | ⏳ |
| D-011 | Hospedagem e domínio | ⏳ |
| D-012 | Painel administrativo | ⏳ |

---

## Decididas

### D-001 — Vite + React + TypeScript
- **Data:** 29/09/2026
- **Contexto:** Precisava de um ponto de partida rápido para o front-end da loja.
- **Decisão:** Projeto criado com `npm create vite@latest linhas-da-menina -- --template react-ts`.
- **Motivo:** Desenvolvimento rápido, build simples, TypeScript evita erros comuns.
- **Consequência:** O site é uma SPA (renderizada no navegador). Isso afeta o SEO das páginas de produto (ver D-010).
- **Alternativa considerada:** Next.js, que tem SEO melhor de fábrica, mas mais complexidade inicial.

### D-002 — Tailwind CSS v4
- **Data:** 29/09/2026
- **Decisão:** Instalar `tailwindcss` e `@tailwindcss/vite`, com o tema da marca definido em `@theme` no `src/index.css`.
- **Motivo:** Estilização rápida e consistente, com as cores e fontes da marca disponíveis como classes (`bg-preto`, `text-ouro`, `font-script`).
- **Consequência:** Não usar `tailwind.config.js` nem CSS solto do template. O `App.css` do Vite foi removido.

### D-003 — React Router DOM
- **Data:** 29/09/2026
- **Decisão:** Navegação por `react-router-dom` com um `Layout` compartilhado (Header + Outlet + Footer).
- **Motivo:** Padrão de mercado para SPAs, rotas simples.

### D-004 — Fontes via Fontsource
- **Data:** 29/09/2026
- **Decisão:** Instalar as fontes por pacotes npm `@fontsource/*` em vez de usar link do Google Fonts.
- **Motivo:** Fontes servidas junto com o site (mais rápido, sem depender de terceiros e melhor para LGPD).
- **Fontes:** Cormorant Garamond, Cinzel, Pinyon Script, Montserrat.

### D-005 — ESLint como linter
- **Data:** 29/09/2026
- **Decisão:** ESLint em vez de Oxlint.
- **Motivo:** Ecossistema maior, com plugins de React Hooks e acessibilidade (`jsx-a11y`).

### D-006 — Documentação em `docs/` na raiz
- **Data:** 29/09/2026
- **Decisão:** Todos os `.md` de planejamento ficam em `docs/`, fora de `src/` e `public/`.
- **Motivo:** Não entra no build, não fica público no site e segue o padrão de repositórios. O `README.md` fica na raiz.
- **Atenção:** Manter o repositório privado ou ignorar `docs/` no Git.

---

## Pendentes

### D-007 — Origem dos dados do catálogo
- **Opções:**
  1. Arquivo local `src/data/produtos.ts` (rápido, ideal para começar; cliente não edita sozinho)
  2. CMS headless (Sanity, Strapi)
  3. Supabase (banco + painel)
  4. Plataforma pronta (Nuvemshop/WooCommerce)
- **Sugestão:** Começar com a opção 1 para validar o design e migrar depois.
- **Depende de:** Se o cliente vai cadastrar os produtos sozinho (pergunta 4 de [projeto.md](./projeto.md), seção 11).

### D-008 — Gateway de pagamento
- **Opções:** Mercado Pago, Pagar.me, Stripe (Pix e cartão).
- **Sugestão:** Mercado Pago pela familiaridade do público brasileiro e suporte a Pix.
- **Depende de:** Cliente ser MEI/CNPJ e ter conta aberta.

### D-009 — Cálculo de frete
- **Opções:** Melhor Envio (várias transportadoras), API dos Correios direta.
- **Sugestão:** Melhor Envio.
- **Depende de:** Peso e dimensões dos produtos cadastrados.

### D-010 — SEO em SPA
- **Problema:** SPAs têm SEO mais fraco, principalmente nas páginas de produto.
- **Opções:**
  1. Manter SPA e adicionar pré-renderização (ex.: `vite-plugin-prerender` ou similar)
  2. Migrar para Next.js quando a loja crescer
  3. Aceitar o limite, já que o tráfego principal vem do Instagram/WhatsApp
- **Sugestão:** Opção 3 no início, reavaliar depois do lançamento com dados de tráfego.

### D-011 — Hospedagem e domínio
- **Opções de hospedagem:** Vercel, Netlify, Cloudflare Pages (todas com plano gratuito para sites estáticos).
- **Domínio:** `linhasdamenina.com.br` (verificar disponibilidade no Registro.br).
- **Depende de:** Se o cliente já tem domínio.

### D-012 — Painel administrativo
- **Necessidade:** Cliente precisa cadastrar produtos, ver pedidos e controlar estoque.
- **Opções:** CMS headless, Supabase com painel próprio ou plataforma pronta.
- **Depende de:** D-007.

---

## Como registrar uma nova decisão

Copie este modelo:

```md
### D-0XX — Título curto
- **Data:** DD/MM/AAAA
- **Contexto:** Qual problema ou dúvida surgiu.
- **Decisão:** O que foi escolhido.
- **Motivo:** Por que foi escolhido.
- **Consequência:** O que isso afeta daqui para frente.
- **Alternativas consideradas:** O que ficou de fora.
```

E adicione uma linha na tabela de resumo no topo.
