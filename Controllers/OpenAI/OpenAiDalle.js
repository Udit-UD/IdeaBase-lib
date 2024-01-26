import BaseModel from "../BaseModel.js";
import OpenAI from "openai";

class OpenAiDalle extends BaseModel{
    constructor(){
        super('dall-e-2');
    }

    async generateResponse(prompt, noOfImages = 1, imageSize = "1024x1024"){
        try{
            const openai = new OpenAI({apiKey: process.env.OPENAI_KEY})
            const image = await openai.images.generate({
                model: this.model, 
                prompt: prompt,
                n: noOfImages,
                size: imageSize
            });
            return image.data;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.message}`);
        }
    }


}

export default OpenAiDalle;