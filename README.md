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
- Rode o comando `npm install` para instalar as dependências e `npm run dev` para iniciar a aplicação e a patir daí te convido a explorar os endpoints da minha API! :eyes:

3. Informações adicionais

- O arquivo com as querys para criar o banco encontra-se no arquivo `DB.sql`
- O arquivo `.env.example` deve ser renomeado para `.env`e preenchido no campo `JWT_SECRET` como você desejar

## Instalando Dependências

> Instale as dependências com `npm install`

## Tomadas de Decisão

A API foi desenvolvida utilizando o padrão de arquitetura MSC e partindo do princípio que:
- Um cliente só pode possuir uma única conta;
- As compras e vendas são realizadas entre cliente e corretora, em que essa última possui todos os ativos disponiveis para venda, e para quem o cliente realiza sua venda;
- Vários clientes podem possuir vário ativos e vários ativos podem pertencer a vários clientes.