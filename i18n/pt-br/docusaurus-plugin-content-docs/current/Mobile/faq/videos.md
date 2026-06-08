---
sidebar_position: 4
---

# Vídeos

### Como faço upload de vídeo?

1. Toque na aba **+** (Criar)
2. Selecione **Vídeo** ou use a câmera do app para gravar um clip
3. Escolha o vídeo da galeria ou grave direto
4. Adicione título e tags
5. Toque em **Upload** — o processamento acontece em background
6. Você será notificado quando estiver pronto para publicar

Os vídeos são transcodificados automaticamente e enviados para o **IPFS** pela infraestrutura do Skatehive.

---

### Por que meu vídeo está demorando para processar?

A transcodificação depende do tamanho do arquivo e da sua conexão. Tempos aproximados:

- Clips curtos (menos de 30s): 1–3 minutos
- Clips médios (30s–2 min): 3–10 minutos
- Vídeos longos (mais de 2 min): 10–30 minutos

Mantenha o app aberto durante o upload. Para arquivos grandes, use **WiFi** — dados móveis podem expirar.

O app envia seu vídeo para um servidor que transcodifica em H.264 e salva no IPFS. O sistema tem três servidores em failover (Mac Mini M4 → Oracle Cloud → Raspberry Pi), então o tempo pode variar dependendo de qual servidor estiver processando.

---

### Quais formatos e tamanhos são suportados?

- **Formatos:** MP4, MOV (H.264 recomendado)
- **Tamanho máximo:** Sem limite fixo, mas arquivos acima de 500 MB podem expirar em conexões lentas
- **Resolução:** Até 1080p — resoluções maiores são reduzidas automaticamente

---

### Por que meu vídeo não reproduz no feed?

- Verifique sua conexão de internet
- Tente fechar e reabrir o app
- O vídeo pode ainda estar processando — aguarde alguns minutos e atualize o feed
- Se o problema persistir, reporte em [Discord #bugs](https://discord.gg/skatehive)
