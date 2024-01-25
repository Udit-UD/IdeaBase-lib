import BaseModel from "./BaseModel.js";
import axios from "axios";

class SdVoiceCloning extends BaseModel{
    constructor(){
        super("sd-VoiceCloining");
    }
    
    async generateResponse(prompt, init_audio){
        const data = {
            key: process.env.STABLE_DIFF_KEY,
            prompt: prompt,
            init_audio: init_audio,
            language: "english",
            decoder_iterations: 30,
            webhook: null,
            track_id: null
        };
          
        const headers = {
            'Content-Type': 'application/json'
        };
        
        try {
            const response = await axios.post('https://stablediffusionapi.com/api/v5/text_to_audio', data, { headers });
            return response.data;
        } catch (error) {
            throw new Error(`Stable Diffusion API Error: ${error.message}`);
        }
    }

}

export default SdVoiceCloning;