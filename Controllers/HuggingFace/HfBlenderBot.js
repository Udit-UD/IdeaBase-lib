import axios from "axios";
import BaseModel from "../BaseModel.js";


class HfBlenderBot extends BaseModel{
    constructor(){
        super("Hf-BlenderBot");
    }

    async generateResponse(data){
        try {
            const response = await axios.post(
                "https://api-inference.huggingface.co/models/facebook/blenderbot-3B",
                data, {
                  headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_KEY}`,
                    'Content-Type': 'application/json',
                  }
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(`Hugging Face API Error: ${error}`);
        }
    }
}

export default HfBlenderBot;
