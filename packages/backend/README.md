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
- **PostgreSQL** >= 13
- **npm run** >= 8

### Configuração do Banco de Dados

O backend utiliza PostgreSQL como banco de dados. Para configurar o banco de dados, crie um arquivo `.env` na raiz do backend (`packages/backend/`) com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"
```

Certifique-se de que o PostgreSQL esteja rodando na porta 5432 e que o usuário e senha correspondam aos valores fornecidos.

### Instalar Dependências

Navegue até a pasta do backend e instale as dependências:

```bash
cd packages/backend
npm run install
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
│   └── models/           # Modelos do banco de dados
├── .env                  # Variáveis de ambiente
├── package.json          # Definições de scripts e dependências
└── README.md
```