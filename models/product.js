import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: String,
  unitPrice: Number,
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  createdBy: {
    userId: String,
    userName: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
