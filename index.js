import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import vendorRoutes from "./routes/vendorRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
const MONGO_URI =
  "mongodb+srv://BackendUser:rUOIpCKLc0oVpmtw@clusterkreupai.imb19.mongodb.net/vendor-management?retryWrites=true&w=majority&appName=ClusterKreupAI";
// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use("/api/vendors", vendorRoutes);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
