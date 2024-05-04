const express = require("express");

require("dotenv").config();

const daleRoutes = require("./routes/dalle.routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }));
app.use("/api/v1/dalle", daleRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from Dale" });
});
app.listen(8080, () => console.log("server has started"));
