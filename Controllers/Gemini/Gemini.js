import BaseModel from "../BaseModel.js";
import { GoogleGenerativeAI } from "@google/generative-ai";


class Gemini extends BaseModel{
    constructor(){
        super('gemini-pro');
    }

    async generateResponse(prompt, stream = false){
        try{
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
            const model = genAI.getGenerativeModel({model: this.model});
            const generationConfig = {
                temperature: 0.65,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
            if(stream){
                const result = await model.generateContentStream([prompt], generationConfig);
                return result.stream;
            }
            else{
                const result = await model.generateContent(prompt);
                return result.response;
            }
            
        }
        catch(error){
            throw new Error(`Gemini API Error: ${error.response.status}`);
        }
    }
}

export default Gemini;