import "dotenv/config";
import express from "express";
import inventorRouter from "./routes/inventor.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/inventor", inventorRouter);

app.listen(PORT, () => {
  console.log("Servidor Web en el puerto:", PORT);
});
