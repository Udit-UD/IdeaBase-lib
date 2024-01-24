import axios from "axios";
import BaseModel from "./BaseModel.js";


class OpenAiDalle extends BaseModel{
    constructor(apiKey, noOfImages = 1, imageSize = "1024x1024"){
        super(apiKey, 'dall-e-2');
        this.noOfImages = noOfImages;
        this.imageSize = imageSize;
    }

    async generateResponse(prompt){
        try{
            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",{
                    model: this.model,
                    prompt: prompt,
                    n: this.noOfImages,
                    size: this.imageSize
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                },
            );
            return response.data;
        }
        catch(e){
            throw new Error(e);
        }
    }


}

export default OpenAiDalle;