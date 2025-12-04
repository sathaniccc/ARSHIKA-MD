FROM node:18-slim

# install ffmpeg and build deps for sharp
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    build-essential \
    python3 \
    make \
    git \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm ci --only=production

COPY . .

RUN mkdir -p ./auth_info

EXPOSE 3000

CMD ["sh", "-c", "node deploy_check.js && node server.js"]
