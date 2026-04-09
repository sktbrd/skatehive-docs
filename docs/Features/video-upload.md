---
sidebar_position: 5
icon: video
---

# Video Upload

Free video transcoding and IPFS hosting for all Skatehive members. Upload your clips, we handle the rest.

---

## 🎬 How It Works

1. Upload your video
2. Our servers transcode it to web-optimized format
3. Video is stored permanently on IPFS
4. You get an IPFS URL to use in your post

**Completely free.** No file size limits. Permanent storage.

---

## 📊 Real-Time Progress

Watch your upload in real-time:

- 🔄 **Receiving** (5%) - Server receiving your file
- 🎬 **Transcoding** (10-80%) - Converting to web format
- ☁️ **Uploading** (80-100%) - Storing on IPFS
- ✅ **Complete** (100%) - Done!

**Skateboard progress bar 🛹** moves as your video processes.

**Auto-close:** Terminal closes after 10 seconds on success. Click "Keep Open" to cancel.

---

## 📤 Upload Methods

### Web App

1. Open post composer
2. Click video upload button
3. Select file
4. Wait for processing
5. URL inserted automatically

### Mobile App

1. Record or select video
2. Tap upload
3. Processing happens in background
4. Post when ready

### Direct Upload

Use the API endpoint:

```bash
curl -X POST https://oracle-api.skatehive.app/upload \
  -F "file=@your-video.mp4" \
  -F "username=yourname"
```

Response includes IPFS URL.

---

## 🎥 Supported Formats

**Input:** MP4, MOV, AVI, MKV, WEBM  
**Output:** Web-optimized MP4 (H.264)

**Max file size:** None (but large files take longer)  
**Recommended:** Under 500MB for faster processing

---

## 🛠️ Advanced Options

### API Response

```json
{
  "ipfs_url": "https://ipfs.skatehive.app/ipfs/Qm...",
  "thumbnail": "https://ipfs.skatehive.app/ipfs/Qm...",
  "duration": 15.5,
  "size": 12458965
}
```

### Thumbnail Generation

Thumbnails auto-generated at 50% mark. Use in post previews.

### Multiple Servers

Skatehive runs redundant servers with automatic failover. If one is down, another handles your upload seamlessly.

---

## ❓ FAQ

**How long does transcoding take?**  
Usually 1-3 minutes for typical skate clips (30sec-2min).

**Can I upload multiple videos?**  
Yes! Upload as many as you want in parallel.

**What if upload fails?**  
Server automatically retries. Check your internet connection if it keeps failing.

**Can I delete videos?**  
IPFS is permanent storage. Content stays forever (that's the point!).

**Does it work on mobile data?**  
Yes, but WiFi recommended for large files.

---

**Need help?** [Discord #help](https://discord.gg/skatehive)
