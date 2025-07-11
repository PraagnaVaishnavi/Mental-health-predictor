import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/analyze-image", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: "Image not provided" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/png",
          data: imageBase64.split(",")[1],
        },
      },
      {
        text: "Analyze this person's emotional state briefly.",
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

app.listen(5050, () => {
  console.log("✅ Gemini server running at http://localhost:5050");
});
