---
sidebar_position: 2
---

# App Mobile vs Web App

O app mobile do Skatehive e o [web app](https://skatehive.app) compartilham o mesmo backend na blockchain HIVE, mas atendem casos de uso diferentes. O app mobile é feito para interação rápida e portátil — postar clips, navegar o feed, checar notificações. O web app é a plataforma completa com todas as funcionalidades.

---

## Comparativo de Funcionalidades

| Funcionalidade | App Mobile | Web App |
|---|:---:|:---:|
| **Conteúdo** | | |
| Feed (scroll infinito) | ✅ | ✅ |
| Abas Seguindo / Em Alta | ✅ | ✅ |
| Feed de vídeos | ✅ | ✅ |
| Criar posts (artigos e snaps) | ✅ | ✅ |
| Editor Markdown básico | ✅ | ✅ |
| Editor Markdown completo + seletor de thumbnail | ❌ | ✅ |
| Beneficiários em posts | ❌ | ✅ |
| Comentários e respostas | ✅ | ✅ |
| **Social** | | |
| Perfis de usuário | ✅ | ✅ |
| Seguir / deixar de seguir | ✅ | ✅ |
| Notificações | ✅ | ✅ |
| Notificações push | ❌ (em breve) | ✅ |
| Chat / mensagens diretas | ❌ | ✅ |
| Editar perfil | ❌ | ✅ |
| Video parts / portfólio | ❌ | ✅ |
| Mesclar contas | ❌ | ✅ |
| **Carteira e Cripto** | | |
| Ver saldo e recompensas HIVE | ✅ | ✅ |
| Enviar / receber HIVE e HBD | ❌ | ✅ |
| Trocar tokens | ❌ | ✅ |
| Stake / Power Up | ❌ | ✅ |
| SkateBank | ❌ | ✅ |
| Gráficos de portfólio | ❌ | ✅ |
| Ethereum / NFTs | ❌ | ✅ |
| **Comunidade** | | |
| Leaderboard | ✅ | ✅ |
| Mapa de Picos | 🌐 (só no browser) | ✅ |
| Bounties | ❌ | ✅ |
| DAO / Governança | ❌ | ✅ |
| Sistema de leilões | ❌ | ✅ |
| Sistema de airdrops | ❌ | ✅ |
| **Outros** | | |
| Magazine / Blog | ❌ | ✅ |
| Votação em witnesses | ❌ | ✅ |
| Zora / negociação de coins | ❌ | ✅ |
| Mini-game | ❌ | ✅ |

---

## Por que as funcionalidades de carteira são limitadas no mobile?

A Apple e o Google têm diretrizes rígidas que restringem transações de criptomoedas no app. Para estar na App Store e no Google Play, a carteira completa (enviar, trocar, investir) precisou ser desativada. Você ainda pode ver seu saldo e recompensas no app — para gerenciar fundos, use o [web app](https://skatehive.app).

---

## Como funciona o Mapa de Picos no mobile?

O Mapa de Picos agora é acessível no celular, mas apenas pelo browser — abra o [skatehive.app](https://skatehive.app) no browser do seu celular e navegue até o mapa por lá. Ainda não está integrado no app nativo iOS/Android.

---

## Upload de vídeo: mesmo pipeline, nas duas plataformas

Tanto o app mobile quanto o web app usam a mesma infraestrutura de transcodificação:

1. Seu vídeo é enviado cru (sem compressão no cliente)
2. Um servidor transcodifica para H.264/MP4 usando FFmpeg
3. O resultado é salvo no IPFS e o link é retornado

O sistema roda três servidores em failover para confiabilidade:

| Prioridade | Servidor | Observações |
|---|---|---|
| 1 | Mac Mini M4 | Principal — mais rápido |
| 2 | Oracle Cloud | Fallback |
| 3 | Raspberry Pi | Último recurso — mais lento (ARM) |

---

## Quando usar cada um

**Use o app mobile quando estiver:**
- Filmando e postando clips em movimento
- Navegando o feed e votando
- Checando notificações
- Interagindo com posts e comentários

**Use o web app (ou browser no celular) quando precisar:**
- Gerenciar sua carteira HIVE (enviar, trocar, investir)
- Usar o Mapa de Picos (disponível via browser no celular)
- Usar Bounties, DAO ou funções de governança
- Editar seu perfil ou configurações avançadas de post
- Acessar Zora, leilões ou a magazine

---

**Web app:** [skatehive.app](https://skatehive.app)
**App mobile:** [iOS App Store](https://apps.apple.com/app/skatehive/id6738086962) · Android (em breve)
