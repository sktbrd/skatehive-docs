---
sidebar_position: 5
---

# Guia de Segurança de Chaves

Entenda suas chaves HIVE — o que cada uma faz, qual usar onde, e o que fazer se uma for comprometida.

---

## As quatro chaves HIVE

Cada conta HIVE tem quatro pares de chaves, cada um com um nível diferente de acesso. Pense nelas como uma hierarquia — quanto mais alta, mais poderosa e mais cuidadosamente deve ser guardada.

| Chave | O que controla | Uso no app |
|---|---|---|
| **Owner Key** | Controle total da conta, pode substituir todas as outras chaves | Nunca — guarde offline |
| **Active Key** | Transferências de fundos, staking, votos em witnesses | Só no web app |
| **Posting Key** | Posts, votos, comentários, follows | ✅ É o que o app usa |
| **Memo Key** | Criptografar/descriptografar memos de transferência | Não necessária para o app |

**Regra geral:** use a chave menos poderosa que resolve o que você precisa. A Posting Key é tudo que você precisa para o Skatehive.

---

## A Senha Master

A senha master não é uma chave — é uma semente usada para derivar todas as quatro chaves. Concede acesso completo à sua conta.

- **Nunca a insira em nenhum app**, incluindo Skatehive
- Guarde offline — escrita em papel, num cofre ou num gerenciador de senhas criptografado
- Se alguém conseguir sua senha master, controla tudo incluindo seus fundos

---

## O que o app Skatehive armazena

Quando você faz login, o app armazena apenas sua **Posting Key** — criptografada no keychain com suporte de hardware do dispositivo (iOS Keychain / Android Keystore). Ela:

- Nunca é enviada para nenhum servidor
- Nunca é sincronizada na nuvem
- Só é acessível via autenticação biométrica ou PIN
- É isolada de outros apps no dispositivo

---

## O que significa cada chave comprometida

### Posting Key vazada

Um atacante pode postar, votar, comentar e seguir em seu nome — mas **não pode mover fundos**.

**O que fazer:**
1. Acesse [wallet.hive.io](https://wallet.hive.io) e entre com sua Active Key ou senha master
2. Vá em **Permissões → Posting → Atualizar**
3. Gere uma nova posting key e salve
4. Saia do app Skatehive e entre novamente com a nova chave

### Active Key vazada

Um atacante pode transferir seu HIVE e HBD, fazer power down e votar em witnesses.

**O que fazer — aja rápido:**
1. Entre em [wallet.hive.io](https://wallet.hive.io) com sua **Owner Key ou senha master**
2. Vá em **Permissões → Active → Atualizar** e rode a chave imediatamente
3. Verifique seu histórico de transações por transferências não autorizadas
4. Se fundos foram movidos, provavelmente são irrecuperáveis — transações HIVE são irreversíveis

### Owner Key ou Senha Master vazada

Tomada completa da conta é possível. O atacante pode substituir todas as chaves e te bloquear.

**O que fazer — imediatamente:**
1. Acesse [wallet.hive.io](https://wallet.hive.io) e tente entrar com a Owner Key
2. Substitua todas as chaves (Owner, Active, Posting, Memo) o mais rápido possível
3. Se já estiver bloqueado, use o [processo de recuperação de conta HIVE](https://wallet.hive.io/recover_account_step_1) — exige uma conta de recuperação configurada com antecedência
4. Reporte em [Discord #help](https://discord.gg/skatehive)

---

## Configurando uma conta de recuperação

Uma conta de recuperação é uma conta HIVE confiável que pode ajudar você a recuperar sua conta se sua Owner Key for comprometida. Por padrão é definida como a conta que criou a sua (geralmente `skatehive` ou `anon`).

Para alterar: acesse [wallet.hive.io](https://wallet.hive.io) → **Configurações → Conta de Recuperação**.

Defina como uma conta que você controla ou alguém de total confiança. Esta é a única forma de recuperar uma conta totalmente comprometida.

---

## Boas práticas

**Faça:**
- Use uma senha master única e forte e guarde offline
- Ative a autenticação biométrica no app
- Rode sua posting key periodicamente se a usar em vários apps
- Configure uma conta de recuperação antes de precisar

**Não faça:**
- Inserir sua senha master ou active key no app Skatehive
- Compartilhar qualquer chave no Discord, Telegram ou qualquer chat — nenhum serviço legítimo vai pedir isso
- Guardar chaves em screenshots, aplicativos de notas ou armazenamento em nuvem sem criptografia
- Usar a mesma chave em várias carteiras ou serviços

---

## Referência rápida

| Situação | Chave necessária |
|---|---|
| Login no app Skatehive | Posting Key |
| Enviar ou receber HIVE/HBD | Active Key (web app) |
| Power up / Power down | Active Key (web app) |
| Alterar chaves da conta | Owner Key ou Senha Master |
| Recuperar conta comprometida | Conta de recuperação + Owner Key |

---

**Perdeu suas chaves?** Veja o [FAQ](./faq/login-security.md) para os passos de recuperação.
**Suspeita de comprometimento?** Acesse [wallet.hive.io](https://wallet.hive.io) imediatamente e rode suas chaves.
