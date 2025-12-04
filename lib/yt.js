import ytdl from "ytdl-core";
import fs from "fs";

export const ytVideo = async (sock, msg) => {
  try {
    let text = msg.message.conversation.split(" ")[1];
    if (!ytdl.validateURL(text)) {
      return sock.sendMessage(msg.key.remoteJid, { text: "❌ Invalid YouTube link" });
    }

    sock.sendMessage(msg.key.remoteJid, { text: "⬇ Downloading..." });

    let stream = ytdl(text, { filter: "videoandaudio" });
    let file = "yt.mp4";
    stream.pipe(fs.createWriteStream(file));

    stream.on("end", async () => {
      let buff = fs.readFileSync(file);
      await sock.sendMessage(msg.key.remoteJid, { video: buff });
    });

  } catch (e) {
    console.log(e);
  }
};
