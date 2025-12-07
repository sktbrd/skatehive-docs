---
sidebar_position: 4
icon: gift
---

# Sistema de Airdrop

O Sistema de Airdrop do Skatehive permite que membros da comunidade distribuam tokens para outros usuários baseado nos dados do leaderboard. Suporta tokens tanto de Hive quanto de Ethereum.

---

## 🎁 Visão Geral

Qualquer usuário conectado pode:
1. Selecionar destinatários do leaderboard
2. Escolher um token para distribuir
3. Configurar settings de distribuição
4. Executar o airdrop

O modal guia você através de um processo de 5 etapas da seleção de token até a confirmação.

---

## 💰 Tokens Suportados

### Rede Base (ERC-20)
- **HIGHER** - Token ERC-20 padrão
- **USDC** - Stablecoin

### Blockchain Hive
- **HIVE** - Token nativo Hive
- **HBD** - Hive Backed Dollars (stablecoin)

> Os tokens disponíveis dependem de quais carteiras você tem conectadas (Hive, Ethereum ou ambas).

---

## 📋 Fluxo de 5 Etapas

### Etapa 1: Seleção de Token

Escolha qual token distribuir:
- Veja suas carteiras conectadas
- Selecione dos tokens disponíveis baseado nas suas conexões
- Veja informações do token (rede, símbolo)

### Etapa 2: Configuração

Configure os parâmetros do airdrop:

| Setting | Descrição |
|---------|-----------|
| **Ordenar Por** | Como classificar destinatários (pontos, HP, NFTs, etc.) |
| **Limite** | Número de destinatários (top N usuários) |
| **Valor Total** | Total de tokens para distribuir |
| **Incluir SkateHive** | Se deve incluir a conta oficial |
| **Distribuição Ponderada** | Dividir baseado em scores vs divisão igual |
| **Mensagem Personalizada** | Mensagem opcional para o airdrop |

### Etapa 3: Preview

Revise a distribuição antes de executar:
- Lista de destinatários com suas partes
- Valor que cada usuário receberá
- Custo total incluindo taxas de gas (para ERC-20)

### Etapa 4: Preview do Anúncio

Configure o anúncio para a comunidade:
- Preview do post que será criado
- Opcionalmente inclua screenshot de visualização da rede
- Edite a mensagem se necessário

### Etapa 5: Confirmação

Execute o airdrop:
- Aprove gasto de tokens (apenas ERC-20)
- Assine e transmita transações
- Monitore progresso em tempo real
- Veja status de conclusão

---

## ⚖️ Métodos de Distribuição

### Distribuição Igual

Cada destinatário recebe o mesmo valor:
```
valor_por_usuario = valor_total / numero_de_destinatarios
```

### Distribuição Ponderada

Destinatários recebem partes proporcionais baseado em seus scores:
```
parte_usuario = (score_usuario / score_total) × valor_total
```

Usuários melhor classificados recebem mais tokens.

---

## 🔗 Detalhes Técnicos

### Airdrops ERC-20 (Rede Base)

Usa um contrato de transferência em lote para eficiência:
- Contrato: `0x8bD8F0D46c84feCBFbF270bac4Ad28bFA2c78F05`
- Requer aprovação de token antes da transferência
- Transação única para múltiplos destinatários
- Taxas de gas pagas em ETH na Base

### Airdrops Hive

Usa transferências Hive diretas via Aioha:
- Transferências enviadas sequencialmente
- Memo inclui informação do airdrop
- Sem taxas de gas (resource credits usados)

---

## 📊 Seleção de Destinatários

Destinatários são selecionados do leaderboard baseado em:

### Opções de Ordenação

| Opção | Descrição |
|-------|-----------|
| `points` | Score geral do leaderboard |
| `hp_balance` | Holdings de Hive Power |
| `skatehive_nft_balance` | Contagem de NFTs |
| `gnars_votes` | Poder de voto Gnars |
| `hbd_savings_balance` | HBD em savings |
| `post_count` | Score de atividade |

### Filtros

- Requisito mínimo de carteira ETH (para ERC-20)
- Excluir conta skatehive (opcional)
- Apenas top N usuários

---

## 📣 Anúncio

Após executar, um post de anúncio é criado:
- Postado na comunidade Skatehive no Hive
- Lista destinatários e valores
- Inclui mensagem opcional
- Pode incluir visualização da rede

---

## 💡 Dicas

1. **Verifique saldos primeiro** - Garanta que você tem tokens suficientes
2. **Comece pequeno** - Teste com um valor pequeno primeiro
3. **Use ponderado para justiça** - Recompensa top contribuidores proporcionalmente
4. **Adicione uma mensagem** - Diga aos destinatários por que estão recebendo tokens
5. **Observe taxas de gas** - Airdrops ERC-20 requerem ETH para gas

---

## 🔐 Requisitos

### Para Airdrops ERC-20
- Carteira Ethereum conectada (wagmi)
- Saldo de tokens na rede Base
- ETH para taxas de gas

### Para Airdrops Hive
- Conta Hive conectada (Aioha)
- Saldo de HIVE ou HBD
- Resource credits suficientes

---

**Recompense sua comunidade com airdrops! 🎁🛹**
