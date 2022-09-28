const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const authRoutes = require("./routes/auth");
const authUsers = require("./routes/users");
const blogRoutes = require("./routes/blog");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to MongoDB!"));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/v1/auth", authRoutes);
app.use("/v1/users", authUsers);
app.use("/v1/blog", blogRoutes);
app.use("/v1/category", categoryRoute);

app.use("/", (req, res) => {
  res.send("Server Running");
});

app.listen(process.env.PORT || 5000, () => console.log("Server Running!"));