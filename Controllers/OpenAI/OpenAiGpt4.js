import BaseModel from "../BaseModel.js";
import OpenAI from "openai";


class OpenAIGpt4 extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'gpt-4');
    }

    async generateResponse(prompt, stream=false){
        const openai = new OpenAI({apiKey: this.apiKey});
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

export default OpenAIGpt4;