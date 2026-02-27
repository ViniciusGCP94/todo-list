# 💡 BACKLOG DE IDEIAS

> Ideias para implementar depois do MVP
>
> **Como usar:** Quando tiver uma ideia, adicione aqui. Revise semanalmente para priorizar.
> **Regra:** Foque no MVP primeiro! Essas ideias são para DEPOIS do projeto completo.

---

## 🗓️ RESUMO

**Total de ideias:** 2  
**Implementadas:** 0  
**Em avaliação:** 2  
**Descartadas:** 0  
**Última atualização:** 23/02/2026

---

## 🟢 Alta Prioridade (fazer logo após MVP)

### 🎨 Tema Dark/Light Mode
- **O quê:** Adicionar botão toggle para alternar entre tema claro e escuro
- **Por quê:** 
  - Muitos apps modernos têm isso
  - Melhora experiência do usuário
  - Relativamente fácil de implementar
- **Como fazer:**
  - Context API ou Zustand para tema global
  - Tailwind com `dark:` classes
  - Salvar preferência no localStorage
- **Complexidade:** 🟡 Média (2-3 horas)
- **Prioridade:** 🟢 Alta
- **Dependências:** Nenhuma
- **Referências:** 
  - https://tailwindcss.com/docs/dark-mode
  - https://github.com/pacocoursey/next-themes
- **Status:** ⏳ Planejado para pós-MVP
- **Origem:** [Diário 23/02](2026-02-23-semana1.md#ideia-1)

---

## 🟡 Média Prioridade (avaliar necessidade)

### 🖱️ Drag and Drop de Tarefas
- **O quê:** Arrastar tarefas para reordenar ou mover entre projetos
- **Por quê:**
  - Interface mais interativa
  - Vi num tutorial e achei legal
  - Alguns gerenciadores de projetos têm isso
- **Como fazer:**
  - Biblioteca: `dnd-kit` (mais moderna) ou `react-beautiful-dnd`
  - Atualizar ordem no Zustand/Firebase
  - Animações suaves
- **Complexidade:** 🔴 Alta (6-8 horas)
- **Prioridade:** 🟡 Média
- **Dependências:** Estado global (Zustand) funcionando
- **Avaliação crítica:** 
  - ⚠️ **Talvez não seja necessário para MVP**
  - Usuário pode reordenar clicando em botões
  - Drag and drop é "nice to have", não essencial
- **Decisão:** 🤔 **Implementar? Talvez** - Só se sobrar tempo
- **Referências:**
  - https://docs.dndkit.com/
  - https://github.com/atlassian/react-beautiful-dnd
- **Status:** ⏳ Em avaliação
- **Origem:** [Diário 23/02](2026-02-23-semana1.md#ideia-2)

---

## 🔴 Baixa Prioridade (provavelmente não fazer)

### 📊 Gráficos e Estatísticas
- **O quê:** Dashboard com gráficos de produtividade
  - Tarefas completadas por dia/semana
  - Tempo médio por tarefa
  - Projetos mais ativos
- **Por quê:** 
  - Visualizar progresso
  - Gamificação (motivação)
- **Como fazer:**
  - Biblioteca: `recharts` ou `chart.js`
  - Calcular métricas no Zustand
  - Página separada de analytics
- **Complexidade:** 🔴 Alta (8-10 horas)
- **Prioridade:** 🔴 Baixa
- **Dependências:** Dados históricos (Firebase queries complexas)
- **Avaliação crítica:**
  - Muito complexo para benefício pequeno
  - Usuário pode ver progresso de outras formas
  - Foco deve ser em fazer tarefas, não ver gráficos
- **Decisão:** ❌ **Não implementar** (pelo menos não agora)
- **Status:** 🗑️ Provavelmente descartar
- **Origem:** Ideia própria

### 💬 Chat entre Membros do Projeto
- **O quê:** Sistema de mensagens em tempo real para equipe
- **Por quê:** Colaboração sem sair do app
- **Como fazer:**
  - Firebase Realtime Database
  - Componente de chat
  - Notificações
- **Complexidade:** 🔴 Muito Alta (15-20 horas)
- **Prioridade:** 🔴 Muito Baixa
- **Dependências:** Sistema de membros, Firebase avançado
- **Avaliação crítica:**
  - **MUITO complexo** para um projeto de portfólio
  - Pessoas já usam WhatsApp/Slack para isso
  - Foge do escopo (gerenciamento de projetos, não comunicação)
- **Decisão:** ❌ **NÃO implementar**
- **Status:** 🗑️ Descartado
- **Origem:** Ideia própria

---

## 🎯 Ideias que Vieram Durante o Desenvolvimento

### [Em breve...]
*Ideias surgem durante o processo. Anote aqui conforme aparecem!*

---

```markdown
### [Emoji] Colocar uma restrição do usuário ao ver as manutenções
- **O quê:** Quero que somente usuários de níveis altos possam ver todas as manutenções, usuários de níveis baixos vejam somente as do seu setor ou da sua máquina.
- **Por quê:** [Motivação / benefício]. Hierarquia e um profissional não tecnico não precisa saber das manutenções em outros lugares da empresa.
- **Como fazer:** [Tecnologias / abordagem]. Não sei.
- **Complexidade:** 🟢/🟡/🔴 ([X] horas)
- **Prioridade:** 🟢/🟡/🔴
- **Dependências:** [O que precisa estar pronto antes]
- **Avaliação crítica:** [Realmente precisa? Vale o tempo?]
- **Decisão:** [Implementar? / Talvez / Não]
- **Referências:** [Links úteis]
- **Status:** [Planejado / Avaliação / Descartado]
- **Origem:** Em toda empresa há niveis de hierarquia e através destes níveis você pode ou não fazer/ver algo, é algo que toda empresa tem.
```

## 📊 ESTATÍSTICAS

### Por Prioridade:
- 🟢 **Alta:** 1 ideia
- 🟡 **Média:** 1 ideia
- 🔴 **Baixa:** 2 ideias

### Por Status:
- ⏳ **Planejado:** 1
- 🤔 **Em avaliação:** 1
- 🗑️ **Descartado:** 2

### Por Complexidade:
- 🟢 **Baixa** (< 3h): 0
- 🟡 **Média** (3-8h): 1
- 🔴 **Alta** (> 8h): 3

---

## 💭 REFLEXÕES SOBRE IDEIAS

### ✅ Critérios para priorizar uma ideia:

1. **Agrega valor real ao usuário?**
   - Dark mode: ✅ Sim (conforto visual)
   - Chat: ❌ Não (fora do escopo)

2. **É viável no tempo disponível?**
   - Dark mode: ✅ Sim (2-3h)
   - Gráficos: ❌ Não (8-10h)

3. **Demonstra habilidade técnica?**
   - Drag and drop: ✅ Sim (biblioteca complexa)
   - Chat: ⚠️ Sim, mas muito complexo

4. **Está no escopo do MVP?**
   - Dark mode: 🟡 Não essencial, mas próximo
   - Chat: ❌ Totalmente fora

### ❌ Sinais de que devo descartar uma ideia:

- Leva mais de 10 horas
- Foge do escopo principal
- Usuário não precisa disso
- Já existem soluções melhores fora do app

### 🎯 Minha regra de ouro:

> "Se não está no GUIA_MIGRACAO.md original, não é MVP. Posso fazer depois."

---

## 📋 PROCESSO DE AVALIAÇÃO SEMANAL

**Toda semana, revisar este arquivo:**

1. **Novas ideias surgidas?** Adicionar na categoria certa
2. **Mudou prioridade?** Mover entre categorias
3. **Descartar alguma?** Mover para "Descartadas" com motivo
4. **Alguma virou prioridade?** Criar task no CHECKPOINT.md

**Próxima revisão:** Fim da Semana 2 (01/03/2026)

---

## 🔄 TEMPLATE PARA ADICIONAR NOVAS IDEIAS

```markdown
### [Emoji] Título da Ideia
- **O quê:** [Descrição curta]
- **Por quê:** [Motivação / benefício]
- **Como fazer:** [Tecnologias / abordagem]
- **Complexidade:** 🟢/🟡/🔴 ([X] horas)
- **Prioridade:** 🟢/🟡/🔴
- **Dependências:** [O que precisa estar pronto antes]
- **Avaliação crítica:** [Realmente precisa? Vale o tempo?]
- **Decisão:** [Implementar? / Talvez / Não]
- **Referências:** [Links úteis]
- **Status:** [Planejado / Avaliação / Descartado]
- **Origem:** [Onde surgiu a ideia]
```

---

## 🎁 IDEIAS IMPLEMENTADAS

### [Aguardando...]
*Quando implementar uma ideia, mova para cá com data e link!*

**Formato:**
```markdown
### ✅ [Ideia implementada]
- **Data implementação:** DD/MM/YYYY
- **Tempo gasto:** Xh
- **Resultado:** [Como ficou]
- **Valeu a pena?** [Análise retrospectiva]
- **Link:** [Ver commit / PR]
```

---

## 💡 INSPIRAÇÕES EXTERNAS

**Apps que me inspiram:**
- **Notion:** Workspace personalizável
- **Linear:** UI minimalista e rápida
- **Todoist:** Prioridades e filtros
- **Trello:** Drag and drop simples

**O que NÃO quero copiar:**
- Complexidade do Jira (muito pesado)
- Excesso de features do Asana

---

**📌 Última atualização:** 23/02/2026 às 14:30
