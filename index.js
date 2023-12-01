const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// Connect to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/backendServer", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

connectToDB();

// Use product routes
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
