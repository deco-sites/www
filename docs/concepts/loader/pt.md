---
   description: Um Loader em deco.cx é uma função que retorna os dados necessários para um Site.
---

Um **Loader** em _deco.cx_ é uma função Typescript que retorna os dados
necessários em uma [Section](https://deco.cx/docs/pt/concepts/section). Essas
funções são executadas antes da renderização de cada página e seu principal
objetivo é **buscar dados de fontes externas**, transformá-los se necessário e
**fornecê-los às Seções do site que precisam.** Os Loaders podem ser usados para
buscar dados de APIs, bancos de dados ou qualquer outra fonte externa.

Além de buscar dados, os Loaders na _deco.cx_ **também podem exportar um tipo de
Props Typescript**, o que permite que sejam configurados no
[Admin](https://deco.cx/admin) assim como as
[Sections](https://deco.cx/docs/pt/concepts/section). Isso significa que os
usuários de negócio podem configurar detalhes sobre como o Loader irá operar,
como **configurar filtros** ou **passar parâmetros para APIs.** Ao tornar os
Loaders configuráveis dessa maneira, fica mais fácil gerenciar os dados que
fluem para as Sections e garantir que o Site esteja exibindo as informações
corretas para os visitantes.

Outro benefício dos Loaders na _deco.cx_ é que **vários loaders podem retornar o
mesmo tipo de dados**. Isso permite que as
[Sections](https://deco.cx/docs/pt/concepts/section) que recebem, por exemplo, um _array_ de Produtos canônico obtenham dados de diferentes Loaders, dependendo
da configuração do usuário. Isso significa que as UIs podem ser reutilizadas em
[Sites](https://deco.cx/docs/pt/concepts/site) ou entre times, facilitando o
gerenciamento e a escala do seu projeto.

> Todas as Sections para lojas de _ecommerce_ criadas por _deco.cx_ na
> [Fashion](https://github.com/deco-sites/fashion) usam um tipo de
> Produt canônico e também cada Loader que se conecta às APIs dos
> _ecommerce providers_. Isso significa que você pode reutilizar a
> mesma UI para mostrar dados de diferentes locais, dependendo da configuração.

<img width="1259" alt="image" src="https://user-images.githubusercontent.com/18706156/224897214-a45b2731-5799-4007-8084-a8a772ddf5d2.png">

## Código de exemplo

Esta é a implementação do Loader `shopifyProductList.ts`:

```tsx
import type {} from "$live/types.ts";
import type { LiveState } from "$live/types.ts";

import { toProduct } from "../commerce/shopify/transform.ts";
import { ConfigShopify, createClient } from "../commerce/shopify/client.ts";
import type { Product } from "../commerce/types.ts";

export interface Props {
  /** @description search term to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const searchLoader: LoaderFunction<
  Props,
  Product[],
  LiveState<{ configShopify: ConfigShopify }>
> = async (
  _req,
  ctx,
  props,
) => {
  const { configShopify } = ctx.state.global;
  const shopify = createClient(configShopify);

  const count = props.count ?? 12;
  const query = props.query || "";

  // Fetch Shopify's API using deco's built-in Shopify Client
  const data = await shopify.products({
    first: count,
    query,
  });

  // Transform Shopify product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = data?.products.nodes.map((p) =>
    toProduct(p, p.variants.nodes[0])
  );

  return {
    data: products ?? [],
  };
};

export default searchLoader;
```

[Fonte](https://github.com/deco-sites/std/blob/bedf496b7a2a480c1a9dfae477fe34020daae821/functions/shopifyProductList.ts)