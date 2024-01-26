import axios from "axios";
import BaseModel from "../BaseModel.js";
import fs from "fs";
import path from "path";


class OpenAiTTs extends BaseModel{
    constructor(){
        super('tts-1');
    }
    
    async generateResponse(prompt){
        try{
            const response = await axios.post(
                "https://api.openai.com/v1/audio/speech",{
                    model: this.model,
                    voice: "alloy",
                    input: prompt,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
                    },
                    responseType: 'arraybuffer',
                },
            );
            
            return response.data;
        }
        catch(e){
            throw new Error(e);
        }
    }

}

export default OpenAiTTs;