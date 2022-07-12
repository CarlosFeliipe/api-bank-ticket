# Sobre o Projeto
Este Projeto foi desenvolvido para fins da empresa Ewally, trata-se de uma API, onde você passa por parametro alguma linha digitavel, e o backend retorna informações dessa linha digitavel, como data, valor, barCode e verifica se o mesmo é válido.

# Tecnologias Utilizadas
```bash
  Padrão de Projeto - SOLID
  Tecnologias - Node.js e 100% Typescript
  AWS - Lambda e Gateway
  GitHub
```

# Configurar Variáveis ​​de Ambiente
Crie um arquivo .env, na raiz do projeto, tem um arquivo chamado .env.example que instrui quais são as variáveis ​​env necessárias no arquivo .env

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
# Swagger
http://localhost:8080/documentacion/

# Curl de exemplo

```ticket
  curl --location --request GET 'http://localhost:8080/boleto/26091408099776913423632700000006190050000019446'
```

```convenio
  curl --location --request GET 'http://localhost:8080/boleto/828900000008509100181711109222814012358741712157'
```

# Para rodar os testes unitários

```test
  npm run test
```