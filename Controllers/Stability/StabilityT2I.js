import axios from "axios";
import BaseModel from "../BaseModel.js";


class StabilityT2I extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Stability-T2I");
    }

    async generateResponse(prompt, negativeText = "", noOfImages=1){
        try {
            const headers = {
                Accept: "application/json",
                Authorization: `Bearer ${this.apiKey}`
            };
    
            const body = {
                steps: 40,
                width: 1024,
                height: 1024,
                seed: 0,
                cfg_scale: 5,
                samples: noOfImages,
                text_prompts: [
                {
                    "text": prompt,
                    "weight": 1
                },
                {
                    "text": negativeText,
                    "weight": -1
                }
                ],
            };
    
            const response = await axios.post("https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image", body, { headers });
            
            
            return response.data;

        } catch (error) {
            throw new Error(`Stability API Error: ${error.message}`)
        }
    }
  
}

export default StabilityT2I;
