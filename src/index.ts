import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/users", async (req, res) => {
  try {
    return res.status(201).send("hello");
  } catch {
    return res.status(500).send("erro");
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("rodando"));
