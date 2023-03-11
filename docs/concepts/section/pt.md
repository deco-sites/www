---
descrição: |
    Uma seção representa um elemento de interface do usuário configurável para um site de decoração. Este artigo explica melhor o conceito
---

**Live** permite que os desenvolvedores criem seções de IU no código que podem
ser configuradas por usuários empresariais através do administrador do
[deco.cx.](deco.cx "deco.cx") As seções estão disponíveis nos seguintes locais:

- **Workbench:** permite que os desenvolvedores configurem as propriedades das
  seções e ver automaticamente a IU gerada.
- **Páginas:** permite adicionar seções às páginas do site, sendo também
  configurado conforme desejado.

## O que são seções no código?

As seções são **componentes
[Preact](https://preactjs.com/ "https://preactjs.com/")** exportado com _default
export_ por arquivos na pasta `sections/` no repositório de um site Live.

Alguns exemplos de seções em um site de comércio eletrônico seriam:

- **Prateleira de Produtos:** exibe uma prateleira de produtos com imagem,
  título e preço.
- **Cabeçalho:** exibe o cabeçalho padrão da loja, contendo logotipo, cardápio
  categorias e links para carrinho e login.
- **Banner:** exibe imagem, texto e alguns _Call to action_ para campanha ou
  departamento específico.

Observe que as seções são executadas apenas no servidor, portanto, o
gerenciamento de estado, como `useState`, `useEffect` e callbacks como
`onClick`, `onInput` não irão trabalhar. Para isso, você terá que usar seções em
conjunto com ilhas.

## Como criar uma seção

1. Crie um arquivo `.tsx` na pasta `sections/` em seu site.

2. Exportar um componente
   [Preact](https://preactjs.com/ "https://preactjs.com/") como o exemplo
   abaixo:

   1. `seções/Example.tsx`

      ```tsx
      função padrão de exportação ExampleSection() {
        retornar (
          <div>
            <p>Esta é uma seção de exemplo</p>
          </div>
        );
      }
      ```

3. Pronto! Agora esta seção estará disponível para ser configurada no admin do
   [deco.cx](deco.cx "deco.cx").

## Personalizando seções

Geralmente é desejável que o site tenha textos e imagens que possam ser editados
por usuários. de negócios através de um CMS _(Content Management System),_ e o
[deco.cx](deco.cx "deco.cx") fornece essa funcionalidade nas seções.

Para fornecer personalização, uma seção pode **aceitar Props** como qualquer
JSX/Preact componente. É necessário **exportar o tipo (Typescript) dos Props**
para nosso editor para reconhecer os campos aceitos.

_Exemplo:_

- Configuração da seção em [deco.cx](deco.cx "deco.cx")

```tsx
exportar adereços de interface {
   título: string;
}

função padrão de exportação ExampleSection({ title }: Props) {
   retornar (
     <div>
       <h1>{title}</h1>
       <p>Esta é uma seção de exemplo</p>
     </div>
   );
}
```

- Visualização da edição da seção no Admin

<img width="303" alt="Visualização da seção de edição no Admin" src="https://user-images.githubusercontent.com/18706156/219485206-732b566b-0f8f-43ce-a512-fa8252e99642.png">

## Tipos aceitos

O editor [deco.cx](deco.cx "deco.cx") aceita um subconjunto de tipos Typescript
para configuração da seção. Esta é a lista de tipos suportados no tempo:

### Tipos nativos

#### corda

```ts
exportar adereços de interface {
   título: string;
}
```

#### número

```ts
exportar adereços de interface {
   númeroDeLinhas: número;
}
```

#### literal de objeto

```ts
exportar adereços de interface {
   endereço: {
     rua: string;
     código postal: string;
   };
}
```

#### variedade

```ts
exportar adereços de interface {
   menuItems: Array<{ label: string; valor: string }>;
}
```

#### opções de string

```ts
exportar adereços de interface {
   variante: "primária" | "secundário" | "terciário";
}
```

### Tipos especiais

#### Imagem

Este tipo renderiza um _widget_ de upload de imagem no editor, possibilitando
usuário fazer upload de imagens de seu próprio computador.

O tipo é um *wrapper para `string`, *então o componente da seção obterá o URL da
imagem que será hospedada nos servidores de [deco.cx](deco.cx "deco.cx").

**Opcional:** [deco.cx](http://deco.cx) fornece um componente que otimiza o
carregamento de imagem e pode ser usado em conjunto com esta propriedade.
Exemplo tsx")

```ts
tipo de importação {Imagem} de "$live/std/ui/types/Image.ts";

exportar adereços de interface {
   bannerImg: Imagem;
}
```

#### Vídeo

Semelhante à Imagem, as propriedades com este tipo serão editadas através de um
Vídeo carregar _widget_.

Exemplo de uso
[aqui](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3 "https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb420b2b2bSection VideoCarouselc. tsx#L3").

```ts
tipo de importação { Video } de "$live/std/ui/types/Video.ts";

exportar adereços de interface {
   myVideo: Vídeo;
}
```

### Enriquecendo o editor

Ao usar tipos nativos, o rótulo de entrada do editor é o nome da variável. Pró
Por exemplo, o tipo `Props` abaixo irá gerar um editor com uma entrada cujo
rótulo é `contagem`

- código _seção_

```tsx
exportar adereços de interface {
   /** @title Número de produtos */
   /** @description Total de produtos para mostrar na vitrine */
   número de contagem;
}
```

- editor

![Exemplo](https://deco.fibery.io/api/files/73302d29-bdee-471c-ab2d-75f
