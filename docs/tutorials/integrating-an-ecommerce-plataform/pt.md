---
   description: Aprenda como integrar uma nova plataforma de ecommerce na deco
---

Neste tutorial você aprenderá como integrar uma **nova plataforma** de ecommerce na deco.

Mas, antes disso, dê uma olhada na [lista de plataformas](/docs/pt/tutorials/list-of-supported-plataforms/) já suportadas atualmente e veja se o que procura já está pronto.

## Meu provedor não está na lista

Se o seu provedor não está na lista, isso não é um problema.

Vamos passar por cada uma das etapas de como criar a integração com uma nova plataforma.

## Pré-requisitos

- [Conceitos: Loader](/docs/pt/concepts/loader)
- [Conceitos: Section](/docs/pt/concepts/section)
- [Tutorial: Buscando dados de API](/docs/pt/concepts/section)

## Entendendo a integração com a deco

A integração entre uma plataforma de ecommerce e a deco é feita através das **APIs** que a plataforma de ecommerce fornece.

Utilizando os **Loaders**, é possível padronizar os dados trazidos pelas **APIs**, possibilitando a reutilização de componentes.

Para reunir todas as integrações já criadas, utilizamos o repositório [std](https://github.com/deco-sites/std), lá você pode fazer tudo que precisa para sua nova integração.

## Etapas necessárias

1. Clone o repositório std
2. Configuração global
3. Setup de código
    - Criando um **client**
    - Criando um **transformer**
    - Criando um **arquivo de tipos**
4. Loaders
    - Loader de **productList**
    - Loader de **productSearch**
    - Loader de **productPage**
5. Hooks de Carrinho

## Clone o repositório std

Crie um fork do repositório [std](https://github.com/deco-sites/std) para o seu Github.

Clone o projeto para o seu computador.

```
git clone git@github.com:deco-sites/std.git
```

Você deve ver uma estrutura de pastas como essa:

<img src="https://user-images.githubusercontent.com/76620866/228379126-d24c0541-0a34-4de7-89b8-531ff85dfc29.png" width="250">


## Criando uma configuração global

A **configuração global** é a `section` que ficará na plataforma da deco, com os campos disponíveis para inserir os dados.

Observação: Os dados que cada integração deve receber variam de cada plataforma de ecommerce.

Na pasta `/commerce` crie uma subpasta com o nome da plataforma, como `/commerce/vnda`.

Então, crie um arquivo chamado `types.ts` e exporte os tipos necessários para configuração.

~~~javascript
export interface ConfigVNDA {
  domain: string;
  authToken: string;
  useSandbox: boolean;
  defaultPriceCurrency: string;
}
~~~

Para criar sua `section`, acesse a pasta `/sections` e crie um arquivo com o nome `configSuaIntegracao.global.tsx`, como `configVNDA.global.tsx`.

~~~javascript
import type { ConfigVNDA } from "../commerce/vnda/types.ts";

function ConfigSection(_: ConfigVNDA) {
  return (
    <div>
      "This is a global setting and not a component. Every change here will
      impact all environments, published/archived/draft"
    </div>
  );
}

export default ConfigSection;
~~~

E esse é o resultado de como fica a `section` no painel:

<img src="https://user-images.githubusercontent.com/76620866/228381279-6636ac90-ad04-4f5b-a827-6c90b4bfddd3.png" width="200">


## Setup de código

Recomendamos que siga esses passos do setup de código para melhor organização dos arquivos 
da integração.

Crie os arquivos `client.ts` e `transformer.ts` na subpasta que você criou `/commerce/suaIntegracao`, além do `types.ts` que já foi criado.

### client

O arquivo `client.ts` deve ser responsável por abstrair as chamadas de API e os tipos.

Dúvidas com o client? Consulte o [arquivo de client da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/client.ts)

### transformer

O arquivo `transform.ts` deve ser responsável por criar as funções que transformam os tipos da API para o padrão do `schema.org`.

**Dica:** O ChatGPT é uma ótima ferramenta para gerar o código Javascript necessário para essa conversão de tipos.

[Espaço para imagem]

Dúvidas com o transformer? Consulte o [arquivo de transformer da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/transform.ts)

### types

O arquivo `types.ts` deve ser responsável por exportar todos os tipos de retorno que as APIs da plataforma de ecommerce fornece.

**Dica:** Utilize o QuickType.io para facilitar a criação dos tipos.

<img src="https://user-images.githubusercontent.com/76620866/228386398-37ee72c9-fcc1-4f7a-9c66-8f4beb8884d5.png" width="450">

Dúvidas com o types? Consulte o [arquivo de tipos da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/types.ts)

## Loaders

### productList

### productSearch

### productPage

## Hooks de Carrinho