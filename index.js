import OpenAiTTS from "./Controllers/OpenAiTts.js";
import OpenAiDalle from "./Controllers/OpenAiDalle.js";
import OpenAiWhisper from "./Controllers/OpenAiWhisper.js";
import OpenAiGPT3 from "./Controllers/OpenAIgpt3.js";
import Gemini from "./Controllers/Gemini.js";
import SdVoiceCloning from "./Controllers/SdVoiceCloning.js";
import dotenv from 'dotenv';
import SdTextToVoice from "./Controllers/SdTextToVoice.js";
import SdImg2Img from "./Controllers/SdImg2Img.js";

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
            default:
                throw new Error(`Model '${modelName}' is not supported.`);
        }
    }
}


export default Ideaverse; 