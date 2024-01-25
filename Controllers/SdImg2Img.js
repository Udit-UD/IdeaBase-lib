import BaseModel from "./BaseModel.js";
import axios from "axios";

class SdImg2Img extends BaseModel{
    constructor(){
            super("sd-Img2Img");
    }
    
    async generateResponse(prompt, init_image, noOfImages=1){
        const data = {
            key: process.env.STABLE_DIFF_KEY, 
            prompt: prompt,
            negative_prompt: null,
            init_image: init_image,
            width: "512",
            height: "512",
            samples: noOfImages,
            num_inference_steps: "30",
            safety_checker: "no",
            enhance_prompt: "yes",
            guidance_scale: 7.5,
            strength: 0.7,
            seed: null,
            base64: "no",
            webhook: null,
            track_id: null
        };
          
        const headers = {
            'Content-Type': 'application/json'
        };
        
        try {
            const response = await axios.post("https://stablediffusionapi.com/api/v3/img2img", data, { headers });
            return response.data;
        } catch (error) {
            throw new Error(`Stable Diffusion API Error: ${error.message}`);
        }
    }

}

export default SdImg2Img;