# Deco Landing Page (deco.cx) + docs + blog

---

NOTE: To edit or create new pages with existing components, you don't need to
edit the code! Just go to any page and hit `Ctrl+Shift+E` to open the editor of
the current page you're seeing.

---

## Usage

Start the project:

```sh
deno task start
```

Navigate to `https://localhost:8000` to see the admin.

## Config

### Form submission

Required `DISCORD_LEADS_WEBHOOK_URL` env var to test feature

## Docs

To add a new docs, change the following files:
- `toc.ts` to add it to the menu tree.
- `decs/...` to add the new Markdown document