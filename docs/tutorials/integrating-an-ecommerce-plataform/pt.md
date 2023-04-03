---
   description: Aprenda como integrar uma nova plataforma de ecommerce na deco
---

Neste tutorial você aprenderá como integrar uma **nova plataforma de ecommerce** na deco.

## Pré-requisitos

- [Conceitos: Loader](/docs/pt/concepts/loader)
- [Conceitos: Section](/docs/pt/concepts/section)
- [Tutorial: Buscando dados de API](/docs/pt/concepts/section)

## Entendendo a integração com a deco

Para criar a integração é necessário que a plataforma tenha APIs disponíveis, sejam públicas ou acessíveis apenas com uma ``API Key``.

A utilização dos [loaders](/docs/pt/concepts/loader) é o que permite carregar os dados das APIs na deco.cx, você pode aprender mais sobre isso no tutorial [Buscando dados de API](/docs/pt/tutorials/data-fetching).

Entretanto, é possível criar a integração de uma forma que **todos os componentes de ecommerce sejam reaproveitados** e você possa utilizar os dados da nova API a ser integrada.

Isso ocorre porque os componentes da deco.cx usam tipos canônicos para para representar entidades como produtos, filtros e categorias. O schema de tipos utilizado é do [schema.org](https://schema.org/).

Então, para integrar uma nova plataforma de ecommerce corretamente, é necessário:

1. Identificar as APIs que serão utilizadas e os dados que elas necessitam.
2. Implementar os Loaders que fazem fetch nessas APIs.
3. Transformar os dados retornados nos tipos de dado canônico que a deco.cx oferece.

É possível verificar como as integrações atuais estão feitas em:
- [https://github.com/deco-sites/std](https://github.com/deco-sites/std).

Neste tutorial, vamos passar por cada uma das etapas e utilizar a **integração com a plataforma VNDA** como exemplo. Você pode conferir os PRs criados em: 

- https://github.com/deco-sites/std/pull/16
- https://github.com/deco-sites/std/pull/18

## Etapas necessárias

1. Repositório std
2. Configuração global
3. Setup de código
    - Criando um **client**
    - Criando um **transformer**
    - Criando um **arquivo de tipos**
4. Loaders
    - Loader de **productList**
    - Loader de **productSearch**
    - Loader de **productPage**
5. Carrinho e Checkout

## Repositório std

Crie um fork do repositório [std](https://github.com/deco-sites/std) para o seu Github.

Clone o projeto para o seu computador.

```
git clone git@github.com:deco-sites/std.git
```

O repositório [std](https://github.com/deco-sites/std) contém [Sections](/docs/pt/concepts/section) e [Loaders](/docs/pt/concepts/loader) que são úteis para os sites deco, além de tipos e funções utilitárias. 

Você verá as seguintes pastas na raiz do projeto:

- **/commerce**: Contém subpastas de cada uma das plataformas já integradas na deco. Com os ``hooks``, ``transformers``, ``types`` e ``client`` de cada integração.
- **/functions**: Contém os [loaders](/docs/pt/concepts/loader) necessários para as integrações.
- **/sections**: Contém os componentes de configuração ou componentes UI que serão exibidos no painel deco.


## Criando uma configuração global

A **configuração global** é a `section` que ficará na plataforma da deco, com os campos disponíveis para inserir os dados.

É provável que a API da plataforma que você está integrando precise de alguns dados que serão comuns em todas as chamadas à ela, como por exemplo um dado que identifica a loja do cliente que está utilizando a deco.

Para que não seja necessário pedir esse dado toda vez que algum [loader](/docs/pt/concepts/loader) for configurado, podemos usar o conceito de Global Setting da deco.cx, que permite que o usuário configure esses dados apenas uma vez.

Então, na pasta `/commerce` crie uma subpasta com o nome da plataforma, como `/commerce/vnda`.

Crie um arquivo chamado `types.ts` para exportar os tipos necessários para configuração. 

Após explorar as APIs da VNDA, identificamos que esses dados são padrão em todo request e por isso devem estar nas configurações.

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


1. **client.ts**: Criação de um arquivo para abstrair as chamadas de API.
2. **transformer.ts**: Criação de um arquivo com funções que transformam os tipos da API no padrão [schema.org](https://schema.org/).
3. **types.ts**: Criação de um arquivo para exportar todos os tipos de retorno das APIs.

Crie os arquivos `client.ts` e `transformer.ts` na subpasta que você criou `/commerce/suaIntegracao`, além do `types.ts` que já foi criado.

### client

O arquivo `client.ts` deve ser responsável por abstrair as chamadas de API e os tipos.

Caso queira seguir o exemplo da VNDA, você pode criar uma função ``createClient`` que retorna um objeto com as funções ``getProduct`` e ``searchProduct``.

Nessa estrutura:

~~~javascript
export const createClient = (params: ConfigVNDA) => {

  const fetcher = () => {
    // your code
    return result
  };

  const getProduct = () => {
    // your code using fetcher()
    return product
  };

  const searchProduct = () => {
    // your code using fetcher()
    return products;
  };

  return {
    product: {
      search: searchProduct,
      get: getProduct,
    },
  };
};
~~~

É importante lembrar que você usará essas abstrações dentro dos [loaders](/docs/pt/concepts/loader), então deve estar preparado para receber todos os parâmetros que as APIs precisam.

Aqui um exemplo de como a ``searchProduct`` foi utilizada em um dos [loaders](/docs/pt/concepts/loader):

~~~javascript
const client = createClient(configVNDA);

const search = await client.product.search({
    term: props?.term,
    wildcard: props?.wildcard,
    sort: props?.sort,
    per_page: props?.limit,
    tags: props?.tags,
});
~~~

Dúvidas com o client? Consulte o [arquivo de client da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/client.ts).

### transformer

O arquivo `transform.ts` deve ser responsável por criar as funções que transformam os tipos da API para o padrão do [schema.org](https://schema.org/).

Por exemplo, a API da sua integração retorna os dados de produto nesse formato:

~~~javascript
interface ProductBase {
  sku: number;
  informations: {
    name: string;
    description: string;
  }
  ...
}
~~~

Porém, no padrão [schema.org](https://schema.org/), o ``name`` e a ``description`` estão direto no objeto principal e o ``sku`` deve ser do tipo ``string``.

~~~javascript
interface ProductBase {
  sku: string;
  name: string;
  description: string;
  ...
}
~~~

Então, você deve criar uma função ``toProduct`` que arrume esses detalhes, algo como:

~~~javascript

function toProduct(product){
  return{
    sku: product.sku.toString(),
    name: product.informations.name,
    description: product.informations.description
  }
}
~~~

Certamente você irá encontrar mais complexidade do que isso, nossa dica é: **Utilize o ChatGPT**.

O [ChatGPT](https://openai.com/blog/chatgpt) é uma ótima ferramenta para gerar o código Javascript necessário para essa conversão de tipos.


Dúvidas com o transformer? Consulte o [arquivo de transformer da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/transform.ts).

### types

O arquivo `types.ts` deve ser responsável por exportar todos os tipos de retorno que as APIs da plataforma de ecommerce fornece.

Uma ótima maneira de agilizar esse processo e ser assertivo na criação dos tipos é utilizando o [QuickType.io](https://quicktype.io/).

Siga os passos:

1. Utilize o [Postman](https://www.postman.com/) para fazer o fetch na API
2. Copie o **JSON** completo retornado pela API
3. Cole o **JSON** no editor do QuickType.io
4. Copie o resultado e adicione no arquivo ``types.ts``


<img src="https://user-images.githubusercontent.com/76620866/228386398-37ee72c9-fcc1-4f7a-9c66-8f4beb8884d5.png" width="450">

Dúvidas com o types? Consulte o [arquivo de tipos da VNDA](https://github.com/deco-sites/std/blob/main/commerce/vnda/types.ts).

## Loaders

### productList

### productSearch

### productPage

## Carrinho e Checkout