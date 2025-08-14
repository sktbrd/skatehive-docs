---
title: Recursos do App
sidebar_position: 2
---

# Visão Geral da Aplicação Skatehive 3.0

Skatehive 3.0 é uma plataforma comunitária abrangente para skatistas, construída com Next.js e Chakra UI. A aplicação permite que usuários publiquem conteúdo na blockchain Hive enquanto se integra perfeitamente com os ecossistemas Farcaster e Ethereum. Esta visão geral mostra os principais recursos e funcionalidades disponíveis na plataforma.

## Compositor de Postagens

O compositor de postagens permite que usuários criem conteúdo rico usando sintaxe Markdown, façam upload de arquivos multimídia e publiquem diretamente na blockchain Hive. O componente possui capacidades de preview em tempo real e lida com uploads de imagem/GIF com hooks de processamento de mídia integrados.

![Image](https://ipfs.skatehive.app/ipfs/QmbMT47u9nd7zyNYWUCR5hHe1AG6k49xGrPjQcv4mqDr3u)

## Mapa de Spots de Skate

Um mapa interativo exibe spots de skate enviados pela comunidade através da integração Snaps. O mapa usa carregamento dinâmico para manter performance ótima da página até que usuários acessem o recurso. _Nota: A implementação atual requer entrada manual do web-gnar para transferir submissões do Snaps para Google Maps - contribuições da comunidade são bem-vindas._

![Image](https://ipfs.skatehive.app/ipfs/QmcigkjTTHjm2PXHLzRCAFLBXbjdFyKgd9XVS9yMqQDzdj)

## Bounties

O sistema de bounties gamifica desafios de manobras onde usuários enviam clipes de vídeo para ganhar recompensas da comunidade. Enviar um bounty cria um Snap, enquanto reivindicar bounties funciona através de mecanismos de upvoting. O criador do bounty aciona pagamentos quando desafios terminam, gerando automaticamente anúncios de vencedores.

![Image](https://ipfs.skatehive.app/ipfs/QmZgF8eKLmtkCDLVRP9Tey9CLjhsWX8gG4fU6ms285QfjK)

## Modo Magazine

O modo magazine transforma posts da comunidade em uma apresentação elegante estilo flipbook, destacando conteúdo em trending dentro do ecossistema Skatehive para uma experiência de leitura imersiva.

![Image](https://ipfs.skatehive.app/ipfs/QmQSiX4dBw9mA4uB8FFemMcLauKfJYg5pS2SU1ND2u4kN1)

## Leaderboard

O leaderboard classifica usuários SkateHive baseado em engajamento, postagens, Hive Power, holdings de NFT, doações para o tesouro, votação em witness etc.

![Image](https://ipfs.skatehive.app/ipfs/QmekeXkQzMhz6io69k3tpmGN1KcXPv6hgJcYM7aJ83KY7y)

## Sistema de Convite

Usuários autenticados podem convidar amigos criando novas contas Hive através de convites por email. O sistema constrói e transmite as operações Hive necessárias usando integração Keychain para criação segura de contas.

![Image](https://ipfs.skatehive.app/ipfs/QmXWnFG2EpEXpVLtLRYSnPPq5LLgDDoeJvLLmy6VwDnXhR)

## Airdrop

Qualquer usuário pode criar airdrops com tokens Hive ou tokens ERC20 whitelist para apoiar ou encorajar comportamento do usuário filtrando os airdrops por categoria do leaderboard.

![Image](https://ipfs.skatehive.app/ipfs/Qma3ViucPUGTtoYQXBbC2y6cBfzHUp1rSvY66MjRy31Jxk)

## Configurações e Seleção de Tema

A plataforma oferece personalização através de múltiplas opções de tema. Criar temas Skatehive personalizados é simples, e embora alguns temas possam ter pequenas peculiaridades, todos proporcionam experiências visuais únicas. Contribuições da comunidade para novos temas são encorajadas!

![Image](https://ipfs.skatehive.app/ipfs/QmcZQSbz1ufccTatNk28eZ1W5RE88cYtfBLcB6Mx8hAsac)

## Sistema de Notificação de Resposta Rápida

A página de notificação possui um SnapComposer integrado para respostas rápidas diretamente das notificações. Esta funcionalidade se estende ao miniapp Farcaster, permitindo comunicação perfeita entre plataformas.

![Image](https://ipfs.skatehive.app/ipfs/QmS9rJCC8C2HTid4KsXEA8fd1U4TxqEcvGXbUDWjz8phaw)

## Comprar Conta Hive com ETH

Nosso webapp powered by OnchainKit (compatível como miniapp Farcaster) permite que usuários comprem contas Hive usando ETH ou USDC na rede Base. Todos os lucros são direcionados para a carteira skatehive.eth para apoiar o desenvolvimento da plataforma.

![Image](https://ipfs.skatehive.app/ipfs/QmZdaFxbfVCWYUwjHZeiiWtnqHf7ZBZxcARQ7ok3cHmJSy)

## Carteira Multichain

A página [`/wallet`](https://skatehive.app/wallet) oferece um dashboard unificado para gerenciar saldos através das carteiras Hive, Ethereum e Farcaster. A seção SkateBank oferece recursos avançados incluindo savings HBD, staking de tokens e integração Pix, criando um hub abrangente de gestão financeira dentro da aplicação.

![Image](https://ipfs.skatehive.app/ipfs/QmcfDJLwJ25LuPqGt3JvCxabdyhW7rMGtSMbZBPL7tjne2)

## Notificações Farcaster

A plataforma conecta eventos da blockchain Hive para usuários do miniapp Farcaster através de notificações push. Usuários primeiro adicionam o miniapp no Farcaster para se registrar em nosso banco PostgreSQL via webhook, então visitam [`/settings`](https://skatehive.app/settings) para vincular sua conta Hive com Farcaster e habilitar notificações móveis cross-platform.

![Image](https://ipfs.skatehive.app/ipfs/QmRoSSP8oQQRYKoM56r8EpR2qaX7UybTTv87SFpFTHK7gw)

## Plataforma de Leilão

Como um [Builder DAO](https://docs.nouns.build/), Skatehive opera um marketplace [`/auction`](https://skatehive.app/auction) que busca leilões dos contratos Nouns Builder. A plataforma inclui metadados de frame Farcaster, permitindo que usuários coletem arte digital diretamente através de frames Farcaster para interações NFT perfeitas.

![Image](https://ipfs.skatehive.app/ipfs/QmXxhcDdcMewU7MBACAv3WHhaWGGFjrrngt5gaLs3Ff8jt)

## Integração Miniapp

Skatehive funciona como um miniapp nativo Farcaster com detecção inteligente de cliente e autenticação automática de usuário. Os componentes miniapp lidam com vinculação de conta perfeita sem exigir processos adicionais de sign-in, enviando notificações de boas-vindas após vinculação bem-sucedida.

![Skatehive-miniapp](https://ipfs.skatehive.app/ipfs/QmWof7MSt6KRMM8MbS666VqcJwS4YzzDG3TJSkdCPjmknU)

## Infraestrutura de Upload de Mídia

A plataforma utiliza uma abordagem híbrida para hospedagem de mídia: serviço Hive Images para uploads padrão, e nosso endpoint IPFS dedicado (ipfs.skatehive.app) para posts de magazine e vídeos. Nosso plano Pinata Basic ($20/mês) garante performance ótima de carregamento de vídeo, mas gateways públicos também funcionarão. Planos futuros incluem reintegrar funcionalidade 3Speak como implementado anteriormente.

![Image](https://ipfs.skatehive.app/ipfs/QmP3Vfq8aWadEKj4xQJwj2fJc2azrZdXD2DxuFM8HpMDco)

## Ferramenta de Criação de GIF

O criador de GIF integrado permite que usuários façam upload de vídeos e criem GIFs personalizados com até 30 segundos de duração.

![gif-maker](https://ipfs.skatehive.app/ipfs/QmS3J89iM3xKfQTmaSKZPhBBc8uyEdUFGKkxuAGSwSPHso)

## Integração Zora

Usuários conectados com Ethereum podem cunhar moedas Zora na rede Base e promover posts Hive para colecionáveis Zora. Este recurso conecta conteúdo social tradicional com monetização NFT. Para informações detalhadas de implementação, consulte a documentação dedicada da integração Zora.

![Image](https://ipfs.skatehive.app/ipfs/QmUW2uCjYFE5VsfsW7qM8CpDdF2Nfvwv8P2ZmVmuUgtUb9)

## Recursos Ethereum

Se um usuário está conectado apenas com sua carteira Ethereum e não tem uma conta Hive, o SnapComposer se adapta para exibir ações específicas do Ethereum. Isso permite que usuários interajam com a plataforma usando sua identidade Ethereum, fornecendo recursos e opções relevantes disponíveis na rede Ethereum.

![Image](https://ipfs.skatehive.app/ipfs/QmUsht6Da3h2kFRmc4PfuvDnSzXQoCnoLBkdKEem9FeeEm)

---
