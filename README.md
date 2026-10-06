# Linhas da Menina

## Descrição

Linhas da Menina é uma loja virtual de artigos religiosos de Umbanda feitos à mão. O projeto apresenta a identidade da marca, catálogo de produtos, filtros por linha e categoria, carrinho de compras, autenticação de clientes e checkout integrado ao Mercado Pago.

O frontend foi desenvolvido com React, TypeScript, Vite e Tailwind CSS. O backend em Express utiliza PostgreSQL/Supabase para usuários, bcrypt para armazenamento seguro de senhas e JWT em cookie HttpOnly para autenticação. Os pagamentos são iniciados no servidor por meio do Mercado Pago Checkout Pro.

### Ambientes

- `develop`: desenvolvimento e validação de novas funcionalidades.
- `prod`: versão estável pronta para publicação.

Site de divulgação e venda de artigos religiosos de Umbanda feitos à mão.
Instagram do cliente: [@linhasdamenina](https://www.instagram.com/linhasdamenina/)

> *Mais que produtos, é sobre energia.*

## Stack

| Item | Tecnologia |
|---|---|
| Build / dev server | [Vite](https://vite.dev) |
| Interface | React + TypeScript |
| Estilo | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Rotas | React Router DOM |
| Ícones | Lucide React |
| Fontes | Fontsource (Cormorant Garamond, Cinzel, Pinyon Script, Montserrat) |
| Lint | ESLint |

## Requisitos

- Node.js 20.19+ ou 22.12+ (`node -v` para conferir)
- npm

## Como rodar

```bash
# dentro da pasta linhas-da-menina (onde está o package.json)
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Testa localmente o build de produção |
| `npm run lint` | Roda o ESLint |

## Estrutura do projeto

```
linhas-da-menina/
├── docs/            # documentação do projeto (.md)
├── public/          # arquivos estáticos (favicon, og-image)
├── src/
│   ├── assets/      # logo, hero, fotos de produtos
│   ├── components/  # Botao, Divisor, TituloSecao, Header, Footer, Layout...
│   ├── pages/       # Home, Loja, Produto, Tiragens...
│   ├── data/        # catálogo e entidades (temporário)
│   ├── context/     # estado global (carrinho)
│   ├── hooks/
│   ├── lib/         # utilitários (whatsapp, formatar preço)
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css    # tema Tailwind (cores e fontes da marca)
├── index.html
└── package.json
```

## Documentação

Todo o planejamento fica na pasta [`docs/`](./docs):

| Arquivo | Conteúdo |
|---|---|
| [projeto.md](./docs/projeto.md) | Visão geral, análise do feed, páginas, funcionalidades, roadmap |
| [design-system.md](./docs/design-system.md) | Cores, tipografia, componentes e regras visuais |
| [decisoes.md](./docs/decisoes.md) | Decisões técnicas tomadas e pendentes |
| [conteudo-cliente.md](./docs/conteudo-cliente.md) | Checklist do que falta receber do cliente |
| [changelog.md](./docs/changelog.md) | Histórico do que foi feito em cada etapa |

## Identidade visual (resumo)

Fundo preto vinho `#0B0506`, vermelho sangue `#B3121B`, dourado envelhecido `#C9A66B` e texto creme `#F1E6D2`.
Detalhes completos em [design-system.md](./docs/design-system.md).

## Privacidade

Os arquivos de `docs/` contêm dados internos do cliente (contato, preços, estratégia).
Mantenha o repositório **privado** ou adicione `docs/` ao `.gitignore`.
