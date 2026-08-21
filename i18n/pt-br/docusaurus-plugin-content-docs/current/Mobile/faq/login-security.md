---
sidebar_position: 2
---

# Login e Segurança

### O que é a Posting Key e onde encontro?

A **Posting Key** é uma chave privada do HIVE que permite postar, votar e comentar — mas não movimentar fundos. É a única chave necessária para entrar no app Skatehive.

Para encontrá-la:
1. Acesse [wallet.hive.io](https://wallet.hive.io)
2. Entre com seu usuário e senha master
3. Vá em **Permissões → Posting**
4. Copie sua chave privada de posting

Nunca use sua **Senha Master** ou **Owner Key** em nenhum app.

---

### Minha chave privada fica segura?

Sim. O app usa o **Expo SecureStore**, que criptografa suas chaves no keychain com suporte de hardware do dispositivo (iOS Keychain / Android Keystore). Suas chaves:
- São criptografadas em repouso
- Nunca são enviadas para nenhum servidor
- Nunca são sincronizadas na nuvem
- Só são acessíveis via biometria ou PIN

---

### Como ativo o Face ID / Touch ID?

Durante o login, o app vai perguntar se quer ativar biometria após o primeiro login bem-sucedido com sua posting key. Se pulou essa etapa, vá em **Perfil → Configurações → Segurança** e ative o login biométrico.

Certifique-se de que a biometria está ativada nas configurações do dispositivo primeiro (iOS: Ajustes → Face ID e Código / Android: Configurações → Segurança → Digital).

---

### Por que o app está pedindo um PIN?

Se a autenticação biométrica falhar (ex: dedo molhado, rosto obstruído), o app cai para o PIN de 4 dígitos que você definiu na criação da conta. Digite o PIN para desbloquear.

---

### Esqueci minha posting key. O que faço?

Sua posting key pode ser recuperada ou redefinida usando sua senha master:

1. Acesse [wallet.hive.io](https://wallet.hive.io)
2. Entre com sua senha master
3. Vá em **Permissões → Posting → Mostrar chave privada**

Se perdeu também a senha master, a recuperação só é possível pelo [processo de recuperação de conta HIVE](https://wallet.hive.io/recover_account_step_1) — isso exige uma conta de recuperação configurada com antecedência.

---

### O que fazer se perder meu dispositivo?

Suas chaves ficam criptografadas no dispositivo e não podem ser extraídas sem o PIN ou biometria. Mesmo assim, tome essas medidas imediatamente:

1. Acesse [wallet.hive.io](https://wallet.hive.io) em outro dispositivo
2. Troque sua posting key em **Permissões → Posting**
3. Isso invalida a chave antiga armazenada no dispositivo perdido

---

### Posso usar várias contas?

Sim. O app suporta múltiplas contas salvas:

1. Toque no seu avatar → **Logout**
2. Na tela de login, toque em **Adicionar Conta**
3. Entre com outro usuário e posting key

Para trocar de conta, vá em **Perfil → Trocar Conta** e toque na conta desejada — confirmação biométrica é necessária.
