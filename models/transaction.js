import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  transactionDate: { type: Date, default: Date.now },
  transactionType: String,
  amount: Number,
  status: String,
  paymentMethod: {
    methodName: String,
    transactionId: String,
  },
  createdBy: {
    userId: String,
    userName: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionSchema);
