---
sidebar_position: 5
icon: video
---

# Video Upload Guide

Skatehive makes it easy to share your skate clips with the community. Videos are automatically transcoded for web playback and stored permanently on IPFS.

---

## 🎬 Overview

When you upload a video to Skatehive:
1. **Upload** - Send your video file
2. **Transcode** - Automatically converted to web-optimized format
3. **Store** - Permanently saved on IPFS (decentralized storage)
4. **Publish** - Embedded in your post on the Hive blockchain

---

## 📱 Supported Formats

### Video Formats

| Format | Extension | Supported |
|--------|-----------|:---------:|
| MP4 | `.mp4` | ✅ |
| QuickTime | `.mov` | ✅ |
| WebM | `.webm` | ✅ |
| AVI | `.avi` | ✅ |
| MKV | `.mkv` | ✅ |

### Recommended Settings

For best results:
- **Resolution**: 1080p or 720p
- **Codec**: H.264 (most compatible)
- **Bitrate**: 5-15 Mbps
- **Frame Rate**: 24-60 fps

---

## 📤 How to Upload

### On Webapp

1. Go to [skatehive.app](https://skatehive.app) and click **Create Post**
2. Write your post title and content
3. Click the **📹 video icon** in the editor toolbar
4. **Select your video file** from your device
5. Wait for upload and transcoding to complete
6. The video will embed automatically in your post
7. Add tags and publish!

### On Mobile App

1. Tap the **+** button to create a new post
2. Tap the **camera/video icon**
3. Choose **"Record Video"** or **"Select from Gallery"**
4. Wait for processing
5. Add your text and publish

---

## ⏱️ Processing Times

Video processing depends on file size and server load:

| File Size | Approximate Time |
|-----------|------------------|
| Under 50MB | 30 seconds - 1 minute |
| 50-100MB | 1-3 minutes |
| 100-200MB | 3-5 minutes |
| Over 200MB | May timeout - compress first |

> 💡 **Tip**: Compress large files before uploading for faster processing.

---

## 📏 File Size Limits

- **Maximum upload**: 200MB per video
- **Recommended**: Under 100MB for fastest processing

### How to Reduce File Size

If your video is too large:

1. **Use HandBrake** (free): [handbrake.fr](https://handbrake.fr/)
   - Open your video
   - Choose "Fast 1080p30" preset
   - Start encoding

2. **Use FFmpeg** (command line):
   ```bash
   ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium output.mp4
   ```

3. **Mobile apps**: Use video compressor apps from your app store

---

## 🌐 IPFS Storage

Your videos are stored on IPFS (InterPlanetary File System):

### What is IPFS?

- **Decentralized**: No single server holds your content
- **Permanent**: Files are addressed by content hash
- **Censorship-resistant**: No one can delete your content
- **Fast delivery**: Served from multiple gateways

### Your Video URL

After upload, your video gets an IPFS URL like:
```
https://ipfs.skatehive.app/ipfs/QmXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXxxx
```

This URL works forever and can be shared anywhere.

---

## 🔧 Transcoding Infrastructure

Skatehive runs multiple video transcoders for reliability:

| Server | Location | Priority |
|--------|----------|:--------:|
| Oracle | Cloud | Primary |
| Mac Mini M4 | Tailscale | Secondary |
| Raspberry Pi | Tailscale | Tertiary |

If one server is down, uploads automatically go to the next available.

---

## 🎥 Video Best Practices

### For Skate Clips

1. **Landscape orientation** - Horizontal videos look best
2. **Stable footage** - Use a tripod or have a steady hand
3. **Good lighting** - Daytime or well-lit spots work best
4. **Clear trick** - Make sure the action is visible

### For Edits

1. **Keep it tight** - 30 seconds to 3 minutes is ideal
2. **Add music carefully** - Copyright issues can arise
3. **Include your best stuff** - Quality over quantity
4. **End with a banger** - Leave viewers wanting more

---

## 🎵 Music & Copyright

### Be Careful With Music

- Hive is decentralized, but other platforms may flag content
- Use royalty-free music when possible
- Original audio is always safe
- Clips with no music avoid all issues

### Recommended Sources

- [Epidemic Sound](https://www.epidemicsound.com/) (paid)
- [Artlist](https://artlist.io/) (paid)
- [Free Music Archive](https://freemusicarchive.org/) (free)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) (free)

---

## ❓ Troubleshooting

### Upload Stuck?

1. **Check file size** - Must be under 200MB
2. **Check format** - Use MP4 or MOV
3. **Check connection** - Stable internet needed
4. **Try again** - Refresh and re-upload

### Video Not Playing?

1. **Wait for processing** - Large videos take time
2. **Refresh the page** - Sometimes needs a reload
3. **Check browser** - Try Chrome or Firefox
4. **Clear cache** - Old data can cause issues

### Poor Quality After Upload?

- Videos are transcoded to optimize for web
- Very high bitrate videos may lose some quality
- This is normal for web delivery

### Processing Timeout?

If your video times out:
1. Compress the video to under 100MB
2. Try uploading at a less busy time
3. Use a more stable internet connection

---

## 📊 After Uploading

### Check Your Post

1. Preview before publishing
2. Make sure the video plays correctly
3. Add a good title and description
4. Use relevant tags

### Engagement Tips

- Post during active community hours
- Share in Discord for more views
- Respond to comments
- Tag the spot if applicable

---

## 🔗 Related

- **[Creating Great Posts](../Get%20Started/make-posts-great-again.md)** - Tips for content creation
- **[Mobile App Guide](../Get%20Started/mobile-app.md)** - Upload from your phone
- **[Spot Map](./spot-map.md)** - Tag your video location

---

**Now go film some clips and share them with the world! 🎬🛹**
