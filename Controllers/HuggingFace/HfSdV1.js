import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfSdV1 extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Hf-stable-diffusion-v1-5");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
                data,
                {
                  headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                  },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(`Hugging Face API Error: ${error}`);
        }
    }
}

export default HfSdV1;
