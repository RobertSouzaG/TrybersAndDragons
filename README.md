### ⚒️ Trybers and Dragons 🐉
Bem-vindo ao projeto Trybers and Dragons! Este é um jogo emocionante e educativo que combina o universo dos programadores (Trybers) com a fantasia dos dragões. Esse backend foi desenvolvido com base em princípios de programação orientada a objetos.

<img src="https://user-images.githubusercontent.com/104791582/215762786-64898841-d6b0-4ae2-96e4-bd4c49aa48dd.jpg">

#### Sobre o Projeto
Trybers and Dragons é um jogo inspirado na jornada de aprendizado de desenvolvedores, representada pela jornada de heróis enfrentando dragões. O jogo utiliza cria uma estrutura sólida e modular, facilitando a expansão e manutenção do código.

#### Como Contribuir
Ficaría muito feliz com sua contribuição para o Trybers and Dragons! Se você deseja adicionar novos recursos ou melhorar a documentação, siga estes passos:

Fork do repositório
Crie uma branch para sua contribuição: git checkout -b minha-contribuicao
Faça suas alterações
Commit e envie as alterações: git commit -m "Minha contribuição"
Faça push para a sua branch: git push origin minha-contribuicao
Abra um Pull Request

### ▶️ Rodando o Projeto

<details>
  <summary>
    <strong> 🐋 Docker ou Localmente </strong>
  </summary>
  <br>
  
## Com Docker

Rode o serviço node com o comando docker-compose up -d.

<li>Esse serviço irá inicializar um container chamado trybers_and_dragons.</li>
<li>A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.</li>
<br>
Use o comando docker exec -it trybers_and_dragons bash.

<li>Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.</li>
<br>
<h4>Instale as dependências [Caso existam] com npm install ⚠️ Atenção ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.</h4>

## Local

<h4>Instale as dependências [Caso existam] com npm install ⚠️ Atenção ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador. ✨ Dica: Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.</h4>
</details>
