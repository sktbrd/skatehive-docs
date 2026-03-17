---
sidebar_position: 6
icon: crosshairs
---

# Bounties

**Ganhe fazendo manobras!** SkateHive Bounties permite criar desafios de manobras e ganhar recompensas em cripto em duas blockchains.

🎯 **Ver bounties:** [skatehive.app/bounties](https://skatehive.app/bounties)

---

## 🌐 Dois Sistemas Blockchain

SkateHive suporta bounties em duas redes diferentes:

### Bounties Hive
- **Moeda:** HBD ou HIVE
- **Plataforma:** Blockchain Hive
- **Pagamento:** Criador aprova vencedores manualmente
- **Melhor para:** Desafios comunitários, recompensas sociais

### Bounties POIDH (Ethereum)
- **Moeda:** ETH
- **Plataforma:** Base ou Arbitrum (Layer 2)
- **Pagamento:** Smart contract (verificação on-chain)
- **Melhor para:** Verificação descentralizada, recompensas ETH

---

## 📋 Como Navegar pelos Bounties

Acesse [skatehive.app/bounties](https://skatehive.app/bounties) e você verá:

![Página Principal de Bounties](/img/bounties/01-main-page.png)

**Filtrar por origem:**
- **ALL** — Mostra bounties de Hive e POIDH
- **HIVE** — Apenas bounties Hive (recompensas HBD/HIVE)
- **POIDH** — Apenas bounties Ethereum (recompensas ETH)

Cada card de bounty mostra:
- 🟢 **OPEN** ou 🔴 **CLOSED**
- 💰 Valor da recompensa (+ equivalente em USD)
- 📝 Descrição da manobra
- 📅 Prazo (se definido)
- 🎯 Botão **CLAIM IT** ou **PROOF**

---

## 💎 Como Criar um Bounty

### Passo 1: Clique em "+ CREATE BOUNTY"

Na página principal de bounties, clique no botão **"+ CREATE BOUNTY"** (canto superior direito).

### Passo 2: Escolha Sua Blockchain

![Escolher Blockchain](/img/bounties/02-choose-blockchain.png)

Você verá duas opções:

- **HIVE** (esquerda) — Pagar em HBD ou HIVE
- **ETH** (direita) — Pagar on-chain via POIDH

---

### Criando um Bounty Hive

![Formulário Hive](/img/bounties/03-hive-form.png)

**Requisitos:**
- Extensão Hive Keychain instalada
- Conta com posting key

**Preencha o formulário:**

1. **Challenge** — Descrição curta da manobra (ex: "Kickflip na 5 degraus")
2. **Rules** — Requisitos detalhados (suporta markdown)
   - Exemplo: "Deve ser no chão, sem cortes, dizer 'this is for skatehive' antes da manobra"
3. **Upload de mídia** (opcional):
   - **Upload Image** — Thumbnail do bounty
   - **Upload Video** — Vídeo de referência
4. **Reward:**
   - Digite o valor
   - Selecione moeda (dropdown HBD ou HIVE)
5. **Deadline** (opcional) — Escolha uma data para criar urgência
6. **POST BOUNTY** — Aprove com popup do Hive Keychain

**✅ Pronto!** Seu bounty vai ao ar instantaneamente.

**Divisão de Recompensa (Hive):**
- 1 vencedor: 100%
- 2 vencedores: 70% / 30%
- 3 vencedores: 50% / 30% / 20%

---

### Criando um Bounty POIDH

**Requisitos:**
- Carteira com ETH na Base ou Arbitrum
- MetaMask, Rainbow ou carteira compatível

**Passos:**

1. Clique **"+ CREATE BOUNTY"** → Selecione **"ETH"**
2. **Conecte carteira** (se ainda não conectou)
3. Preencha formulário:
   - **Bounty name** — Título curto
   - **Description** — Requisitos da manobra
   - **Reward** — Valor em ETH
   - **Chain** — Base (gas menor) ou Arbitrum
4. **Create Bounty** → Aprove transação na carteira
5. Aguarde ~30 segundos pro indexador

**✅ Pronto!** Bounty aparece na lista 🚀

:::tip Taxas de Gas
**Base** tem taxas menores (~$0.01-0.05). **Arbitrum** também é barato mas um pouco mais caro.
:::

---

## 🏆 Como Dar Claim em um Bounty

### Dando Claim em Bounty Hive

![Detalhe Bounty Hive](/img/bounties/05-hive-detail.png)

**Passos:**

1. **Clique no card** → Abre página de detalhes
2. Role até **"CLAIM THIS BOUNTY TO SUBMIT YOUR PROOF"**
3. **Clique "CLAIM IT"**
4. Preencha formulário:
   - **Title** — Nome da sua submissão
   - **Description** — Link do vídeo (YouTube, Streamable, IPFS)
   - **Upload proof** — Vídeo ou imagem sua acertando a manobra
5. **Assine com Hive Keychain**
6. **Aguarde revisão do criador** — Volte na página do bounty

**Bounties Hive são pagos após criador aprovar manualmente seu claim.**

---

### Dando Claim em Bounty POIDH

![Detalhe Bounty POIDH](/img/bounties/04-poidh-detail.png)

**Passos:**

1. **Conecte carteira** (canto superior direito)
2. **Clique no card** → Abre página de detalhes
3. **Clique "SUBMIT PROOF"** (bottom)
4. Preencha formulário:
   - **Claim name** — Descrição curta
   - **Description** — Link do vídeo ou upload
   - **Attach media** — Upload IPFS automático
5. **Aprove transação** na carteira
6. **Fase de votação** (se habilitada) ou aprovação instantânea
7. **Receba** quando claim for aceito! 💸

**Bounties POIDH são pagos automaticamente via smart contract.**

---

## 💰 Como Funciona o Pagamento

### Pagamento Hive
- **Método:** Transferências Hive (automático após aprovação)
- **Conferir:** Sua carteira Hive (Keychain ou [PeakD](https://peakd.com))
- **Aparece em:** Histórico de transações

### Pagamento POIDH
- **Método:** Smart contract (instantâneo na aprovação)
- **Conferir:** Sua carteira conectada
- **Ver em:** Blockchain explorer (Basescan, Arbiscan)

---

## 💡 Ideias de Bounties

- **Desafios de manobra:** "Hardflip na 5 degraus — 0.05 ETH"
- **Desafios de spot:** "Qualquer manobra em [nome da pista] — 20 HBD"
- **Desafios de estilo:** "Melhor line em 30 segundos — 50 HIVE"
- **Desafios de crew:** "Melhor clip do seu grupo — 0.1 ETH"
- **Concursos mensais:** "Melhor manobra de março — 100 HBD"

---

## 🔥 Dicas Pro

### Para Patrocinadores

✅ **Defina regras claras** — Evite disputas com requisitos específicos  
✅ **Escolha recompensas justas** — Recompensas maiores = mais participantes  
✅ **Interaja com claims** — Comente e incentive skatistas  
✅ **Pague rápido** — Não deixe vencedores esperando  
✅ **Adicione prazos** (Hive) — Cria urgência

### Para Participantes

✅ **Leia regras com atenção** — Saiba o que é esperado  
✅ **Filme com clareza** — Qualidade boa aumenta suas chances  
✅ **Mostre manobra completa** — Setup → acerto, sem cortes  
✅ **Envie cedo** — Evite problemas técnicos de última hora  
✅ **Acompanhe** — Confira página do bounty pra resultados

---

## ❓ FAQ

**P: Posso dar claim no meu próprio bounty?**  
R: Não — bounties são para outros skatistas completarem.

**P: Quanto tempo até receber?**  
R: **Hive:** Quando criador aprovar seu claim  
**POIDH:** Quando votação passar ou instantâneo (depende da config)

**P: E se meu claim for rejeitado?**  
R: Tente de novo se o bounty ainda estiver aberto. Revise as regras e melhore sua submissão.

**P: Posso cancelar um bounty?**  
R: **Hive:** Edite metadata do post pra marcar como fechado  
**POIDH:** Use função cancel no contrato (retorna ETH menos gas)

**P: Qual a diferença entre Hive e POIDH?**  
R: **Hive** = blockchain social, aprovação manual, vibe comunidade  
**POIDH** = smart contracts Ethereum, verificação on-chain, pagamento automático

**P: Qual blockchain usar?**  
R: **Hive** pra engajamento comunitário  
**POIDH** pra usuários Ethereum e verificação descentralizada

**P: Posso patrocinar múltiplos bounties?**  
R: Sim, ilimitado nas duas plataformas!

**P: Quais moedas funcionam?**  
R: **Hive:** Apenas HBD ou HIVE  
**POIDH:** Apenas ETH (na Base ou Arbitrum)

**P: E se ninguém acertar a manobra?**  
R: **Hive:** Você fica com sua cripto (estenda prazo ou reposte)  
**POIDH:** Cancele bounty pra recuperar ETH (menos gas)

---

## 🔗 Links Rápidos

| Recurso | URL |
|---------|-----|
| **Bounties Ao Vivo** | [skatehive.app/bounties](https://skatehive.app/bounties) |
| **Protocolo POIDH** | [poidh.xyz](https://poidh.xyz) |
| **Hive Keychain** | [Extensão Chrome](https://chrome.google.com/webstore/detail/hive-keychain) |
| **Ajuda/Suporte** | [Telegram](https://t.me/skatehive) |

---

## 🛠️ Detalhes Técnicos

Para desenvolvedores:

- **Indexador Hive:** Posts com tags `skatehive` + `bounty`
- **API POIDH:** [skatehive-api.vercel.app](https://skatehive-api.vercel.app)
- **Chains Suportadas:** Base (8453), Arbitrum (42161)
- **GitHub:** [github.com/skatehive/skatehive](https://github.com/skatehive/skatehive)

---

**Comece a ganhar:** [skatehive.app/bounties](https://skatehive.app/bounties)  
**Precisa de ajuda?** Entre no [Telegram](https://t.me/skatehive) | [Discord](https://discord.gg/skatehive)
