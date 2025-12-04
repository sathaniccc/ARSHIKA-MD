export default function(app) {
  app.get("/alive", (req, res) => {
    res.send("Bot Active");
  });
}
