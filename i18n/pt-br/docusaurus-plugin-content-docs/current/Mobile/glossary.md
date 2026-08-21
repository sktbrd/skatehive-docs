---
sidebar_position: 7
---

# Glossário

Termos que você vai encontrar no app Skatehive e no ecossistema HIVE.

---

## A

**Active Key**
Chave privada HIVE que controla transferências de fundos, staking e votos em witnesses. Mais poderosa que a Posting Key — não a insira no app Skatehive.

**Airdrop**
Distribuição gratuita de tokens para um grupo de usuários, geralmente baseada em atividade ou participação na comunidade. Disponível no [web app](https://skatehive.app).

**Recompensas de Autor**
A parte dos ganhos do post que vai para o criador do post. Pagas 7 dias após a publicação, divididas entre HP e HBD.

---

## B

**HBD (Hive Backed Dollar)**
Token estável atrelado a aproximadamente $1 USD, emitido na blockchain HIVE. Recebido como parte dos pagamentos de posts.

**Beneficiário**
Uma divisão das recompensas do post que vai para outra conta. Usado para creditar colaboradores ou dar gorjeta a curadores. Disponível apenas no web app.

---

## C

**CID (Content Identifier)**
Um hash único que identifica um arquivo armazenado no IPFS. Todo vídeo que você envia recebe um CID — é assim que o IPFS localiza seu conteúdo pela rede sem um servidor central.

**Recompensas de Curadoria**
A parte dos ganhos do post que vai para quem votou no post. Votantes ganham mais votando cedo em conteúdo que depois se torna popular.

---

## D

**DHive**
A biblioteca JavaScript/TypeScript usada pelos apps Skatehive para interagir com a blockchain HIVE (`@hiveio/dhive`).

**DAO (Organização Autônoma Descentralizada)**
Um fundo governado pela comunidade no HIVE onde membros propõem e votam em como alocar recursos. O Skatehive usa o DAO do HIVE para propostas de financiamento da comunidade.

---

## E

**Expo**
O framework usado para construir o app mobile Skatehive. O Expo roda em cima do React Native e simplifica o desenvolvimento e distribuição para iOS e Android.

---

## H

**HIVE**
A criptomoeda base da blockchain HIVE. Pode ser líquida (transferível) ou investida como HIVE Power.

**Blockchain HIVE**
Uma blockchain de prova de participação delegada projetada para aplicações de mídia social. Todos os posts, votos e comentários do Skatehive são armazenados permanentemente na chain.

**HP (HIVE Power)**
HIVE investido. Quanto mais HP você tem, mais vale seu upvote e mais recompensas de curadoria você ganha. Fazer power down leva 13 semanas.

**Nó HIVE / Nó RPC**
Um servidor que fornece acesso à API da blockchain HIVE. O app consulta vários nós (`api.deathwing.me`, `api.hive.blog`, etc.) e faz fallback automaticamente se um estiver inacessível.

---

## I

**IPFS (InterPlanetary File System)**
Uma rede de armazenamento descentralizada onde os arquivos são endereçados pelo seu conteúdo (CID) em vez de uma localização de servidor. Todos os vídeos enviados ao Skatehive são armazenados no IPFS via Pinata.

---

## K

**Keychain**
O armazenamento seguro de credenciais com suporte de hardware no iOS e Android. O app Skatehive armazena sua Posting Key aqui — é criptografada e nunca sai do dispositivo.

---

## M

**Senha Master**
A frase semente usada para derivar todas as quatro chaves HIVE. Concede controle total da conta — nunca a insira em nenhum app. Guarde offline.

**Memo Key**
Uma chave HIVE usada para criptografar e descriptografar memos de transferência. Não é usada pelo app Skatehive.

---

## O

**Owner Key**
A chave HIVE mais poderosa — pode substituir todas as outras chaves e controlar totalmente a conta. Guarde offline e nunca a insira em nenhum app.

---

## P

**Janela de Pagamento**
O período de 7 dias após a publicação durante o qual um post acumula recompensas de upvote. Após 7 dias, as recompensas são distribuídas e o post não pode mais ganhar com votos.

**Pinata**
O serviço de pinning de IPFS usado pelo Skatehive. O Pinata garante que seu conteúdo permaneça disponível no IPFS mantendo-o "pinado" — ou seja, não será removido pela rede.

**Posting Key**
A chave privada HIVE usada para ações sociais: postar, votar, comentar e seguir. É a única chave que o app Skatehive precisa.

**Power Down**
O processo de converter HP de volta em HIVE líquido. Leva 13 semanas, com pagamentos semanais iguais.

**Power Up**
Converter HIVE líquido em HP para aumentar influência de voto e RC.

---

## R

**RC (Resource Credits)**
Uma medida de quantas ações na blockchain (posts, votos, comentários) você pode fazer por dia. O RC se regenera automaticamente a ~20% por dia. Contas novas começam com RC muito baixo — se ações estiverem falhando, verifique seu RC em [hivebuzz.me](https://hivebuzz.me).

**React Native**
O framework base do app mobile Skatehive. Permite que um único código TypeScript rode nativamente tanto no iOS quanto no Android.

---

## S

**Snap**
Um formato de post curto no app Skatehive — atualização rápida de foto ou vídeo, mais simples que um artigo completo.

**Modo Espectador**
Um modo visitante no app que permite navegar o feed e assistir vídeos sem fazer login. Postar, votar e comentar requerem uma conta.

---

## T

**Tailscale**
A VPN mesh usada para conectar os servidores de backend do Skatehive (Mac Mini, Raspberry Pi, nós cloud) com segurança sem expor portas para a internet pública.

**Transcodificar**
O processo de converter um arquivo de vídeo bruto para um formato otimizado para web (H.264/MP4). Feito pelo servidor — nenhuma compressão acontece no seu dispositivo.

---

## U

**Upvote**
Um voto em um post ou comentário. Cada upvote usa uma parte do seu Poder de Voto e distribui recompensas para o autor e curadores anteriores.

---

## V

**Poder de Voto**
Uma porcentagem (0–100%) que representa o peso do seu próximo upvote. Diminui com cada voto e se regenera a ~20% por dia. Visível no seu perfil no app.

---

## W

**Witness**
Um operador de nó que produz blocos na blockchain HIVE. Os top 20 witnesses rodam a rede. Detentores de HIVE votam em witnesses com seu HP. A votação em witnesses está disponível no web app.
