const express = require("express");
const router = express.Router();
const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post("/analyze", async (req, res) => {
  try {
    const { images } = req.body; // images: array of base64 strings

    const responses = await Promise.all(images.map(async (img) => {
      const result = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType: "image/jpeg",
                    data: img.replace(/^data:image\/jpeg;base64,/, ""),
                  },
                },
                {
                  text: "Analyze this face for stress or signs of mental strain. Return only 'Treatment Required' or 'Not Required'.",
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": GEMINI_API_KEY,
          },
        }
      );
      return result.data.candidates[0].content.parts[0].text;
    }));

    // If any say "Treatment Required", return that
    const finalResult = responses.includes("Treatment Required")
      ? "Treatment Required"
      : "Not Required";

    res.json({ prediction: finalResult });
  } catch (error) {
    console.error("Gemini Vision API error:", error.message);
    res.status(500).json({ prediction: "Unknown" });
  }
});

module.exports = router;
