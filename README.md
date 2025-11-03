# Blog Top 5 Boxeadores do Chile

Landing page/blog otimizado para SEO sobre os 5 maiores boxeadores chilenos da história.

## 📋 Funcionalidades

- Design moderno e responsivo
- Otimizado para SEO com palavras-chave estratégicas
- Estrutura de blog com artigos individuais
- Imagens otimizadas com alt text
- Seções expandíveis para mais informações
- Schema.org markup para melhor indexação

## 🚀 Como Fazer Deploy no GitHub

### Passo 1: Criar Conta no GitHub
1. Acesse [github.com](https://github.com)
2. Crie uma conta (se ainda não tiver)
3. Faça login

### Passo 2: Criar Novo Repositório no GitHub
1. Clique no botão **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Nome do repositório: `blog-boxeadores-chile` (ou outro nome de sua escolha)
4. Deixe como **Público** (Public)
5. **NÃO** marque "Add a README file" (já temos um)
6. Clique em **"Create repository"**

### Passo 3: Instalar Git (se necessário)
Se você não tem Git instalado:
1. Baixe em: https://git-scm.com/download/win
2. Instale seguindo o assistente

### Passo 4: Configurar Git no Terminal

Abra o PowerShell ou Terminal no diretório do projeto e execute:

```bash
# Configurar seu nome (use seu nome real ou GitHub username)
git config --global user.name "Seu Nome"

# Configurar seu email (use o email do GitHub)
git config --global user.email "seu.email@exemplo.com"
```

### Passo 5: Inicializar Repositório Local

No terminal, dentro da pasta do projeto, execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit: Blog Top 5 Boxeadores do Chile"
```

### Passo 6: Conectar com GitHub

```bash
# Adicionar repositório remoto do GitHub
# SUBSTITUA 'seu-usuario' pelo seu username do GitHub
git remote add origin https://github.com/seu-usuario/blog-boxeadores-chile.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar código para GitHub
git branch -M main
git push -u origin main
```

### Passo 7: Publicar no GitHub Pages

1. No GitHub, vá até seu repositório
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione a branch **main**
5. Clique em **Save**
6. Aguarde alguns minutos
7. Sua página estará disponível em:
   `https://seu-usuario.github.io/blog-boxeadores-chile/`

## 📁 Estrutura do Projeto

```
WhitePage Futebol/
├── index.html          # Página principal do blog
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para funcionalidades
└── README.md           # Este arquivo
```

## 🔄 Comandos Úteis para Atualizar o GitHub

Depois do setup inicial, para atualizar seu repositório:

```bash
# Ver status dos arquivos modificados
git status

# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem
git commit -m "Descrição da alteração"

# Enviar para GitHub
git push
```

## 📝 Notas

- O projeto está otimizado para SEO
- As imagens usam URLs do Unsplash (carregam automaticamente)
- Design totalmente responsivo
- Compatível com todos os navegadores modernos

## 🎯 Boxeadores Incluídos

1. **Arturo Godoy** - O Desafiante de Joe Louis
2. **Martín Vargas** - O Ícone Nacional
3. **Godfrey Stevens** - O Desafiante Mundial
4. **Benedicto Villablanca** - O Primeiro Campeão Mundial
5. **Alfredo Cornejo** - Ícone da Era Dourada

---

Desenvolvido com ❤️ para celebrar a história do boxe chileno

