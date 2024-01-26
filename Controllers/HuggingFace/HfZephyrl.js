import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfZephyrl extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Hf-Zephyrl");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
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

export default HfZephyrl;
