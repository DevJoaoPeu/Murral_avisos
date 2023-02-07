const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;
const apiRouter = require("./routes/api");

app.use(express.static(path.join(__dirname, "public")))

app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
