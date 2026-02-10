# Análise completa do site (curriculo-portfolio-react)

## 1) Visão geral
O projeto entrega um portfólio/currículo com 3 telas principais:
- Home com seleção de perfil.
- Currículo de Pedro.
- Currículo de Ana.

A base está limpa e objetiva, com React + Vite e rotas funcionando por `HashRouter` (adequado para GitHub Pages). A estrutura é simples e fácil de manter.

---

## 2) Pontos fortes
- **Arquitetura enxuta:** poucas páginas, componentes claros e fáceis de entender.
- **Responsividade básica presente:** uso de `grid` + media query para cards e hero.
- **Boa legibilidade visual:** contraste geral aceitável e hierarquia de conteúdo organizada.
- **Deploy alinhado com GitHub Pages:** uso de `HashRouter` evita problemas de rota em refresh.

---

## 3) Melhorias necessárias (priorizadas)

## Prioridade Alta (impacto imediato)

### 3.1 SEO técnico e metadados
**Problema:** o `index.html` ainda está em inglês (`lang="en"`) e não possui metadados completos (description, Open Graph, Twitter, canonical).

**Impacto:** menor qualidade de indexação e compartilhamento em redes.

**Recomendação:**
- Alterar `lang` para `pt-BR`.
- Adicionar `<meta name="description">`.
- Adicionar tags Open Graph e Twitter Card.
- Definir URL canônica do projeto.

---

### 3.2 Acessibilidade de navegação por teclado e foco
**Problema:** os estilos não definem estados visíveis de foco (`:focus-visible`) para links/botões.

**Impacto:** usuários de teclado podem perder referência de navegação.

**Recomendação:**
- Criar estilo global para foco visível em `.profile-link`, `.back-button` e links de contato.
- Garantir contraste alto no estado focado.

---

### 3.3 Conteúdo pessoal sensível e placeholders
**Problema:** currículo da Ana usa e-mail/telefone placeholder (`anajulia@email.com`, `(00) 00000-0000`).

**Impacto:** passa impressão de site incompleto e reduz credibilidade.

**Recomendação:**
- Substituir por contatos reais ou remover temporariamente.
- Opcional: adicionar CTA de contato por LinkedIn/formulário.

---

## Prioridade Média (melhora profissional/percepção)

### 3.4 Padronização de identidade e copy
**Problema:** há pequenas variações de nomenclatura e tom (ex.: `Ana Julia` vs nome completo possível; mistura de “currículo” e “portfólio” em partes do texto).

**Impacto:** sensação de inconsistência de marca.

**Recomendação:**
- Definir padrão de naming (nome completo, cargo, subtítulo).
- Padronizar CTA e linguagem (formal x informal).

---

### 3.5 Navegação e UX (próximos passos)
**Problema:** a navegação é funcional, mas linear (Home -> perfil -> voltar).

**Impacto:** limita exploração e conversão.

**Recomendação:**
- Adicionar links cruzados entre perfis (na página de currículo).
- Inserir seção “Projetos em destaque” (no perfil de tecnologia).
- Inserir “Disponibilidade / forma de contato” com CTA fixo.

---

### 3.6 Reuso de estilos e manutenção CSS
**Problema:** `CurriculoAna.css` e `CurriculoPedro.css` repetem várias regras estruturais.

**Impacto:** maior custo de manutenção e risco de divergência visual.

**Recomendação:**
- Extrair estilos compartilhados para arquivo base (ex.: `CurriculoBase.css`).
- Manter somente tokens de cor/tema em arquivos específicos de cada perfil.

---

## Prioridade Baixa (evolução contínua)

### 3.7 Performance e otimização de assets
**Problema:** backgrounds não aparentam otimização explícita (webp/avif) e podem pesar em mobile.

**Impacto:** possível aumento de LCP em conexões lentas.

**Recomendação:**
- Converter imagens para WebP/AVIF.
- Comprimir e dimensionar corretamente.
- Considerar `image-set` para diferentes densidades/tamanhos.

---

### 3.8 Escalabilidade de conteúdo
**Problema:** dados dos currículos estão totalmente hardcoded em JSX.

**Impacto:** manutenção mais difícil com crescimento do número de perfis.

**Recomendação:**
- Externalizar dados para `JSON`/`TS` (ex.: `src/data/profiles.js`).
- Renderizar seções por mapeamento.

---

### 3.9 Observabilidade e qualidade
**Problema:** não há script de lint/test explicitamente disponível.

**Impacto:** menor previsibilidade de qualidade ao escalar o projeto.

**Recomendação:**
- Adicionar script `lint` e configuração de CI para lint + build.
- Opcional: testes de smoke para rotas principais.

---

## 4) Backlog sugerido (plano de execução)

### Sprint 1 (rápida, 1–2 dias)
1. SEO básico no `index.html`.
2. Estados de foco e acessibilidade base.
3. Revisão de conteúdos placeholder.
4. Ajuste fino de textos para consistência.

### Sprint 2 (2–4 dias)
1. Refatoração CSS com base compartilhada.
2. Estrutura de dados externa para currículos.
3. Adição de links/CTAs estratégicos.

### Sprint 3 (contínua)
1. Otimização de imagens e performance.
2. Lint/checks automatizados em CI.
3. Evolução de conteúdo (projetos, depoimentos, resultados).

---

## 5) Critérios de sucesso (KPIs simples)
- **SEO:** melhoria no snippet e indexação (título/description corretos).
- **Acessibilidade:** navegação 100% por teclado com foco visível.
- **UX:** aumento de cliques em CTAs de contato.
- **Performance:** redução no tempo de carregamento inicial em mobile.

---

## 6) Conclusão
O site já está visualmente agradável e funcional para um portfólio objetivo. As melhorias mais urgentes estão em **SEO, acessibilidade, consistência de conteúdo e manutenção de estilos**. Com um ciclo curto de ajustes, o projeto pode elevar significativamente percepção profissional, alcance orgânico e facilidade de evolução.
