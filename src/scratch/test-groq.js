const Groq = require('groq-sdk');
const apiKey = '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';
const groq = new Groq({ apiKey });

async function test() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: 'Say hello' }],
      model: 'llama-3.1-8b-instant',
    });
    console.log("Success:", chatCompletion.choices[0]?.message?.content);
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

test();
