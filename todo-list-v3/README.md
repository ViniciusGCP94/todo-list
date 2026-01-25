# 📝 Todo List Pro - Engenharia de Processo (v3)

Este projeto marca o momento em que deixei de apenas "escrever código" para **projetar soluções**. O foco desta versão foi a transição consciente do JavaScript Vanilla para o ecossistema React, documentando cada obstáculo como uma oportunidade de aprendizado.

## 🧠 Mentalidade de Aprendizado: O que este projeto representa?

Para mim, aprender a aprender significa entender o "porquê" por trás das ferramentas. Neste projeto, foquei em três pilares:

### 1. Migração de Paradigma (Adaptabilidade)
* Realizei a transição de um modelo **imperativo** (v2), onde a manipulação do DOM era manual, para um modelo **declarativo** (v3).
* No React, passei a utilizar o estado como a única fonte da verdade, permitindo que a interface reaja de forma previsível às mudanças nos dados.

### 2. Resolução de Problemas Reais (Resiliência)
* **Fluxo de Dados**: Identifiquei e corrigi um erro de comunicação onde o componente `TaskForm` não disparava a criação de tarefas devido a uma divergência no nome das *props* recebidas.
* **Gerenciamento de Erros no Git**: Superei um erro crítico de "not a git repository" causado por tentar executar comandos fora do diretório correto e arquivos travados pelo sistema.
* **Recuperação de Desastres**: Utilizei comandos avançados de recuperação (`git reset --hard` e `git checkout -f`) para restaurar a integridade do projeto após falhas na troca de branches.

### 3. Atenção ao Detalhe e UX
* Implementei lógica de **micro-interações** para evitar que as tarefas desapareçam bruscamente da interface.
* Utilizei o estado `isClosing` e a função `setTimeout` no `TaskItem.jsx` para garantir um feedback visual suave (animação de saída) antes da atualização definitiva do estado.

---

## 🛠️ Especificações Técnicas Implementadas

* **Componentização**: Divisão da interface em partes independentes e reutilizáveis, como `TaskForm` e `TaskItem`.
* **Custom Hooks**: Isolação de toda a lógica de negócio e regras de CRUD no hook `useTasks.js`, mantendo os componentes visuais focados apenas na apresentação.
* **Persistência de Dados**: Sincronização automática com o `localStorage` através de `useEffect`, garantindo a permanência dos dados entre sessões.
* **Tailwind CSS**: Implementação de design responsivo e moderno utilizando classes utilitárias.

---

## 🚀 Como este projeto contribuiu para o meu crescimento?

Este projeto me ensinou a importância da **consciência situacional** no desenvolvimento. Além do código, aprendi a diagnosticar falhas no ambiente de trabalho (como o erro de diretório no terminal externo) e a manter a calma para recuperar arquivos que pareciam perdidos no banco de dados do Git. Resolver esses problemas de infraestrutura foi um passo fundamental para a minha maturidade técnica.

---

## 🏗️ Como Executar
1. Clone o repositório.
2. Navegue até a pasta: `cd todo-list-v3`.
3. Instale as dependências: `npm install`.
4. Inicie o projeto: `npm run dev`.

---

## 📸 Visual do Projeto

![Preview do Projeto](link-da-sua-imagem-ou-gif-aqui)

---

## 🗺️ Roadmap de Evolução

- [x] Migração para React (V3)
- [ ] Refatoração de Modais para **React Portal** (Para desbloquear animações de transform)
- [ ] Implementação de Testes Unitários com Vitest
- [ ] Integração com Banco de Dados (Firebase/Supabase)
- [ ] Dark Mode com Tailwind CSS

---

## Autor
### Vinicius Pereira

- GitHub: [@ViniciusGCP94](https://github.com/ViniciusGCP94)
- LinkedIn: [vinicius-gcp](https://linkedin.com/in/vinicius-gcp)
- Email: viniciusgcp94@gmail.com