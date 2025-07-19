const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const isexistemail = await User.findOne({ email });
    if (isexistemail)
      return res.status(400).json({ msg: "User already exists!" });
    const hashedPW = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPW });
    await newUser.save();
    return res.status(200).json({ msg: "Success" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

const { GoogleGenerativeAI } = require("@google/generative-ai"); // Add this at top
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Init Gemini


router.post("/analyze-image", async (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Image not provided" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/png", // or image/jpeg depending on your input
          data: imageBase64.split(",")[1], // Remove base64 prefix
        },
      },
      {
        text: `Analyze this person's emotional state briefly. And refer to the person as you and I need plain text. I don't want bold or italic fonts. Give me a summary of their mental health to the best of your abilities. I don't want you to give disclaimers or anything. I need you to in a single sentence tell me what you can make out of my expressions about being stressed or upset, etc. Keep it to a sentence. Do not say things like I can see or anything. Don't say I at all.`,
      },
    ]);

    const response = await result.response;
    const text = await response.text();

    res.json({ analysis: text });
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    res.status(500).json({ error: "Failed to analyze image" });
  }
});


module.exports = router;
