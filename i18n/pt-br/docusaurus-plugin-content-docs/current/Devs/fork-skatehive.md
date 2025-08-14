---
title: Guia de Fork do Skatehive
sidebar_position: 1
icon: paste
---

# Guia de Fork do Skatehive 3.0 (Amigável para Iniciantes)

Este guia explica como fazer fork do repositório Skatehive 3.0, executá-lo localmente e opcionalmente habilitar recursos avançados. Comece com o workflow básico do GitHub e instalação mínima. Se você quiser um fork completo, a seção opcional cobre notificações Farcaster e configurações Wagmi/Ethereum.

## 1. Faça fork do repositório no GitHub

1. Faça login no GitHub e visite [`Skatehive/skatehive3.0`](https://github.com/Skatehive/skatehive3.0).
2. Clique em **Fork** para criar sua própria cópia do repo.
3. Clone seu fork:
   ```bash
   git clone https://github.com/<seu-usuario>/skatehive3.0.git
   cd skatehive3.0
   ```
4. (Opcional mas recomendado) mantenha o repo original como remote upstream:
   ```bash
   git remote add upstream https://github.com/Skatehive/skatehive3.0.git
   ```
5. Crie um branch de feature antes de fazer mudanças:
   ```bash
   git checkout -b meu-feature
   ```
6. Após commitar seu trabalho, faça push para seu fork e abra um pull request.

## 2. Instalação local mínima

Estes passos fazem o app rodar com o menor número de variáveis de ambiente necessárias.

1. Copie o arquivo de exemplo de ambiente:
   ```bash
   cp .env.local.example .env.local
   ```
2. Edite `.env.local` e configure as variáveis básicas:
   - `NEXT_PUBLIC_THEME`
   - `NEXT_PUBLIC_HIVE_COMMUNITY_TAG`
   - `NEXT_PUBLIC_HIVE_SEARCH_TAG`
   - `NEXT_PUBLIC_HIVE_USER`
   - `NEXT_PUBLIC_BASE_URL`
   - `HIVE_POSTING_KEY`
3. Instale dependências e inicie o servidor de dev:
   ```bash
   pnpm install
   pnpm dev
   ```

## 3. Configuração avançada opcional

Expanda seu fork com integrações adicionais. Todas as configurações abaixo ficam em `.env.local`.

### Notificações Farcaster

Para habilitar notificações Farcaster você precisará de um banco Postgres e as seguintes variáveis:

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`
- `FARCASTER_INIT_PASSWORD`
- `FARCASTER_HUB_URL` (hub personalizado opcional)

### Wagmi & Ethereum

Forneça conectividade Wagmi e on-chain configurando:

- `NEXT_PUBLIC_WC_PROJECT_ID`
- `NEXT_PUBLIC_ALCHEMY_KEY`
- `ETHERSCAN_API_KEY`
- `NEXT_PUBLIC_TOKEN`
- `NEXT_PUBLIC_METADATA`
- `NEXT_PUBLIC_AUCTION`
- `NEXT_PUBLIC_TREASURY`
- `NEXT_PUBLIC_GOVERNOR`

Verifique `.env.local.example` para variáveis adicionais como Supabase ou IPFS. Configure-as conforme necessário para combinar com os recursos que você quer no seu fork.
