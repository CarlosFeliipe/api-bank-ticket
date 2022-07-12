# Projeto back-end com Typescript e Jest
Este Projeto foi desenvolvido para fins da empresa Ewally, trata-se de um bank, onde você passa por parametro alguma linha digitavel, e o backend retorna informações dessa linha digitavel, como data, valor, barCode e verifica se o mesmo é válido.

# Tecnologias
Essa api foi desenvolvida com nodejs e 100% de typescript, padrão de projeto SOLID e AWS Lambda, AWS Gateway.

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