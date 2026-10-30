# API de Gerenciamento de Pedidos

## Objetivo

Desenvolver uma API REST para gerenciar pedidos de uma pequena loja, utilizando Node.js, Express e JavaScript.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Jest
- Postman
- Git e GitHub

## Como instalar e executar

1. Instale o Node.js.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:

   `npm install`

4. Inicie a API:

   `npm start`

A API ficará disponível em `http://localhost:3000`.

## Como executar os testes

Para executar os testes automatizados, utilize:

`npm test`

## Funcionalidades

- Cadastrar pedidos.
- Listar todos os pedidos.
- Consultar um pedido pelo ID.
- Atualizar o status de um pedido.
- Validar os dados informados no cadastro.
- Rejeitar pedidos com dados inválidos.
- Informar quando um pedido não for encontrado.

## Testes realizados

Os testes automatizados verificam o cadastro de pedidos válidos, a rejeição de clientes vazios, a rejeição de valores menores ou iguais a zero e a consulta de identificadores inexistentes.

Os testes foram executados com sucesso utilizando Jest.

## Estrutura do projeto

- `src/app.js`: configura e inicia o servidor.
- `src/routes/pedidoRoutes.js`: define as rotas da API.
- `src/controllers/pedidoController.js`: controla as requisições e respostas.
- `src/services/pedidoService.js`: contém as regras de negócio.
- `tests/pedidoService.test.js`: contém os testes automatizados.
- `evidencias/`: pasta destinada às capturas de tela dos testes.

## Endereço da API

`http://localhost:3000/pedidos`
