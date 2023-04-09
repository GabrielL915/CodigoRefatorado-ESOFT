<h1>Codigo Refatorado -ESOFT7s</h1>

<p>Este é um projeto de exemplo que demonstra como usar Node.js, TypeScript, Express e Jest para criar um servidor que permite fazer operações CRUD em usuários e produtos.</p>

<h2>Instalação</h2>

<p>Clone este repositório em sua máquina local:</p>

<pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></pre>

<p>Acesse a pasta do projeto:</p>

<pre><code>cd seu-repositorio</code></pre>

<p>Instale as dependências:</p>

<pre><code>npm install</code></pre>

<p>Inicie o servidor:</p>

<pre><code>npm start</code></pre>

<p>O servidor estará disponível em <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2>Endpoints</h2>

<h3>Usuários</h3>

<ul>
  <li>GET /users/findall - Retorna uma lista de todos os usuários cadastrados.</li>
  <li>GET /users/find/:id - Retorna um usuário específico com base no ID fornecido.</li>
  <li>POST /users/create - Cria um novo usuário.</li>
  <li>PUT /users/update/:id - Atualiza um usuário existente com base no ID fornecido.</li>
  <li>DELETE /users/delete/:id - Exclui um usuário com base no ID fornecido.</li>
</ul>

<h3>Produtos</h3>

<ul>
  <li>GET /products/findall - Retorna uma lista de todos os produtos cadastrados.</li>
  <li>GET /products/find/:id - Retorna um produto específico com base no ID fornecido.</li>
  <li>POST /products/create - Cria um novo produto.</li>
  <li>PUT /products/update/:id - Atualiza um produto existente com base no ID fornecido.</li>
  <li>DELETE /products/delete/:id - Exclui um produto com base no ID fornecido.</li>
</ul>

<h2>Testes</h2>

<p>Este projeto inclui testes usando o Jest.</p>

<p>Para executar os testes, execute o seguinte comando:</p>

<pre><code>npm test</code></pre>

<p>Este comando irá executar todos os testes do projeto e fornecerá informações sobre a cobertura de código no final. Você pode ver um relatório mais detalhado sobre a cobertura de código executando o seguinte comando:</p>

<pre><code>npx jest --coverage</code></pre>
