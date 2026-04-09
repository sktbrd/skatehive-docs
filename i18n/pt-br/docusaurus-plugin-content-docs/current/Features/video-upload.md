---
sidebar_position: 5
icon: video
---

# Upload de Vídeo

Transcodificação de vídeo e hospedagem IPFS grátis para todos membros do Skatehive. Faça upload dos seus clips, nós cuidamos do resto.

---

## 🎬 Como Funciona

1. Faça upload do seu vídeo
2. Nossos servidores transcodam para formato otimizado web
3. Vídeo armazenado permanentemente no IPFS
4. Você recebe URL IPFS para usar no post

**Completamente grátis.** Sem limite de tamanho. Armazenamento permanente.

---

## 📊 Progresso em Tempo Real

Assista seu upload em tempo real:

- 🔄 **Recebendo** (5%) - Servidor recebendo seu arquivo
- 🎬 **Transcodificando** (10-80%) - Convertendo para formato web
- ☁️ **Fazendo Upload** (80-100%) - Armazenando no IPFS
- ✅ **Completo** (100%) - Pronto!

**Barra de progresso skate 🛹** se move conforme seu vídeo processa.

**Auto-fecha:** Terminal fecha após 10 segundos no sucesso. Clique "Keep Open" para cancelar.

---

## 📤 Métodos de Upload

### Web App

1. Abra compositor de post
2. Clique botão de upload de vídeo
3. Selecione arquivo
4. Aguarde processamento
5. URL inserida automaticamente

### Mobile App

1. Grave ou selecione vídeo
2. Toque upload
3. Processamento acontece em background
4. Poste quando pronto

### Upload Direto

Use o endpoint da API:

```bash
curl -X POST https://oracle-api.skatehive.app/upload \
  -F "file=@seu-video.mp4" \
  -F "username=seunome"
```

Resposta inclui URL IPFS.

---

## 🎥 Formatos Suportados

**Entrada:** MP4, MOV, AVI, MKV, WEBM  
**Saída:** MP4 otimizado para web (H.264)

**Tamanho máximo:** Nenhum (mas arquivos grandes demoram mais)  
**Recomendado:** Menos de 500MB para processamento rápido

---

## ❓ FAQ

**Quanto tempo demora a transcodificação?**  
Geralmente 1-3 minutos para clips típicos de skate (30seg-2min).

**Posso fazer upload de múltiplos vídeos?**  
Sim! Faça upload de quantos quiser em paralelo.

**E se o upload falhar?**  
Servidor retenta automaticamente. Cheque sua conexão se continuar falhando.

**Posso deletar vídeos?**  
IPFS é armazenamento permanente. Conteúdo fica para sempre (esse é o ponto!).

**Funciona em dados móveis?**  
Sim, mas WiFi recomendado para arquivos grandes.

---

**Precisa de ajuda?** [Discord #help](https://discord.gg/skatehive)
