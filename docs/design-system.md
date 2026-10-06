# Design System — Linhas da Menina

Referência visual única do site. Toda cor, fonte e componente novo deve seguir este documento.
Base: análise do feed do Instagram (ver [projeto.md](./projeto.md), seção 2).

**Conceito:** dark, feminino, místico e luxuoso. Poderoso e reverente, nunca "esotérico genérico".

---

## 1. Cores

### 1.1 Paleta

| Token Tailwind | Nome | HEX | Uso |
|---|---|---|---|
| `preto` | Preto vinho | `#0B0506` | Fundo geral |
| `bordo` | Bordô escuro | `#1A0708` | Cards, seções alternadas, rodapé |
| `vinho` | Vinho | `#2A0A0D` | Modais, menus, hover de card |
| `sangue` | Vermelho sangue | `#B3121B` | Botão primário, links, ícones ativos |
| `rubi` | Vermelho vivo | `#D9202B` | Hover, badges, glow |
| `ouro` | Ouro envelhecido | `#C9A66B` | Títulos, logo, linhas, ícones |
| `champanhe` | Champanhe | `#E4CFA0` | Detalhes e gradiente do dourado |
| `creme` | Creme | `#F1E6D2` | Texto principal |
| `bege` | Bege acinzentado | `#B9A99A` | Texto secundário, legendas |

> Valores estimados a partir das imagens do feed. Confirmar com o cliente se existir paleta oficial.

**Gradiente do dourado:**
`linear-gradient(135deg, #E4CFA0 0%, #C9A66B 50%, #8F6B3A 100%)`

### 1.2 Regras de uso

- Site **sempre escuro**. Não criar modo claro.
- Proporção aproximada: 70% preto/bordô · 15% dourado · 10% creme · 5% vermelho vivo.
- Vermelho vivo é acento, nunca fundo grande.
- Evitar texto vermelho pequeno sobre preto (contraste baixo). Vermelho grande em script é permitido.
- Bordas douradas sempre finas e translúcidas (`border-ouro/20` a `border-ouro/40`).

### 1.3 Tema Tailwind (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  --color-preto: #0B0506;
  --color-bordo: #1A0708;
  --color-vinho: #2A0A0D;
  --color-sangue: #B3121B;
  --color-rubi: #D9202B;
  --color-ouro: #C9A66B;
  --color-champanhe: #E4CFA0;
  --color-creme: #F1E6D2;
  --color-bege: #B9A99A;

  --font-titulo: "Cormorant Garamond", serif;
  --font-produto: "Cinzel", serif;
  --font-script: "Pinyon Script", cursive;
  --font-label: "Montserrat", sans-serif;
}

body {
  background-color: var(--color-preto);
  color: var(--color-creme);
  font-family: var(--font-titulo);
}
```

---

## 2. Tipografia

| Classe | Fonte | Uso | Estilo |
|---|---|---|---|
| `font-titulo` | Cormorant Garamond (500/600) | Títulos de seção, corpo de texto | Serifa elegante, dourada nos títulos |
| `font-produto` | Cinzel (700) | Nome de produto e kits ("ZÉ PILINTRA") | Caixa alta, peso forte |
| `font-script` | Pinyon Script (400) | Palavra de destaque ("produtos", "seu pedido?") | Script vermelho, tamanho grande |
| `font-label` | Montserrat (400) | Subtítulos, botões, menu, selos | Caixa alta, `tracking-[0.2em]` a `[0.4em]`, tamanho pequeno |

### Escala sugerida

| Elemento | Mobile | Desktop |
|---|---|---|
| Título hero | `text-6xl` | `text-8xl` |
| Script hero | `text-7xl` | `text-9xl` |
| Título de seção | `text-5xl` | `text-6xl` |
| Corpo | `text-lg` | `text-xl` |
| Label / botão | `text-xs` | `text-xs` |

### Fontes instaladas (Fontsource)

```ts
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/pinyon-script/400.css'
import '@fontsource/montserrat/400.css'
```

---

## 3. Elementos gráficos

| Elemento | Descrição |
|---|---|
| **Divisor com losango** | Linha fina dourada + ◆ vermelho central. Aparece em quase todos os posts |
| **Ícones** | Linha fina (stroke 1.25–1.5px), dourados, dentro de círculo com borda |
| **Lua crescente** | Pequena, como assinatura |
| **Vinheta** | Escurecer bordas das fotos |
| **Glow vermelho** | Brilho suave em botões e destaques (`rgba(217,32,43,0.4)`) |
| **Cenografia** | Rosas vermelhas, velas, cálice, tecidos vermelhos (fotografia) |

---

## 4. Componentes

### 4.1 Já criados

| Componente | Arquivo | Descrição |
|---|---|---|
| Divisor | `components/Divisor.tsx` | Linha dourada com losango vermelho |
| Botao | `components/Botao.tsx` | Variantes `primario` e `secundario` |
| TituloSecao | `components/TituloSecao.tsx` | Serifa dourada + palavra em script vermelho + divisor + subtítulo |
| Header | `components/Header.tsx` | Fixo, translúcido, com navegação |
| Footer | `components/Footer.tsx` | Fundo bordô, lema da marca |
| Layout | `components/Layout.tsx` | Header + `<Outlet />` + Footer |

### 4.2 Especificações

**Botão primário**
Fundo `sangue`, texto `creme`, borda `ouro/40`, caixa alta, `tracking-[0.2em]`. Hover: fundo `rubi` + glow.

**Botão secundário**
Transparente, borda `ouro`, texto `ouro`. Hover: preenche de dourado com texto `preto`.

**Card de produto** *(a criar)*
Fundo `bordo`, borda `ouro/20`, imagem 4:5, cantos 4–8px, nome em `font-produto`, preço em `ouro`. Hover: leve zoom na foto e borda `ouro/50`.

**Inputs** *(a criar)*
Fundo `bordo`, borda `#3A1518`, foco com borda `ouro`, label em `font-label`.

**Selos** *(a criar)*
Pílulas pequenas, caixa alta, `font-label`. Exemplos: Novo, Kit, Sob encomenda, Esgotado.

### 4.3 A criar

- [ ] ProductCard
- [ ] CardEntidade (Exu, Pomba Gira, Ciganos, Ibeijada, Orixás, Malandragem)
- [ ] BotaoWhatsApp (flutuante)
- [ ] MenuMobile
- [ ] Selo
- [ ] Input / Select / Textarea
- [ ] Galeria de produto
- [ ] Carrinho lateral (drawer)
- [ ] Passo a passo "Como pedir" (ícones em círculo dourado)

---

## 5. Layout e espaçamento

- Container máximo: `max-w-6xl` (≈1152px) ou 1280px nas páginas de loja.
- Padding lateral: `px-6`.
- Espaço entre seções: 96–128px desktop, 64px mobile (`py-24` / `py-16`).
- Grid de produtos: 4 colunas (desktop), 3 (tablet), 2 (mobile).
- Breakpoints: 480 / 768 / 1024 / 1280.
- Abordagem **mobile-first**.

---

## 6. Imagens

| Regra | Valor |
|---|---|
| Proporção de produto | 4:5 (igual ao feed) |
| Fundo das fotos de loja | Escuro, mesma iluminação |
| Formato | WebP/AVIF com fallback |
| Carregamento | `loading="lazy"` abaixo da dobra |
| Alt text | Obrigatório e descritivo |
| Fotos por produto | Mínimo 3 (geral, detalhe, uso) |

---

## 7. Movimento

- Fade-in suave ao rolar, hover com zoom leve.
- Duração padrão: 300ms.
- Nada piscante ou exagerado.
- Respeitar `prefers-reduced-motion`.
- Biblioteca prevista: Framer Motion.

---

## 8. Acessibilidade

- Contraste mínimo WCAG AA.
- Foco visível em todos os elementos interativos.
- Área de toque mínima de 44px.
- Navegação completa por teclado.
- `aria-hidden` em elementos decorativos (como o Divisor).
- Rótulos em todos os campos de formulário.

---

## 9. Tom de voz (para textos da interface)

- Acolhedor, respeitoso e confiante.
- Vocabulário: fé, proteção, equilíbrio, conexão, energia.
- Frases curtas, com tom poético sem exagero.
- Nunca prometer resultado garantido.
- Nomes de entidades e símbolos tratados com respeito.
