import BaseModel from "../BaseModel.js";
import axios from "axios";

class SdTextToVoice extends BaseModel{
    constructor(){
        super("sd-TextToVoice");
    }
    
    async generateResponse(prompt, voice_id){
        const data = {
            key: process.env.STABLE_DIFF_KEY, 
            prompt: prompt,
            voice_id: voice_id,
            decoder_iterations: 30,
            webhook: null,
            track_id: null
        };
          
        const headers = {
            'Content-Type': 'application/json'
        };
        
        try {
            const response = await axios.post("https://stablediffusionapi.com/api/v5/text_to_voice", data, { headers });
            return response.data;
        } catch (error) {
            throw new Error(`Stable Diffusion API Error: ${error.message}`);
        }
    }

}

export default SdTextToVoice;