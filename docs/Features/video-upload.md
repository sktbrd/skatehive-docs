---
sidebar_position: 5
icon: video
---

# Video Upload

Skatehive provides free video upload and transcoding for all skate content. Videos are transcoded to web-optimized formats and stored on IPFS for permanent access.

---

## 🎬 Overview

When you upload a video:
1. Video is sent to a transcoding server
2. Server converts it to web-optimized format
3. Transcoded video is uploaded to IPFS
4. You receive an IPFS URL to use in your post

The service is **completely free** for Skatehive community members.

---

## 🖥️ Transcoding Servers

Skatehive runs multiple transcoding servers with automatic fallback:

| Priority | Server | Location |
|----------|--------|----------|
| 1 | Oracle Cloud | Primary (146.235.239.243) |
| 2 | Mac Mini M4 | Secondary (192.168.68.57) |
| 3 | Raspberry Pi | Tertiary (192.168.68.105) |

If the primary server is unavailable, the system automatically tries the next one.

---

## 📤 How It Works

### Webapp Upload

1. Open the post composer
2. Click the video upload button
3. Select your video file
4. Wait for transcoding and IPFS upload
5. Video URL is inserted into your post

### Mobile App Upload

1. Record or select a video
2. The app checks server status via the API
3. Video is sent to the active transcoding server
4. Progress is shown during upload
5. IPFS URL is returned and used in your post

---

## 📊 Upload Details

When uploading, the following data is sent:

| Field | Description |
|-------|-------------|
| `video` | The video file |
| `username` | Your Hive username |
| `deviceInfo` | Device type (webapp/mobile) |
| `browser` | Browser information (webapp) |
| `isIOS` | iOS flag for mobile |
| `isAndroid` | Android flag for mobile |
| `screenWidth` | Screen width |
| `screenHeight` | Screen height |

Device info helps with debugging and optimization.

---

## 🔧 Server Status API

The mobile app uses a status endpoint to get the active server:

```
GET https://api.skatehive.app/api/v1/status
```

Response includes the current active transcoding URL.

---

## 📁 Supported Formats

### Input Formats
- MP4, MOV, AVI, MKV
- Most common video codecs
- Max file size: ~500MB (recommended)

### Output Format
- MP4 with H.264 codec
- Web-optimized for streaming
- Compressed for fast loading

---

## 🌐 IPFS Storage

After transcoding, videos are stored on IPFS:
- **Gateway**: `ipfs.skatehive.app`
- **Pinning**: Via Pinata for permanence
- **Access**: Videos remain available as long as they're pinned

Video URLs look like:
```
https://ipfs.skatehive.app/ipfs/Qm...
```

---

## ⏱️ Processing Time

Processing time depends on:
- Video length
- Original file size
- Server load
- Your connection speed

Typical times:
- 30-second clip: ~1-2 minutes
- 3-minute video: ~5-10 minutes
- Longer videos: 15+ minutes

---

## 💡 Tips for Best Results

1. **Trim before upload** - Remove unnecessary footage
2. **Use good lighting** - Better input = better output
3. **Horizontal preferred** - Standard 16:9 works best
4. **Check connection** - Stable internet prevents failures
5. **Be patient** - Large videos take time

---

## ⚠️ Troubleshooting

### Upload Failed
- Check your internet connection
- Try a smaller file
- Wait and retry (server may be busy)

### Video Won't Play
- Wait for transcoding to complete
- Check the IPFS URL is correct
- Try a different browser

### Slow Processing
- Large files take longer
- Peak times may be slower
- System auto-retries if needed

---

## 🔗 Technical Flow

```
Video File
    ↓
Transcoding Server (Oracle/Mac Mini/RPi)
    ↓
FFmpeg Processing (H.264 conversion)
    ↓
IPFS Upload (Pinata)
    ↓
IPFS URL Returned
    ↓
Embedded in Hive Post
```

---

**Upload your skate clips and share them forever on the blockchain! 🎬🛹**
