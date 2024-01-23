import express, { Application } from "express";
import userRouter from "./routers/user.router";
import eventRouter from "./routers/event.router";
import cors from "cors";

const app: Application = express();
const PORT: number = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", eventRouter);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
