# Socket IO
Projeto desenvolvido durante a NLW05 da trilha Node.JS na RockerSeat. Este mini projeto tem como objetivo abordar o uso de Sockets para fazer comunicação entre Cliente e Servidor.
## Projeto desenvolvido usando as seguintes tecnologias
- Node.JS (14.16.1);
- TypeScript;
- Yarn;
- ORM; e
- HTML e CSS.

### Configurações Iniciais
Para instalar o Node.JS acesse o site do [Node](https://nodejs.org/) e escolha o seu Sistema Operacional e siga os passos de instalação.
Para instalar o Yarn entre no terminal e execute o seguinte comando:
```sh
npm install yarn
```
Depois instale as dependências do projeto com o comando abaixo:
```sh
yarn install
```
O projeto usa o banco de dados SqLite, para criá-lo execute o comando abaixo:
```sh
yarn typeorm migration:run
```
Após a execução do comando, observe na pasta "src/database/" que agora terá um arquivo com o nome database.sqlite
## Executando o projeto
Para executar o projeto acesse o terminal e rode o comando abaixo:
```sh
yarn dev
```
Ao executar o comando acima no terminal, uma mensagem será exibida "Server started on 3000"
> Outros scripts podem ser encontrados no arquivo package.json

### Páginas Web
O projeto consiste em duas interfaces:
 - Client - Uma página HTML é exibida e no canto inferir a direta tera uma caixa roxa escrito "Suporte". Ao clicar nesta caixa, ela será expandida e uma janela de conversa será exibida. Nesta janela que ocorrerá toda a comunicação com o servidor.
    - http://localhost:3000/pages/client
 - Admin - Uma página em HTML que atualiza automaticamente e exibe as conversas que ainda não foram atendidas. Ao clicar no botão "Entrar em Atendimento", uma janela será aberta mostrando o histórico da conversa, e ao responder as mensagens o cliente receberá.
    - http://localhost:3000/pages/admin

> Ao conectar na página do cliente, observe no terminal que um log é exibido informando que o cliente se conectou e mostra o código da sessão.
> Ao entrar no modo desenvolvedor do browser (F12), na sessão Network e nos filtros marque WS (WebSocket) será possível visualizar os dados trocados entre Servidor e Cliente.
