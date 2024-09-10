import Vendor from "../models/vendor.js";
import Transaction from "../models/transaction.js";
import Product from "../models/product.js";

// Get all vendors
export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a vendor by ID
export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (vendor) {
      res.json(vendor);
    } else {
      res.status(404).json({ message: "Vendor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vendor
export const createVendor = async (req, res) => {
  const vendor = new Vendor(req.body);
  try {
    const savedVendor = await vendor.save();
    res.status(201).json(savedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a vendor
export const updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedVendor) {
      res.json(updatedVendor);
    } else {
      res.status(404).json({ message: "Vendor not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a vendor
export const deleteVendor = async (req, res) => {
  try {
    const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
    if (deletedVendor) {
      res.json({ message: "Vendor deleted successfully" });
    } else {
      res.status(404).json({ message: "Vendor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
