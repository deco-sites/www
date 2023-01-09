// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/_500.tsx";
import * as $3 from "./routes/_app.tsx";
import * as $4 from "./routes/_middleware.ts";
import * as $5 from "./routes/es.tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/pt.tsx";
import * as $$0 from "./islands/LiveControls.tsx";
import * as $$1 from "./islands/TeamSlide.tsx";
import * as $$$0 from "./sections/Edit.tsx";
import * as $$$1 from "./sections/Header.tsx";
import * as $$$2 from "./sections/Hero.tsx";
import * as $$$3 from "./sections/Layout.tsx";
import * as $$$4 from "./sections/Markdown.tsx";
import * as $$$5 from "./sections/Platform.tsx";
import * as $$$6 from "./sections/Pricing.tsx";
import * as $$$7 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";
import * as $$$$1 from "./functions/MatchSiteParam.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/_500.tsx": $2,
    "./routes/_app.tsx": $3,
    "./routes/_middleware.ts": $4,
    "./routes/es.tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/pt.tsx": $7,
  },
  islands: {
    "./islands/LiveControls.tsx": $$0,
    "./islands/TeamSlide.tsx": $$1,
  },
  sections: {
    "./sections/Edit.tsx": $$$0,
    "./sections/Header.tsx": $$$1,
    "./sections/Hero.tsx": $$$2,
    "./sections/Layout.tsx": $$$3,
    "./sections/Markdown.tsx": $$$4,
    "./sections/Platform.tsx": $$$5,
    "./sections/Pricing.tsx": $$$6,
    "./sections/QuillText.tsx": $$$7,
  },
  functions: {
    "./functions/LoadGitHubRaw.ts": $$$$0,
    "./functions/MatchSiteParam.ts": $$$$1,
  },
  schemas: {
    "./sections/Edit.tsx": {
      "inputSchema": {
        "title": " Edit",
        "type": "object",
        "properties": {
          "targetText": {
            "type": "string",
            "title": "Target Text",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "highlight": {
            "type": "string",
            "title": "Highlight",
          },
          "sections": {
            "title": "Sections",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
              },
              "required": [
                "title",
                "text",
              ],
            },
          },
        },
        "required": [
          "targetText",
          "title",
          "highlight",
          "sections",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "logoAriaLabel": {
            "type": "string",
            "title": "Logo Aria Label",
          },
          "platformLabel": {
            "type": "string",
            "title": "Platform Label",
          },
          "priceLabel": {
            "type": "string",
            "title": "Price Label",
          },
          "campLabel": {
            "type": "string",
            "title": "Camp Label",
          },
          "campAriaLabel": {
            "type": "string",
            "title": "Camp Aria Label",
          },
          "scheduleLabel": {
            "type": "string",
            "title": "Schedule Label",
          },
        },
        "required": [
          "logoAriaLabel",
          "platformLabel",
          "priceLabel",
          "campLabel",
          "campAriaLabel",
          "scheduleLabel",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Hero.tsx": {
      "inputSchema": {
        "title": " Hero",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "titleHighlight": {
            "type": "string",
            "title": "Title Highlight",
          },
          "text1": {
            "type": "string",
            "title": "Text1",
          },
          "text2": {
            "type": "string",
            "title": "Text2",
          },
          "scheduleLabel": {
            "type": "string",
            "title": "Schedule Label",
          },
        },
        "required": [
          "title",
          "titleHighlight",
          "text1",
          "text2",
          "scheduleLabel",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Layout.tsx": {
      "inputSchema": {
        "title": " Layout",
        "type": "object",
        "properties": {
          "pathname": {
            "type": "string",
            "title": "Pathname",
          },
        },
        "required": [
          "pathname",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
            "format": "live-function",
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Platform.tsx": {
      "inputSchema": {
        "title": " Platform",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "titleHighlight": {
            "type": "string",
            "title": "Title Highlight",
          },
          "forDevs": {
            "type": "string",
            "title": "For Devs",
          },
          "sections": {
            "title": "Sections",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
              },
              "required": [
                "title",
                "text",
              ],
            },
          },
        },
        "required": [
          "title",
          "titleHighlight",
          "forDevs",
          "sections",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Pricing.tsx": {
      "inputSchema": {
        "title": " Pricing",
        "type": "object",
        "properties": {
          "pricingTableId": {
            "type": "string",
            "title": "Pricing Table Id",
          },
          "publishableKey": {
            "type": "string",
            "title": "Publishable Key",
          },
        },
        "required": [
          "pricingTableId",
          "publishableKey",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/MatchSiteParam.ts": {
      "inputSchema": {
        "title": " Match Site Param",
        "type": "object",
        "properties": {
          "siteId": {
            "type": "string",
            "title": "Site Id",
          },
        },
        "required": [
          "siteId",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
