type LocalizedTitle = { pt?: string; en?: string };
type Entry = { title: LocalizedTitle; slug?: string };
type TopLevelEntry = Entry & { children?: Array<Entry> };

type TableOfContents = Array<TopLevelEntry>;

const tableOfContents: TableOfContents = [{
  title: { pt: "Início", en: "Intro" },
  slug: "introduction",
}, {
  title: { pt: "Conceitos", en: "Concepts" },
  children: [{
    title: { pt: "Seção", en: "Section" },
    slug: "concepts/section",
  }],
}, {
  title: { en: "Guides", pt: "Guias" },
  children: [{
    title: { pt: "Criando um site Live", en: "Creating a Live site" },
    slug: "guides/101",
  }],
}, {
  title: { en: "Performance Guides", pt: "Guias de Performance " },
  children: [{
    title: { pt: "Imagens", en: "Images" },
    slug: "performance/images",
  }, {
    title: {
      pt: "SVG Sprites",
      en: "SVG Sprites",
    },
    slug: "performance/svg-sprites",
  }],
}, {
  title: { en: "Ecommerce", pt: "Ecommerce" },
  children: [{
    title: { pt: "Conectando com VTEX", en: "Connecting with VTEX" },
    slug: "ecommerce/connecting-vtex",
  }, {
    title: { pt: "Menu Dropdown", en: "Dropdown Menu" },
    slug: "ecommerce/menu",
  }],
}];

const tableOfContentsBySlug = tableOfContents.reduce((acc, cur) => {
  const entries: TopLevelEntry[] = [cur, ...(cur.children || [])];
  return Object.assign(
    acc,
    entries.reduce((acc, cur) => {
      if (!cur.slug) return acc;
      acc[cur.slug] = cur;
      return acc;
    }, {} as Record<string, TopLevelEntry>),
  );
}, {} as Record<string, TopLevelEntry>);

export const getMenuDataForLanguage = (language: "en" | "pt") =>
  tableOfContents.map(({ title, slug, children }) => ({
    title: title[language],
    href: children
      ? `/docs/${language}/${children[0].slug}`
      : `/docs/${language}/${slug}`,
    children: children?.map(({ title, slug }) => ({
      title: title[language],
      href: `/docs/${language}/${slug}`,
    })),
  }));

type SupportedLanguages = "en" | "pt";

export const getTitleForPost = (language: SupportedLanguages, slug: string) => {
  console.log({ tableOfContentsBySlug });
  return tableOfContentsBySlug[slug]?.title[language];
};
export type MenuData = ReturnType<typeof getMenuDataForLanguage>;

export default tableOfContents;
