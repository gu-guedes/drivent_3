### DRIVEN.T 
Continuação de um projeto legado, onde tem como intuito a listagem e seleção de quartos de hotéis.

## Sobre
Os seguintes requisitos foram implementados:
- listagem de hotéis seguindo as regras de negócios(ticket pago que inclui hospedagem)
- Mostrar opções de quartos de hotéis
- Implementar testes de integração

O foco desse projeto era aplicar os testes

## Tecnologias
As seguintes ferramentas e frameworks foram usadas:
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>

## Como rodar 
1- Clonar repositório

2- Instalar dependências
### `npm i`

3- Crie um banco de dados PostgreSQL com o nome que desejar

4- Configure o arquivo `.env.development` usando o arquivo `.env.example` (consulte "Executando o aplicativo localmente ou dentro da seção docker" para obter detalhes)

5. Execute todas as migrações

### `npm run dev:migration:run`


6. seed db
 
### `npm run dev:seed`


7. Execute o back-end em um ambiente de desenvolvimento:

### `npm run dev`


## Como executar testes

1. Siga as etapas da última seção
   
3. Configure o arquivo `.env.test` usando o arquivo `.env.example` (consulte a seção "Executando o aplicativo localmente ou dentro do docker" para obter detalhes)
   
5. Execute todas as migrações:


### `npm run test:migration:test`


4. Execute o teste:


### `npm run test`


## Construindo e iniciando a produção


### `npm run build`
### `npm start`



