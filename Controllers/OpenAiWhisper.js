import axios from "axios";
import BaseModel from "./BaseModel.js";
import fs from "fs";


class OpenAiWhisper extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'whisper-1');
    }

    async generateResponse(file){   
        try{
            const response = await axios.post(
                "https://api.openai.com/v1/audio/transcriptions",{
                    file: file,
                    model: this.model,
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                },
            );
            return response.data.text;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.response.status}`);
        }
    }

}

export default OpenAiWhisper;