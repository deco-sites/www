type LocalizedTitle = { pt?: string; en?: string };
type Entry = { title: LocalizedTitle; slug?: string };
type TopLevelEntry = Entry & { children?: Array<Entry> };

type TableOfContents = Array<TopLevelEntry>;

const tableOfContents: TableOfContents = [{
  title: { pt: "Início", en: "Intro" },
  children: [{
    title: { pt: "Visão Geral", en: "Overview" },
    slug: "introduction/overview",
  }, {
    title: { pt: "Tecnologias", en: "Tech Stack" },
    slug: "introduction/tech-stack",
  }],
}, {
  title: { pt: "Conceitos", en: "Concepts" },
  children: [{
    title: { pt: "Seção", en: "Section" },
    slug: "concepts/section",
  }, {
    title: { pt: "Loader", en: "Loader" },
    slug: "concepts/loader",
  }, {
    title: { pt: "Page", en: "Page" },
    slug: "concepts/page",
  }, {
    title: { pt: "Site", en: "Site" },
    slug: "concepts/site",
  }],
}, {
  title: { en: "Tutorials", pt: "Tutoriais" },
  children: [{
    title: { pt: "Criando um site deco.cx", en: "Creating a deco.cx site" },
    slug: "tutorials/101",
  }, {
    title: { pt: "Conectando com VTEX", en: "Connecting with VTEX" },
    slug: "tutorials/connecting-vtex",
  }, {
    title: {
      pt: "Instalando VTEX Intelligent Search",
      en: "Installing VTEX Intelligent Search",
    },
    slug: "tutorials/installing-vtex-is",
  }],
}, {
  title: { en: "Recipes", pt: "Receitas" },
  children: [{
    title: { pt: "Imagens", en: "Images" },
    slug: "recipes/images",
  }, {
    title: {
      pt: "SVG Sprites",
      en: "SVG Sprites",
    },
    slug: "recipes/svg-sprites",
  }, {
    title: { pt: "Menu Dropdown", en: "Dropdown Menu" },
    slug: "recipes/menu",
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
  return tableOfContentsBySlug[slug]?.title[language];
};

type NextOrPrevious = { title?: string; category?: string; href?: string };

const getNextPreviousForEntry = (
  language: SupportedLanguages,
  entry: TopLevelEntry,
): NextOrPrevious => ({
  href: `/docs/${language}/${entry.slug}`,
  title: entry.title?.[language],
});

export const getNextAndPreviousPost = (
  language: SupportedLanguages,
  slug: string,
) => {
  const tableOfContentsEntries = tableOfContents.reduce((entries, cur) => {
    return entries.concat(
      [cur, ...(cur.children || [])].filter(({ slug }) => slug),
    );
  }, [] as TopLevelEntry[]);

  const currentIndex = tableOfContentsEntries.findLastIndex((
    { slug: currentSlug },
  ) => currentSlug === slug);

  const previous = currentIndex === 0 ? undefined : getNextPreviousForEntry(
    language,
    tableOfContentsEntries[currentIndex - 1],
  );

  const next = currentIndex === tableOfContentsEntries.length - 1
    ? undefined
    : getNextPreviousForEntry(
      language,
      tableOfContentsEntries[currentIndex + 1],
    );

  return {
    previous,
    next,
  };
};
export type MenuData = ReturnType<typeof getMenuDataForLanguage>;

export default tableOfContents;
