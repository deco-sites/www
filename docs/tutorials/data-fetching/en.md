---
  description: Learn how to load data with deco.cx using Loaders and Sections, allowing business users to customize data fetching.
---

## Suggested reading

- [Tech Stack](/docs/en/intro/tech-stack)
- [Core Concepts: Sections](/docs/en/concepts/section)
- [Core Concepts: Loaders](/docs/en/concepts/loader)

Fetching data is a common requirement when building websites or applications.
_deco.cx_ provides a data-fetching solution that loads data **on the
server-side** and is flexible enough to allow business users to customize how
data is fetched, just how they can configure Section's `props`.

In this tutorial you'll learn how to fetch data from an external API and feed
that into a Section using [Loaders](/docs/en/concepts/loader).

## What we'll build

The example use-case we'll follow is simple, but it has a lot of complexities we
have on data fetching:

- Fetch dog facts data from the [Dog API](https://dogapi.dog/) **allowing the
  user to configure how many facts are being fetched** on _deco.cx_'s Admin.
- Render those facts in a Section.

<img width="1512" alt="Section rendering data fetched from API" src="https://user-images.githubusercontent.com/18706156/225758802-7277e774-921d-46e5-b384-bc9245b8eef1.png">

_Preview of DogFacts Section showing data returned from API_

<img width="941" alt="Data returned from the Dog Facts API" src="https://user-images.githubusercontent.com/18706156/225752374-0882d0ec-966b-4074-a49d-d18ffc17d8b9.png">

_Data returned from the Dog Facts API being called elsewhere_

## Creating the Loader

Loaders allow you to define how data is fetched and transformed before it is
passed on to a Section. They are **regular Typescript functions** that can use
_async_ functions like `fetch`. Loaders can be "plugged" into a Section via one
the Section's `props`, and that happens based on the **return type of the
Loader**.

_deco.cx_ offers a utility type to help you create a Loader. Let's see how that
works creating the `dogApiFacts.ts` Loader.

1. Create a file called `dopApiFacts.ts` inside the `/functions` folder on your
   _deco.cx_ Site's project
2. Paste the following code:

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

3. Run `deno task start` if you haven't yet.
4. **That's it!** The Loader was created on your local project.

Now, let's see it working hooking it up with a Section.

## Creating the Section and testing the Loader

To receive the data returned from the `dogApiFacts.ts` Loader in a Section we
need to reference its return type (`DogFact[]`) in the Section's `props` type
declaration.

<!-- TODO: Change the code after new engine -->

Let's see it working creating a new Section:

1. Create the `DogFacts.tsx` Section in the `sections/` folder of your project.
2. Paste the following code:

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

3. Assuming `deno task start` is still running, access https://deco.cx/admin and
   select your Site.
4. Make sure that `localhost:8000` is selected in the Environment Selector on
   the top right of the Admin.
5. Go to `Library` and search for `DogFacts` on the left sidebar.
6. Configure the Section's props and **select the `dogApiFacts.ts` Loader** for
   the `dogFacts` prop.
7. Configure the selected Loader's `props` (`numberOfFacts`) with a desired
   number (_e.g:_ 4).
8. Hit `Save` and see it working!

<img width="1512" alt="Library showing the DogFacts Section rendering data fetched from the API" src="https://user-images.githubusercontent.com/18706156/225752569-cd626d6d-a2ba-4edf-af6c-7e9b5758324a.png">

_Library showing the DogFacts Section rendering data fetched from the API_

> It's also possible to create a LoaderReturnType `prop` in an existing Section.

**That's it!** Now you've built a Section that displays data fetched from an
external API using a Loader, making it all configurable by business users as
desired. We recommend exporting filters and sort options in Loader's `props` to
make it more reusable in _deco.cx_'s Admin.

The process might look a bit convoluted, but it has a major benefit: the Section
is not tied to a Loader, but to a type, and that makes it possible to **use
other Loaders that might also return the `DogFacts[]` type.** In the ecommerce
ecosysytem, where there are different API providers (_e.g:_ Shopify, Magento,
Oracle) for the same types of data (Products, Categories, Orders...) this might
come in handy.

In our [Fashion starter](https://github.com/deco-sites/fashion) we create
Sections and Loaders using the
[schema.org's type definitions](https://schema.org/Product), allowing the same
UI (_e.g:_ Product Shelf, Product Page...) to be used with different providers,
which can be benefitial for agencies and developers that serve multiple
customers.
