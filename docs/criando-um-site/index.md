---
description: |
  Passo-a-passo de como criar um site na deco.cx
---

# Objetivos desse guia

- Apresentar o Live e suas tecnologias
- Explicar os principais conceitos da ferramenta e utilizá-los para criar e
  desenvolver um site.

# Público-alvo

- Pessoas desenvolvedoras web interessadas em criar sites performáticos e
  facilmente customizáveis.

# Caso precise de ajuda…

- Acesse o <https://deco.cx/discord> caso tenha dúvidas ou problemas durante o
  uso. Participe também da nossa comunidade!

# O que é o Live

O Live é um construtor de sites separado em duas partes: um gerenciador de
conteúdo (CMS) e um framework de desenvolvimento. Com o framework é possível
desenvolver componentes que servirão para compor as páginas do site através do
CMS de forma bastante simples.

Apesar de ser especializado em sites de ecommerce, é possível desenvolver
qualquer tipo de site com o Live!

# O que você precisa saber antes de começar

Antes de começar a criar sites com o Live, vamos apresentar três pontos:

- As tecnologias que utilizamos
- Alguns dos principais conceitos do produto
- A estrutura dos arquivos do projeto que você vai utilizar

## Tecnologias

O Live utiliza o [Fresh](https://fresh.deno.dev/ "https://fresh.deno.dev/"),
framework web do [Deno](https://deno.land/ "https://deno.land/").

### [Deno](https://deno.com/deploy "https://deno.com/deploy")

O Deno é um ambiente de execução de JavaScript e TypeScript. Ele é utilizado
para fazer com que nossos sites, escritos em Typescript, sejam executados por um
servidor. O Deno é similar ao Node.js (_curiosidade_: eles foram
[criados pela mesma pessoa](https://www.youtube.com/watch?v=M3BM9TB-8yA "https://www.youtube.com/watch?v=M3BM9TB-8yA")).
Para instalar o Deno, siga as
[instruções na página do deno.land](https://deno.land/manual/getting_started/installation "https://deno.land/manual/getting_started/installation").

### [Fresh](https://fresh.deno.dev/ "https://fresh.deno.dev/")

Fresh é um framework web fullstack (backend e frontend) para desenvolvedores
JavaScript e TypeScript. Foi projetado para tornar fácil a criação de aplicações
web de alta qualidade, alta performance e altamente personalizáveis.

### [Preact](https://preactjs.com/ "https://preactjs.com/")

O Preact é a biblioteca de UI baseada em componentes escolhida pelo Fresh. Ela
permite a criação de interfaces web utilizando a linguagem JSX. A maioria das
bibliotecas e conceitos do
[React.js](https://reactjs.org/ "https://reactjs.org/") são compatíveis com o
Preact.

### [Twind](https://twind.dev/ "https://twind.dev/")

Twind é uma solução de estilização CSS baseado em classes utilitárias. Ele é
bastante similar ao
[TailwindCSS](https://tailwindcss.com/ "https://tailwindcss.com/"), porém é
otimizado para performance.

## Páginas, Seções e Conectores

<img width="990" alt="72430233-5531-47e5-92d0-28dc77994ca6" src="https://user-images.githubusercontent.com/18706156/219524679-19240c17-411f-40b6-9d08-ce964e8c0e03.png">

### Páginas

São nada mais do que páginas web que podem ser criadas e ter seu conteúdo
gerenciado através do CMS. Cada página está associada a uma rota (endereço) do
seu site para ser acessível externamente.

### Seções

São componentes _Preact_ que podem ser desenvolvidos para comporem uma página,
sendo adicionados a ela por usuários do CMS. Ex.: _Header_, _Banner_, _Product
Shelf_.

### Conectores

São funções que servem primariamente para fazer carregamento de dados através de
APIs. Dependendo do tipo de retorno dessas funções, o _Live_ permitirá que elas
possam ser vinculadas a seções.

<img width="1122" alt="8c3f480f-b113-484a-9aa2-fc8884b14495" src="https://user-images.githubusercontent.com/18706156/219524676-fda02b46-2d8f-4d6c-a97b-ecf77b7f2f1e.png">

## Estrutura de arquivos

![0fb8b024-b054-4979-a74a-f9aebb6275b6](https://user-images.githubusercontent.com/18706156/219524672-7fcb40a6-1413-47f9-a896-d01f81d2cc45.png)

### functions

Pasta onde ficam os conectores e outras funções auxiliares.

### islands

Pasta onde ficam as
[_Interactive islands_](https://fresh.deno.dev/docs/concepts/islands). As
_islands_ são componentes _Preact_ que são renderizados do lado do cliente,
diferentemente dos outros componentes do _Fresh_. Como o nome sugere, é através
deles que você vai deixar o site mais interativo do lado do cliente.

### routes

Pasta para colocar páginas que não serão geradas e gerenciadas pelo _Live_ e que
são acessíveis externamente. Seguem a lógica de roteamento definida no
[_Fresh_](https://fresh.deno.dev/docs/concepts/routing "https://fresh.deno.dev/docs/concepts/routing").

### sections

Pasta onde ficam as seções. Não é possível criar seções dentro de subpastas.

### static

Pasta onde ficam arquivos estáticos, como imagens e fontes.

### clients, components, data, sdk

Pastas que auxiliam na organização de funcionalidades em geral.

# Criando um site e preparando o ambiente de desenvolvimento

## Pré-requisitos

Antes de prosseguir, é necessário que você tenha:

- Conhecimentos básicos de shell e Git/Github.
- `git` instalado na sua máquina e configurado com sua conta.
  [Veja como instalar o Git](https://github.com/git-guides/install-git "https://github.com/git-guides/install-git").
- `deno` instalado na sua máquina.
  [Veja como instalar o Deno](https://deno.land/manual/getting_started/installation "https://deno.land/manual/getting_started/installation").

## Crie um site Live

O Live abstrai todas as complexidade de configurar um repositório, conectar um
CMS e deploy na edge. Isso possibilita que você possa focar apenas no que
importa: o código do seu site.

O primeiro passo é ter uma conta e um site no Live. Acesse
<https://deco.cx/onboarding>, faça login com sua conta no github e siga o
passo-a-passo indicado na página para criar sua conta de desenvolvedor(a). A
criação do Live irá preparar uma conta de CMS para você, bem como um deployment
da sua página e um repositório no github com o código do site.

## Clone o repositório do seu site

Aceite o convite para acessar o repositório criado para o seu site. Esse convite
é enviado um email associado ao seu github.

Use o comando `git clone` para baixar o código do site para sua máquina. O
método geralmente utilizado para clonar um repositório é o SSH. Para isto, abra
o terminal e execute o comando:

```
git clone git@github.com:deco-sites/site-name.git
```

**Lembre-se de alterar `site-name` pelo nome do seu site.**

Caso prefira, você pode clonar o repositório utilizando outros métodos, como
_git https_ ou através da ferramenta do _Github_. Na página do seu repositório
no _Github_ é possível encontrar detalhes sobre essas diversas formas de clonar.

# Desenvolvendo

## Rode o servidor local

No terminal, entre na pasta do site e execute o comando:

```
deno task start
```

> O `deno.lock` é um arquivo que registra as versões das dependências do projeto
> durante a execução do `deno task start`. Em caso de erro, apague o arquivo
> `deno.lock` e reexecute o `deno task start` para atualizá-lo.

## Veja suas seções locais no Live

1. Acesse <https://deco.cx/live>.

2. Selecione o site que você está desenvolvendo

3. Vá em Library.

4. No seletor de ambiente da _topbar_ selecione _localhost:8000_ e veja as
   seções que estão no seu repositório local.

![c6e74d5f-24c2-4a90-937c-3d767d072617](https://user-images.githubusercontent.com/18706156/219524681-4505e860-e293-48d6-bcb6-bb632f591ef3.png)

![eab7716f-b5ba-48a7-9fd0-20ac540652d8](https://user-images.githubusercontent.com/18706156/219524684-2e742050-f5e8-4b25-a67b-b48bc01d66a2.png)

## Publique suas mudanças em produção

O _deploy_ em produção é muito simples: basta fazer um _push_ das suas mudanças
na _branch_ _**main**_, que é a branch principal.

Você pode acessar _site-name.deco.site_ para ver a última versão do seu site no
ar.

# Pronto! Você já pode começar a criar sites incríveis :)

Com esse tutorial inicial você tem o suficiente para começar a desenvolver
seções e conectores para permitir que eles sejam utilizados na criação de
páginas.

Não deixe de participar da nossa
[comunidade do Discord](https://deco.cx/discord "https://deco.cx/discord") para
tirar dúvidas, acompanhar as novidades e seguir evoluindo junto com a gente!
