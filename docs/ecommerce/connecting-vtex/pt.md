---
description: Aprenda como configurar a conexão da deco com qualquer conta VTEX.
---

## Versão em vídeo

Para assistir o conteúdo desse artigo, clique
[aqui](https://www.loom.com/share/9fee00a691dd44cfb35d1e2680719e5e)

Esse guia mostra como criar e configurar um site na
[**deco.cx**](http://deco.cx) para um _storefront_ que lê dados da plataforma de
ecommerce [VTEX](https://vtex.com/ "https://vtex.com/").

## Pré-requisitos

- Acesso a
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- Um `accountName` VTEX
  [(ajuda)](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC "https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC").

## Público-alvo

- Desenvolvedores Web familiarizados com React/Preact e também conhecimento em
  [VTEX](https://vtex.com/ "https://vtex.com/").

A [**deco.cx**](http://deco.cx) é feita especialmente para criando de commerce
experiences de alto desempenho, e nesse guia ensinaremos como dar os primeiros
passos para configurar um site _deco_ que lê dados de uma conta VTEX.

## Criando o site

Para prosseguir, siga os passos do guia [[Documentação deco/Guides: Comece a
usar o Live]] e **selecione o template Deco Commerce na criação do site.**

<img width="586" alt="Criando um site na deco.cx" src="https://user-images.githubusercontent.com/18706156/224514991-0e882420-00a8-4272-a2d0-71f73ac77d23.png">

Complete todos os passos do guia, finalmente **clonando o repositório do site
recém-criado localmente.**

Após isso, você deverá ter um storefront _deco_ criado e deve estar rodando o
site localmente em sua máquina.

## Configurando o account name

O template **Deco Commerce** já conta com uma conexão automática com a VTEX,
porém é utilizada uma conta de teste (`bravtexfashionstore`) que deve ser
substituída pela conta com a qual você pretende desenvolver a loja. Isso será
útil para configurar prateleiras com produtos reais da loja que está sendo
desenvolvia e também garantir que a página de produto e o Minicart funcionem
corretamente.

Para fazer essa mudança, siga os passos:

1. Acesse o painel administrativo do seu site em
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").

2. Vá até **Library.**

3. No grupo **Global Sections**, selecione o item **vtexconfig.global.tsx.**

4. Em Account, troque `bravtexfashionstore` pelo account name desejado.

5. Clique em **Save Draft**

<img width="486" alt="Configuração da VTEX dentro do admin da deco.cx" src="https://user-images.githubusercontent.com/18706156/224514994-d5edd89b-705c-42e6-952e-3db3f9d5de2e.png">

Se necessário, também altere configurações como o canal de vendas (_sales
channel)_ e a língua da loja.

Para testar as mudanças, volte para lista de Sections na Library e selecione a
**ProductShelf.** Essa Section pode ser configurada para buscar produtos na VTEX
com uma configuração fornecida. Clique no ícone de caneta (✏️) e edite o campo
**Query** para alguma palavra-chave relacionada ao catálogo da conta que você
configurou (ex: se é uma loja de móveis, digite _"mesa")._

<img width="1440" alt="Editor da deco.cx com uma página de ProductShelf" src="https://user-images.githubusercontent.com/18706156/224514990-0e41dba8-96b8-475b-9744-48706d2de623.png">

> Caso ainda não tenha configurado uma integração com a VTEX, clique no ícone de
> setas 🔁 ou em **"Add Integration"** e selecione a opção **vtexProductList** e
> configure a integração adicionando um valor para os campos **Query** e
> **Count**

Ao clicar em um produto, também é esperado que sua página de detalhe (PDP)
renderize corretamente de acordo com o produto selecionado. Agora você pode
utilizar as Sections e Functions já incluídas no seu projeto para exibir
produtos da conta configurada.

## Configurando o checkout

Atualmente, utilizamos a
[mesma estratégia que a VTEX FastStore usa](https://www.faststore.dev/how-to-guides/platform-integration/vtex/integrating-vtex-checkout "https://www.faststore.dev/how-to-guides/platform-integration/vtex/integrating-vtex-checkout")
para se integrar com o VTEX Checkout, por isso é necessário ter **um domínio
secundário que está vinculado à conta VTEX.** Ao clicar no botão **Finalizar
Compra** no Minicart do site _deco_, o usuário é redirecionado para
`https://{dominioConfigurado}/checkout?orderFormId=(…)` e consegue finalizar o
fluxo normalmente.

É provável que a conta que você configurou acima já tenha um domínio público que
está sendo utilizado, e é possível utilizá-lo na etapa de construção da loja.
Com esse domínio em mãos, siga os seguintes passos:

1. Abra o arquivo `Minicart.tsx` e substitua a string
   [`https://bravtexfashionstore.vtexcommercestable.com.br`](https://bravtexfashionstore.vtexcommercestable.com.br)
   pelo domínio escolhido da loja.

2. Abra o arquivo `checkout.ts` e substitua a string
   [`bravtexfashionstore`](https://bravtexfashionstore.vtexcommercestable.com.br)
   pelo **account name** utilizado na sessão anterior.
