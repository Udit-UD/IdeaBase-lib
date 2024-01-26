import axios from "axios";
import BaseModel from "../BaseModel.js";


class OpenAiTTs extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'tts-1');
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
                        Authorization: `Bearer ${this.apiKey}`,
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