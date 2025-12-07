---
sidebar_position: 3
---

# App Mobile

O app mobile do Skatehive traz a comunidade para o seu bolso. Feito com Expo e React Native, está disponível para iOS e Android.

---

## 📱 Download

- **iOS**: [App Store](https://apps.apple.com/app/skatehive/id6738086962)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.skatehive.app)

---

## 🔐 Autenticação

O app mobile usa armazenamento seguro de chaves com múltiplas opções de autenticação:

### Métodos de Login

1. **Conta Existente**: Digite seu usuário Hive e posting key
2. **Biométrico/PIN**: Após primeiro login, use Face ID, Touch ID ou PIN
3. **Usuários Salvos**: Alterne entre contas previamente logadas
4. **Modo Espectador**: Navegue pelo conteúdo sem fazer login

### Recursos de Segurança

| Recurso | Descrição |
|---------|-----------|
| **Armazenamento Seguro** | Chaves guardadas no `expo-secure-store` |
| **Auth Biométrico** | Suporte a Face ID / Touch ID |
| **PIN Alternativo** | PIN de 4 dígitos se biometria indisponível |
| **Criptografia de Chave** | Chaves privadas nunca expostas |

### Primeiro Login

1. Abra o app e toque em **Login**
2. Digite seu usuário Hive
3. Digite sua **posting key** (não sua master password!)
4. Escolha ativar biométrico/PIN para logins futuros
5. Sua chave é armazenada com segurança

### Alternando Contas

O app lembra contas previamente logadas:
1. Toque no seu perfil ou logout
2. Veja a lista de usuários salvos
3. Toque para alternar (biométrico/PIN necessário)
4. Ou adicione uma nova conta

---

## 🎨 Funcionalidades

### Atualmente Disponíveis

| Funcionalidade | Descrição |
|----------------|-----------|
| **Feed** | Veja posts da comunidade Skatehive |
| **Snaps** | Posts rápidos de foto (como stories) |
| **Upload de Vídeo** | Grave e envie clips de skate |
| **Perfil** | Veja seus posts e estatísticas |
| **Votação** | Upvote conteúdo que você gosta |
| **Comentários** | Responda a posts |

### Modo Espectador

Não está pronto para login? Use o Modo Espectador para:
- Navegar pelo feed
- Assistir vídeos
- Ver perfis
- Conhecer a comunidade

Você precisará fazer login para postar, votar ou comentar.

---

## 🎬 Upload de Vídeo

O app mobile conecta aos servidores de transcoding do Skatehive:

1. Grave ou selecione um vídeo
2. App verifica status do servidor via API
3. Vídeo enviado ao servidor de transcoding ativo
4. Vídeo transcodado armazenado no IPFS
5. Pronto para postar!

Vídeos são automaticamente comprimidos e otimizados para web.

---

## 🔗 Infraestrutura Compartilhada

O app mobile usa o mesmo backend que o webapp:

| Serviço | Endpoint |
|---------|----------|
| **API** | `api.skatehive.app/api/v1` |
| **Vídeo** | Dinâmico (Oracle/Mac Mini/RPi) |
| **IPFS** | `ipfs.skatehive.app` |
| **Hive** | Múltiplos nós RPC |

Seu conteúdo aparece tanto no mobile quanto na web!

---

## 📊 Comparação de Features com Webapp

| Feature | Mobile | Webapp |
|---------|--------|--------|
| Navegação no Feed | ✅ | ✅ |
| Upload de Vídeo | ✅ | ✅ |
| Snaps | ✅ | ✅ |
| Carteira | ❌ | ✅ |
| Airdrop | ❌ | ✅ |
| Leaderboard | ❌ | ✅ |
| Bounties | ❌ | ✅ |
| Página DAO | ❌ | ✅ |
| Mapa de Picos | ❌ | ✅ |

---

## 🛠️ Stack Tecnológica

- **Framework**: Expo / React Native
- **Navegação**: Expo Router
- **Armazenamento**: expo-secure-store
- **Auth**: Biométrico + PIN
- **Vídeo**: Gravação nativa

---

## 💡 Dicas

1. **Use posting key** - Nunca digite sua master password
2. **Ative biometria** - Logins mais rápidos e seguros
3. **Mantenha atualizado** - Novos recursos adicionados regularmente
4. **Verifique permissões** - Câmera/microfone necessários para vídeo
5. **Boa conexão** - WiFi recomendado para uploads de vídeo

---

## ❓ FAQ

### Minha chave está segura?
Sim, chaves são armazenadas no enclave seguro do dispositivo usando `expo-secure-store`. São criptografadas e nunca saem do seu dispositivo.

### Posso usar múltiplas contas?
Sim, o app armazena múltiplas contas. Alterne entre elas na tela de login.

### Por que não encontro [feature]?
Algumas features são exclusivas do webapp por enquanto. Paridade total está chegando!

### Upload de vídeo falhou?
Verifique sua conexão e tente novamente. O app seleciona automaticamente o melhor servidor disponível.

### Como faço logout?
Vá ao seu perfil e toque no botão de logout. Seus dados podem ser removidos ou mantidos para re-login fácil.

---

**Baixe o app e ande de skate com o Skatehive em qualquer lugar! 📱🛹**
