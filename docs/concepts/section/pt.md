---
description: Uma seção representa um elemento de interface do usuário configurável para um site deco. Este artigo explica melhor o conceito
---

O **Live** permite que desenvolvedores criem seções de UI no código que podem
ser configuradas por usuários de negócios através do admin da
[deco.cx.](deco.cx "deco.cx") As seções ficam disponíveis nos seguintes locais:

- **Workbench:** Permite que desenvolvedores configurem as propriedades das
  seções e vejam automaticamente a UI gerada.
- **Pages:** Permite que as seções sejam adicionadas em páginas do site, também
  sendo configuradas como desejado.

## O que são seções no código?

Seções são **componentes [Preact](https://preactjs.com/ "https://preactjs.com/")
**exportados com _default export_ por arquivos na pasta `sections/` no
repositório de um site Live.

Alguns exemplos de seções em um site de ecommerce seriam:

- **Product Shelf:** exibe uma prateleira de produtos com imagem, título e
  preço.
- **Header:** exibe o cabeçalho padrão da loja, contendo logomarca, menu de
  categorias e links para carrinho e login.
- **Banner:** exibe imagem, texto e algum _Call to action_ para campanha ou
  departamento específico.

Note que seções são executadas no servidor somente, logo funçōes de
gerenciamento de estado como `useState`, `useEffect` e callbacks, como
`onClick`, `onInput` não funcionarão. Para isso, você terá que usar seções em
conjunto com ilhas.

## Como criar uma seção

1. Crie um arquivo `.tsx` na pasta `sections/` no seu site.

2. Exporte um componente [Preact](https://preactjs.com/ "https://preactjs.com/")
   como o do exemplo abaixo:

   1. `sections/Example.tsx`

      ```
      export default function ExampleSection() {
        return <div>
            <p>Essa é uma seção de exemplo</p>
          </div>
      }
      ```

3. Pronto! Agora esta seção estará disponível para ser configurada no admin da
   [deco.cx](deco.cx "deco.cx").

## Customizando seções

Comumente é desejável que o site tenha textos e imagens editáveis por usuários
de negócio através de um CMS _(Content Management System),_ e a
[deco.cx](deco.cx "deco.cx") oferece essa funcionalidade através das seções.

Para oferecer customização, um seção pode **aceitar Props** como qualquer
componente JSX/Preact. É necessário **exportar o tipo (Typescript) das Props**
para que o nosso editor reconheça os campos que são aceitos.

_Exemplo:_

|                          |                                                       |
| ------------------------ | ----------------------------------------------------- |
| `/sections/Example.tsx`  | Configuração da seção em [deco.cx](deco.cx "deco.cx") |
| export interface Props { |                                                       |
| title: string            |                                                       |
| }                        |                                                       |

export default function ExampleSection({ title }: Props) { return <div>
<h1>{title}</h1>
<p>Essa é uma seção de exemplo</p>
</div> } | |

## Tipos aceitos

O editor da [deco.cx](deco.cx "deco.cx") aceita um subconjunto de tipos
Typescript para configuração das seções. Essa é a lista de tipos suportados no
momento:

### Tipos Nativos

#### string

```
export interface Props {
  title: string
}
```

#### number

```
export interface Props {
  numberOfLines: number
}
```

#### object literal

```
export interface Props {
  address: {
    street: string,
    postalCode: string
  }
}
```

#### array

```
export interface Props {
  menuItems: Array<{ label: string; value: string }>;
}
```

#### string options

```
export interface Props {
  variant: 'primary' | 'secondary' | 'tertiary'
}
```

### Tipos Especiais

#### Image

Esse tipo renderiza um _widget_ de upload de imagem no editor, possibilitando o
usuário de subir imagens do seu próprio computador.

O tipo é um *wrapper para `string`, *então o componente da seção receberá a URL
da imagem que estará hospedada nos servidores da [deco.cx](deco.cx "deco.cx").

**Opcional:** A [deco.cx](http://deco.cx) oferece um componente que otimiza o
carregamento de imagens e pode ser usado em conjunto com essa propriedade.
Exemplo
[aqui](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/BannnerGrid.tsx "https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/BannnerGrid.tsx")

```
import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  bannerImg: Image
}
```

#### Video

Similar ao Image, propriedades com esse tipo serão editadas através de um
_widget_ de upload de vídeos.

Exemplo de uso
[aqui](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3 "https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3").

```
import type { Video } from "$live/std/ui/types/Video.ts";

export interface Props {
  myVideo: Video
}
```

### Enriquecendo o editor

Ao usar tipos nativos, a label do input do editor é o nome da variável. Pro
exemplo, o tipo `Props` abaixo vai gerar um editor com um input cuja label é
`Count`

|                          |        |
| ------------------------ | ------ |
| código                   | editor |
| export interface Props { |        |
| count: number            |        |
| }                        |        |

O comportamento acima é conveniente para o desenvolvedor, contudo, usuários de
negocio apreciam ter uma ediçāo guiada onde campos tem nomes descritivos. Para
modificar labels e outros atributos do editor utilizamos tags
[JSDoc](https://jsdoc.app/ "https://jsdoc.app/").

Suponha que, no exemplo acima, a variável `count` represente o numero de
produtos a serem renderizados em uma prateleira ou vitrine. Para melhorar a
experiencia de ediçāo do usuário de negócio, podemos modificar o tipo para gerar
o seguinte editor:

|                                                           |        |
| --------------------------------------------------------- | ------ |
| código                                                    | editor |
| export interface Props {                                  |        |
| /\*\*                                                     |        |
| \* @title Numero de produtos                              |        |
| \* @description Total de produtos para mostrar na vitrine |        |
| \* \*/                                                    |        |
| count: number;                                            |        |
| }                                                         |        |

As tags disponíveis são campos compatíveis com
[JSON Schema](https://json-schema.org/ "https://json-schema.org/"), ou seja,
`@title`, `@description`, `@format` entre outras. Por exemplo, para aceitar
somente emails:

```
export interface Props {
  /** @format email */
  email: string
}
```

### Carregamento de dados

Algumas seções (ex: **Product Shelf**) precisam de dados que não são
necessariamente configurados por usuários no editor, mas que precisam ser
carregados utilizando uma API externa. Para esse funcionalidade, também é
possível exportar tipos específicos de dados nas Props e se alavancar do Live.

Leia [[Documentação deco/Guides: Carregamento de dados no Live]] para saber mais
detalhes de como usar essa funcionalidade.
