---
   description: Aprenda como integrar uma nova plataforma de ecommerce na deco
---

Neste tutorial você aprenderá como integrar uma **nova plataforma** de ecommerce na deco.

Mas, antes disso, dê uma olhada na [lista de plataformas](/docs/pt/tutorials/list-of-supported-plataforms/) já suportadas atualmente e veja se o que procura já está pronto.

## Meu provedor não está na lista

Se o seu provedor não está na lista, isso não é um problema.

Vamos passar por cada uma das etapas de como criar a integração com uma nova plataforma.

## Pré-requisitos

- [Conceitos: Loader](/docs/pt/concepts/loader)
- [Conceitos: Section](/docs/pt/concepts/section)
- [Tutorial: Buscando dados de API](/docs/pt/concepts/section)

## Entendendo a integração com a deco

A integração entre uma plataforma de ecommerce e a deco é feita através das **APIs** que o provedor fornece.

Utilizando os **Loaders**, podemos padronizar os dados trazidos pela **API**, possibilitando a reutilização de componentes.

## Etapas necessárias

- Criando uma configuração global
- Setup de código
    - Criando um **client**
    - Criando um **transformer**
    - Criando um **arquivo de tipos**
- Loaders
    - Loader de **productList**
    - Loader de **productSearch**
    - Loader de **productPage**
- Hooks de Carrinho

