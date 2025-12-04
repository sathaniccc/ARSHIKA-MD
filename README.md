<!-- README.md -->
<!-- Top animated banner -->
![Arshika Banner](./assets/Arshika-banner.svg)

# 🚀 ARSHIKA-MD (2026 Ultra-Stable)

Arshika-MD — Next-Gen WhatsApp Multi-Device Bot built on **Baileys MD**.  
Koyeb-ready, pairing-code login, FFmpeg-powered media suite, auto-heal runtime and a futuristic, animated README to match the brand.

---

## 🔮 Visual Identity
This repository includes an **animated SVG banner** (`/assets/Arshika-banner.svg`) that reflects the project brand ("**Arshika-MD**").  
- Add / customize the SVG (colors, size) to perfectly match your style.  
- The SVG is inline-friendly — GitHub will render animation and gradients.

---

## ✨ Quick Features
- Pairing-code multi-device login (auth_info/)  
- Image/Video → Sticker generator  
- Audio tools: bass boost, 3D, quality enhancer  
- TTS hook ready (use your provider)  
- YouTube public downloader (legal/public content only)  
- Auto-reconnect & auto-repair runtime  
- Per-chat smart queue to avoid rate-limits  
- Koyeb + Docker friendly

---

## ⚙️ How to Get Your Personal Animated README Look
1. Fork this repo to your GitHub account.  
2. Edit `assets/Arshika-banner.svg` if you want different colors/text. (SVG is plain text — change the `<text>` content).  
3. Commit & push. README will update automatically.

---

## 🧩 GitHub Actions — Docker Build & Publish (Optional)
Add the following workflow to `.github/workflows/build-and-push.yml` to auto-build Docker image and push to GHCR (useful if you want to manage image versions or let Koyeb pull from container registry).

```yaml
# .github/workflows/build-and-push.yml
name: Build and Publish Docker

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  packages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: ghcr.io/${{ github.repository_owner }}/arshika-md:latest
          file: Dockerfile
