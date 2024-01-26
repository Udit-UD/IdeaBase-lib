import BaseModel from "../BaseModel.js";
import OpenAI from "openai";


class OpenAiWhisper extends BaseModel{
    constructor(){
        super('whisper-1');
    }

    async generateResponse(file){   
        try{
            const openai = new OpenAI({apiKey: process.env.OPENAI_KEY})
            const transcription = await openai.audio.transcriptions.create({
                file: file,
                model: "whisper-1",
              });
            return transcription.text;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.response.status}`);
        }
    }

}

export default OpenAiWhisper;