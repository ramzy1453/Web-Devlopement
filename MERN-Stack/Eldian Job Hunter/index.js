import express from "express";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import { connectDB, connectServer } from "./config";
import notFoundMiddleware from "./middlewares/notFound";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import authRouter from "./routes/auth";
import jobRouter from "./routes/job";
import authMiddleware from "./middlewares/authMiddleware";

// Server
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
if (!process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
} else {
  app.use(express.static("client/build"));
}
// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Eldian Job Hunter API" });
});

app.use("/api/auth", authRouter);
app.use("/api/job", [authMiddleware], jobRouter);

app.use(notFoundMiddleware());
app.use(errorHandlerMiddleware());

// Connection
connectDB();
connectServer(app);
