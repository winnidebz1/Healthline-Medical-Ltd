
import { GoogleGenAI } from "@google/genai";

/**
 * AI Medical Assistant for Healthline Medical Ltd.
 * Provides helpful, professional information about laboratory tests.
 */
export async function askMedicalAssistant(question: string) {
  // Correctly initialize GoogleGenAI as per guidelines (must use {apiKey: process.env.API_KEY})
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `You are the AI Medical Assistant for Healthline Medical Ltd, a diagnostic center in Ghana. 
        Your goal is to provide helpful, professional information about laboratory tests.
        Always include a disclaimer that you are an AI and the patient should consult a doctor. 
        Keep answers concise and reassuring. 
        Focus on pre-test preparation, meaning of tests, and common health concerns related to lab diagnostics.`,
        temperature: 0.5,
      },
    });
    // Access the .text property directly (not a method) from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly for assistance.";
  }
}
