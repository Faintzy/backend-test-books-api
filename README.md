
# ORB Music - Books API

### Objetivo

Seu objetivo é construir uma API restful onde é possível cadastrar, consultar e remover registros num simples sistema de registro de livros.

##### Escopo
- A API deverá permitir acesso a 2 tipos de usuários: Autores e Gerentes
- Autores somente terão acesso aos seus livros
- Gerentes terão acesso a todo o cadastro de livros
- A API deverá conter os endpoints necessários apenas para consulta, inclusão e remoção dos livros. Além é claro de login e logout.
- O cadastro dos usuário não faz parte desse escopo, os usuários podem ser inseridos diretamente no banco de dados
 
##### Entrega

É esperado como retorno desse projeto:
- Código da API
- Script para criação do banco de dados
- running.txt ( arquivo texto explicando como fazer para levantar sua API )
- development.txt ( arquivo texto explicando os desafios encontrados, soluções apresentadas e melhorias que teria feito caso tivesse mais tempo )

##### Modelo de dados

Sua base de dados precisa ter no mínimo 3 tabelas:
- Usuarios ( id, nome, email, perfil, senha )
- Autores ( id, nome, email )
- Livros ( isbn, titulo, autor )

##### Ferramentas

- Você pode usar a ferramenta que desejar e se sentir mais confortável para o desenvolvimento do seu projeto
- Você terá a opção de usar as linguagens Python ou NodeJS para montar sua API, usando qualquer framework que achar necessário ( explicando no development.txt de forma simples o porquê da sua escolha ) 
- Monte o SQL criação do Banco de dados para utilização no MySQL ou PostgreSQL, o que você se sentir mais confortável.

##### Processo

- Você deverá "forkar" esse repositório ou criar uma branch ***dev-test-<seunome>*** e realizar todo o desenvolvimento nela
- O tempo para o desenvolvimento do projeto será acordado durante a primeira entrevista, mas será em torno de 1 semana.
