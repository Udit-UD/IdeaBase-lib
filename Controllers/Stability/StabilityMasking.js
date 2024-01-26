import axios from "axios";
import BaseModel from "../BaseModel.js";
import FormData from 'form-data';

class StabilityMasking extends BaseModel{
    constructor(){
        super("Stability-Masking");
    }

    async generateResponse(prompt, init_image, mask_image, noOfImages){
        try {
            const formData = new FormData()
            formData.append('init_image', init_image);
            formData.append('mask_image', mask_image);
            formData.append('mask_source', "MASK_IMAGE_BLACK");
            formData.append('text_prompts[0][text]', prompt);
            formData.append('samples', noOfImages);

            const response = await axios.post("https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking", formData, {
                headers: {
                    ...formData.getHeaders(),
                    'Accept': "application/json",
                    Authorization: `Bearer ${process.env.STABILITY_KEY}`,
                }}
            );

            return response.data;
        } catch (error) {
            throw new Error(`Stability API Error: ${error.message}`);
        }
    }
}

export default StabilityMasking;
