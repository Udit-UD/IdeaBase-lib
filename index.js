import dotenv from 'dotenv';
import OpenAiTTS from "./Controllers/OpenAI/OpenAiTts.js";
import OpenAiDalle from "./Controllers/OpenAI/OpenAiDalle.js";
import OpenAiWhisper from "./Controllers/OpenAI/OpenAiWhisper.js";
import OpenAiGPT3 from "./Controllers/OpenAI/OpenAiGpt3.js";
import OpenAiGpt4 from "./Controllers/OpenAI/OpenAiGpt4.js";
import Gemini from "./Controllers/Gemini/Gemini.js";
import SdVoiceCloning from "./Controllers/StableDiffusion/SdVoiceCloning.js";
import SdTextToVoice from "./Controllers/StableDiffusion/SdTextToVoice.js";
import SdImg2Img from "./Controllers/StableDiffusion/SdImg2Img.js";
import StabilityT2I from "./Controllers/Stability/StabilityT2I.js";
import StabilityI2I from "./Controllers/Stability/StabilityI2I.js";
import HfText2Image from "./Controllers/HuggingFace/HfText2Image.js";
import HfText2Text from "./Controllers/HuggingFace/HfText2Text.js";
import HfBlenderBot from "./Controllers/HuggingFace/HfBlenderBot.js";
import StabilityUpscaling from './Controllers/Stability/StabilityUpscale.js';
import StabilityMasking from './Controllers/Stability/StabilityMasking.js';
import HfZephyrl from './Controllers/HuggingFace/HfZephyrl.js';
import HfSdV1 from './Controllers/HuggingFace/HfSdV1.js';
import HfLlama2 from './Controllers/HuggingFace/HfLlama2.js';
import OpenAiVision from './Controllers/OpenAI/OpenAiVision.js';

dotenv.config();

class Ideaverse {
    static create(modelName, apiKey) {
        switch (modelName) {
            case 'OpenAI-GPT-3':
                return new OpenAiGPT3(apiKey);
            case 'OpenAI-GPT-4':
                return new OpenAiGpt4(apiKey);
            case 'OpenAI-Dalle':
                return new OpenAiDalle(apiKey);
            case 'OpenAI-Whisper':
                return new OpenAiWhisper(apiKey);
            case 'OpenAI-TTS':
                return new OpenAiTTS(apiKey);
            case 'OpenAI-gpt-4-vision-preview':
                return new OpenAiVision(apiKey);
            case 'Gemini':
                return new Gemini(apiKey);
            case 'Sd-Voice-Clone':
                return new SdVoiceCloning(apiKey);
            case 'Sd-Text-To-Voice':
                return new SdTextToVoice(apiKey);
            case 'Sd-Img2Img':
                return new SdImg2Img(apiKey);
            // case 'Sd-Text2Img':                              // Discussion needed!
            //     return new SdText2Img(apiKey);
            case 'Stability-Text2Img':
                return new StabilityT2I(apiKey);
            case 'Stability-Img2Img':
                return new StabilityI2I(apiKey);
            case 'Stability-Upscaling':
                return new StabilityUpscaling(apiKey);
            case 'Stability-Masking': 
                return new StabilityMasking(apiKey);
            case 'Hf-Text2Img':
                return new HfText2Image(apiKey);
            case 'Hf-Mistral':
                return new HfText2Text(apiKey);
            case 'Hf-BlunderBot': 
                return new HfBlenderBot(apiKey);
            case 'Hf-Zephyrl':
                return new HfZephyrl(apiKey);
            case 'Hf-stable-diffusion-v1-5':
                return new HfSdV1(apiKey);

                // Require subscription
            case 'Hf-Llama-2':
                return new HfLlama2(apiKey);

                
            default:
                throw new Error(`Model '${modelName}' is not supported.`);
        }
    }
}


export default Ideaverse; 