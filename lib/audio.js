import ffmpeg from "fluent-ffmpeg";
import fs from "fs";

export const audioBass = async (sock, msg) => {
  let buffer = await sock.downloadMediaMessage(msg);

  fs.writeFileSync("input.mp3", buffer);

  ffmpeg("input.mp3")
    .audioFilters("bass=g=20")
    .save("bass.mp3")
    .on("end", async () => {
      let buff = fs.readFileSync("bass.mp3");
      await sock.sendMessage(msg.key.remoteJid, { audio: buff, mimetype: "audio/mp4" });
    });
};

export const audio3d = async (sock, msg) => {
  let buffer = await sock.downloadMediaMessage(msg);

  fs.writeFileSync("input.mp3", buffer);

  ffmpeg("input.mp3")
    .audioFilters("apulsator=hz=0.08")
    .save("3d.mp3")
    .on("end", async () => {
      let buff = fs.readFileSync("3d.mp3");
      await sock.sendMessage(msg.key.remoteJid, { audio: buff, mimetype: "audio/mp4" });
    });
};
