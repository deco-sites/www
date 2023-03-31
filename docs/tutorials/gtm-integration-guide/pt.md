---
  description: Aprenda como integrar o Google Tag Manager com um site deco.cx
---

## O que você aprenderá?

- Integrar o [Google Tag Manager](https://tagmanager.google.com/) com seu site
  deco.cx, permitindo a adição de tags configuradas pela interface do GTM.
- Integrar o [Google Analytics](https://analytics.google.com/) através do GTM.

## Pré-requisitos

- `trackingId` do GTM
  ([veja como conseguir](https://support.rocketspark.com/hc/en-us/articles/900002470443-How-do-I-get-my-Google-Tag-Manager-Tracking-ID-or-GTM-Number-))
- _Opcional:_ Tag configurada

## Introdução

O Google Tag Manager (GTM) é uma ferramenta gratuita oferecida pelo Google que
permite gerenciar e implementar facilmente tags de rastreamento e códigos de
terceiros em seu site ou aplicativo. Essas tags podem incluir scripts de análise
de dados, como o Google Analytics, pixels de conversão de publicidade ou outros
códigos personalizados.

A principal vantagem do GTM é que ele centraliza a gestão dessas tags,
possibilitando adicionar, editar ou remover códigos sem a necessidade de
modificar diretamente o código-fonte do site. Isso torna o processo de
implementação de tags mais rápido, eficiente e seguro, reduzindo a probabilidade
de erros e melhorando a colaboração entre desenvolvedores, profissionais de
marketing e analistas.

O uso excessivo de tags no Google Tag Manager (GTM) pode prejudicar a
performance de um site comum, uma vez que a carga e execução de diversos scripts
podem aumentar o tempo de carregamento das páginas e comprometer a experiência
do usuário. No entanto, na deco.cx, utilizamos uma solução inovadora chamada
[Partytown](https://partytown.builder.io/), que permite a execução das tags em
um service worker.

Essa abordagem desloca o processamento dos scripts para um ambiente separado do
thread principal do navegador, minimizando o impacto na performance do site.
Graças ao Partytown, conseguimos manter um excelente desempenho e proporcionar
uma experiência de navegação ágil e responsiva aos usuários, mesmo com a
utilização de múltiplas tags no GTM.

(TODO): Avaliar o que pode ser feita na v1 do live em relação a proxy
_proxy?url=

## Integrando o GTM na deco.cx

Se você criou um site na deco baseado no nosso template de ecommerce (a
[Fashion](https://fashion.deco.site/)), ele **já tem todo o código necessário
para se integrar com o GTM**. No entanto, é necessário configurar o `trackingId`
que você já tem.

Para isso, siga os passos:

1. Abra o arquivo _app.tsx dentro do seu projeto deco.cx.
2. Na variável `trackingId`, cole o valor do `trackingId` do seu projeto.

É isso! Para testar que está tudo funcionando, faça o seguinte:

1. Rode o projeto com `deno task start`.
2. Acesse `http://localhost:8000`.
3. Vá até as ferramentas de desenvolvedor e acesse a aba **Network**.
4. Recarregue a página e certifique-se que o script
   `https://www.googletagmanager.com/gtm.js?id=GTM-P6D23BB` está sendo
   carregado.

## Adicionando o Google Analytics 4

> Apenas se não tiver conectado

- Só indo ao GTM

## Troubleshooting

- Uma tag que configurei não está funcionando corretamente
  - Header de CORS
- Não consigo usar o Tag Assistant Pessoal, sobre isso. Me preocupo com algumas
  funcionalidades específicas:
