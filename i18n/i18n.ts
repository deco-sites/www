import { Plugin } from "$fresh/server.ts";
import * as Cookies from "std/http/cookie.ts";

import enUSMessages from "./en-US.ts";
import ptBRMessages from "./pt-BR.ts";
import esArMessages from "./es-AR.ts";
import { LANG_COOKIE } from "./runtime.ts";

const messagesBySupportedLocales = {
  "en-US": enUSMessages,
  "es-AR": esArMessages,
  "pt-BR": ptBRMessages,
};

type SupportedLanguage = keyof typeof messagesBySupportedLocales;

declare global {
  interface Window {
    i18n: {
      lang: string;
      messages: Record<
        string,
        string | { zero?: string; one?: string; many?: string }
      >;
    };
  }
}

export interface I18n {
  /**
   * Identify the language of the request.
   */
  identify: (req: Request) => void;

  /**
   * Get the Fresh plugin for i18n.
   */
  plugin: Plugin;
}

export const i18n = (): I18n => {
  let request: Request | undefined;

  return {
    identify(req) {
      request = req;
    },
    plugin: {
      name: "i18n",
      entrypoints: {
        "main":
          `data:application/javascript,export default function(context) {window.i18n = context;document.cookie = '${LANG_COOKIE}=' + context.lang + '; path=/';document.documentElement.setAttribute("lang", context.language);}`,
      },
      render(ctx) {
        const FALLBACK_LANG: SupportedLanguage = "en-US";

        let selectedLanguage: SupportedLanguage = FALLBACK_LANG;
        try {
          const cookies = Cookies.getCookies(request!.headers);
          const langFromCookies =
            cookies[LANG_COOKIE] in messagesBySupportedLocales
              ? cookies[LANG_COOKIE]
              : undefined;

          let requestLocale = request?.headers?.get("Accept-Language");

          if (requestLocale) {
            // parsing multiple langs and query values
            requestLocale = requestLocale.split(",")[0].split(";")[0].trim();
            requestLocale = requestLocale in messagesBySupportedLocales
              ? requestLocale
              : undefined;
          }

          selectedLanguage =
            (langFromCookies as SupportedLanguage | undefined) ||
            (requestLocale as SupportedLanguage | undefined) ||
            FALLBACK_LANG;
        } catch {
          console.error(`Couldn't read request for i18n`);
        }

        const messages = messagesBySupportedLocales[selectedLanguage];

        // This is how the server can see the messages
        window.i18n = {
          lang: selectedLanguage,
          messages,
        };

        ctx.render();

        // This is how the client can see the messages
        return {
          scripts: [{
            entrypoint: "main",
            state: { lang: selectedLanguage, messages },
          }],
        };
      },
    },
  };
};
