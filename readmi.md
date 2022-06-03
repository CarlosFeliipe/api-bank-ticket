# Projeto back-end com Typescript e Jest
Este projeto usa dotenv para definir as variáveis ​​de ambiente.

# Configurar Variáveis ​​de Ambiente
Este projeto tem um arquivo chamado .env.example que instrui quais são as variáveis ​​env necessárias no arquivo .env

# Executar aplicativo no ambiente de desenvolvimento
```bash
  yarn dev
  or
  npm run dev
```

# Construir aplicativo
```bash
  yarn build
  or
  npm run build
```

# Curl de exemplo

```ticket
  curl --location --request GET 'http://localhost:8080/boleto/26091408099776913423632700000006190050000019446'
```

```convenio
  curl --location --request GET 'http://localhost:8080/boleto/828900000008509100181711109222814012358741712157'
```

# Para rodar os testes unitário

```test
  npm run test
```