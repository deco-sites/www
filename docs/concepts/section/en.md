---
description: |
   A section represents a configurable UI element for a deco site. This article further explains the concept
---

**Live** allows developers to create UI sections in code that can be configured
by business users through the admin of the [deco.cx.](deco.cx "deco.cx")
Sections are available in the following locations:

- **Workbench:** Allows developers to configure the properties of sections and
  automatically see the generated UI.
- **Pages:** Allows sections to be added to pages on the site, too being
  configured as desired.

## What are sections in code?

Sections are **components
[Preact](https://preactjs.com/ "https://preactjs.com/")** exported with _default
export_ by files in the `sections/` folder in a site's repository Live.

Some examples of sections on an ecommerce site would be:

- **Product Shelf:** displays a product shelf with image, title and price.
- **Header:** displays the standard header of the store, containing logo, menu
  categories and links for cart and login.
- **Banner:** displays image, text and some _Call to action_ for campaign or
  specific department.

Note that sections run on the server only, so state management such as
`useState`, `useEffect` and callbacks such as `onClick`, `onInput` will not
work. For this you will have to use sections in set with islands.

## How to create a section

1. Create a `.tsx` file in the `sections/` folder on your website.

2. Export a component [Preact](https://preactjs.com/ "https://preactjs.com/")
   like the example below:

   1. `sections/Example.tsx`

      ```tsx
      export default function ExampleSection() {
        return (
          <div>
            <p>This is an example section</p>
          </div>
        );
      }
      ```

3. Done! Now this section will be available to be configured in the admin of the
   [deco.cx](deco.cx "deco.cx").

## Customizing sections

It is usually desirable for the site to have text and images that can be edited
by users. of business through a CMS _(Content Management System),_ and the
[deco.cx](deco.cx "deco.cx") provides this functionality across sections.

To provide customization, a section can **accept Props** like any JSX/Preact
component. It is necessary to **export the type (Typescript) of the Props** for
our editor to recognize the fields that are accepted.

_Example:_

- Section configuration in [deco.cx](deco.cx "deco.cx")

```tsx
export interface props {
  title: string;
}

export default function ExampleSection({ title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
```

- Preview of section editing in Admin

<img width="303" alt="Preview of section editing in Admin" src="https://user-images.githubusercontent.com/18706156/219485206-732b566b-0f8f-43ce-a512-fa8252e99642.png">

## Types accepted

The [deco.cx](deco.cx "deco.cx") editor accepts a subset of types Typescript for
section configuration. This is the list of supported types in time:

### Native Types

#### string

```ts
export interface props {
  title: string;
}
```

#### number

```ts
export interface props {
  numberOfLines: number;
}
```

#### object literal

```ts
export interface props {
  address: {
    street: string;
    postalCode: string;
  };
}
```

#### array

```ts
export interface props {
  menuItems: Array<{ label: string; value: string }>;
}
```

#### string options

```ts
export interface props {
  variant: "primary" | "secondary" | "tertiary";
}
```

### Special Types

#### Image

This type renders an image upload _widget_ in the editor, making it possible to
user to upload images from his own computer.

The type is a *wrapper for `string`, *so the section component will get the URL
of the image that will be hosted on the servers of [deco.cx](deco.cx "deco.cx").

**Optional:** [deco.cx](http://deco.cx) provides a component that optimizes the
image loading and can be used in conjunction with this property. Example tsx")

```ts
import type { Image } from "$live/std/ui/types/Image.ts";

export interface props {
  bannerImg: Image;
}
```

#### Video

Similar to Image, properties with this type will be edited through a Video
upload _widget_.

Example of use
[here](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3 "https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4230b2csection/ VideoCarousel.tsx#L3").

```ts
import type { Video } from "$live/std/ui/types/Video.ts";

export interface props {
  myVideo: Video;
}
```

### Enriching the editor

When using native types, the editor's input label is the variable name. Pro
example, the `Props` type below will generate an editor with an input whose
label is `count`

- _section_ code

```tsx
export interface props {
  /** @title Number of products */
  /** @description Total products to show in the showcase */
  count: number;
}
```

- editor

![Example](https://deco.fibery.io/api/files/73302d29-bdee-471c-ab2d-75f78ddedb58?is-public=1#align=%3Aalignment%2Fblock-center&width=348&height=102)

The above behavior is convenient for the developer, however, users of Businesses
appreciate having a guided edit where fields have descriptive names. For modify
labels and other editor attributes we use tags
[JSDoc](https://jsdoc.app/ "https://jsdoc.app/").

Suppose that, in the example above, the `count` variable represents the number
of products to be rendered on a shelf or display case. To improve the business
user's editing experience, we can modify the type to generate the following
editor:

- _section_ code

```tsx
export interface props {
   /\*\*
    \* @title Number of products
    \* @description Total products to show in the showcase
    \* \*/
   count: number;
}
```

- editor

![Example](https://deco.fibery.io/api/files/62cc889a-9460-4899-8d35-44f6a6608400?is-public=1#align=%3Aalignment%2Fblock-center&width=350&height=135)

The available tags are fields compatible with
[JSON Schema](https://json-schema.org/ "https://json-schema.org/"), i.e.
`@title`, `@description`, `@format` among others. For example, to accept emails
only:

```
export interface props {
   /** @format email */
   email: string
}
```

### Loading data

Some sections (eg **Product Shelf**) need data that is not necessarily
configured by users in the editor, but which need to be loaded using an external
API. For this functionality, it is also You can export specific types of data in
Props and leverage Live.

<!-- Read [[Documentation deco/Guides: Loading data into Live]] for more details on how to use this functionality. -->
