---
  description: Learn how to create a Section for a Site using deco.cx
---

In this tutorial you'll learn how to create a a new
[Section](/docs/en/concepts/section) implementation in your Site's source code
and see how users can **configure its props** on _deco.cx_'s Admin.

## Suggested Reading

- [Core Concept: Section](/docs/en/concepts/section)
- [Intro: Tech Stack](http:///docs/en/introduction/tech-stack)

Open the folder of your site's code in a IDE and perform the following actions:

1. Create a `.tsx` file in the `sections/` folder on your website with the name
   of the section you want to create (_e.g_: `LatestPosts.tsx`).

2. Export a [Preact](https://preactjs.com/) component **using `export default`**
   like the example below:

   1. `sections/LatestPosts.tsx`

      ```tsx
      interface Props {
        title: string;
      }

      export default function LatestPosts({ title }: Props) {
        return (
          <div>
            <h1 class="font-bold">{title}</h1>
            <p>This is an example section</p>
          </div>
        );
      }
      ```

**That's it!** Now you have created this Section locally on your machine.

## Testing the Section

Even though the code for this Section is on _localhost_ only, you can see how
its UI is being rendered and also test the configuration of its props. For every
prop that you export we'll render a data input accordingly to the prop type.
It's also possible to load
[data fetched from external API's](/docs/en/concepts/section)

<!-- TODO: Fix this link -->

To test the `LatestPosts.tsx` Section:

1. Run `deno task start` on the Terminal and access the _deco.cx_ Admin for that
   Site. _(You don't need to re-run if it was already running)_

2. Go go _deco.cx_'s Admin on https://deco.cx/admin, select your Site and go to
   `Library`.

3. Make sure that `localhost:8000` is selected in the Environment selector in
   the top-right of the page.

4. Look for `LatestPosts.tsx` in the left sidebar.

5. **That's it!** Now you can enter input props for that Section, hit `Save` and
   see how the UI is looking. If you change the Section's code locally the UI
   will automatically update as well.

<img width="994" alt="Preview of the Section Editor in deco's Admin" src="https://user-images.githubusercontent.com/18706156/225371920-e1c35a7a-c994-4b96-b9bd-554caab02455.png">

## Further reading

Sections are one of the most powerful _deco.cx_ concepts, and there's much more
you can do with it. Read these Recipes to learn more about other options on how
to create customizable Sections:

- [Customizable Sections](/docs/en/customizable-sections)
- [Loading data from APIs]()

<!-- TODO: Share snippet -->
