import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey || apiKey.includes("your_")) {
    return NextResponse.json({ error: "Groq API key not configured correctly" }, { status: 500 });
  }

  const groq = new Groq({ apiKey });

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const systemPrompt = {
      role: "system",
      content: `You are a helpful and human-like Saudi Labor Law Expert. Your goal is to provide warm, clear, and professional guidance. 
      
Rules:
1. ALWAYS provide verified information based on official Saudi MHRSD (Ministry of Human Resources and Social Development) regulations.
2. ALWAYS include official source links (e.g., qiwa.sa, hrdf.org.sa, hrsd.gov.sa) for legal claims.
3. DO NOT use plain asterisks (*) for lists. Instead, use clear section headings or numbered points where appropriate. Use bold text for emphasis.
4. Tone: Be empathetic and human-like. Start with a friendly greeting if it's the start of a conversation.
5. Language: Respond in the same language as the user's query.
6. If unsure, provide the best known official guidance and strongly advise visiting the Labor Office or calling 19911.`
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [systemPrompt, ...messages],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_tokens: 1024,
    });

    const reply = chatCompletion.choices[0]?.message?.content;

    if (reply) {
      return NextResponse.json({ reply });
    }
    
    throw new Error("Empty response from Groq");
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ 
      error: "Failed to process chat",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
