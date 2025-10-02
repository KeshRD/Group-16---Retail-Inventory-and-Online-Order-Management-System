const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./routes/categoryRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const orderitemRoutes = require("./routes/orderItemRoutes"); 
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");       
const productRoutes = require("./routes/productRoutes");
const reportRoutes = require("./routes/reportRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const transactionRoutes = require("./routes/transactionRoutes"); 
const userRoutes = require("./routes/userRoutes");
const variantRoutes = require("./routes/variantRoutes");


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/orderitems", orderitemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/variants", variantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
