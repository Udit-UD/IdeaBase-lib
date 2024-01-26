import axios from "axios";
import BaseModel from "../BaseModel.js";
import FormData from 'form-data';


class StabilityUpscaling extends BaseModel{
    constructor(){
        super("Stability-T2I");
    }

    async generateResponse(init_image, height="512"){
        try {
            const formData = new FormData();
            formData.append('image', (init_image));
            formData.append("height", height);

        const response = await axios.post("https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale", formData, {
            headers: {
                ...formData.getHeaders(),
                'Accept': "application/json",
                Authorization: `Bearer ${process.env.STABILITY_KEY}`,
            }}
        );

            return response.data;
        } catch (error) {
            throw error;
        }

    }
}

export default StabilityUpscaling;
