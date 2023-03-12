---
description: |
   Step-by-step on how to create a website on deco.cx
---

# Objectives of this guide

- Introduce Live and its technologies
- Explain the main concepts of the tool and use them to create and develop a
  website.

# Target Audience

- People web developers interested in creating performing websites and easily
  customizable.

# If you need help...

- Go to <https://deco.cx/discord> if you have questions or problems during the
  use. Also join our community!

# What is Live

Live is a two-part website builder: a site manager content (CMS) and a
development framework. With the framework it is possible develop components that
will serve to compose the pages of the site through the CMS quite simply.

Despite being specialized in ecommerce sites, it is possible to develop any type
of website with Live!

# What you need to know before you start

Before you start creating websites with Live, let's make three points:

- The technologies we use
- Some of the main concepts of the product
- The structure of the project files you are going to use

## Technologies

Live uses [Fresh](https://fresh.deno.dev/ "https://fresh.deno.dev/"),
[Deno](https://deno.land/ "https://deno.land/") web framework.

### [Deno](https://deno.com/deploy "https://deno.com/deploy")

Deno is a JavaScript and TypeScript runtime environment. It is used to make our
websites, written in Typescript, run by a server. Deno is similar to Node.js
(_fun fact_: they were
[created by the same person](https://www.youtube.com/watch?v=M3BM9TB-8yA "https://www.youtube.com/watch?v=M3BM9TB-8yA")).
To install Deno, follow the
[instructions on deno.land page](https://deno.land/manual/getting_started/installation "https://deno.land/manual/getting_started/installation").

### [Fresh](https://fresh.deno.dev/ "https://fresh.deno.dev/")

Fresh is a fullstack web framework (backend and frontend) for developers
JavaScript and TypeScript. It was designed to make it easy to create
applications high-quality, high-performance and highly customizable web pages.

### [Preact](https://preactjs.com/ "https://preactjs.com/")

Preact is Fresh's component-based UI library of choice. She allows the creation
of web interfaces using the JSX language. most of libraries and concepts
[React.js](https://reactjs.org/ "https://reactjs.org/") are compatible with
Preact.

### [Twind](https://twind.dev/ "https://twind.dev/")

Twind is a CSS styling solution based on utility classes. He is quite similar to
[TailwindCSS](https://tailwindcss.com/ "https://tailwindcss.com/"), however it
is optimized for performance.

## Pages, Sections and Connectors

<img width="990" alt="72430233-5531-47e5-92d0-28dc77994ca6" src="https://user-images.githubusercontent.com/18706156/219524679-19240c17-411f-40b6-9d08-ce964e8c0e03.png ">

### Pages

They are nothing more than web pages that can be created and have your content
managed through the CMS. Each page is associated with a route (address) of the
your website to be externally accessible.

### Sections

They are _Preact_ components that can be developed to compose a page, being
added to it by CMS users. Eg: _Header_, _Banner_, _Product Shelf_.

### Connectors

These are functions that serve primarily to load data through APIs. Depending on
the return type of these functions, _Live_ will allow them to can be linked to
sections.

<img width="1122" alt="8c3f480f-b113-484a-9aa2-fc8884b14495" src="https://user-images.githubusercontent.com/18706156/219524676-fda02b46-2d8f-4d6c-a97b-ecf77b7f2f1e.png ">

## File structure

![0fb8b024-b054-4979-a74a-f9aebb6275b6](https://user-images.githubusercontent.com/18706156/219524672-7fcb40a6-1413-47f9-a896-d01f81d2cc45.png)

### functions

Folder where the connectors and other auxiliary functions are located.

### islands

Folder where the
[_Interactive islands_](https://fresh.deno.dev/docs/concepts/islands). To the
_islands_ are _Preact_ components that are rendered client-side, unlike other
_Fresh_ components. As the name suggests, it is through them that you will make
the site more interactive on the client side.

### routes

Folder to place pages that will not be generated and managed by _Live_ and that
are externally accessible. Follow the routing logic defined in
[_Fresh_](https://fresh.deno.dev/docs/concepts/routing "https://fresh.deno.dev/docs/concepts/routing").

### sections

Folder where the sections are located. It is not possible to create sections
within subfolders.

### static

Folder for static files such as images and fonts.

### clients, components, data, sdk

Folders that help organize functionality in general.

# Creating a site and preparing the development environment

## Prerequisites

Before proceeding, you must have:

- Basic knowledge of shell and Git/Github.
- `git` installed on your machine and configured with your account.
  [See how to install Git](https://github.com/git-guides/install-git "https://github.com/git-guides/install-git").
- `deno` installed on your machine.
  [See how to install Deno](https://deno.land/manual/getting_started/installation "https://deno.land/manual/getting_started/installation").

## Create a Live website

Live abstracts away all the complexities of setting up a repository, connecting
a CMS and deploy to the edge. This allows you to focus only on what matters:
your website code.

The first step is to have a Live account and website. Login
<https://deco.cx/onboarding>, login with your github account and follow the
step-by-step instructions on the page to create your developer account. A Live
creation will prepare a CMS account for you as well as a deployment of your page
and a repository on github with the code of the site.

## Clone your site repository

Accept the invitation to access the repository created for your site. this
invitation an email associated with your github is sent.

Use the `git clone` command to download the code from the website to your
machine. O The generally used method for cloning a repository is SSH. For this,
open the terminal and run the command:

```
git clone git@github.com:deco-sites/site-name.git
```

**Remember to change `site-name` to your site name.**

If you prefer, you can clone the repository using other methods, such as _git
https_ or via the _Github_ tool. On your repository page On _Github_ you can
find details about these different ways to clone.

# Developing

## Run local server

In the terminal, enter the website folder and run the command:

```
deno task start
```

> `deno.lock` is a file that records the versions of project dependencies during
> the execution of `deno task start`. In case of error, delete the file
> `deno.lock` and rerun `deno task start` to update it.

## See your local sections on Live

1. Go to <https://deco.cx/admin>.

2. Select the website you are developing

3. Go to Library.

4. In the _topbar_ environment selector select _localhost:8000_ and see the
   sections that are in your local repository.

<img width="1252" alt="image" src="https://user-images.githubusercontent.com/18706156/224518020-0008c8d5-d9cc-4191-a4c3-81c2cf5d1f2d.png">

## Publish your changes to production

_deploy_ in production is very simple: just _push_ your changes on the _branch_
_**main**_, which is the main branch.

You can go to _site-name.deco.site_ to see the latest version of your site on
air.

# Ready! You can now start creating amazing websites :)

With this initial tutorial you have enough to start developing sections and
connectors to allow them to be used in creating pages.

Be sure to join our
[discord community](https://deco.cx/discord "https://deco.cx/discord") to ask
questions, follow the news and keep evolving together with us!
