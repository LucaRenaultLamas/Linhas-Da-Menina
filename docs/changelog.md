# Changelog

Histórico do que foi feito em cada etapa do projeto, do mais recente para o mais antigo.
Segue as fases do roadmap em [projeto.md](./projeto.md), seção 10.

**Como usar:** ao terminar uma etapa, adicione uma nova entrada no topo com a data e os itens concluídos.

---

## Andamento por fase

| Fase | Etapa | Status |
|---|---|---|
| 0 | Planejamento | ✅ Concluída |
| 1 | Identidade e UI (design system) | 🟡 Em andamento |
| 2 | Wireframes | ⬜ Pendente |
| 3 | Design de alta fidelidade | ⬜ Pendente |
| 4 | Conteúdo | ⬜ Pendente |
| 5 | Desenvolvimento front-end | 🟡 Em andamento |
| 6 | Back-end / loja | ⬜ Pendente |
| 7 | Integrações | ⬜ Pendente |
| 8 | Testes | ⬜ Pendente |
| 9 | Lançamento | ⬜ Pendente |
| 10 | Pós-lançamento | ⬜ Pendente |

---

## [Não lançado] — próximos passos

- [ ] Criar `types/index.ts` e `data/produtos.ts` (catálogo de teste)
- [ ] Criar `ProductCard` e a página Loja com filtro por linha/entidade
- [ ] Criar página de produto com botão "Comprar pelo WhatsApp"
- [ ] Adicionar a logo do cliente no Header e no favicon
- [ ] Menu mobile e botão flutuante de WhatsApp
- [ ] Seção de entidades na Home
- [ ] Páginas: Tiragens, Como Pedir, Quem Somos, Contato
- [ ] Carrinho e checkout
- [ ] Receber conteúdo pendente do cliente (ver [conteudo-cliente.md](./conteudo-cliente.md))

---

## 2026-09-29 — Base do projeto e design system

### Adicionado
- Projeto criado com Vite (template `react-ts`), com ESLint.
- Tailwind CSS v4 configurado via plugin do Vite.
- Tema da marca em `src/index.css`: cores (`preto`, `bordo`, `vinho`, `sangue`, `rubi`, `ouro`, `champanhe`, `creme`, `bege`) e fontes (`titulo`, `produto`, `script`, `label`).
- Fontes instaladas via Fontsource: Cormorant Garamond, Cinzel, Pinyon Script e Montserrat.
- React Router DOM e Lucide React instalados.
- Componentes base: `Divisor`, `Botao`, `TituloSecao`, `Header`, `Footer`, `Layout`.
- Páginas iniciais: `Home` (com hero e título de seção) e `Loja` (provisória).
- Rotas `/` e `/loja` em `App.tsx`.
- Pasta `docs/` com toda a documentação do projeto.

### Alterado
- `App.tsx` e `main.tsx` reescritos, removendo o código de exemplo do Vite.

### Removido
- `App.css` e imagens do template (`react.svg`, `vite.svg`, `hero.png`).

### Problemas resolvidos
- Erro `Failed to resolve import "@fontsource/..."`: pacotes das fontes não estavam instalados na pasta correta.
- Erro `Missing script: "dev"`: comando rodado fora da pasta `linhas-da-menina`.
- Erro `Failed to resolve import "./assets/vite.svg"`: `App.tsx` ainda usava o código antigo do template.

---

## 2026-09-29 — Planejamento

### Adicionado
- Análise do feed do Instagram (@linhasdamenina): cores, tipografia, elementos gráficos, fotografia e tom de voz.
- Documento do projeto (`projeto.md`) com mapa de páginas, funcionalidades, rotas tecnológicas, SEO, cuidados legais e roadmap.
- Lista de perguntas em aberto para o cliente.

### Decisões
- Ver [decisoes.md](./decisoes.md): D-001 a D-006 decididas, D-007 a D-012 pendentes.
