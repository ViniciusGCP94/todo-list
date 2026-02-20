# 📝 Todo List Pro

> *"Este projeto marca o momento em que deixei de apenas escrever código para projetar soluções."*

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<div align="center">
  <video src="https://github.com/user-attachments/assets/129c863c-2a75-40aa-a2b4-90e32c7f4037" width="100%" controls autoplay muted loop>
    Seu navegador não suporta o player de vídeo.
  </video>
</div>

🔗 **[Ver projeto ao vivo](https://todo-list-zeta-rouge.vercel.app)**

---

## 💡 Motivação

Queria dominar os **fundamentos reais do React** — não apenas copiar código, mas entender o *porquê* de cada decisão. Props, estado, fluxo de dados. Escolhi uma Todo List porque a simplicidade da ideia me permitiu focar 100% nos conceitos, sem distrações.

A visão de longo prazo é que este projeto evolua para um **Sistema de Gerenciamento de Projetos** completo, com boards, prioridades e integração com banco de dados.

---

## 🧠 O que aprendi de mais importante

Este projeto foi uma aula prática de como o React **realmente** funciona por baixo dos panos.

### Fluxo Unidirecional e Subida de Estado
Entendi na prática que dados **descem** via props e eventos **sobem** via callbacks. Parece simples na teoria, mas implementar isso com componentes reais, onde o `TaskForm` precisava avisar o `App` que uma tarefa foi criada, solidificou o conceito de forma que nenhum tutorial conseguiria.

### Referência vs. Execução de Funções
O maior insight técnico do projeto. Descobri a diferença entre **passar uma função** (referência) e **executar uma função** (chamada). O pai passa a ferramenta, o filho fornece o dado na hora do clique — esse padrão mudou como eu penso em qualquer evento no React.

### Single Responsibility Principle (SRP)
Aprendi a organizar responsabilidades:
- `TaskItem` → exibe e detecta o clique
- `useTasks` → contém toda a lógica de negócio
- `App` → orquestra os componentes

Manter essa separação evitou que os componentes ficassem "inchados" e tornou o código muito mais fácil de ler e manter.

### Anatomia da Função Anônima no onClick
Com o exercício das cores, resolvi o desafio de usar **a mesma função para enviar valores diferentes**. Em vez de criar uma função para cada caso, aprendi a injetar o valor com `() => minhaFuncao(valor)` — elegante e reutilizável.

---

## 🏆 Desafios e como os resolvi

### 1. O Nome da Prop (A "Chave" de Acesso)
**Problema:** Tentei usar `onClick` como nome de prop personalizada, mas `onClick` é um evento nativo do HTML/React.

**Solução:** Entendi que props personalizadas precisam de nomes próprios (ex: `onTaskComplete`). O nome no pai deve ser **idêntico** ao nome recebido no filho — essa convenção é a "chave de acesso" da comunicação entre componentes.

---

### 2. Referência vs. Execução — O Erro do `undefined`
**Problema:** O console mostrava `undefined`. A função estava sendo executada imediatamente ao renderizar, e não no clique.

**Solução:** Aprendi a distinção fundamental:
```jsx
// ❌ Errado — executa na renderização
onClick={minhaFuncao(parametro)}

// ✅ Correto — executa no clique
onClick={() => minhaFuncao(parametro)}
```
O pai passa a **ferramenta** (referência). O filho fornece o **combustível** (parâmetro) no momento certo.

---

### 3. Comunicação Inversa — Callback Pattern
**Problema:** Props descem naturalmente (pai → filho). Mas como fazer a informação **subir**?

**Solução:** Implementei o padrão de Callback. O filho avisa o pai:
```jsx
// Pai passa a função
<TaskItem onComplete={handleComplete} />

// Filho executa com o dado
<button onClick={() => onComplete(task.id)}>Concluir</button>
```

---

### 4. Passagem Dinâmica de Parâmetros
**Problema:** Precisava da mesma função para múltiplos valores sem duplicar código.

**Solução:** Função anônima como wrapper:
```jsx
// ✅ Uma função, múltiplos valores
<button onClick={() => mudarCor('blue')}>Azul</button>
<button onClick={() => mudarCor('green')}>Verde</button>
<button onClick={() => mudarCor('yellow')}>Amarelo</button>
```

---

### 5. Resiliência no Git
**Problema:** Erro crítico de "not a git repository" e arquivos corrompidos ao trocar de branch.

**Solução:** Aprendi comandos de recuperação:
```bash
git reset --hard   # volta ao último commit estável
git checkout -f    # força a troca de branch descartando mudanças
```
Resolver problemas de infraestrutura foi tão importante quanto resolver bugs de código.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **React** | Componentização, hooks (useState, useEffect) |
| **JavaScript ES6+** | Lógica e manipulação de dados |
| **Vite** | Bundler e ambiente de desenvolvimento |
| **Tailwind CSS** | Estilização responsiva |
| **localStorage** | Persistência de dados entre sessões |
| **ESLint** | Qualidade e padronização de código |
| **Vercel** | Deploy e hospedagem |

---

## 🏗️ Arquitetura do Projeto

```
rc/
├── components/
│   ├── common/
│   │   ├── ActionButton.jsx     → Botão reutilizável de ações
│   │   └── CategorySelect.jsx   → Seletor de categorias reutilizável
│   ├── editTaskModal/
│   │   └── EditTaskModal.jsx    → Modal de edição de tarefa
│   ├── filterBar/
│   │   └── filterBar.jsx        → Barra de filtros das tarefas
│   ├── header/
│   │   └── header.jsx           → Cabeçalho da aplicação
│   ├── taskForm/
│   │   └── taskForm.jsx         → Formulário de criação de tarefas
│   ├── taskItem/
│   │   └── TaskItem.jsx         → Item individual com animação de saída
│   └── taskList/
│       └── taskList.jsx         → Lista que renderiza os TaskItems
├── constants/
│   └── categories.js            → Categorias disponíveis (fonte única de verdade)
├── hooks/
│   └── useTasks.js              → Toda a lógica de CRUD e localStorage
└── App.jsx         
```

**Decisões de arquitetura:**
- `useTasks` centraliza toda a lógica de negócio (SRP)
- `common/` agrupa componentes genuinamente reutilizáveis (`ActionButton`, `CategorySelect`)
- `constants/categories.js` como fonte única de verdade para categorias — evita duplicação
- `TaskItem` usa `isClosing` + `setTimeout` para animação suave antes de remover do estado
- Componentes visuais focados apenas em apresentação

---

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/ViniciusGCP94/todo-list.git

# Entre na pasta
cd todo-list

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

Acesse `http://localhost:5173`

---

## ✅ Funcionalidades

- [x] Adicionar tarefas
- [x] Editar tarefas (modal)
- [x] Marcar tarefas como concluídas
- [x] Remover tarefas com animação de saída
- [x] Filtrar tarefas por status/categoria
- [x] Categorizar tarefas
- [x] Persistência com localStorage
- [x] Design responsivo

---

## 🗺️ Roadmap de Evolução

- [x] Migração para React (V3)
- [x] Filtros (todas / ativas / concluídas)
- [ ] Refatoração de Modais para **React Portal**
- [ ] Remover tarefas com animação de saída
- [ ] Testes unitários com Vitest
- [ ] Integração com banco de dados (Firebase/Supabase)
- [ ] Evolução para Sistema de Gerenciamento de Projetos

---

## 👨‍💻 Autor

**Vinícius Pereira**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ViniciusGCP94)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vinicius-gcp)

---

<div align="center">
  <sub>Construído com 💚 como parte da jornada de aprendizado em desenvolvimento Front-End</sub>
</div>