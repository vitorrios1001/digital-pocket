# Digital Pocket - Frontend

O frontend do Digital Pocket foi desenvolvido em React usando Vite como bundler e outras bibliotecas como Radix UI para componentes e React Hook Form para formulários.

## Tecnologias

- React 18
- Vite
- TailwindCSS
- Radix UI
- React Hook Form
- Zod para validação de dados

## Instalação

### Requisitos

- **Node.js** >= 20
- **npm** >= 8

### Rodando o Frontend

Após clonar o repositório e instalar as dependências, navegue até a pasta do frontend e inicie o servidor de desenvolvimento.

```bash
cd packages/frontend
npm run dev
```

Isso iniciará o frontend em modo de desenvolvimento. Acesse [http://localhost:5173/](http://localhost:5173/) para ver a aplicação.

### Build

Para gerar uma versão de produção do frontend:

```bash
npm run build
```

Isso criará os arquivos de produção na pasta `dist`.

### Preview

Para pré-visualizar a versão de produção após o build:

```bash
npm run preview
```

---

### Estrutura de Pastas

```
frontend/
├── public/             # Arquivos públicos
├── src/
│   ├── components/     # Componentes React
│   ├── assets/         # Assets da aplicação
│   ├── http/           # Funções de fetch para requisições ao backend
├── package.json        # Definições de scripts e dependências
└── README.md
```