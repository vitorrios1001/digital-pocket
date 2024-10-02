# Digital Pocket - Backend

O backend do Digital Pocket foi desenvolvido utilizando **Fastify** para gerenciamento das rotas e **Drizzle ORM** para manipulação do banco de dados PostgreSQL. A API é responsável por gerenciar metas, progresso semanal e outras funcionalidades da aplicação.

## Tecnologias

- **Fastify**: Framework web rápido e eficiente.
- **Drizzle ORM**: ORM leve e tipado.
- **PostgreSQL**: Banco de dados relacional.
- **Zod**: Validação de dados.

## Instalação

### Requisitos

- **Node.js** >= 18
- **PostgreSQL** >= 13 (ou usar via Docker)
- **npm run** >= 8
- **Docker** >= 20.10 (opcional, mas recomendado para rodar o banco de dados via Docker)

### Configuração do Banco de Dados

#### Opção 1: Configuração Local

Caso deseje rodar o banco de dados localmente, crie um arquivo `.env` na raiz do backend (`packages/backend/`) com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"
```

Certifique-se de que o PostgreSQL esteja rodando na porta 5432 e que o usuário e senha correspondam aos valores fornecidos.

#### Opção 2: Rodar o Banco de Dados com Docker Compose

Se preferir rodar o banco de dados via Docker, você pode utilizar o arquivo `docker-compose.yml` configurado no projeto. Isso facilitará a configuração do banco de dados PostgreSQL.

1. **Verifique o arquivo `.env`:**
   
   Certifique-se de que o arquivo `.env` contém as credenciais corretas para o Docker Compose:

   ```env
   DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"
   ```

2. **Subir o Banco de Dados com Docker Compose:**

   Navegue até a pasta raiz do seu projeto (onde o arquivo `docker-compose.yml` está localizado) e execute o seguinte comando:

   ```bash
   docker compose up -d
   ```

   Isso irá baixar e rodar a imagem do PostgreSQL no Docker, configurando o banco de dados conforme especificado no `docker-compose.yml`.

3. **Verificar o Banco de Dados:**

   Verifique se o serviço PostgreSQL está rodando corretamente com o seguinte comando:

   ```bash
   docker ps
   ```

   Certifique-se de que o container do PostgreSQL está ativo.

### Instalar Dependências

Navegue até a pasta do backend e instale as dependências:

```bash
cd packages/backend
npm install
```

### Rodar Migrações

Antes de rodar a aplicação, execute as migrações para configurar o banco de dados:

```bash
npm run db:migrate
```

Isso criará as tabelas necessárias no banco de dados.

### Rodar o Backend

Para rodar o servidor backend em modo de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor Fastify em modo watch.

---

### Scripts Úteis

- **`npm run db:generate`**: Gera o esquema do banco de dados.
- **`npm run db:migrate`**: Executa as migrações de banco de dados.
- **`npm run db:studio`**: Abre uma interface visual para gerenciar o banco de dados.
- **`npm run seed`**: Popula o banco de dados com dados iniciais.

### Estrutura de Pastas

```
backend/
├── src/
│   ├── db/               # Configuração e seed do banco de dados
│   ├── http/             # Rotas HTTP e controladores
│   └── functions/        # Funções que serão invocadas pelas rotas
├── .env                  # Variáveis de ambiente
├── package.json          # Definições de scripts e dependências
└── README.md
```

---

### Docker Compose

Aqui está a configuração do arquivo `docker-compose.yml` utilizado para rodar o PostgreSQL com Docker:

```yaml
name: pocket-js-server

services:
  pg:
    image: bitnami/postgresql:13.16.0
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=inorbit
```

Para rodar o banco de dados com essa configuração, use o comando `docker compose up -d` conforme explicado na seção [Rodar o Banco de Dados com Docker Compose](#opção-2-rodar-o-banco-de-dados-com-docker-compose).
