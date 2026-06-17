import Groq from "groq-sdk";
import { GROQ_API_KEY } from "./constants";
//import { GEMINI_API_KEY } from "./constants";
//import { GoogleGenAI } from '@google/genai';

/**const geminiai = new GoogleGenAI({ 
  apiKey: GEMINI_API_KEY 
});*/

const openai = new Groq({ 
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});



export default openai;