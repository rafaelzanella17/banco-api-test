# banco-api-test

Projeto de automação de testes para a API REST do repositório [banco-api](https://github.com/juliodelimas/banco-api).  
Desenvolvido com foco em validar endpoints e comportamentos da API de forma automatizada.

## Objetivo

Automatizar os testes da API `banco-api` utilizando ferramentas modernas de teste para garantir a confiabilidade e estabilidade das funcionalidades expostas.

## Stack Utilizada

- **JavaScript (ES6+)**
- [Mocha](https://mochajs.org/): Framework de testes
- [Chai](https://www.chaijs.com/): Biblioteca de asserções
- [Supertest](https://www.npmjs.com/package/supertest): Testes HTTP para APIs REST
- [Mochawesome](https://www.npmjs.com/package/mochawesome): Geração de relatórios em HTML

## Estrutura de Diretórios

```bash
banco-api-test/
├── test/                  # Testes organizados por funcionalidades
│   ├── login.test.js
│   └── transacoes.test.js
├── mochawesome-report/   # Relatório HTML gerado após execução dos testes
├── .env                  # Arquivo com variáveis de ambiente (não versionado)
├── package.json
└── README.md
```

## Variáveis de Ambiente

Antes de rodar os testes, crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

Substitua a URL conforme o ambiente onde a API estiver rodando.

## Executando os Testes

### Instalar dependências
```bash
npm install
```

### Executar todos os testes com geração de relatório
```bash
npm test
```

Após a execução, um relatório HTML será gerado automaticamente na pasta `mochawesome-report`.

Abra o arquivo `mochawesome-report/mochawesome.html` em seu navegador para visualizar o relatório completo.


---

Este projeto foi desenvolvido para fins educacionais e de prática em testes de API REST.
