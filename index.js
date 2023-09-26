import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import orderRoute from "./routes/order.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log("connected to db");
}

app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/gig", gigRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);
app.use("/api/review", reviewRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("server running...");
});
