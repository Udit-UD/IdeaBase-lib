import BaseModel from "../BaseModel.js";
import OpenAI from "openai";

class OpenAiVision extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'gpt-4-vision-preview');
    }

    async generateResponse(prompt, urlOfImage){
        try{
            const openai = new OpenAI({apiKey: this.apiKey})
            const image = await openai.chat.completions.create({
                model: this.model, 
                messages: [
                    {
                        role: "user",
                        content: [
                          { type: "text", text: prompt },
                          {
                            type: "image_url",
                            image_url: {
                              "url": urlOfImage,
                            },
                          },
                        ],
                    },
                ]
            });
            return image.choices[0];
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.message}`);
        }
    }


}

export default OpenAiVision;