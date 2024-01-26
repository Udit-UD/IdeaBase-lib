import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfText2Text extends BaseModel{
    constructor(){
        super("Hf-Text2Text");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1",
                data
                ,
                {
                  headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_KEY}`,
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

export default HfText2Text;
