---
description: Aprenda a criar layouts para as páginas do seu site.
since: 1.0.0
---

# Tópicos

1. Introdução aos Layouts de Página
   - O que são Layouts de Página?
   - Por que usar Layouts de Página?
2. Criando um Layout de Página
   - Adicionando uma nova seção chamada `Slot.tsx`.
   - Definindo o nome do Slot.
3. Usando um Layout de Página
   - Atribuindo um Layout de Página a uma Página.
   - Usando Layouts de Página aninhados.
4. Implementando Slots em um Layout de Página usando `UseSlot.tsx` para
   substituir o conteúdo de um Slot.
5. Conclusão

# Layout de Páginas

## O que são Layouts de Página?

Layouts de Página são modelos reutilizáveis que definem a estrutura geral e o
conteúdo de uma página. Eles permitem que você separe o layout e o design de uma
página do seu conteúdo, facilitando a manutenção e atualização do seu site. Com
os Layouts de Página, você pode criar uma aparência e sensação consistentes em
todas as suas páginas, ao mesmo tempo que permite flexibilidade e
personalização.

## Por que usar Layouts de Página?

Usar Layouts de Página tem vários benefícios:

1. Consistência: Usando o mesmo layout em todas as suas páginas, você pode criar
   uma aparência e sensação consistentes para o seu site.
2. Reutilização: Layouts de Página podem ser reutilizados em várias páginas,
   economizando tempo e esforço.
3. Separação de responsabilidades: Layouts de Página separam o layout e o design
   de uma página do seu conteúdo, facilitando a manutenção e atualização do seu
   site.
4. Personalização: Layouts de Página podem ser personalizados para atender às
   necessidades específicas de páginas individuais.

Agora que sabemos o que são Layouts de Página e por que devemos usá-los, vamos
ver como criá-los.

# Criando um Layout de Página

Criar um layout de página no deco.cx's é um processo simples que pode ser feito
inteiramente através do deco.cx's Admin. Você não precisa escrever nenhum código
para criar um layout. Em vez disso, você adicionará uma nova seção chamada
"Slot" às suas páginas existentes e, em seguida, salvará essas páginas como
layouts.

Para começar, abra o Live.ts deco.cx's Admin e navegue até uma página existente
que você deseja usar como página para seu layout. No editor de páginas, clique
no botão "+".

Na caixa de diálogo "Adicionar seção", selecione "Slot.tsx" na lista de tipos de
seção disponíveis. Isso criará uma nova seção em sua página que será usada como
área de conteúdo para páginas que usam este layout.

Opcionalmente, você pode dar um nome à seção do slot que será exibido no Admin
do deco.cx para páginas que usam este layout. Para fazer isso, abra a seção do
slot clicando no cabeçalho da seção e, em seguida, digite um nome no campo "Nome
do Slot" no painel de configurações da seção.

Depois de criar a seção do slot, você pode salvar esta página como um layout
clicando no botão "Salvar" no editor de página. Dê um nome ao seu layout e
clique em "Salvar". Seu layout agora estará disponível para uso em outras
páginas.

# Usando o layout de página

Para usar seu novo layout em uma página, abra o editor de página para a página
em que deseja usar o layout e clique no botão "Layout" no topo do editor de
página. Isso abrirá a caixa de diálogo seletor de layout.

Na caixa de diálogo seletor de layout, você verá uma lista de layouts
disponíveis. Selecione o layout que deseja usar e clique em "Aplicar". O layout
agora será aplicado à sua página e a área de conteúdo será preenchida com as
seções adicionadas na página atual. Opcionalmente, você pode adicionar o bloco
UseSlot.tsx para preencher um bloco específico.

É isso! Agora você criou um layout de página usando o Live.ts e pode usá-lo para
criar rapidamente novas páginas com uma estrutura e layout consistentes.
