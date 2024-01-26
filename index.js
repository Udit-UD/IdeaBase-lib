import dotenv from 'dotenv';
import OpenAiTTS from "./Controllers/OpenAI/OpenAiTts.js";
import OpenAiDalle from "./Controllers/OpenAI/OpenAiDalle.js";
import OpenAiWhisper from "./Controllers/OpenAI/OpenAiWhisper.js";
import OpenAiGPT3 from "./Controllers/OpenAI/OpenAiGpt3.js";
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

dotenv.config();

class Ideaverse {
    static create(modelName) {
        switch (modelName) {
            case 'OpenAI-GPT-3':
                return new OpenAiGPT3();
            case 'OpenAI-Dalle':
                return new OpenAiDalle();
            case 'OpenAI-Whisper':
                return new OpenAiWhisper();
            case 'OpenAI-TTS':
                return new OpenAiTTS();
            case 'Gemini':
                return new Gemini();
            case 'Sd-Voice-Clone':
                return new SdVoiceCloning();
            case 'Sd-Text-To-Voice':
                return new SdTextToVoice();
            case 'Sd-Img2Img':
                return new SdImg2Img();
            case 'Stability-Text2Img':
                return new StabilityT2I();
            case 'Stability-Img2Img':
                return new StabilityI2I();
            case 'Stability-Upscaling':
                return new StabilityUpscaling();
            case 'Stability-Masking': 
                return new StabilityMasking();
            case 'Hf-Text2Img':
                return new HfText2Image();
            case 'Hf-Mistral':
                return new HfText2Text();
            case 'Hf-BlunderBot': 
                return new HfBlenderBot();
            default:
                throw new Error(`Model '${modelName}' is not supported.`);
        }
    }
}


export default Ideaverse; 