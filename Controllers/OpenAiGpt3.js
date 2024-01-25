import BaseModel from "./BaseModel.js";
import OpenAI from "openai";


class OpenAiGPT3 extends BaseModel{
    constructor(){
        super('gpt-3.5-turbo');
    }

    async generateResponse(prompt, stream=false){
        const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});
        try{
            const response = await openai.chat.completions.create({
                    model: this.model,
                    messages: [{role:'user' , content: prompt }],
                    temperature: 0.7,
                    stream: stream
                },
            );
                
            return response;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.message}`);
        }
    }


}

export default OpenAiGPT3;