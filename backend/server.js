import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import connectToMongodb from "./db/connecttomongo.js";
import messageRoutes from "./routes/message.routes.js"
const app=express();
dotenv.config();
const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
res.send("hello");
});
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.listen(PORT,()=>{
      connectToMongodb();
    console.log(`Server running on port ${PORT}`);});