---
sidebar_position: 4
---

# Solução de Problemas

Diagnóstico e correção dos problemas mais comuns no app mobile do Skatehive.

---

## Como identificar a origem do problema

Antes de partir para soluções específicas, identifique a fonte:

| Sintoma | Causa provável |
|---|---|
| App trava ou congela | Bug do app ou problema do dispositivo |
| Feed carrega mas ações falham (votar, comentar) | Problema de autenticação ou blockchain |
| Tudo quebrado para todo mundo | Queda do nó HIVE |
| Vídeo travado em "processando" | Problema no servidor de transcodificação |
| Funciona no WiFi, falha no dados móveis | Problema de conexão / tamanho do arquivo |

Verifique a [página de status do Skatehive](https://api.skatehive.app/api/status) para ver se os serviços de backend estão saudáveis antes de debugar seu dispositivo.

---

## Problemas de login

### Erro "posting key inválida"

- Você provavelmente está inserindo o **tipo errado de chave**. O app aceita apenas a **Posting Key** — não a senha master, active key ou owner key.
- Acesse [wallet.hive.io](https://wallet.hive.io) → Permissões → Posting → copie a chave privada que começa com `5`.

### Login funciona mas sou deslogado imediatamente

- Sua posting key pode ter sido rotacionada em outro dispositivo ou pelo web app.
- Saia completamente e entre novamente com a posting key atual de [wallet.hive.io](https://wallet.hive.io).

### Face ID / Touch ID parou de funcionar

- Verifique as configurações do dispositivo: iOS → Face ID e Código / Android → Segurança → Digital.
- Se a biometria está ativa no dispositivo mas não funciona no app, vá em **Perfil → Configurações → Segurança**, desative o login biométrico e reative.
- Como alternativa, use seu PIN de 4 dígitos.

### O prompt de biometria nunca aparece

- O app só pede biometria após o primeiro login manual bem-sucedido. Entre uma vez com sua posting key — a biometria será oferecida depois.

---

## Problemas de feed e conteúdo

### Feed não carrega

1. Puxe para baixo para atualizar
2. Verifique sua conexão de internet
3. O nó HIVE ativo pode estar sobrecarregado — o app tenta novamente automaticamente, mas pode levar 1–2 minutos
4. Force o fechamento e reabra

### Feed carrega mas alguns posts estão faltando

- Posts levam 30–60 segundos para se propagar pelos nós HIVE após publicação
- Certifique-se de que os posts incluem a tag `#skatehive` — posts sem ela não aparecem no feed da comunidade

### Comentários ou votos não estão sendo processados

Isso geralmente significa um problema de **Resource Credits (RC)**. RC é um mecanismo do HIVE que limita quantas ações você pode fazer por dia. Contas novas têm RC muito baixo.

**Como verificar:** Acesse [hivebuzz.me](https://hivebuzz.me) e busque seu usuário — mostra seu nível atual de RC.

**Como resolver:**
- Aguarde — RC se regenera automaticamente (~20% por dia)
- Peça para alguém com HP alto delegar RC para sua conta via web app
- Faça Power Up de HIVE para aumentar seu limite de RC permanentemente

### Meu post não aparece no meu próprio perfil

- Aguarde 30–60 segundos e atualize seu perfil
- Se ainda não aparecer após 5 minutos, a transação pode ter falhado — tente postar novamente

---

## Problemas de upload de vídeo

### Vídeo travado em "enviando" ou "processando"

O pipeline de transcodificação tem três servidores em failover. Se o servidor principal estiver fora ou sobrecarregado, o sistema muda para um backup — isso pode adicionar vários minutos.

**Passos:**
1. Aguarde pelo menos 15 minutos antes de assumir que está travado
2. Mantenha o app em primeiro plano — colocar o app em background pode interromper o upload
3. Verifique sua conexão — arquivos grandes precisam de WiFi estável
4. Se ainda travado após 30 minutos: force o fechamento, reabra e tente enviar novamente

### Upload falha imediatamente

- Arquivo pode exceder os limites práticos — tente cortar o clip abaixo de 500MB
- Verifique sua conexão de internet
- Mude de dados móveis para WiFi

### Vídeo enviado mas ficou com qualidade ruim

O transcodificador usa H.264 com configurações de qualidade adaptativa. Vídeos muito longos (mais de 2 min) são codificados com bitrate menor para manter os arquivos gerenciáveis. Para melhor qualidade:
- Mantenha os clips curtos e focados
- Envie em 1080p — o transcodificador não faz upscale, então qualidade maior na fonte sempre ajuda

### Vídeo roda bem para mim mas outros dizem que não carrega

A propagação do IPFS pode levar alguns minutos. O vídeo está salvo via Pinata mas pode não estar em cache em todos os gateways imediatamente. Peça para tentarem novamente após 5–10 minutos.

---

## Crashes e travamentos

### App trava ao abrir

1. Force o fechamento e reabra
2. Verifique se há atualização na App Store
3. Reinicie o dispositivo
4. Desinstale e reinstale — suas chaves ficam no keychain do dispositivo e sobrevivem à reinstalação na maioria dos dispositivos
5. Se ainda travar, reporte em [Discord #bugs](https://discord.gg/skatehive) com modelo do dispositivo e versão do iOS/Android

### App congela ao rolar o feed

- Geralmente acontece com arquivos de vídeo grandes carregando em conexão lenta
- Mude para WiFi
- Force o fechamento e reabra

### App congela durante upload de vídeo

- O processo de upload consome muita memória para arquivos grandes
- Feche todos os outros apps para liberar memória
- Se congelado por mais de 5 minutos, force o fechamento e tente novamente no WiFi

---

## Problemas de notificação

### Não estou recebendo notificações

Notificações push ainda não estão implementadas no app nativo — verifique a **aba Notificações** manualmente para ver upvotes, comentários e menções.

### A aba de notificações não mostra nada

- Puxe para baixo para atualizar a aba
- Saia e entre novamente para resincronizar seu feed de notificações

---

## Problemas de conta e segurança

### Perdi acesso à minha posting key

1. Acesse [wallet.hive.io](https://wallet.hive.io) em outro dispositivo
2. Entre com sua **senha master**
3. Vá em Permissões → Posting → Mostrar chave privada

Se perdeu também a senha master, a recuperação exige o [processo de recuperação de conta HIVE](https://wallet.hive.io/recover_account_step_1) — só funciona se você configurou uma conta de recuperação com antecedência.

### Acho que minha conta foi comprometida

Aja imediatamente:

1. Acesse [wallet.hive.io](https://wallet.hive.io) de um dispositivo confiável
2. Troque sua **posting key** em Permissões → Posting
3. Se fundos estiverem em risco, troque sua **active key** também
4. Reporte em [Discord #help](https://discord.gg/skatehive)

### Perdi meu dispositivo

Suas chaves estão criptografadas no keychain — não podem ser extraídas sem seu PIN ou biometria. Por precaução:

1. Troque sua posting key imediatamente via [wallet.hive.io](https://wallet.hive.io)
2. A chave antiga armazenada no dispositivo perdido fica inválida

---

## Ainda com problema?

- **Discord:** [canal #help](https://discord.gg/skatehive) — resposta mais rápida
- **GitHub:** [Abrir uma issue](https://github.com/SkateHive/mobileapp/issues) — para bugs reproduzíveis
- Inclua: modelo do dispositivo, versão do sistema, versão do app e o que você estava fazendo quando o problema ocorreu
