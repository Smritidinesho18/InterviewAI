import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.post("/api/analyze-resume", async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText || resumeText.trim() === "") {
      return res.status(400).json({
        error: "Resume text is required"
      });
    }

    const prompt = `
You are an expert resume reviewer.

Analyze the following resume for a software/technology job.

Resume:
${resumeText}

Return ONLY valid JSON in exactly this format:

{
  "score": 85,
  "strengths": [
    "strength 1",
    "strength 2",
    "strength 3"
  ],
  "improvements": [
    "improvement 1",
    "improvement 2",
    "improvement 3"
  ],
  "missingSkills": [
    "skill 1",
    "skill 2"
  ],
  "summary": "short summary of the resume"
}

Give a score from 0 to 100 based on:

- Technical skills
- Projects
- Education
- Experience
- Achievements
- Certifications
- Resume clarity
- Relevance to software/technology careers

Give practical and specific feedback.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    const text = response.text;

    res.json({
      result: text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      error: "Failed to analyze resume"
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Backend server running on http://localhost:${PORT}`
  );
});