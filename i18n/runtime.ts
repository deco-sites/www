/// <reference path="./i18n.ts" />

import enUSMessages from "./en-US.ts";

// Defined here to allow be imported by client code
export const LANG_COOKIE = "deco_lang";

const replaceMustacheTemplate = (
  templateString: string,
  params: Record<string, string | number>,
) =>
  templateString.replace(
    /{([A-Za-z.]*)}/g,
    ({}: string, key: string) => `${params[key]}`,
  );

const getTemplateStringFromPath = (
  i18nPath: string,
  count: number | undefined,
) => {
  const templateDefinition = window.i18n?.messages?.[i18nPath];

  if (count === undefined || typeof templateDefinition !== "object") {
    return templateDefinition as string;
  }

  const { one, zero, many } = templateDefinition;

  if (count === 0) {
    return zero || many;
  }

  if (count === 1) {
    return one || many;
  }

  return many;
};

type I18nParams = Record<string, string | number> & { count?: number };

export const t = (
  path: keyof typeof enUSMessages,
  params?: I18nParams,
) => {
  const templateString = getTemplateStringFromPath(path, params?.["count"]);

  if (!templateString) {
    console.error(
      `No available translation for path: ${path} | params: ${
        JSON.stringify(params)
      }`,
    );
    return path;
  }

  return replaceMustacheTemplate(templateString, params || {});
};
