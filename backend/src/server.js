import express from "express";
import dotenv from "dotenv";
import cookieParser from   "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"   
import { connectDB } from "./lib/db.js";
dotenv.config(); 
const app = express();
const PORT=process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/chat",chatRoutes);
app.get("/", (req, res) => {
  res.send("Streamify Backend is running");
});
connectDB();
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: Date.now() });
});

app.listen(PORT,() =>{
    console.log(`Server is running on port  ${PORT}`);
});