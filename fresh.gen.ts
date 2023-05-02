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
import * as $5 from "./routes/admin/[...catchall].tsx";
import * as $6 from "./routes/api/leads.tsx";
import * as $7 from "./routes/docs/[...slug].tsx";
import * as $8 from "./routes/gfm.css.ts";
import * as $9 from "./routes/index.tsx";
import * as $10 from "./routes/live/[...catchall].tsx";
import * as $$0 from "./islands/ChangeCategory.tsx";
import * as $$1 from "./islands/ChangeUser.tsx";
import * as $$2 from "./islands/HeaderResponsive.tsx";
import * as $$3 from "./islands/LiveControls.tsx";
import * as $$4 from "./islands/SearchButton.tsx";
import * as $$5 from "./islands/SliderJS.tsx";
import * as $$6 from "./islands/TeamSlide.tsx";
import * as $$$0 from "./sections/Architecture.tsx";
import * as $$$1 from "./sections/BlogFooter.tsx";
import * as $$$2 from "./sections/BlogHeaderResponsive.tsx";
import * as $$$3 from "./sections/BlogPostHeader.tsx";
import * as $$$4 from "./sections/BlogPostList.tsx";
import * as $$$5 from "./sections/Carrousel.tsx";
import * as $$$6 from "./sections/Edit.tsx";
import * as $$$7 from "./sections/Footer.tsx";
import * as $$$8 from "./sections/Head.tsx";
import * as $$$9 from "./sections/Header.tsx";
import * as $$$10 from "./sections/Hero.tsx";
import * as $$$11 from "./sections/Layout.tsx";
import * as $$$12 from "./sections/Markdown.tsx";
import * as $$$13 from "./sections/Newsletter.tsx";
import * as $$$14 from "./sections/Performance.tsx";
import * as $$$15 from "./sections/Platform.tsx";
import * as $$$16 from "./sections/Pricing.tsx";
import * as $$$17 from "./sections/QuillText.tsx";
import * as $$$18 from "./sections/TeamSection.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";
import * as $$$$1 from "./functions/LoadPageProps.ts";
import * as $$$$2 from "./functions/MatchSiteParam.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/_500.tsx": $2,
    "./routes/_app.tsx": $3,
    "./routes/_middleware.ts": $4,
    "./routes/admin/[...catchall].tsx": $5,
    "./routes/api/leads.tsx": $6,
    "./routes/docs/[...slug].tsx": $7,
    "./routes/gfm.css.ts": $8,
    "./routes/index.tsx": $9,
    "./routes/live/[...catchall].tsx": $10,
  },
  islands: {
    "./islands/ChangeCategory.tsx": $$0,
    "./islands/ChangeUser.tsx": $$1,
    "./islands/HeaderResponsive.tsx": $$2,
    "./islands/LiveControls.tsx": $$3,
    "./islands/SearchButton.tsx": $$4,
    "./islands/SliderJS.tsx": $$5,
    "./islands/TeamSlide.tsx": $$6,
  },
  sections: {
    "./sections/Architecture.tsx": $$$0,
    "./sections/BlogFooter.tsx": $$$1,
    "./sections/BlogHeaderResponsive.tsx": $$$2,
    "./sections/BlogPostHeader.tsx": $$$3,
    "./sections/BlogPostList.tsx": $$$4,
    "./sections/Carrousel.tsx": $$$5,
    "./sections/Edit.tsx": $$$6,
    "./sections/Footer.tsx": $$$7,
    "./sections/Head.tsx": $$$8,
    "./sections/Header.tsx": $$$9,
    "./sections/Hero.tsx": $$$10,
    "./sections/Layout.tsx": $$$11,
    "./sections/Markdown.tsx": $$$12,
    "./sections/Newsletter.tsx": $$$13,
    "./sections/Performance.tsx": $$$14,
    "./sections/Platform.tsx": $$$15,
    "./sections/Pricing.tsx": $$$16,
    "./sections/QuillText.tsx": $$$17,
    "./sections/TeamSection.tsx": $$$18,
  },
  functions: {
    "./functions/LoadGitHubRaw.ts": $$$$0,
    "./functions/LoadPageProps.ts": $$$$1,
    "./functions/MatchSiteParam.ts": $$$$2,
  },
  schemas: {
    "./sections/Architecture.tsx": {
      "inputSchema": {
        "title": " Architecture",
        "type": "object",
        "properties": {
          "title1": {
            "type": "string",
            "title": "Title1",
          },
          "title2": {
            "type": "string",
            "title": "Title2",
          },
          "title3": {
            "type": "string",
            "title": "Title3",
          },
          "sections": {
            "title": "Sections",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "text": {
                  "type": "string",
                  "title": "Text",
                },
              },
              "required": [
                "text",
              ],
            },
          },
        },
        "required": [
          "title1",
          "title2",
          "title3",
          "sections",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BlogFooter.tsx": {
      "inputSchema": {
        "title": " Blog Footer",
        "type": "object",
        "properties": {
          "copyright": {
            "type": "string",
            "title": "Copyright",
          },
          "sections": {
            "type": "array",
            "items": {
              "title": "Section",
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "subList": {
                  "type": "array",
                  "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                      "label": {
                        "type": "string",
                        "title": "Label",
                      },
                      "href": {
                        "type": "string",
                        "title": "Href",
                      },
                    },
                    "required": [
                      "label",
                      "href",
                    ],
                  },
                  "title": "Sub List",
                },
              },
              "required": [
                "label",
                "href",
                "subList",
              ],
            },
            "title": "Sections",
          },
        },
        "required": [
          "copyright",
          "sections",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BlogHeaderResponsive.tsx": {
      "inputSchema": {
        "title": " Blog Header Responsive",
        "type": "object",
        "properties": {
          "sections": {
            "type": "array",
            "items": {
              "title": "Item",
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
              },
              "required": [
                "label",
                "href",
              ],
            },
            "title": "Sections",
          },
        },
        "required": [
          "sections",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BlogPostHeader.tsx": {
      "inputSchema": {
        "title": " Blog Post Header",
        "type": "object",
        "properties": {
          "postList": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
            "format": "live-function",
            "type": "string",
            "title": "Post List",
          },
          "page": {
            "$id": "00fa23793e0af297c570d784cbee7cb3846d2533",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "postList",
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BlogPostList.tsx": {
      "inputSchema": {
        "title": " Blog Post List",
        "type": "object",
        "properties": {
          "postList": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
            "format": "live-function",
            "type": "string",
            "title": "Post List",
          },
          "categories": {
            "type": "array",
            "items": {
              "title": "CategoryProps",
              "type": "object",
              "properties": {
                "category": {
                  "type": "string",
                  "title": "Category",
                },
              },
              "required": [
                "category",
              ],
            },
            "title": "Categories",
          },
        },
        "required": [
          "postList",
          "categories",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Carrousel.tsx": {
      "inputSchema": {
        "title": " Carrousel",
        "type": "object",
        "properties": {
          "cards": {
            "title": "Cards",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "urlImage": {
                  "type": "string",
                  "title": "Url Image",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "author": {
                  "type": "string",
                  "title": "Author",
                },
                "date": {
                  "type": "string",
                  "title": "Date",
                },
              },
              "required": [
                "urlImage",
                "title",
                "author",
                "date",
              ],
            },
          },
        },
        "required": [
          "cards",
        ],
      },
      "outputSchema": null,
    },
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
    "./sections/Footer.tsx": {
      "inputSchema": {
        "title": " Footer",
        "type": "object",
        "properties": {
          "anchor": {
            "type": "string",
            "title": "Anchor",
          },
        },
        "required": [
          "anchor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
          "origin": {
            "type": [
              "string",
              "null",
            ],
            "title": "Origin",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "styleUrls",
          "themeColor",
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
          "blogAriaLabel": {
            "type": "string",
            "title": "Blog Aria Label",
          },
          "blogLabel": {
            "type": "string",
            "title": "Blog Label",
          },
        },
        "required": [
          "logoAriaLabel",
          "platformLabel",
          "priceLabel",
          "campLabel",
          "campAriaLabel",
          "scheduleLabel",
          "blogAriaLabel",
          "blogLabel",
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
          "warning": {
            "type": [
              "string",
              "null",
            ],
            "title": "Warning",
            "description":
              "This is a section with inner sections. Remove this after the editor supports it.",
          },
        },
        "required": [],
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
          "cards": {
            "title": "Cards",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "urlImage": {
                  "type": "string",
                  "title": "Url Image",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "author": {
                  "type": "string",
                  "title": "Author",
                },
                "date": {
                  "type": "string",
                  "title": "Date",
                },
              },
              "required": [
                "urlImage",
                "title",
                "author",
                "date",
              ],
            },
          },
        },
        "required": [
          "text",
          "cards",
        ],
      },
      "outputSchema": null,
    },
    "./sections/NewContactUs.tsx": {
      "inputSchema": {
        "title": " New Contact Us",
        "type": "object",
        "properties": {
          "infor": {
            "title": "Infor",
            "type": "object",
            "properties": {
              "mainTitle": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Main Title",
                "description": "a short main title text",
              },
              "description": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Description",
                "format": "textarea",
              },
              "listItems": {
                "type": "array",
                "items": {
                  "title": "listItem",
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": [
                        "string",
                        "null",
                      ],
                      "title": "Title",
                    },
                    "description": {
                      "type": [
                        "string",
                        "null",
                      ],
                      "title": "Description",
                      "format": "textarea",
                    },
                  },
                  "required": [],
                },
                "title": "List Items",
                "description": "add a item to information list in contact page",
              },
              "showbullets": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Showbullets",
              },
            },
            "required": [
              "listItems",
            ],
            "description": "settings of benefits section in page",
          },
          "formInfor": {
            "title": "Form Infor",
            "type": "object",
            "properties": {
              "formTitle": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Form Title",
              },
              "BusinessCTAName": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Business C T A Name",
              },
              "DevCTAName": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Dev C T A Name",
              },
              "PlaceholderfieldName": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Placeholderfield Name",
              },
              "PlaceholderfieldEmail": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Placeholderfield Email",
              },
              "PlaceholderfieldPosition": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Placeholderfield Position",
              },
              "PlaceholderfieldSocial": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Placeholderfield Social",
              },
              "PlaceholderFieldExtra": {
                "type": [
                  "string",
                  "null",
                ],
                "title": " Placeholder Field Extra",
              },
              "submiteName": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Submite Name",
              },
              "urlToActionBusiness": {
                "type": "string",
                "title": "Url To Action Business",
              },
              "urlToActionDev": {
                "type": "string",
                "title": "Url To Action Dev",
              },
            },
            "required": [
              "urlToActionBusiness",
              "urlToActionDev",
            ],
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Newsletter.tsx": {
      "inputSchema": {
        "title": " Newsletter",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "highlight": {
            "type": "string",
            "title": "Highlight",
          },
          "nameLabel": {
            "type": "string",
            "title": "Name Label",
          },
          "emailLabel": {
            "type": "string",
            "title": "Email Label",
          },
          "positionLabel": {
            "type": "string",
            "title": "Position Label",
          },
          "linkedinLabel": {
            "type": "string",
            "title": "Linkedin Label",
          },
          "schedule": {
            "type": "string",
            "title": "Schedule",
          },
        },
        "required": [
          "title",
          "highlight",
          "nameLabel",
          "emailLabel",
          "positionLabel",
          "linkedinLabel",
          "schedule",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Performance.tsx": {
      "inputSchema": {
        "title": " Performance",
        "type": "object",
        "properties": {
          "customersLabel": {
            "type": "string",
            "title": "Customers Label",
          },
          "obsession": {
            "type": "string",
            "title": "Obsession",
          },
          "highlight": {
            "type": "string",
            "title": "Highlight",
          },
          "subTitle1": {
            "type": "string",
            "title": "Sub Title1",
          },
          "subTitle2": {
            "type": "string",
            "title": "Sub Title2",
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
          "customersLabel",
          "obsession",
          "highlight",
          "subTitle1",
          "subTitle2",
          "sections",
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
    "./sections/TeamSection.tsx": {
      "inputSchema": {
        "title": " Team Section",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "highlight": {
            "type": "string",
            "title": "Highlight",
          },
          "text1": {
            "type": "string",
            "title": "Text1",
          },
          "text2": {
            "type": "string",
            "title": "Text2",
          },
        },
        "required": [
          "title",
          "highlight",
          "text1",
          "text2",
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
            "type": [
              "string",
              "null",
            ],
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
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
    "./functions/LoadPageProps.ts": {
      "inputSchema": {
        "title": " Load Page Props",
        "type": "object",
        "properties": {
          "null": {
            "type": [
              "string",
              "null",
            ],
            "title": "Null",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "00fa23793e0af297c570d784cbee7cb3846d2533",
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
