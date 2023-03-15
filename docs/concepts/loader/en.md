---
  description: A Loader in deco.cx is a function that returns data needed for a Site.
---

A **Loader** in _deco.cx_ is a Typescript function that returns data needed in a
[Section](/docs/en/concepts/section). These functions are
executed before every page renders, and their main purpose is to **fetch data
from external sources**, transform it if necessary, and **provide it to the site
Sections that need it.** Loaders can be used to fetch data from APIs, databases,
or any other external source.

In addition to fetching data, Loaders in _deco.cx_ **can also export a
Typescript Props type,** which allows them to be configured in the
[Admin](https://deco.cx/admin) just like
[Sections](/docs/en/concepts/section). This means that
business users can configure details about how the Loader will operate, such as
**setting up filters or passing parameters to APIs.** By making Loaders
configurable in this way, it becomes easier to manage the data flowing into
Sections and ensure that the Site is displaying the right information to
visitors.

One other greate benefit of Loaders in _deco.cx_ is that **multiple loaders can
return the same data type**. This allows
[Sections](/docs/en/concepts/section) that receive, for
example, an array of canonical Product to get data from different Loaders,
depending on the user's configuration. This means that UIs can be reused across
[Sites](/docs/en/concepts/site) or across teams, making it
easier to manage and scale your project.

> All Sections for ecommerce stores created by _deco.cx_ in the
> [Fashion](https://github.com/deco-sites/fashion) start use a canonical Product
> type, and also every Loader that connects to ecommerce providers's APIs. This
> means that you can reuse the same UI to show data from different places,
> depending on the configuration.

<img width="1259" alt="image" src="https://user-images.githubusercontent.com/18706156/224897214-a45b2731-5799-4007-8084-a8a772ddf5d2.png">

## Example Code

This is the implementation of the `shopifyProductList.ts` Loader:

```tsx
import type { LoaderFunction } from "$live/types.ts";
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

[Source](https://github.com/deco-sites/std/blob/bedf496b7a2a480c1a9dfae477fe34020daae821/functions/shopifyProductList.ts)
