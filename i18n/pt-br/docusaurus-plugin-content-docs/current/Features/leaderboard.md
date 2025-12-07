---
sidebar_position: 3
icon: trophy
---

# Leaderboard

O Leaderboard do Skatehive classifica membros da comunidade baseado em seu engajamento, holdings e contribuições. Os dados são armazenados no Supabase e atualizados regularmente.

Veja em [skatehive.app/leaderboard](https://skatehive.app/leaderboard)

---

## 🏆 Visão Geral

O leaderboard rastreia assinantes da comunidade Skatehive e os classifica por **pontos**. Os pontos são calculados de múltiplos fatores incluindo:

- Holdings de Hive (HIVE, HP, HBD)
- Ativos Ethereum (votos Gnars, NFTs Skatehive)
- Atividade (posts, snaps)
- Suporte à comunidade (votos de witness, doações)

---

## 📊 Dados Rastreados

Cada usuário no leaderboard tem os seguintes dados:

| Campo | Descrição |
|-------|-----------|
| `hive_author` | Username Hive |
| `hive_balance` | Saldo HIVE líquido |
| `hp_balance` | Hive Power |
| `hbd_balance` | Saldo HBD |
| `hbd_savings_balance` | HBD em savings (15% APR) |
| `has_voted_in_witness` | Se o usuário votou no witness Skatehive |
| `eth_address` | Endereço Ethereum vinculado |
| `gnars_balance` | Holdings de NFT Gnars |
| `gnars_votes` | Poder de voto na Gnars DAO |
| `skatehive_nft_balance` | Contagem de NFTs Skatehive |
| `max_voting_power_usd` | Valor máximo do voto em USD |
| `post_count` | Score combinado de posts/snaps |
| `giveth_donations_usd` | Total doado via Giveth |
| `points` | Pontuação calculada do ranking |

---

## 📈 Cálculo de Pontos

Os pontos são calculados com os seguintes multiplicadores e limites:

### Fatores Positivos

| Fator | Multiplicador | Limite |
|-------|---------------|--------|
| Saldo HIVE | 0.1 | 1.000 HIVE |
| Saldo HP | 0.5 | 12.000 HP |
| HBD Savings | 0.2 | 1.000 HBD |
| Votos Gnars | 30 | - |
| NFTs Skatehive | 50 | - |
| Poder de Voto Máx (USD) | 1.000 | - |
| Contagem de Posts (score de atividade) | 0.1 | 3.000 |
| Voto no Witness | +1.000 pontos | - |
| Carteira ETH Vinculada | +5.000 pontos | - |
| Doações Giveth | 5 por USD | 1.000 USD máx |

### Penalidades

| Condição | Penalidade |
|----------|------------|
| Sem carteira ETH vinculada | -2.000 |
| Saldo HIVE zero | -1.000 |
| Saldo HP zero | -5.000 |
| Votos Gnars zero | -300 |
| NFTs Skatehive zero | -900 |
| HBD savings zero | -200 |
| Contagem de posts zero | -2.000 |
| Inatividade | Até -100 (dias desde último post) |

> Pontos mínimos é 0 - usuários não podem ter scores negativos.

---

## 📡 Fontes de Dados

### Blockchain Hive
- Saldos de conta (HIVE, HP, HBD)
- Vesting shares (para cálculo de HP)
- Votos de witness
- Data do último post
- Metadata (para extração de endereço ETH)

### Ethereum
- Saldo e poder de voto de NFTs Gnars
- Holdings de NFTs Skatehive
- Leitura via RPC público

### API Skatehive
- `api.skatehive.app/api/v2/activity/posts` - Scores de atividade de posts
- `api.skatehive.app/api/v2/activity/snaps` - Scores de atividade de snaps

### Giveth
- Rastreamento de doações via API Giveth
- Valores USD combinados com usernames Hive

---

## 🔄 Agenda de Atualização

Os dados do leaderboard são atualizados em lotes:

1. **Atualização completa**: Todos os assinantes processados
2. **Atualização parcial**: 100 registros mais antigos atualizados
3. **Tamanho do lote**: 25 usuários processados em paralelo
4. **Comunidade**: `hive-173115` (Skatehive)

Após busca de dados, os pontos são recalculados para todos os usuários.

---

## 🎯 Score de Atividade

O campo `post_count` é na verdade um score de atividade combinado:

```
combined_score = (post_score × 10) + (snap_score × 3 × capped_ratio)
```

- Posts têm maior influência (multiplicador 10x)
- Snaps têm menor influência (multiplicador 3x)
- Máximo de 50 snaps contados (previne gaming por spam)

---

## 🖥️ Endpoints da API

| Endpoint | Descrição |
|----------|-----------|
| `GET https://api.skatehive.app/api/skatehive` | Buscar dados do leaderboard |
| `GET https://api.skatehive.app/api/leaderboard` | Disparar atualização de dados |

---

## 🎨 Recursos da UI

O leaderboard no webapp mostra:
- **Pódio**: Top 3 usuários com avatares
- **Tabela de rankings**: Todos usuários ordenados por pontos
- **Stats do usuário**: Clique para ver detalhamento
- **Imagens OG dinâmicas**: Para compartilhamento social

---

## 🔗 Integração com Airdrop

O leaderboard alimenta o sistema de airdrop:
- Filtre usuários por vários critérios
- Ordene por pontos, HP, NFTs, etc.
- Aplique distribuição ponderada baseada nos rankings

Veja a [documentação de Airdrop](./airdrop) para mais detalhes.

---

**Suba no leaderboard sendo ativo, segurando ativos e apoiando a comunidade! 🏆🛹**
