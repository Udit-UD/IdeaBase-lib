import BaseModel from "./BaseModel.js";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

class OpenAiTTs extends BaseModel{
    constructor(){
        super("tts-1");
    }
    
    async generateResponse(prompt){
        try{
            const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});
            const speechFile = path.resolve("./speech.mp3");
            const mp3 = await openai.audio.speech.create({
                model: this.model,
                voice: "alloy",
                input: "Today is a wonderful day to build something people love!",
              });

            console.log(speechFile);
            const buffer = Buffer.from(await mp3.arrayBuffer());
            await fs.promises.writeFile(speechFile, buffer);
            return true;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error}`);
        }
    }

}

export default OpenAiTTs;