import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  contactInformation: {
    contactPerson: String,
    phone: String,
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  productsSupplied: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      productName: String,
      unitPrice: Number,
    },
  ],
  paymentTerms: String,
  paymentMethods: [
    {
      methodName: String,
      accountDetails: {
        bankName: String,
        accountNumber: String,
        routingNumber: String,
        currency: String,
      },
    },
  ],
  status: { type: String, default: "Active" },
  createdBy: {
    userId: String,
    userName: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Vendor", vendorSchema);
