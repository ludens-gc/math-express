import express from "express";
import cors from "cors";

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/sum", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) + Number(num2);
  res.json({ result });
});

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) - Number(num2);
  res.json({ result });
});

app.post("/mul", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) * Number(num2);
  res.json({ result });
});

app.post("/div", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) / Number(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}/`);
});
