# Projeto Backend - API de Gerenciamento de Produtos

Este é o repositório do projeto backend para uma API de gerenciamento de produtos e categorias. A API foi construída com Node.js, Express e utiliza o Sequelize ORM para interagir com um banco de dados MySQL.

## ✨ Funcionalidades

A API oferece endpoints para operações CRUD (Create, Read, Update, Delete) completas para os seguintes recursos:

*   **Usuários**: Gerenciamento de usuários da aplicação.
*   **Categorias**: Gerenciamento de categorias de produtos.
*   **Produtos**: Gerenciamento de produtos, com relacionamento direto a uma categoria.

## 🛠️ Tecnologias Utilizadas

*   **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor.
*   **[Express.js](https://expressjs.com/)**: Framework para construção de APIs REST.
*   **[Sequelize](https://sequelize.org/)**: ORM (Object-Relational Mapper) para Node.js, compatível com Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server.
*   **[MySQL](https://www.mysql.com/)**: Banco de dados relacional utilizado no projeto.
*   **[Dotenv](https://www.npmjs.com/package/dotenv)**: Para gerenciamento de variáveis de ambiente.
*   **[Bcrypt](https://www.npmjs.com/package/bcrypt)**: Para hashing de senhas.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura organizada para separação de responsabilidades:

```
/
├── src/
│   ├── config/
│   │   └── database.js       # Configuração da conexão com o banco de dados
│   ├── controllers/
│   │   ├── users/
│   │   ├── products/
│   │   └── category/         # Lógica de requisição e resposta (req, res)
|   ├── middleware/           # Autenticação e proteção das rotas
|   |   └── auth.js
│   ├── models/
│   │   ├── index.js          # Arquivo central que inicializa modelos e relações
│   │   ├── users/
│   │   ├── products/
│   │   └── category/         # Definição dos modelos Sequelize
│   ├── routers/
│   │   ├── users/
│   │   ├── products/
│   │   └── category/         # Definição das rotas da API
│   └── services/
│       ├── users/
│       ├── products/
│       └── category/         # Lógica de negócio e interação com o banco
├── .env.example              # Arquivo de exemplo para variáveis de ambiente
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── package.json              # Metadados do projeto e dependências
└── server.js                 # Ponto de entrada da aplicação
```

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para clonar e executar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
*   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
*   Um servidor de banco de dados [MySQL](https://www.mysql.com/) rodando localmente ou em um container Docker.

### 1. Clonar o Repositório

Abra seu terminal e clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar as Dependências

Instale todas as dependências do projeto listadas no `package.json`:

```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto. Você pode copiar o arquivo de exemplo `.env.example` para começar:

```bash
cp .env.example .env
```

Agora, abra o arquivo `.env` e preencha com as suas credenciais do banco de dados MySQL:

```env
# Configurações do Banco de Dados
DATABASE_NAME=nome_do_seu_banco
DATABASE_USER=seu_usuario_mysql
DATABASE_PASSWORD=sua_senha_mysql
DATABASE_HOST=localhost

# Porta da Aplicação
PORT=3000
```

**Importante:** Certifique-se de que o banco de dados `nome_do_seu_banco` já exista no seu servidor MySQL.

### 4. Sincronizar o Banco de Dados

O Sequelize pode criar as tabelas para você. Para isso, execute o script de sincronização (se houver um configurado) ou simplesmente inicie o servidor, pois o `sequelize.sync()` será executado.

Se você configurou um script `db` no `package.json` para isso, pode rodá-lo:
```bash
npm run db
```

### 5. Iniciar o Servidor

Execute o comando abaixo para iniciar o servidor em modo de desenvolvimento com `watch` (reinicia automaticamente ao salvar alterações):

```bash
npm run dev
```

Se tudo ocorrer bem, você verá uma mensagem no terminal indicando que o servidor está rodando na porta especificada (ex: `Servidor rodando na porta 3000`).

## 🧪 Endpoints da API

A API estará disponível em `http://localhost:3000`. 

Consulte os arquivos em `src/routers/` para a lista completa de endpoints e seus respectivos métodos HTTP.
