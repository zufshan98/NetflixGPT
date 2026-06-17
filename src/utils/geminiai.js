//import OpenAI from 'openai';
import { GEMINI_API_KEY } from "./constants";
import { GoogleGenAI } from '@google/genai';

/**const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});*/

const geminiai = new GoogleGenAI({ 
  apiKey: GEMINI_API_KEY 
});

export default geminiai;