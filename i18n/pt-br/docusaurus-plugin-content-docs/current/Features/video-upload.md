---
sidebar_position: 5
icon: video
---

# Guia de Upload de Vídeo

O Skatehive facilita o compartilhamento dos seus clips de skate com a comunidade. Vídeos são automaticamente transcodificados para reprodução na web e armazenados permanentemente no IPFS.

---

## 🎬 Visão Geral

Quando você faz upload de um vídeo no Skatehive:
1. **Upload** - Envie seu arquivo de vídeo
2. **Transcodificação** - Convertido automaticamente para formato otimizado para web
3. **Armazenamento** - Salvo permanentemente no IPFS (armazenamento descentralizado)
4. **Publicação** - Incorporado no seu post na blockchain Hive

---

## 📱 Formatos Suportados

### Formatos de Vídeo

| Formato | Extensão | Suportado |
|---------|----------|:---------:|
| MP4 | `.mp4` | ✅ |
| QuickTime | `.mov` | ✅ |
| WebM | `.webm` | ✅ |
| AVI | `.avi` | ✅ |
| MKV | `.mkv` | ✅ |

### Configurações Recomendadas

Para melhores resultados:
- **Resolução**: 1080p ou 720p
- **Codec**: H.264 (mais compatível)
- **Bitrate**: 5-15 Mbps
- **Frame Rate**: 24-60 fps

---

## 📤 Como Fazer Upload

### No Webapp

1. Vá para [skatehive.app](https://skatehive.app) e clique em **Criar Post**
2. Escreva o título e conteúdo do seu post
3. Clique no **📹 ícone de vídeo** na barra de ferramentas do editor
4. **Selecione seu arquivo de vídeo** do seu dispositivo
5. Aguarde o upload e transcodificação completarem
6. O vídeo será incorporado automaticamente no seu post
7. Adicione tags e publique!

### No App Mobile

1. Toque no botão **+** para criar um novo post
2. Toque no **ícone de câmera/vídeo**
3. Escolha **"Gravar Vídeo"** ou **"Selecionar da Galeria"**
4. Aguarde o processamento
5. Adicione seu texto e publique

---

## ⏱️ Tempos de Processamento

O processamento de vídeo depende do tamanho do arquivo e carga do servidor:

| Tamanho do Arquivo | Tempo Aproximado |
|--------------------|------------------|
| Menos de 50MB | 30 segundos - 1 minuto |
| 50-100MB | 1-3 minutos |
| 100-200MB | 3-5 minutos |
| Mais de 200MB | Pode dar timeout - comprima primeiro |

> 💡 **Dica**: Comprima arquivos grandes antes de fazer upload para processamento mais rápido.

---

## 📏 Limites de Tamanho de Arquivo

- **Upload máximo**: 200MB por vídeo
- **Recomendado**: Menos de 100MB para processamento mais rápido

### Como Reduzir Tamanho do Arquivo

Se seu vídeo for muito grande:

1. **Use HandBrake** (grátis): [handbrake.fr](https://handbrake.fr/)
   - Abra seu vídeo
   - Escolha o preset "Fast 1080p30"
   - Inicie a codificação

2. **Use FFmpeg** (linha de comando):
   ```bash
   ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium output.mp4
   ```

3. **Apps mobile**: Use apps de compressão de vídeo da sua app store

---

## 🌐 Armazenamento IPFS

Seus vídeos são armazenados no IPFS (InterPlanetary File System):

### O Que é IPFS?

- **Descentralizado**: Nenhum servidor único guarda seu conteúdo
- **Permanente**: Arquivos são endereçados por hash de conteúdo
- **Resistente à censura**: Ninguém pode deletar seu conteúdo
- **Entrega rápida**: Servido de múltiplos gateways

### Sua URL de Vídeo

Após upload, seu vídeo recebe uma URL IPFS como:
```
https://ipfs.skatehive.app/ipfs/QmXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXxxx
```

Esta URL funciona para sempre e pode ser compartilhada em qualquer lugar.

---

## 🔧 Infraestrutura de Transcodificação

O Skatehive opera múltiplos transcodificadores de vídeo para confiabilidade:

| Servidor | Localização | Prioridade |
|----------|-------------|:----------:|
| Oracle | Cloud | Primário |
| Mac Mini M4 | Tailscale | Secundário |
| Raspberry Pi | Tailscale | Terciário |

Se um servidor estiver fora, uploads vão automaticamente para o próximo disponível.

---

## 🎥 Melhores Práticas para Vídeo

### Para Clips de Skate

1. **Orientação paisagem** - Vídeos horizontais ficam melhor
2. **Filmagem estável** - Use um tripé ou tenha mão firme
3. **Boa iluminação** - Luz do dia ou picos bem iluminados funcionam melhor
4. **Manobra clara** - Certifique-se de que a ação está visível

### Para Edits

1. **Mantenha conciso** - 30 segundos a 3 minutos é ideal
2. **Adicione música com cuidado** - Podem surgir problemas de copyright
3. **Inclua seu melhor material** - Qualidade sobre quantidade
4. **Termine com um banger** - Deixe os espectadores querendo mais

---

## 🎵 Música e Copyright

### Cuidado com Música

- Hive é descentralizado, mas outras plataformas podem marcar conteúdo
- Use música livre de royalties quando possível
- Áudio original é sempre seguro
- Clips sem música evitam todos os problemas

### Fontes Recomendadas

- [Epidemic Sound](https://www.epidemicsound.com/) (pago)
- [Artlist](https://artlist.io/) (pago)
- [Free Music Archive](https://freemusicarchive.org/) (grátis)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) (grátis)

---

## ❓ Solução de Problemas

### Upload Travado?

1. **Verifique tamanho do arquivo** - Deve ser menos de 200MB
2. **Verifique formato** - Use MP4 ou MOV
3. **Verifique conexão** - Precisa de internet estável
4. **Tente novamente** - Atualize e reenvie

### Vídeo Não Está Reproduzindo?

1. **Aguarde processamento** - Vídeos grandes levam tempo
2. **Atualize a página** - Às vezes precisa recarregar
3. **Verifique navegador** - Tente Chrome ou Firefox
4. **Limpe cache** - Dados antigos podem causar problemas

### Qualidade Ruim Após Upload?

- Vídeos são transcodificados para otimizar para web
- Vídeos com bitrate muito alto podem perder alguma qualidade
- Isso é normal para entrega web

### Timeout no Processamento?

Se seu vídeo der timeout:
1. Comprima o vídeo para menos de 100MB
2. Tente fazer upload em um horário menos movimentado
3. Use uma conexão de internet mais estável

---

## 📊 Após o Upload

### Verifique Seu Post

1. Pré-visualize antes de publicar
2. Certifique-se de que o vídeo reproduz corretamente
3. Adicione um bom título e descrição
4. Use tags relevantes

### Dicas de Engajamento

- Poste durante horários ativos da comunidade
- Compartilhe no Discord para mais visualizações
- Responda comentários
- Marque o pico se aplicável

---

## 🔗 Relacionados

- **[Criando Ótimos Posts](../Get%20Started/make-posts-great-again.md)** - Dicas para criação de conteúdo
- **[Guia do App Mobile](../Get%20Started/mobile-app.md)** - Upload do seu celular
- **[Mapa de Picos](./spot-map.md)** - Marque a localização do seu vídeo

---

**Agora vá filmar alguns clips e compartilhe com o mundo! 🎬🛹**
