# Desafio Técnico Turma XP-Trybe

# Contexto

Este repositório trata-se do desafio de BackEnd do processo seletivo da Turma XP, onde desenvolvi uma API que recebe requisições específicas e retorna os dados que serão enviados para o FrontEnd de um aplicativo de investimento em ações.

## Tecnologias Utilizadas

> Desenvolvido usando: NodeJS, ExpressJS, MYSQL

## Executando Aplicação

O projeto foi desenvolvido em Docker e para rodar a aplicação no container execute os passos a seguir:

1. Clone o repositório
- `git clone git@github.com:carolina-mascarenhas/desafio-tecnico-xp.git`;
- Entre na pasta do repositório que você acabou de clonar:
 - `cd desafio-tecnico-xp`
 
2. Executar o Docker Compose
- Rode os serviços `node` e `db` com o comando `docker-compose up -d`
- Esses serviços irão inicializar um container chamado `desafio_xp` e outro chamado `desafio_xp_db`
- Use o comando `docker exec -it desafio_xp bash`

E TCHARAAAAN :tada: :tada: Você está dentro do container!!

## Instalando Dependências

> Instale as dependências com `npm install`