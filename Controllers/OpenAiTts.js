import axios from "axios";
import BaseModel from "./BaseModel.js";
import fs from "fs";
import path from "path";


class OpenAiTTs extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'tts-1');
    }
    
    async generateResponse(prompt){
        try{
            const speechFile = path.resolve("./speech.mp3");
            const response = await axios.post(
                "https://api.openai.com/v1/audio/speech",{
                    model: this.model,
                    voice: "alloy",
                    input: prompt,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                    responseType: 'arraybuffer',
                },
            );
            console.log(speechFile);
            const buffer = Buffer.from(response.data);
            await fs.promises.writeFile(speechFile, buffer);
            return response.data;
        }
        catch(e){
            throw new Error(e);
        }
    }

}

export default OpenAiTTs;