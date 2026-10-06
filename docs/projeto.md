# Projeto Site — Linhas da Menina

> Documento-base do projeto. Serve como referência única para design, estrutura, conteúdo, tecnologia e cronograma. Deve ser atualizado a cada etapa concluída.

**Cliente:** Linhas da Menina (@linhasdamenina)
**Segmento:** Artigos religiosos e esotéricos de Umbanda, feitos à mão
**Objetivo do site:** Divulgar a marca e vender os produtos online, mantendo a identidade visual do Instagram
**Status:** Fase 0 — Planejamento

---

## 1. Visão geral do negócio

### 1.1 Quem é a marca
Loja especializada em artigos religiosos e esotéricos, voltada a quem busca **fé, proteção, equilíbrio e conexão**. Lema do feed: *"Mais que produtos, é sobre energia."*

### 1.2 O que vende (levantado do Instagram)
| Categoria | Observações |
|---|---|
| **Kits (chaveiro + pulseira)** | Ex.: Kit Zé Pilintra, Kit Maria Navalha. Cada kit é ligado a uma entidade |
| **Guias** | Fios de contas feitos à mão |
| **Pulseiras** | Com contas, rosas, dados, pingentes |
| **Patuás** | Proteção |
| **Porta-velas** | Artigos de altar/ritual |
| **Tiragens espirituais** | Serviço (aparece na bio) |
| **Outros** | "E muito mais" (confirmar lista completa com o cliente) |

### 1.3 Organização por linhas/entidades (destaques do Instagram)
Vocês ♥ · Ibeijada · Ciganos · Pomba Gira · Exu · Orixás · Malandragem (e outros)

Essa divisão já é a forma natural do público de navegar. **Vai virar o principal filtro da loja.**

### 1.4 Como vende hoje
Pedido via WhatsApp, em 5 passos (já divulgado no feed):
1. Escolha o produto
2. Fale conosco no WhatsApp
3. Confirme seu pedido
4. Efetue o pagamento
5. Receba com segurança

Envio para todo o Brasil. O link do WhatsApp aparece na bio (confirmar o número final com o cliente).

### 1.5 Público-alvo
- Praticantes de Umbanda e religiões de matriz africana, principalmente mulheres
- Pessoas que buscam artigos de proteção e conexão espiritual
- Quem compra por presente ou para uma entidade específica
- Perfil mobile-first: chegam pelo Instagram/WhatsApp

### 1.6 Diferenciais a destacar
- Feito à mão
- Estética própria, marcante e sofisticada
- Kits temáticos por entidade
- Envio para todo o Brasil
- Atendimento próximo (WhatsApp)

---

## 2. Análise do feed do Instagram

### 2.1 Impressão geral
Estética **dark, feminina, mística e luxuosa**: fundos quase pretos, vermelho sangue, dourado envelhecido, rosas vermelhas, velas, tecidos de veludo/cetim, taças e contas de vidro. O clima é **sensual, poderoso e reverente**, sem cair em "esotérico genérico".

### 2.2 Paleta de cores (extraída das imagens, valores aproximados)

| Papel | Nome | HEX sugerido | Uso |
|---|---|---|---|
| Fundo principal | Preto vinho | `#0B0506` | Fundo geral das páginas |
| Fundo secundário | Bordô escuro | `#1A0708` | Cards, seções alternadas, rodapé |
| Superfície elevada | Vinho | `#2A0A0D` | Modais, menus, hover de card |
| Destaque primário | Vermelho sangue | `#B3121B` | Botões, links, ícones ativos |
| Destaque vivo | Vermelho rosa | `#D9202B` | Hover, badges, palavras em script |
| Dourado principal | Ouro envelhecido | `#C9A66B` | Títulos, logo, linhas finas, ícones |
| Dourado claro | Champanhe | `#E4CFA0` | Detalhes, gradiente do dourado |
| Texto principal | Creme | `#F1E6D2` | Corpo de texto |
| Texto secundário | Bege acinzentado | `#B9A99A` | Legendas, textos de apoio |
| Neutro de contraste | Branco pérola | `#FFFFFF` | Contas brancas, uso pontual |

**Gradiente do dourado (títulos e logo):** `linear-gradient(135deg, #E4CFA0 0%, #C9A66B 50%, #8F6B3A 100%)`

**Regras de uso**
- O site é **escuro por padrão**. Não criar modo claro.
- Proporção aproximada: 70% preto/bordô · 15% dourado · 10% creme · 5% vermelho vivo.
- Vermelho vivo é acento, não fundo grande.
- Contraste: texto creme sobre fundo escuro passa bem no WCAG AA. Evitar texto vermelho pequeno sobre preto (validar).

### 2.3 Tipografia (identificada nos posts)

| Uso | Estilo no feed | Fonte sugerida (Google Fonts) |
|---|---|---|
| Títulos grandes ("Quem somos", "Nossos") | Serifa clássica, elegante, dourada | **Cormorant Garamond** (500–600) |
| Nome de produto ("ZÉ PILINTRA", "MARIA NAVALHA") | Serifa em caixa alta, peso forte, tracking leve | **Cinzel** ou **Playfair Display** (700) |
| Palavra de destaque ("nós?", "produtos", "seu pedido?") | Script itálico vermelho, caligráfico | **Pinyon Script**, **Great Vibes** ou **Playfair Display Italic** |
| Subtítulos e etiquetas ("CHAVEIRO + PULSEIRA", "KIT") | Sans fina, caixa alta, muito espaçada | **Montserrat** ou **Jost** (400, letter-spacing 0.3em) |
| Corpo de texto | Serifa leve ou sans limpa | **Cormorant Garamond** 500 ou **Inter** 400 |

> Combinação base recomendada: **Cormorant Garamond + Cinzel + Pinyon Script + Montserrat**. Testar na prática antes de fechar.

### 2.4 Elementos gráficos recorrentes
- **Divisor com losango:** linha fina dourada com um losango (◆) vermelho ao centro. Aparece em quase todos os posts.
- **Ícones de linha fina dourada dentro de círculos** (passo a passo, categorias).
- **Lua crescente** pequena como assinatura.
- **Moldura sutil** e tracejados finos dourados.
- **Logo:** tridente dourado com rosa vermelha, escrita "Linhas da Menina" em script dourado, contas pendentes.
- **Rosas vermelhas, velas, cálices, tecidos vermelhos** como cenografia.
- **Vinheta escura nas bordas** das fotos e brilho vermelho suave (glow).

### 2.5 Fotografia
- **Estilo principal (produtos):** fundo preto, luz dramática lateral, reflexo brilhante, contas em vermelho, preto e dourado.
- **Estilo lifestyle (ambientação):** cenário escuro com velas, rosas e tecidos; modelo de cabelo vermelho e chapéu, olhar marcante.
- **Estilo natural (variação):** produtos sobre pedra, fundo de parque desfocado, luz do dia. Contraste bem com o resto, usar com moderação.
- **Prova social:** clientes vestidas a caráter (fotos com leque, vestido vermelho).

**Recomendação para o site:** padronizar as fotos de produto em fundo escuro, mesma luz, proporção **4:5** (igual ao feed) ou **1:1**, com fotos extras de detalhe.

### 2.6 Tom de voz
- Acolhedor, respeitoso e confiante
- Fala de **fé, proteção, equilíbrio, conexão, energia**
- Frases curtas, com tom poético e sem exagero
- Linguagem respeitosa com as entidades e religiões de matriz africana
- Tratamento próximo ("seu pedido", "você")

### 2.7 Pontos de atenção do feed (oportunidades para o site)
- Alguns posts têm sobreposição de texto e imagem cortada (ex.: post "Como fazer seu pedido"). No site, textos ficam sempre legíveis.
- Feed com só 18 posts: o site precisa de **catálogo completo e organizado** (o Instagram não tem).
- Fotos naturais e as escuras convivem: definir padrão para a loja.

---

## 3. Estrutura do site (mapa de páginas)

```
Home
├── Loja
│   ├── Todos os produtos
│   ├── Categoria (Kits, Guias, Pulseiras, Patuás, Porta-velas, Outros)
│   ├── Por Linha/Entidade (Exu, Pomba Gira, Ciganos, Ibeijada, Orixás, Malandragem...)
│   └── Página de Produto
├── Tiragens Espirituais
├── Como Fazer Seu Pedido
├── Quem Somos
├── Contato
├── FAQ
├── Carrinho
├── Checkout
├── Conta do cliente (fase 2)
└── Políticas
    ├── Envio e prazos
    ├── Trocas e devoluções
    ├── Política de privacidade (LGPD)
    └── Termos de uso
```

### 3.1 Home
Seções, na ordem:
1. **Header** fixo: logo, menu, busca, carrinho, botão WhatsApp
2. **Hero:** imagem escura com a rosa/velas, título em serifa dourada com palavra em script vermelha, subtítulo e 2 botões (*Ver produtos* · *Falar no WhatsApp*)
3. **Faixa de confiança:** Feito à mão · Envio para todo o Brasil · Pagamento seguro · Atendimento no WhatsApp
4. **Navegue por Linha/Entidade:** cards em círculo ou vertical (Exu, Pomba Gira, Ciganos, Ibeijada, Orixás, Malandragem)
5. **Categorias:** Guias · Pulseiras · Patuás · Porta-velas · Kits
6. **Destaques / Kits:** produtos em destaque (Kit Zé Pilintra, Kit Maria Navalha...)
7. **Quem somos (resumo):** texto curto + foto + link
8. **Como fazer seu pedido:** os 5 passos com ícones dourados em círculo
9. **Tiragens espirituais:** chamada para o serviço
10. **Prova social:** fotos e depoimentos de clientes
11. **Instagram:** grade dos últimos posts com link para o perfil
12. **Newsletter/WhatsApp VIP** (opcional)
13. **Rodapé:** logo, links, redes, formas de pagamento, políticas, CNPJ/dados, direitos

### 3.2 Loja (listagem)
- Filtros: Linha/Entidade, Categoria, Faixa de preço, Cor, Disponibilidade
- Ordenação: Destaques, Mais recentes, Menor/Maior preço
- Card do produto: foto (com segunda foto no hover), nome, preço, parcelamento, botão "Adicionar", selo (Novo, Kit, Sob encomenda, Esgotado)
- Paginação ou "carregar mais"
- Busca com sugestões

### 3.3 Página de produto
- Galeria (mín. 3 fotos + zoom)
- Nome, preço, parcelamento, à vista no Pix (desconto opcional)
- Variações (cor, tamanho da pulseira/medida da guia, entidade)
- Descrição: materiais, medidas, significado/simbologia, cuidados
- Prazo de produção (feito à mão / sob encomenda) e cálculo de frete por CEP
- Botões: **Adicionar ao carrinho** e **Comprar pelo WhatsApp**
- Produtos relacionados / "Combina com"
- Perguntas frequentes do produto

### 3.4 Tiragens Espirituais
- O que é, como funciona, quem realiza
- Tipos de tiragem e valores (a definir com o cliente)
- Agendamento (WhatsApp ou formulário)
- Aviso de caráter religioso e orientação
- *Ponto a alinhar:* pagamento online ou só atendimento via WhatsApp

### 3.5 Como Fazer Seu Pedido
Passo a passo em 5 etapas (reaproveita o post do Instagram), mais dúvidas sobre pagamento, prazo e envio.

### 3.6 Quem Somos
História da marca, propósito, o feito à mão, valores, fotos da criadora e do ateliê (com autorização).

### 3.7 Contato
WhatsApp, Instagram, e-mail e formulário simples. Horário de atendimento.

### 3.8 Carrinho e Checkout
- Carrinho lateral (drawer) + página completa
- Checkout em 1 página: identificação, entrega, frete, pagamento
- Pix, cartão (com parcelamento) e boleto (opcional)
- Confirmação com número do pedido e envio por e-mail/WhatsApp

### 3.9 Páginas institucionais
FAQ, envio e prazos, trocas e devoluções, privacidade (LGPD), termos.

---

## 4. Design do site (diretrizes de UI)

### 4.1 Princípios
1. **Mobile-first** (a maior parte do tráfego virá do Instagram)
2. **Escuro e luxuoso**, com muito espaço negativo
3. **Foto é protagonista**, texto é enxuto
4. **Fluxo de compra sem atrito** (WhatsApp e checkout)
5. **Respeito religioso** em todas as imagens e palavras

### 4.2 Componentes
| Componente | Especificação |
|---|---|
| **Botão primário** | Fundo `#B3121B`, texto creme, caixa alta, tracking 0.15em, borda fina dourada, hover `#D9202B` + glow suave |
| **Botão secundário** | Transparente, borda dourada 1px, texto dourado, hover preenche dourado com texto preto |
| **Botão WhatsApp** | Fixo (flutuante) no canto inferior direito, discreto, em vermelho ou verde apenas no ícone |
| **Cards de produto** | Fundo `#1A0708`, borda fina dourada com 20–30% de opacidade, imagem 4:5, cantos levemente arredondados (4–8px) |
| **Divisor** | Linha fina dourada + losango vermelho central (componente reutilizável) |
| **Ícones** | Estilo linha fina (stroke 1.25–1.5px), dourados, dentro de círculo com borda |
| **Inputs** | Fundo `#1A0708`, borda `#3A1518`, foco com borda dourada |
| **Títulos de seção** | Serifa dourada + palavra em script vermelho (padrão do feed) |
| **Selos** | Pílulas pequenas, caixa alta, sans espaçada |

### 4.3 Efeitos e movimento
- Fade-in suave ao rolar, hover com leve zoom nas fotos
- Brilho/glow vermelho discreto em botões e destaque
- Partículas ou "brasas" sutis no hero (opcional, avaliar peso)
- Respeitar `prefers-reduced-motion`
- Nada piscante ou exagerado

### 4.4 Layout e grid
- Container máximo: 1280px
- Grid: 4 colunas (desktop), 3 (tablet), 2 (mobile) para produtos
- Espaçamento generoso entre seções (96–128px desktop, 64px mobile)
- Breakpoints: 480 / 768 / 1024 / 1280

### 4.5 Imagens
- Formato WebP/AVIF, com fallback
- Proporção padrão dos produtos: 4:5
- Lazy loading, `srcset` responsivo
- Alt text descritivo em todas as fotos
- Marca d'água discreta opcional (contra cópia)

### 4.6 Acessibilidade
- Contraste mínimo WCAG AA
- Navegação por teclado e foco visível
- Áreas de toque ≥ 44px
- Textos alternativos e rótulos em formulários

---

## 5. Recursos e funcionalidades

### 5.1 Essenciais (MVP)
- Catálogo com filtros por linha e categoria
- Página de produto completa
- Botão "Comprar pelo WhatsApp" com mensagem pré-preenchida (nome do produto e link)
- Carrinho e checkout
- Pix e cartão
- Cálculo de frete por CEP
- Painel administrativo para o cliente cadastrar produtos e pedidos
- Site responsivo, rápido e com SEO básico

### 5.2 Desejáveis (fase 2)
- Conta do cliente e histórico de pedidos
- Cupons de desconto e frete grátis acima de X
- Avisos de produto esgotado e "avise-me quando chegar"
- Lista de desejos
- Encomenda personalizada (formulário com referências)
- Avaliações com fotos
- Integração com feed do Instagram
- Carrinho abandonado (e-mail/WhatsApp)
- Agendamento das tiragens

### 5.3 Futuro
- Blog (guias, cuidados com as guias, significados)
- Programa de fidelidade
- Vendas por atacado/revenda

---

## 6. Sugestão de tecnologia

Decisão a tomar junto com o cliente, com base em orçamento e autonomia. Duas rotas:

### Rota A — Plataforma pronta (mais rápida e barata)
**Nuvemshop** ou **WooCommerce** (WordPress) com tema totalmente personalizado.
- Prós: checkout, frete e pagamento já integrados; painel pronto; entrega rápida
- Contras: personalização visual limitada (Nuvemshop) ou manutenção maior (WooCommerce)

### Rota B — Site sob medida (mais controle e identidade)
**Next.js + Tailwind CSS**, catálogo em CMS headless, pagamentos com **Mercado Pago** (Pix/cartão) e frete via **Melhor Envio**.
- Prós: visual 100% fiel à marca, desempenho excelente, liberdade total
- Contras: exige mais desenvolvimento e manutenção

| Item | Sugestão |
|---|---|
| Front-end | Next.js (React) + Tailwind CSS |
| Conteúdo/produtos | Sanity, Strapi ou Supabase (com painel para o cliente) |
| Pagamentos | Mercado Pago ou Pagar.me (Pix, cartão) |
| Frete | Melhor Envio / Correios |
| Hospedagem | Vercel (front) + banco gerenciado |
| E-mail transacional | Resend ou similar |
| Analytics | Google Analytics 4 + Meta Pixel |
| Domínio | linhasdamenina.com.br (verificar disponibilidade no Registro.br) |

> **Recomendação:** começar com um MVP em Rota B simplificada, com catálogo + carrinho + WhatsApp, e evoluir. Se o cliente precisar vender rápido e com pouca manutenção, a Rota A é mais segura. **Decisão pendente.**

---

## 7. SEO e marketing

- Títulos e descrições por página (ex.: "Guias de Umbanda feitas à mão | Linhas da Menina")
- Palavras-chave: guias de umbanda, pulseira de exu, kit zé pilintra, patuá, porta-velas, artigos religiosos, tiragem espiritual
- URLs limpas (`/loja/kits/kit-ze-pilintra`)
- Dados estruturados de produto (schema.org) para aparecer no Google com preço
- Google Meu Negócio (se aplicável)
- Meta Pixel + catálogo do Instagram/Facebook Shop
- Link do site na bio do Instagram (substituir/somar ao WhatsApp)
- QR Code para embalagens e cartões
- Compartilhamento pelo WhatsApp com pré-visualização (Open Graph)

---

## 8. Conteúdo necessário do cliente (checklist)

- [ ] Logo em alta resolução (PNG transparente e vetor, se existir)
- [ ] Lista completa de produtos com nome, categoria, linha/entidade, descrição, materiais, medidas e preço
- [ ] Fotos de todos os produtos (fundo escuro, padronizadas)
- [ ] Estoque: feito sob encomenda ou pronta-entrega? Prazos de produção
- [ ] Política de envio, frete e trocas
- [ ] Formas de pagamento aceitas e dados de conta/Mercado Pago
- [ ] Texto "Quem somos" e história da marca
- [ ] Serviço de tiragens: tipos, valores, forma de agendamento
- [ ] Número oficial de WhatsApp e e-mail
- [ ] CNPJ/MEI e dados para rodapé e nota fiscal
- [ ] Depoimentos e fotos de clientes (com autorização)
- [ ] Domínio (já existe ou será comprado?)
- [ ] Referências de sites que o cliente admira

---

## 9. Cuidados especiais (religiosidade e legal)

- Usar nomes de entidades e símbolos com **respeito**, evitando textos sensacionalistas
- Não prometer resultados garantidos (ex.: "cura", "resolve seu problema"). Usar linguagem de fé e proteção
- Tiragens espirituais: incluir aviso de caráter religioso/orientativo
- **LGPD:** política de privacidade, aviso de cookies, consentimento no formulário
- Direitos de imagem: autorização para fotos de clientes e modelos
- Direito de arrependimento (CDC, 7 dias em compra online), mesmo com produto artesanal (avaliar exceções para itens personalizados, com texto claro)
- Emissão de nota fiscal conforme enquadramento do cliente (MEI ou outro)

---

## 10. Roadmap passo a passo

| Fase | Etapa | Entregas |
|---|---|---|
| **0** | Planejamento | Este documento aprovado, decisão de tecnologia |
| **1** | Identidade e UI | Design system (cores, fontes, componentes), moodboard |
| **2** | Wireframes | Home, Loja, Produto, Carrinho/Checkout (mobile e desktop) |
| **3** | Design de alta fidelidade | Telas finais aprovadas pelo cliente |
| **4** | Conteúdo | Cadastro de produtos, textos, fotos otimizadas |
| **5** | Desenvolvimento front-end | Páginas e componentes responsivos |
| **6** | Back-end / loja | Catálogo, carrinho, pagamentos, frete, painel |
| **7** | Integrações | WhatsApp, Instagram, Analytics, Pixel |
| **8** | Testes | Compra real de teste, mobile, velocidade, acessibilidade |
| **9** | Lançamento | Domínio, SSL, divulgação no Instagram |
| **10** | Pós-lançamento | Ajustes, métricas, melhorias da fase 2 |

### Próximos passos imediatos
1. Validar este documento com o cliente e responder os pontos em aberto (seção 11)
2. Decidir Rota A ou B
3. Montar o design system (Fase 1) e o wireframe da Home (Fase 2)

---

## 11. Pontos em aberto (perguntas para o cliente)

1. Vai vender só por site ou manter WhatsApp como canal principal também?
2. Produtos são **pronta-entrega** ou **feitos sob encomenda**? Qual o prazo médio?
3. Existe orçamento e prazo desejado para o lançamento?
4. O cliente vai cadastrar produtos sozinho? (define o painel administrativo)
5. Quantos produtos há hoje no catálogo?
6. Tiragens espirituais serão vendidas pelo site?
7. Já existe domínio e e-mail profissional?
8. O cliente é MEI/CNPJ? Emite nota fiscal?
9. Há fotos de todos os produtos no padrão do feed?
10. O número do WhatsApp da bio (`wa.me/5532987199555`, conforme imagem) é o oficial?

---

## 12. Métricas de sucesso

- Taxa de conversão do site
- Tráfego vindo do Instagram
- Cliques no botão de WhatsApp
- Ticket médio e produtos mais vendidos
- Taxa de abandono de carrinho
- Velocidade (Core Web Vitals) e desempenho mobile

---

*Documento criado em 29/09/2026. Versão 1.0 — sujeito a ajustes após validação com o cliente.*
