import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey || apiKey.includes("your_")) {
    return NextResponse.json({ error: "Groq API key not configured correctly" }, { status: 500 });
  }

  const groq = new Groq({ apiKey });

  const prompt = `
    You are an editor for "The Saudi Labor Gazette". 
    Today is ${new Date().toLocaleDateString()}.
    Generate 6 realistic and factual labor-related news articles for KSA expats.
    Return ONLY a JSON object with a "news" key containing an array of articles.
    Each article must have:
    - headline (string)
    - category (string)
    - summary (string, at least 2 paragraphs)
    - source (string)
    - image_prompt (string)

    Example format:
    {
      "news": [
        {
          "headline": "...",
          "category": "...",
          "summary": "...",
          "source": "...",
          "image_prompt": "..."
        }
      ]
    }
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const content = chatCompletion.choices[0]?.message?.content;
    if (content) {
      const data = JSON.parse(content);
      return NextResponse.json(data);
    }
    
    throw new Error("Empty response from Groq");
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ 
      error: "Failed to generate news",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
