# React - Kanban board

Para executar o projeto, utilize:

```bash
yarn install
```

e depois:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

### Login

Use:

```bash
usuário: "letscode"
senha: "lets@123"
```

---

### API

Se necessário, altere a url da API no arquivo `.env.local`.

---

### Observações

- O projeto foi desenvolvido e testado utilizando apenas o `yarn`;

- Componentes que deveriam ter a mesma lógica, eu utilizei diferentes abordagens de hooks para manipulação de estados (por exemplo o forumlário de login com useState e o formulário para adicionar uma tarefa com useRef), apenas para mostrar as possibilidades - sendo uma mais performática que a outra -;

- Utilizei o mínimo possível de bibliotecas e criei os componentes e hooks base para o funcionamento do projeto manualmente;

- Adicionei uma tela de login e criei a rota com o _board_ como rota autenticada para facilitar o uso da API;

- Modifiquei um pouco a usabilidade proposta no teste para ficar com uma experiência melhor:

  - Para alterar os cards entre as colunas basta utilizar `drag'n drop` ou utilizar o select indicativo no modal de edição/adição;

  - Para habilitar o modo de edição, no modal de visualização, basta clicar em cima da descrição.

- Mesmo podendo fazer o teste em 72 horas, por questões pessoais só puder utilizar 6 horas para fazer o projeto, portanto não fiz algumas configurações adicionais como adição do Dockerfile para criação de imagem e container docker, criação dos testes unitários e separação dos componentes utilizando o Atomic Design. Também por questão de tempo eu não fiz nenhuma tratativa de estado de `loading`, já que os testes são feitos com a API local e as respostas são praticamente instantâneas - porém eu tratei todas mensagens de sucesso e erro -.
