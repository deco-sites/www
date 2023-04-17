---
description: Aprenda a invocar loaders através da API.
---

## Leitura sugerida

- [Conceitos básicos: Loaders](/docs/pt/concepts/loader)

A Invocação de loaders client-side é um recurso poderoso do live.ts que permite
que você obtenha dados diretamente dos seus loaders sem enviar JavaScript para o
navegador. Esse recurso garante que sua obtenção de dados seja única em todo o
seu repositório e ajuda a reduzir a latência do lado do cliente.

Para começar a usar a Invocação de loaders client-side, siga estes passos:

1. Primeiro, crie um arquivo `runtime.ts` no seu diretório raiz, juntamente com
   o arquivo `live.gen.ts`. Se você começou com o template store do live.ts,
   este arquivo já deve existir.
2. Em seguida, copie e cole o seguinte código em seu arquivo `runtime.ts`:

```ts
import { withManifest } from "$live/clients/withManifest.ts";
import type { Manifest } from "./live.gen.ts";

export const Runtime = withManifest<Manifest>();
```

Este código importa a função `withManifest` do módulo `clients` do live.ts e
cria um objeto Runtime que é bem tipado com base em suas funções de manifesto.

3. Agora você pode emitir invocações usando a função `Runtime.invoke`. Por
   exemplo, para buscar dados de uma função loader, você usaria o seguinte
   código:

```ts
const data = await Runtime.invoke({
  key: "path/to/your/loader",
  props: {/* your loader input props */},
});
```

Aqui, a função `invoke` recebe um objeto com uma propriedade `key` que
especifica o caminho para sua função loader e uma propriedade `props` que contém
suas props de entrada do loader. Quando você chama `Runtime.invoke`, o live.ts
irá invocar seu loader como faz para renderizar seções e retorná-lo para você
como um objeto JavaScript.

Você também pode agrupar solicitações passando um objeto com várias chaves, cada
uma representando uma invocação desejada. Por exemplo:

```ts
const { data1, data2 } = await Runtime.invoke({
  data1: {
    key: "path/to/your/loader1",
    props: {/* your loader input props */},
  },
  data2: {
    key: "path/to/your/loader2",
    props: {/* your loader input props */},
  },
});
```

Por fim, você pode selecionar quais propriedades deseja retornar do seu objeto
de dados usando a propriedade `select`. Esta propriedade recebe uma matriz de
caminhos (separados por `.`) que você deseja retornar. Por exemplo:

```ts
const data = await Runtime.invoke({
  key: "path/to/your/loader",
  props: {/* your loader input props */},
  select: ["prop1", "prop2.subprop"],
});
```

Este código buscará os dados do seu loader e retornará apenas as propriedades
`prop1` e `prop2.subprop`.

Com esses passos, agora você pode começar a usar a Invocação de loaders
client-side em sua aplicação Live.ts, happy coding!
