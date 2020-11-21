# watcha

Watcha é um webapp de consulta de filmes. Nele você pode ver quais filmes estão entre os mais populares no momento, pesquisar por filmes, adicionar filmes à whatchlist, marcar como visto e compartilhar com seus amigos o que você achou desses filmes.

Wactha é uma aplicação escrita em JavaScript, utilizando backend em Node + MongoDB e frontend em React.
Nem todas as funções foram completamente implementadas. Algumas delas estão funcionando apenas no backend, sem uma interface no front. Vamos listar aqui algumas delas:

## Funcionalidades

##### Usuário, Perfil e Sessão

- Cadastro de usuário: OK
- Login de usuário com e-mail e senha: OK
- Restrição de criação de contas com email único: OK
- Senha criptografada: OK
- Controle de acessos via token: OK
- Validação de e-mail: Not Implemented
- Criação de até 4 perfis por conta: Not Implemented

##### Filmes

- Listar filmes populares na home: OK
- Pesquisar filmes por termo: Partialy Implemented (only backend)
- Adicionar/remover filmes na watchlist: Not Implemented
- Mostrar watchlist: Partialy Implemented (Only backend)
- Mostrar cards dos filmes com banner e informações relevantes: Partialy Implemented

## Funcionalidades planejadas

- Login com Google Account ou Facebook
- Adicionar filmes à lista de assistidos
- Compartilhar filmes assistidos no Facebook ou Twitter
- Validação de e-mail cadastrado
- Listar filmes na home com base em filmes semelhantes aos adicionados na watchlist

Mesmo com o desafio tendo acabado, este projeto deverá continuar sendo desenvolvido e servirá como base pra outras apps (como o ORCHA: um MVP de software de gerenciamento de patrimônio público).

### Tecnologias utilizadas

Modinha ou não, watcha utiliza o "padrão de mercado" do mundo JavaScript:

- [Node.js] - no backend segurando as pontas e batendo um papo com o TMDb.
- [MongoDB] - guardando tudo com carinho e dando nome, digo, ID aos bois.
- [React] - o que tá na frente de tudo. Normalmente é o que o usuário xinga.

## Let's run

Pra rodar o projeto localmente, baixe todo o projeto, garanta que você tenha instalado o [MongoDB] e o [Node.js] e vamos lá!

#### Backend

Navegue até backend/src/config:

```sh
$ cd backend/src/config
```

Edite o arquivo auth.json inserindo uma chave md5 ou qualquer chave de sua preferência. Essa chave será utilizada pelo sistema de autenticação da API.

```sh
{
    "secret": "YOUR MD5 HASH HERE"
}
```

Feito isso, edite o arquivo tmdb.json inserindo o seu token v3 da api do TMDb.

```sh
{
    "API_ROOT": "https://api.themoviedb.org/3/",
    "API_KEY": "YOUR TMDB API KEY (v3) HERE"
}
```

Agora sim, vamos rodar o backend. Volte até /backend:

```sh
$ cd ../../
```

Instale as dependências:

```sh
$ npm install
```

E, finalmente, rode o projeto usando o comando:

```sh
S npm start
```

Obs: o npm vai executar o nodemon, para executar o projeto.

### Frontend

Vamos começar também pelo arquivo de configuração do frontend, seguindo a mesma lógica do backend.
Navegue até /frontend/src/config e verifique se o arquivo apiConfig.json contém o caminho correto para o backend. No nosso caso, o padrão pra ambiente local é:

```sh
{
    "API_ROOT":"http://localhost:8080"
}
```

Bem simples, né?

Agora volte até /frontend e vamos instalar as dependências do react:

```sh
$ npm install
```

Depois de tudo instalado, é só botar pra rodar:

```sh
$ npm start
```

Prontinho!

Se tiver algum problema pra rodar a aplicação, me procure em um dos meus contatos disponíveis no perfil do Github.

##### Heroku + MongoDB Atlas

Se quiser fazer deploy na nuvem, veja [este vídeo](https://youtu.be/-j7vLmBMsEU) para aprender a fazê-lo com Heroku usando MongoDB Atlas.

##### Special thanks to:

- Denner S. L. Vidal: pelo apoio e dicas desde o inicio do projeto e por ser um bom amigo.
- Marcelo A.: por ter me motivado a participar do desafio.
- Marilucia: a minha cafeteira.

**Valeu! <3**

Powered by
[![N|Heroku](https://cdn.iconscout.com/icon/free/png-256/heroku-10-1175213.png?h=100)](https://heroku.com)

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[mongodb]: https://mongodb.com
[node.js]: http://nodejs.org
[react]: http://reactjs.org
