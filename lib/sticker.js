import { writeFile } from "fs/promises";
import { exec } from "child_process";
import axios from "axios";

export const stickerMaker = async (sock, msg) => {
  let m = msg.message;
  let jid = msg.key.remoteJid;

  try {
    let type = Object.keys(m)[0];

    if (type === "imageMessage") {
      let buffer = await sock.downloadMediaMessage(msg);
      await sock.sendMessage(jid, { sticker: buffer });
    }

    if (type === "videoMessage") {
      let buffer = await sock.downloadMediaMessage(msg);
      await sock.sendMessage(jid, { sticker: buffer });
    }

  } catch (e) {
    console.log(e);
  }
};
