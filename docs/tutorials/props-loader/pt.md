---
  description: Usando o loader de propriedades para melhor separação entre propriedades de passagem e propriedades carregáveis
---

## Leitura sugerida

- [Tech Stack](/docs/pt/introduction/tech-stack)
- [Conceitos básicos: Section](/docs/pt/concepts/section)
- [Carregando dados de APIs](/docs/pt/tutorials/data-fetching)

Loaders são usados para adicionar dinamicidade nas sections forcenendo-as dados
de APIs. Para tanto, o loader precisa receber tanto propriedades que servem para
fazer `fetch` quanto propriedades "de passagem". Propriedades de passagem são
propriedades que o loader recebe mas que na verdade apenas faz uma "passagem"
direta para o componente, sem que haja nenhum uso pelo loader em si.

Tomemos como exemplo o loader abaixo:

```ts
import type { LoaderContext } from "$live/types.ts";

// Props type that will be configured in deco.cx's Admin
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

interface DogFact {
  fact: string;
}

interface Props {
  title: string;
  dogFacts: DogFact[];
}

export async function loader(
  _req: Request,
  { state: { $live: { numberOfFacts, title } } }: LoaderContext<LoadProps>,
): Promise<Props> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts: facts.map((fact) => ({ fact })), title };
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

Note que a propriedade `title` é uma propriedade de passagem, sendo ela apenas
repassada para o componente `DogFacts`.

Neste tutorial vamos aprender a como criar um loader apenas para campos
selecionados e deixaremos as properidades de passagem opacas para o loader,
permitindo assim uma melhor separação entre carregamento de dados e passagem de
propriedades.

## Utilizando o carregador de propriedades

O `live.ts` permite que a nossa função de `loader` tenha dois formatos
principais:

1. Uma função que carrega **todas** as propriedades da Section desejada.
2. Um mapa de propriedades que possui uma função pra cada tipo da propriedade.

Vamos reimplementar o componente anterior utilizando um loader de propriedade,
para tanto, primeiro vamos criar uma nova função chamada `dogFacts` que irá
retornar apenas nossos `DogFacts[]`.

```ts
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

interface DogFact {
  fact: string;
}

async function dogFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<LoadProps>,
): Promise<DogFact[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts.map((fact) => ({ fact }));
}
```

Note que, mesmo recebendo `title` como parâmetro, não estamos fazendo uso dele.
Agora, vamos;

1. Importar o `PropsLoader` do $live
2. mudar nossa função `loader` para ser um mapa que contém a propriedade na qual
   queremos carregar dinamicamente, que no nosso caso é `dogFacts`.

```ts
import { PropsLoader } from "$live/mod.ts";
import type { LoaderContext } from "$live/types.ts";

// Return type of this loader
export interface DogFact {
  fact: string;
}

// Props type that will be configured in deco.cx's Admin
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

async function dogFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<LoadProps>,
): Promise<DogFact[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts.map((fact) => ({ fact }));
}

export interface Props {
  title: string;
  dogFacts: DogFact[];
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

export const loader: PropsLoader<
  Props,
  LoadProps
> = {
  dogFacts,
};
```

> O `PropsLoader<SectionProps, LoaderProps>` sempre tem a assinatura nesse
> formato onde o primeiro parâmetro é o SectionProps e o segundo do LoaderProps.

Pronto! Agora nossa section recebe as mesmas propriedades que foram definidas no
nosso `LoadProps` sem perder a capacidade de carregamento dinâmico de dados!

## Leitura adicional

Agora que podemos separar nosso carregamento de propriedades das propriedades de
passagem, que tal criar um componente universal ? Leia sobre nos links abaixo

- [Componentes Universais](/docs/pt/tutorials/universal-components)
- [Conceitos básicos: Loaders](/docs/pt/concepts/loader)