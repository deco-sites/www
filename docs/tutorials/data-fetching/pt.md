---
   description: Aprenda como carregar dados usando Loaders e Sections, permitindo que usuários de negócios personalizem a busca.
---

## Leitura sugerida

- [Tech Stack](/docs/pt/intro/tech-stack)
- [Conceitos básicos: Section](/docs/pt/concepts/section)
- [Conceitos básicos: Loaders](/docs/pt/concepts/loader)

Buscar dados de APIs é um requisito comum ao criar sites ou aplicações. A
_deco.cx_ oferece uma solução de _data-fetching_ que ocorre **no server-side** e
é flexível para permitir que os usuários de negócios configurem como os dados
são buscados, da mesma forma que configuram `props` das Sections.

Neste tutorial, você aprenderá como buscar dados de uma API externa e injetá-los
em uma Section usando [Loaders](/docs/pt/concepts/loader).

## O que vamos construir

O caso de uso de exemplo que seguiremos é simples, mas tem muitas complexidades
comums à outros casos:

- Fazer fetch de fatos sobre cachorros usando a [Dog API](https://dogapi.dog/)
  **permitindo ao usuário para configurar quantos fatos serão retornados** no
  Admin do _deco.cx_.
- Apresentar esses fatos em uma Section.

<img width="1512" alt="Dados de renderização de Section obtidos da API" src="https://user-images.githubusercontent.com/18706156/225758802-7277e774-921d-46e5-b384-bc9245b8eef1.png">

_Visualização da Section DogFacts mostrando os dados retornados da API_

<img width="941" alt="Dados retornados da API Dog Facts" src="https://user-images.githubusercontent.com/18706156/225752374-0882d0ec-966b-4074-a49d-d18ffc17d8b9.png">

_Dados retornados da API Dog Facts sendo chamada no browser_

## Criando o Loader

Os Loaders permitem que você defina como os dados são buscados e transformados
antes de serem repassado a uma Section. Eles são **funções Typescript
regulares** que podem usar funções _async_ como `fetch`. Os Loaders podem ser
"conectados" a uma Section por meio de uma das `props` da Section, e isso
acontece com base no **tipo de retorno do Loader**.

A _deco.cx_ oferece um tipo de utilitário para auxiliar a criação de um Loader.
Vamos ver como isso funciona criando o Loader `dogApiFacts.ts`.

1. Crie um arquivo chamado `dopApiFacts.ts` dentro da pasta `/functions` em seu
   projeto.
2. Cole o seguinte código:

```ts
import type { LoaderFunction } from "$live/std/types.ts";

// Return type of this loader
export type DogFact = {
  fact: string;
};

// Props type that will be configured in deco.cx's Admin
export interface Props {
  numberOfFacts?: number;
}

const dogApiFacts: LoaderFunction<Props, DogFact[]> = async (
  _req,
  _ctx,
  { numberOfFacts },
) => {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };

  return {
    data: facts.map((fact) => ({ fact })),
  };
};

export default dogApiFacts;
```

3. Execute `deno task start` se ainda não o fez.
4. **É isso aí!** O Loader foi criado em seu projeto local.

Agora, vamos vê-lo funcionando conectando-o a uma Section.

## Criando a Section e testando o Loader

Para receber os dados retornados do Loader `dogApiFacts.ts` em uma Section
precisamos referenciar seu tipo de retorno (`DogFact[]`) no tipo `props` da
Section.

<!-- TODO: Altere o código após nova engine -->

Vamos ver isso em ação criando uma nova Section:

1. Crie a Section `DogFacts.tsx` na pasta `sections/` do seu projeto.
2. Cole o seguinte código:

```tsx
import { LoaderReturnType } from "$live/std/types.ts";
import { DogFact } from "../functions/dogApiFacts.ts";

export interface Props {
  title: string;
  dogFacts: LoaderReturnType<DogFact[]>;
}

export default function DogFacts({ title, dogFacts }: Props) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map(({ fact }) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

3. Assumindo que `deno task start` está rodando, acesse https://deco.cx/admin e
   selecione seu Site.
4. Certifique-se de que `localhost:8000` esteja selecionado no Seletor de
   Ambiente em no canto superior direito do Admin.
5. Vá para `Library` e procure por `DogFacts` na barra lateral esquerda.
6. Configure os props da Section e **selecione o carregador `dogApiFacts.ts`**
   para a propriedade `dogFacts`.
7. Configure as `props` do Loader selecionado (`numberOfFacts`) com um número
   desejado (_ex:_ 4).
8. Clique em `Salvar` e veja funcionando!

<img width="1512" alt="Biblioteca mostrando os dados de renderização da Section DogFacts obtidos da API" src="https://user-images.githubusercontent.com/18706156/225752569-cd626d6d-a2ba-4edf-af6c-7e9b5758324a.png">

_Biblioteca mostrando os dados de renderização da Section DogFacts obtidos da
API_

> Também é possível criar um `prop` LoaderReturnType em uma Section já
> existente.

**É isso!** Agora você criou uma Section que exibe os dados obtidos de um API
externa usando um Loader, tornando tudo configurável por usuários de negócios
como desejado. Recomendamos exportar filtros e _sort_ nos `props` do Loader para
torná-lo mais reutilizável no Admin do _deco.cx_.

O processo pode parecer um pouco complicado, mas tem um grande benefício: a
Section não está vinculada a um Loader específico, mas sim à um tipo. Isso
permite **utilizar outros Loaders que também possam retornar o tipo
`DogFacts[]`.** No ecommerce, onde existem diferentes API _providers) (_ex:_
Shopify, Magento, Oracle) para os mesmos tipos de dados (Produtos, Categorias,
Pedidos...) isso pode ser útil.

No [Fashion starter](https://github.com/deco-sites/fashion) criamos Sections e
Loaders usando os [tipos do Schema.org](https://schema.org/Product), permitindo
que a mesma UI (_ex:_ Product Shelf, Product Details) possa usar usada com
diferentes _providers_, permitindo reuso de código para agências e
desenvolvedores que atendem clientes de diferentes plataformas.
