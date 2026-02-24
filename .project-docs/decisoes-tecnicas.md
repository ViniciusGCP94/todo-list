# 📋 ÍNDICE DE DECISÕES TÉCNICAS

> Todas as decisões importantes do projeto em um só lugar
> 
> **Como usar:** Ao fazer uma nova entrada no diário, adicione as decisões importantes aqui também.
> **Formato:** Uma linha por decisão + link para ver detalhes no diário.

---

## 🗓️ RESUMO

**Total de decisões documentadas:** 2  
**Última atualização:** 23/02/2026

---

## Stack Principal

### ⚡ Vite vs Create React App
- **Data:** 22/02/2026
- **Escolha:** Vite (já estava usando)
- **Motivo:** Build 10x mais rápido, HMR instantâneo
- **Status:** ✅ Implementado
- **Link:** [Ver no diário](2026-02-22-semana1.md)

### 🗄️ Zustand vs Redux vs Context API
- **Data:** 22/02/2026
- **Escolha:** Zustand
- **Motivo:** Simplicidade, menos boilerplate, performance similar
- **Status:** 🔄 A implementar (FASE 4)
- **Link:** [Ver no diário](2026-02-22-semana1.md)

---

## Componentes e UI

### 🔙 Arrow Function: Return Implícito vs Explícito
- **Data:** 23/02/2026
- **Contexto:** Criação do componente Card
- **Opções consideradas:**
  1. Return explícito `=> { return ... }`
  2. Return implícito `=> (...)`
- **Escolha:** Return implícito (Opção 2)
- **Motivo:** 
  - Código mais limpo e conciso
  - Padrão usado por devs experientes
  - Quero aprender a escrever código "sênior"
- **Status:** ✅ Implementado
- **Aprendizado:** Com `{}` precisa de `return`, com `()` é automático
- **Link:** [Ver detalhes](2026-02-23-semana1.md#decisão-1)

### ♻️ Reutilizar vs Criar Componentes do Zero
- **Data:** 23/02/2026
- **Contexto:** Precisava de Select, Button e Input para forms
- **Opções consideradas:**
  1. Criar tudo do zero
  2. Reutilizar componentes existentes e adaptar
- **Escolha:** Reutilizar e adaptar (Opção 2)
- **Motivo:**
  - Já tinha Select e Button funcionando
  - Economizou ~1h de trabalho
  - Prática profissional: não reinventar a roda
- **Status:** ✅ Implementado
- **Link:** [Ver detalhes](2026-02-23-semana1.md#decisão-2)

---

## Gerenciamento de Dependências

### 📦 Como resolver conflitos ERESOLVE
- **Data:** 22/02/2026
- **Contexto:** Instalação de dependências com conflito de versão
- **Opções consideradas:**
  1. `--legacy-peer-deps` (ignorar conflitos, modo NPM v6)
  2. `--force` (forçar instalação)
- **Escolha:** `--legacy-peer-deps` (Opção 1)
- **Motivo:**
  - Mais seguro que `--force`
  - Padrão para projetos em migração
  - Evita duplicidade de pacotes
- **Status:** ✅ Implementado
- **Comando usado:** 
  ```bash
  npm install [pacotes] --legacy-peer-deps
  ```
- **Link:** [Ver detalhes](2026-02-22-semana1.md#conceito-novo-2)

---

## Backend / Infraestrutura

### 🔥 Firebase vs Backend Próprio
- **Data:** [Pendente - FASE 5]
- **Escolha:** Firebase (planejado)
- **Motivo:** Foco em frontend, auth pronto, zero config servidor
- **Status:** ⏳ Aguardando implementação
- **Link:** [Ver no GUIA_MIGRACAO.md]

---

## Animações

### 🎬 Framer Motion vs CSS Transitions
- **Data:** [Pendente - FASE 2/7]
- **Escolha:** Framer Motion (planejado)
- **Motivo:** Animações complexas mais fáceis, biblioteca padrão
- **Status:** ⏳ Aguardando implementação
- **Link:** [Ver no GUIA_MIGRACAO.md]

---

## 📊 ESTATÍSTICAS

### Por Categoria:
- **Stack Principal:** 2 decisões
- **Componentes/UI:** 2 decisões  
- **Dependências:** 1 decisão
- **Backend:** 0 decisões (pendente)
- **Animações:** 0 decisões (pendente)

### Por Status:
- ✅ **Implementado:** 4
- ⏳ **Planejado:** 2
- 🔄 **Em progresso:** 1

---

## 💡 PADRÕES IDENTIFICADOS

### 🎯 Minhas preferências técnicas:
1. **Ferramentas modernas** - Escolho Vite em vez de CRA
2. **Simplicidade** - Escolho Zustand em vez de Redux
3. **Código limpo** - Prefiro return implícito
4. **Praticidade** - Reutilizo componentes quando possível

### 📈 Evolução:
- **Semana 1:** Foco em setup e componentes base
- **Próximas semanas:** Backend, estado global, testes

---

## 🔄 TEMPLATE PARA ADICIONAR NOVAS DECISÕES

Quando tomar uma decisão técnica importante, adicione aqui:

```markdown
### [Emoji] Título da Decisão
- **Data:** DD/MM/YYYY
- **Contexto:** [O que estava fazendo]
- **Opções consideradas:**
  1. Opção A - Prós/Contras
  2. Opção B - Prós/Contras
- **Escolha:** [A ou B]
- **Motivo:** [Por que escolheu]
- **Status:** [✅ Implementado / ⏳ Planejado / 🔄 Em progresso]
- **Link:** [Ver detalhes](arquivo-diario.md#ancora)
```

---

**📌 Última atualização:** 23/02/2026 às 14:30