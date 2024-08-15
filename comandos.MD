criar regra : -> settings -> rules -> rulesets -> new branch rulesets

git stash -u --> guarda em nuvem

pra voltar os arquivos --> git stash pop

criar uma nova branch para cada feature que for criada, NÃO COMMITAR NA MAIN

iniciar projeto -> git init

qual versão do git instalada? --> git --version

verificar status do projeto --> git status

adicionar arquivos no repositório --> git add + nome do arquivo ou git add . quando há muitos arquivos pra subir

informar as alterações nos arquivos do projeto para o GitHub --> git commit -a -m "criação do projeto"
adiciona todos os arquivos --> git commit -a
adiciona a mensagem para o histórico de commits--> git commit -m

vincular o repositório local com o repositório remoto --> git push -u origin main

criar nova branch --> git checkout -b "teste"

excluir a branch --> git branch -D <branchname>

voltar a branch --> checkout <previous-branchname>

trocar branch --> git checkout + nome da branch

listar branch e mostrar em qual estou --> git branch

listar todas as branchs remotas --> git branch -r

listar todas as branchs remotas e locais --> git branch -a

unir códigos de uma branch aleatória com a branch principal main --> git merge teste

puxa todas as alterações do código para que seja possível trabalhar com a última versão do código --> git pull

clonar projeto --> git clone + URL do projeto para ser clonado

remove arquivos --> git clean -f

remove arquivos do índice mas não do trabalho --> git rm --cached <file>

baixa objetos e referências do repositório remoto para o repositório local --> git fetch


------------------------------------------------------------------------------------------
GIT BASH 

configuração git local --> git config user.name "Seu Nome"
git config --global user.email "email@gmail.com"

verificar se existe chave ssh --> ls -al~/.ssh

adicionar uma nova chave --> ssh-keygen -t ed25519-C "email@gmail.com"

inicializar agente-ssh --> eval "$(ssh-agent-s)"

adicionar chave ssh ao agente --> ssh-add~/.ssh/id_ed25519

copiar chave ssh clip <~/.ssh/id_ed25519.pub

adicionar chave no GitHub --> GitHub --> settings --> SSH and GPG Keys --> new SSH key --> colar

testar conexão --> ssh -T git@github.com




