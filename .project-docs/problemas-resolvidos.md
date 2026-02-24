# 🐛 ÍNDICE DE PROBLEMAS RESOLVIDOS

> Todos os bugs e dificuldades que enfrentei e como resolvi
>
> **Como usar:** Após resolver um problema difícil, adicione aqui para referência futura.
> **Benefício:** Material valioso para entrevistas técnicas!

---

## 🗓️ RESUMO

**Total de problemas documentados:** 2  
**Tempo total "perdido":** ~1h30min  
**Tempo total APRENDIDO:** Inestimável! 💎  
**Última atualização:** 23/02/2026

---

## Setup / Configuração

### 📦 ERESOLVE - Conflito de Dependências (ESLint)
- **Data:** 22/02/2026
- **Severidade:** 🟡 Média (bloqueia instalação)
- **Tempo perdido:** ~20min
- **Causa:** ESLint 10 ainda não compatível com alguns plugins
- **Sintoma:** `npm install` falha com erro ERESOLVE
- **Solução:** 
  ```bash
  npm install [pacotes] --legacy-peer-deps
  ```
- **Por que funciona:** Ignora conflitos de peer dependencies (modo NPM v6)
- **Aprendizado:** 
  - Entender versionamento semver
  - Diferença entre `--legacy-peer-deps` e `--force`
  - Ler mensagens de erro completas (não só a primeira linha)
- **Prevenção futura:** Sempre verificar compatibilidade de versões antes de instalar
- **Link:** [Ver detalhes](2026-02-22-semana1.md#conceito-novo-2)

---

## Componentes / Renderização

### 🔴 Card não renderizava - Bug do Return Esquecido
- **Data:** 23/02/2026
- **Severidade:** 🔴 Alta (componente invisível, sem erro)
- **Tempo perdido:** ~1h (mas valeu muito!)
- **Causa:** Arrow function com `{}` sem `return`
- **Sintoma:** 
  - Tela completamente branca
  - Nenhum erro no console
  - DevTools mostra `<div id="root">` vazio
  
- **Tentativas que NÃO funcionaram:**
  1. ❌ Corrigir comentários JSX → Não era isso
  2. ❌ Forçar estilo inline → Ainda invisível
  3. ❌ Verificar Tailwind → CSS não era o problema
  
- **Processo de debugging (FUNCIONOU!):**
  1. ✅ Teste de "vida" com `<h1>TESTE</h1>` → App.jsx funcionava
  2. ✅ Inspeção do DOM (F12) → Nenhum HTML gerado
  3. ✅ Análise do código → Faltava `return`!

- **Código problemático:**
  ```jsx
  // ❌ ERRADO
  const Card = ({ children, className = "" }) => {
      <div className={`...`}>
        {children}
      </div>
  }
  ```

- **Solução aplicada:**
  ```jsx
  // ✅ CORRETO (return implícito)
  const Card = ({ children, className = "" }) => (
      <div className={`...`}>
        {children}
      </div>
  );
  ```

- **Por que funciona:** 
  - Com `{}`, JavaScript espera `return` explícito
  - Com `()`, return é implícito (automático)
  - Sem return, função retorna `undefined` → React não renderiza nada

- **Por que não deu erro no console:**
  - Não é erro de sintaxe (código JavaScript válido)
  - Função pode não retornar nada
  - React apenas interpreta como "componente vazio"

- **Aprendizado PROFUNDO:** 
  1. **Debugging sistemático funciona** - Eliminar hipóteses uma por uma
  2. **Arrow functions têm 2 sintaxes** - `=> {}` vs `=> ()`
  3. **DevTools é essencial** - Sempre inspecionar o DOM
  4. **Erros silenciosos são piores** - Prefiro erro vermelho no console
  5. **Ler código com atenção** - O problema estava "na cara" o tempo todo

- **Prevenção futura:** 
  - Usar ESLint com regra para detectar componentes sem return
  - Sempre inspecionar DOM quando componente não aparece
  - Preferir return implícito (menos chance de esquecer)

- **Dica para outros devs:**
  ```
  Se seu componente não renderiza e não dá erro:
  1. Abra DevTools (F12)
  2. Vá em Elements
  3. Procure o HTML do seu componente
  4. Se não existe → problema no return da função
  ```

- **Link:** [Ver processo completo](2026-02-23-semana1.md#dificuldade-1)

---

## Firebase / Backend

### 🔥 [Aguardando FASE 5]
- **Data:** [Pendente]
- **Problemas esperados:** Variáveis de ambiente, CORS, auth
- **Status:** ⏳ Será preenchido quando chegar nessa fase

---

## Testes

### ✅ [Aguardando FASE 6]
- **Data:** [Pendente]
- **Problemas esperados:** Configuração Vitest, mocks
- **Status:** ⏳ Será preenchido quando chegar nessa fase

---

## 📊 ESTATÍSTICAS

### Por Categoria:
- **Setup/Config:** 1 problema
- **Componentes:** 1 problema
- **Backend:** 0 (pendente)
- **Testes:** 0 (pendente)

### Por Severidade:
- 🔴 **Alta** (bloqueia funcionalidade): 1
- 🟡 **Média** (bloqueia progresso): 1
- 🟢 **Baixa** (só inconveniente): 0

### Por Tempo Perdido:
- **< 30min:** 1 problema
- **30min - 1h:** 0 problemas
- **> 1h:** 1 problema

---

## 💡 PADRÕES IDENTIFICADOS

### 🎯 Tipos de problema que mais enfrento:
1. **Erros de sintaxe silenciosos** (sem mensagem de erro clara)
2. **Conflitos de dependências** (versões incompatíveis)

### 📈 Minha evolução em debugging:
- **Antes:** Tentava coisas aleatórias, esperando que funcionasse
- **Agora:** Processo sistemático - eliminar hipóteses, usar DevTools
- **Próximo nível:** Escrever testes para prevenir bugs

### 🛠️ Ferramentas que mais me salvam:
1. **DevTools (F12)** - Inspeção do DOM
2. **ESLint** - Pega erros antes de rodar
3. **Gemini/Claude** - Explicam o "por quê", não só o "como"

---

## 📚 LIÇÕES APRENDIDAS

### ✅ O que funciona:
- Ler mensagens de erro COM CALMA
- Eliminar hipóteses uma por uma
- Inspecionar o DOM quando componente não aparece
- Documentar o problema (ajuda a pensar)

### ❌ O que NÃO funciona:
- Tentativa e erro aleatória
- Assumir que "só instalar resolve"
- Copiar código sem entender
- Ter pressa (debugging com pressa = mais tempo perdido)

---

## 🔄 TEMPLATE PARA ADICIONAR NOVOS PROBLEMAS

Quando resolver um bug importante, adicione aqui:

```markdown
### [Emoji] Título do Problema
- **Data:** DD/MM/YYYY
- **Severidade:** 🔴 Alta / 🟡 Média / 🟢 Baixa
- **Tempo perdido:** Xh Ymin
- **Causa:** [Raiz do problema]
- **Sintoma:** [Como se manifestou]
- **Tentativas que NÃO funcionaram:**
  1. ❌ [Tentativa 1]
  2. ❌ [Tentativa 2]
- **Solução:**
```código```
- **Por que funciona:** [Explicação]
- **Aprendizado:** [O que aprendi]
- **Prevenção futura:** [Como evitar]
- **Link:** [Ver detalhes](arquivo-diario.md#ancora)
```

---

## 🎓 MATERIAIS DE ESTUDO GERADOS

Bugs que viraram oportunidade de aprendizado:

1. **Arrow Functions** - Return implícito vs explícito
   - [Ver conceito no diário](2026-02-23-semana1.md#conceito-novo-1)
   
2. **Dependency Management** - npm, semver, peer dependencies
   - [Ver conceito no diário](2026-02-22-semana1.md#conceito-novo-2)

3. **Debugging Sistemático** - Processo de eliminação de hipóteses
   - [Ver conceito no diário](2026-02-23-semana1.md#conceito-novo-3)

---

**📌 Última atualização:** 23/02/2026 às 14:30

