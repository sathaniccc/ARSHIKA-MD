import { stickerMaker } from "./sticker.js";
import { ytVideo } from "./yt.js";
import { audioBass, audio3d } from "./audio.js";
import axios from "axios";

export const handleCommands = async (sock, msg) => {
  const from = msg.key.remoteJid;
  const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

  if (!text) return;

  switch (text.toLowerCase()) {

    case "menu":
      await sock.sendMessage(from, { text: 
`🌟 *ARSHIKA-MD MENU* 🌟

📌 Sticker:
• image to sticker
• video to sticker

🎧 Audio Tools:
• bass
• 3d
• convert

📥 Downloader:
• yt video
• yt song

🗣 TTS:
• .tts <text>

📊 System:
• alive
• ping
`});
      break;

    case "alive":
      await sock.sendMessage(from, { text: "✨ *Arshika-MD Bot Alive!*" });
      break;

    case "ping":
      await sock.sendMessage(from, { text: "Pong! 🏓" });
      break;

    case "bass":
      audioBass(sock, msg);
      break;

    case "3d":
      audio3d(sock, msg);
      break;

    case "yt":
      ytVideo(sock, msg);
      break;

    case "sticker":
    case "s":
      stickerMaker(sock, msg);
      break;

    default:
      break;
  }
};
