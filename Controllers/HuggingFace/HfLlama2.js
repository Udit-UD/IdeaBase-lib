import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfLlama2 extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Hf-Llama-2");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf",
                data
                ,
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

export default HfLlama2;
