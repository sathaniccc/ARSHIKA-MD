import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys";
import qr from "qrcode-terminal";
import fs from "fs";
import P from "pino";
import { exec } from "child_process";
import { handleCommands } from "./lib/commands.js";

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth_info");
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    logger: P({ level: "silent" })
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      console.log("Connection closed, restarting...");
      start();
    } else if (connection === "open") {
      console.log("Bot Connected Successfully 🚀");
    }
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    handleCommands(sock, msg);
  });
}

start();￼Enter
