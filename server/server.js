require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const codingRoutes = require("./routes/codingRoutes");
const submissionRoutes = require("./routes/submissionRoutes");


const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/coding",codingRoutes);
app.use("/api/submissions", submissionRoutes);


app.get("/", (req, res) => {
  res.send("AI Placement Portal Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});