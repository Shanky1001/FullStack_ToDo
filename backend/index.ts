import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(__dirname + "/src/views/main.ejs", {
    caches: true,
    __filename: "main.ejs",
  });
});
app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});

export default app;
