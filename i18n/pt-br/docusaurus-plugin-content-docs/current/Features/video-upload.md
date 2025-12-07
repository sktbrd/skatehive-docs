---
sidebar_position: 5
icon: video
---

# Upload de Vídeo

O Skatehive oferece upload e transcoding de vídeo gratuito para todo conteúdo de skate. Os vídeos são transcodados para formatos otimizados para web e armazenados no IPFS para acesso permanente.

---

## 🎬 Visão Geral

Quando você faz upload de um vídeo:
1. Vídeo é enviado para um servidor de transcoding
2. Servidor converte para formato otimizado para web
3. Vídeo transcodado é enviado para IPFS
4. Você recebe uma URL IPFS para usar no seu post

O serviço é **completamente gratuito** para membros da comunidade Skatehive.

---

## 🖥️ Servidores de Transcoding

O Skatehive opera múltiplos servidores de transcoding com fallback automático:

| Prioridade | Servidor | Localização |
|------------|----------|-------------|
| 1 | Oracle Cloud | Primário (146.235.239.243) |
| 2 | Mac Mini M4 | Secundário (192.168.68.57) |
| 3 | Raspberry Pi | Terciário (192.168.68.105) |

Se o servidor primário estiver indisponível, o sistema automaticamente tenta o próximo.

---

## 📤 Como Funciona

### Upload no Webapp

1. Abra o compositor de posts
2. Clique no botão de upload de vídeo
3. Selecione seu arquivo de vídeo
4. Aguarde transcoding e upload IPFS
5. URL do vídeo é inserida no seu post

### Upload no App Mobile

1. Grave ou selecione um vídeo
2. O app verifica status do servidor via API
3. Vídeo é enviado ao servidor de transcoding ativo
4. Progresso é mostrado durante upload
5. URL IPFS é retornada e usada no seu post

---

## 📊 Detalhes do Upload

Ao fazer upload, os seguintes dados são enviados:

| Campo | Descrição |
|-------|-----------|
| `video` | O arquivo de vídeo |
| `username` | Seu username Hive |
| `deviceInfo` | Tipo de dispositivo (webapp/mobile) |
| `browser` | Informação do navegador (webapp) |
| `isIOS` | Flag iOS para mobile |
| `isAndroid` | Flag Android para mobile |
| `screenWidth` | Largura da tela |
| `screenHeight` | Altura da tela |

Info do dispositivo ajuda com debugging e otimização.

---

## 🔧 API de Status do Servidor

O app mobile usa um endpoint de status para obter o servidor ativo:

```
GET https://api.skatehive.app/api/v1/status
```

Resposta inclui a URL de transcoding ativa atual.

---

## 📁 Formatos Suportados

### Formatos de Entrada
- MP4, MOV, AVI, MKV
- Maioria dos codecs de vídeo comuns
- Tamanho máximo: ~500MB (recomendado)

### Formato de Saída
- MP4 com codec H.264
- Otimizado para streaming web
- Comprimido para carregamento rápido

---

## 🌐 Armazenamento IPFS

Após transcoding, os vídeos são armazenados no IPFS:
- **Gateway**: `ipfs.skatehive.app`
- **Pinning**: Via Pinata para permanência
- **Acesso**: Vídeos permanecem disponíveis enquanto estiverem pinned

URLs de vídeo ficam assim:
```
https://ipfs.skatehive.app/ipfs/Qm...
```

---

## ⏱️ Tempo de Processamento

O tempo de processamento depende de:
- Duração do vídeo
- Tamanho original do arquivo
- Carga do servidor
- Velocidade da sua conexão

Tempos típicos:
- Clip de 30 segundos: ~1-2 minutos
- Vídeo de 3 minutos: ~5-10 minutos
- Vídeos mais longos: 15+ minutos

---

## 💡 Dicas para Melhores Resultados

1. **Corte antes do upload** - Remova filmagem desnecessária
2. **Use boa iluminação** - Melhor entrada = melhor saída
3. **Horizontal preferido** - Padrão 16:9 funciona melhor
4. **Verifique conexão** - Internet estável previne falhas
5. **Seja paciente** - Vídeos grandes levam tempo

---

## ⚠️ Solução de Problemas

### Upload Falhou
- Verifique sua conexão de internet
- Tente um arquivo menor
- Aguarde e tente novamente (servidor pode estar ocupado)

### Vídeo Não Reproduz
- Aguarde transcoding completar
- Verifique se URL IPFS está correta
- Tente um navegador diferente

### Processamento Lento
- Arquivos grandes levam mais tempo
- Horários de pico podem ser mais lentos
- Sistema faz retry automático se necessário

---

## 🔗 Fluxo Técnico

```
Arquivo de Vídeo
    ↓
Servidor de Transcoding (Oracle/Mac Mini/RPi)
    ↓
Processamento FFmpeg (conversão H.264)
    ↓
Upload IPFS (Pinata)
    ↓
URL IPFS Retornada
    ↓
Incorporado no Post Hive
```

---

**Faça upload dos seus clips de skate e compartilhe para sempre na blockchain! 🎬🛹**
