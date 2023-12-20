# Drink Discover API

## Descrição do Projeto

Uma API construída com AdonisJS 5 para descoberta de bebidas. Utiliza AdonisJS, PostgreSQL como banco de dados e integração com Swagger para documentação da API.

## Diagrama do bando de dados

![image](https://github.com/leticiamirellly/drink-discover/assets/48611221/44951bea-28fe-4fb2-afcc-cba341496319)

## Pré-requisitos

Certifique-se de ter o Node.js e o PostgreSQL instalados em seu sistema antes de prosseguir.

## Instalação

```bash
git clone https://github.com/seu-usuario/drink-discover-api.git
cd drink-discover-api
npm install
```


## Configuração

Configure o arquivo .env com informações do banco de dados PostgreSQL:

```bash
DB_CONNECTION=pg
PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER=seu-usuario
PG_PASSWORD=sua-senha
PG_DB_NAME=
```

Execute as migrações do banco de dados:

```bash
npm run db:reset
```

## Uso

```bash
npm run dev
```

Acesse a documentação Swagger:

    http://127.0.0.1:3333/docs
