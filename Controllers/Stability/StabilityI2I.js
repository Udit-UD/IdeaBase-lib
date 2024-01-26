import axios from "axios";
import BaseModel from "../BaseModel.js";
import FormData from 'form-data';

class StabilityI2I extends BaseModel{
    constructor(apiKey){
        super(apiKey, "Stability-I2I");
    }

    async generateResponse(prompt, init_image, negativePrompt="", noOfImages=1){
        try {
            const formData = new FormData();
            formData.append('init_image', init_image);
            formData.append('init_image_mode', "IMAGE_STRENGTH");
            formData.append('image_strength', 0.35);
            formData.append('cfg_scale', 7);
            formData.append('samples', noOfImages);
            formData.append('text_prompts[0][text]', prompt)

            const response = await axios.post("https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image", formData, {
                headers: {
                    ...formData.getHeaders(),
                    'Accept': "application/json",
                    Authorization: `Bearer ${this.apiKey}`,
                }}
            );


            return response.data;

        } catch (error) {
            throw new Error(`Stability API Error: ${error.message}`)
        }
    }
}

export default StabilityI2I;
