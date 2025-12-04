import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Arshika-MD Bot Running Successfully 🚀");
});

app.listen(3000, () => console.log("Server Alive"));
