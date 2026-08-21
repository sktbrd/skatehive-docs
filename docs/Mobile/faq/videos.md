---
sidebar_position: 4
---

# Videos

### How do I upload a video?

1. Tap the **+** (Create) tab
2. Select **Video** or use the in-app camera to record a clip
3. Select your video from the gallery or record directly
4. Add a title and tags
5. Tap **Upload** — processing happens in the background
6. You'll be notified when it's ready to publish

Videos are automatically transcoded and uploaded to **IPFS** via the Skatehive infrastructure.

---

### Why is my video taking so long to process?

Video transcoding depends on file size and your connection. Typical times:

- Short clips (under 30s): 1–3 minutes
- Medium clips (30s–2 min): 3–10 minutes
- Long videos (2 min+): 10–30 minutes

Keep the app open during upload. For large files, use **WiFi** — mobile data may time out.

The app sends your video to a processing server that transcodes it to H.264 and pins it to IPFS. The system has three servers in failover order (Mac Mini M4 → Oracle Cloud → Raspberry Pi), so processing time can vary depending on which server is handling your upload.

---

### What video formats and sizes are supported?

- **Formats:** MP4, MOV (H.264 recommended)
- **Max size:** No hard cap, but files over 500 MB may time out on slow connections
- **Resolution:** Up to 1080p — higher resolutions are automatically downscaled

---

### Why won't my video play in the feed?

- Check your internet connection
- Try closing and reopening the app
- The video may still be processing — wait a few minutes and refresh the feed
- If the issue persists, report it in [Discord #bugs](https://discord.gg/skatehive)
