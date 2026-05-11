import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are an expert on Saudi Arabian Labour Law, Residency (Iqama) rules, and expatriate guidance.
    Provide 4 brief, factual, and helpful news updates or tips for expatriates in KSA for the month of May.
    Focus on topics like: Labour Law changes, Qiwa/Absher updates, Visa rules, or End of Service benefits.
    Each item should be a single sentence.
    Return the response as a JSON array of strings.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Attempt to parse JSON from the response
    const jsonMatch = text.match(/\[.*\]/s);
    if (jsonMatch) {
      const news = JSON.parse(jsonMatch[0]);
      return NextResponse.json({ news });
    }
    
    return NextResponse.json({ news: [
      "New updates to the KSA Labour Law regarding contract terminations for.",
      "MHRSD announces new simplified procedures for Iqama transfers via Qiwa.",
      "Guidance on End of Service (ESB) calculations for private sector employees updated.",
      "Latest updates on exit re-entry visa fees and validity extensions."
    ] });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate news" }, { status: 500 });
  }
}
