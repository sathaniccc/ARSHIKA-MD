<!-- README.md -->
<!-- Top animated banner -->
![Arshika Banner](./assets/Arshika-banner.svg)

# 🚀 ARSHIKA-MD (2026 Ultra-Stable)

Arshika-MD — Next-Gen WhatsApp Multi-Device Bot built on **Baileys MD**.  
Koyeb-ready, pairing-code login, FFmpeg-powered media suite, auto-heal runtime and a futuristic, animated README to match the brand.

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
<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=35&duration=3000&color=9A00FF&center=true&vCenter=true&width=600&lines=🚀+ARSHIKA+MD+2026;Futuristic+WhatsApp+Bot;Cloud+Optimized+|+Koyeb+Ready;Ultra+Stable+|+Errorless+Engine" />
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/ARSHIKA-MD-Premium_2026-purple?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Status-🔥_Active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MultiDevice-Connected-blue?style=for-the-badge" />
</p>

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
