---
  description: Aprenda como integrar o Google Tag Manager com um site deco.cx
---

## O que você aprenderá?

- Integrar o [Google Tag Manager](https://tagmanager.google.com/) com seu site
  deco.cx, permitindo a adição de tags configuradas pela interface do GTM.
- Integrar o [Google Analytics](https://analytics.google.com/) através do GTM.

## Pré-requisitos

- Um `trackingId` de um container do Google Tag Manager, formatado no estilo:
  `GTM - XXXXXX`.
  ([ajuda](https://support.rocketspark.com/hc/en-us/articles/900002470443-How-do-I-get-my-Google-Tag-Manager-Tracking-ID-or-GTM-Number-))

- _Opcional:_ Tag configurada do Google Analytics 4
  ([ajuda](https://support.google.com/tagmanager/answer/9442095?hl=en))

## Introdução

O **Google Tag Manager (GTM)** é uma ferramenta gratuita oferecida pelo Google
que permite gerenciar e implementar facilmente tags de rastreamento e códigos de
terceiros em seu site ou aplicativo. Essas tags podem incluir scripts de análise
de dados, como o Google Analytics, pixels de conversão de publicidade ou outros
códigos personalizados.

Entretanto, o uso excessivo de tags no GTM pode **prejudicar a performance de um
site** comum, uma vez que os scripts podem aumentar o tempo de carregamento das
páginas e comprometer a experiência do usuário. Por isso, a integração feita
pela deco.cx utiliza o [Partytown](https://partytown.builder.io/), que permite a
execução das tags em um service worker e melhora o tempo de carregamento da
página.

## Integrando o GTM na deco.cx

Se você criou um site na deco.cx baseado no nosso
[starter de ecommerce](https://fashion.deco.site/), ele **já tem todo o código
necessário para se integrar com o GTM**. No entanto, é necessário configurar o
`trackingId` do container previamente configurado.

Para isso, siga os passos:

1. Abra o arquivo `_app.tsx` dentro do seu projeto deco.cx.
2. Na variável `trackingId`, cole o valor do `trackingId` do seu projeto.

É isso! Para testar que está tudo funcionando, faça o seguinte:

1. Rode o projeto com `deno task start`.
2. Acesse `http://localhost:8000`.
3. Vá até as ferramentas de desenvolvedor e acesse a aba **Network**.
4. Recarregue a página e certifique-se que o script
   `https://www.googletagmanager.com/gtm.js?id=GTM-P6D23BB` está sendo
   carregado.

## Adicionando o Google Analytics 4

Para configurar o Google Analytics para um site e/ou app, você deverá criar uma propriedade do Google Analytics 4, adicionando um fluxo de dados e o seu código, para isso, siga as instruções:

- Antes de tudo, é necessário configurar uma conta do Google Analytics, a menos que você já tenha uma. Se você não quiser criar uma conta separada para esse site e/ou app, pule para a etapa Criar uma propriedade. Por exemplo, convém criar outra conta se o site e/ou app pertencer a uma empresa diferente.

1. Em Administrador, na coluna Conta, clique em Criar conta;
2. Insira um nome para a conta e defina as configurações de compartilhamento de dados para controlar quais informações você quer compartilhar com o Google;
3. Clique em Próxima para adicionar a primeira propriedade à conta;

- Agora, para criar uma propriedade, siga estas etapas: 

Antes de tudo, você precisa ter papel de editor para adicionar propriedades a uma conta do Google Analytics. Caso tenha criado a conta, esse tipo de acesso será concedido automaticamente.

É possível adicionar até 2.000 propriedades (qualquer combinação do Universal Analytics e do Google Analytics 4) a uma conta do Analytics. Caso queira aumentar esse limite, entre em contato com o representante do suporte.

Para criar uma propriedade, siga estas etapas:

1. Se você estiver continuando da etapa acima "Criar uma conta do Google Analytics", pule para a etapa 2. Caso contrário, siga as instruções abaixo;
   -Em Administrador, confira na coluna Conta se você selecionou a opção certa. Depois, na coluna Propriedade, clique em Criar propriedade.
2. Insira um nome para a propriedade, como "Site da Minha Empresa Ltda" e selecione o fuso horário e a moeda do relatório. Se um usuário visitar seu site na terça-feira, de acordo com o fuso horário dele, mas ainda for segunda-feira no seu fuso horário, a visita contará como ocorrida na segunda-feira;
   -Se você escolher um fuso que tenha horário de verão, o Google Analytics vai fazer os ajustes de forma automática. Use "Horário de Greenwich" se não quiser seguir o horário de verão;
   -A alteração do fuso horário só afeta dados posteriores. Se você mudar o fuso horário de uma propriedade existente, notará um período sem atividades ou um pico nos dados, causados ao adiantar ou atrasar o horário, respectivamente. Os dados do relatório usarão o fuso horário antigo por um curto período depois que você atualizar as configurações, até que os servidores do Google Analytics tenham processado a mudança;
   -Recomendamos que você altere o fuso horário de uma propriedade no máximo uma vez por dia para que o Google Analytics processe a edição.
3. Clique em Próxima e selecione a categoria e o tamanho da sua empresa;
4. Clique em Criar e aceite os Termos de Serviço do Google Analytics e a Emenda sobre processamento de dados.

- Adicionar um fluxo de dados
1. Se você estiver continuando da etapa "Criar uma propriedade" acima, siga para a etapa 2.    Caso contrário, siga as instruções abaixo:
 a. Em Administrador, consulte a coluna Conta para verificar se a conta certa está selecionada. Depois, verifique na coluna Propriedade se você escolheu a opção correta;
Na coluna Propriedade, clique em Fluxos de dados e em Adicionar fluxo.
 b. Clique em App iOS, App Android ou Web. 

- App iOS ou Android
  Quando você adiciona um fluxo de dados do app, o Google Analytics cria um projeto do Firebase e um fluxo correspondente e depois vincula automaticamente o projeto à sua propriedade se isso ainda não tiver sido feito.

  Você pode vinculá-lo a um projeto existente do Firebase, mas precisa fazer isso a partir do Firebase (válido somente para as propriedades do GA4 que ainda não tenham sido vinculadas). Saiba como.
  1. Insira o ID do pacote iOS ou o nome do pacote Android, o nome do aplicativo e, no caso do iOS, o ID da App Store. Em seguida, clique em Registrar app;
  2. Clique em Próxima e siga as instruções para fazer o download do arquivo de configuração do seu app;
  3. Clique em Próxima e siga as instruções para adicionar o SDK do Google Analytics para Firebase ao app;
  4. Clique em Próxima;
  5. Execute o app para verificar a instalação do SDK e se a comunicação com os servidores do Google está funcionando;
  6. Clique em Concluir. Se você quiser configurar o app mais tarde, clique em Pular esta etapa.
Web
  1. Insira o URL do seu site principal, como "example.com", e um nome para o fluxo, como "Example, Inc. (fluxo da Web)".
  2. Você pode ativar ou desativar a avaliação otimizada. Ela coleta automaticamente as visualizações de página e outros eventos. Depois que o fluxo de dados for criado, vai ser possível desativar os eventos de medição otimizada que não quiser coletar. Portanto, recomendamos que ative a avaliação otimizada agora.
  3. Clique em Criar stream.

- Só indo ao GTM

## Troubleshooting

- Uma tag que configurei não está funcionando corretamente
  - Header de CORS
- Não consigo usar o Tag Assistant Pessoal, sobre isso. Me preocupo com algumas
  funcionalidades específicas:

  -Colocar print de Tag configurada na section pre requisitos;
