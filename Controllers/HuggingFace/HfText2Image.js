import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfText2Image extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Hf-Text2Img");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/openskyml/midjourney-v4-xl",
                data,
                {
                  headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                  },
                  responseType: 'blob',
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(`Hugging Face API Error: ${error}`);
        }
    }
}

export default HfText2Image;
