# 🚀 Guia Rápido: Integração com GitHub

## ✅ O que já foi feito:
- ✅ Repositório Git inicializado
- ✅ Arquivos adicionados ao Git
- ✅ README.md criado
- ✅ .gitignore configurado

## 📝 Próximos Passos:

### 1️⃣ Configurar Git (Primeira vez apenas)

Abra o PowerShell nesta pasta e execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**Importante:** Use o mesmo email da sua conta GitHub!

### 2️⃣ Fazer o Primeiro Commit

```bash
git commit -m "Initial commit: Blog Top 5 Boxeadores do Chile"
```

### 3️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `blog-boxeadores-chile` (ou outro nome)
3. Deixe como **Público**
4. **NÃO marque** "Add a README" (já temos)
5. Clique em **"Create repository"**

### 4️⃣ Conectar com GitHub

Após criar o repositório, GitHub mostrará comandos. Execute estes (substitua `seu-usuario`):

```bash
git branch -M main
git remote add origin https://github.com/seu-usuario/blog-boxeadores-chile.git
git push -u origin main
```

Você precisará fazer login no GitHub quando o Git solicitar.

### 5️⃣ Publicar no GitHub Pages (Para ver online)

1. No GitHub, vá em: **Settings** → **Pages**
2. Em **Source**, selecione: **main**
3. Clique em **Save**
4. Aguarde 2-3 minutos
5. Sua página estará em: `https://seu-usuario.github.io/blog-boxeadores-chile/`

---

## 🔄 Para Atualizar Depois:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

---

## ❓ Precisa de Ajuda?

- [Documentação do GitHub](https://docs.github.com)
- [Guia Git em Português](https://git-scm.com/book/pt-br/v2)

