const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

const inventoryRoutes = require("./routes/inventory");

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Error Middleware
app.use(errorHandler);
app.use(
  cors({
    credentials: true,
    origin: [
      "https://inventory-management-system-azure.vercel.app",
      "http://localhost:3000",
    ],
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connection URL
const uri = process.env.MONGODB_URI;

// Initialize Connection Once and Create Connection Pool
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) throw err;
    console.log("Database Connected");
  }
);

// Routes that should handle requests
app.use("/inv", inventoryRoutes);

// Routes Middleware
app.use("/api/users", userRoute);

// Catch errors that go beyond the above routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Passes direct errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
