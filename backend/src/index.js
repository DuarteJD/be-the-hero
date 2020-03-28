const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

/** 
 * O express, antes de chemar a rota irá converter o corpo da requisição em um objeto JSON.
 * É importante que esta codificação venha antes das rotas.
 */
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * errors importado do celebrate para personalizar as validações que serão exibidas ao desenvolvedor/usuário.
 */
app.use(errors())

/**
 * Tipos de parâmetros:
 * Query Params: Parametros nomeados enviados na rota, após o "?"" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos, após o "/"
 * Request Body: Corpo da requisição, utilizado para criar/alterar um recurso.
 * 
 * request.query;
 * request.params;
 * request.body;
 */

 /**
  * Utilizar um QueryBuilder não nos preocupamos com o banco de dados
  * que a aplicação irá trabalhar, já que iremos escrever as query's
  * utilizando um syntaxe JS.
  * 
  * http://knexjs.org/
  */

app.listen(3333);