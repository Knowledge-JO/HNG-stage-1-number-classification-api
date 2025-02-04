import express from "express";
import NumberCheck from "./utils/numberCheck.js";
import { getNumberFunFact } from "./utils/numbersapi.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));

app.get("/api/classify-number", async (req, res) => {
  const query = req.query;
  const strNum = query.number == undefined ? "" : query.number;
  const num = Number(strNum);

  if (Number.isNaN(num)) {
    res.status(400).json({
      number: strNum,
      error: true,
    });
    return;
  }

  const result = await getNumberFunFact(num);
  res.status(200).json({
    number: num,
    is_prime: NumberCheck.checkPrime(num),
    is_perfect: NumberCheck.checkPerfect(num),
    properties: NumberCheck.getProperties(num),
    digit_sum: NumberCheck.digiSum(num),
    fun_fact: result,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Resource not found",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server", err);
    return;
  }
  console.log("Server is live");
});
