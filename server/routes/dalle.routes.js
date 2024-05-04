const express = require("express");
const OpenAI = require("openai");

require("dotenv").config();
const router = express.Router();

const config = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "hello fro, routes dalle" });
});
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await config.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
