# IdeaVerse API Library

### Introduction

Ideaverse library can be installed using `npm` and used anywhere. The purpose of this library is promote seamless use of api across different companies. There is no need for the user to look up the documentation for implementing a single model but instead, they just need to call the specific name of the model. We also aim to provide api access as bundles and optimise the usage of the users according to their chosen plans.

For starters, this library will be a wrapper around existing libraires like `openai, claude, google gemini, huggingaface models, stabilty ai etc.` In the future, we are looking forward to hosting our own models and thereby including them in this package as well.

### Installation
To effortlessly integrate `ideaverse-lib` into your development environment, simply execute the provided command. This will seamlessly install the library on your machine.
```
npm install ideaverse-lib
```

### Configuration
To utilize models from the Ideaverse Library, you must obtain an API key for the specific model you intend to use. Follow the links below to generate API keys for the respective platforms:

- **OpenAI API:**
- Visit the [OpenAI API website](https://platform.openai.com/account/api-keys).
- Sign in to your account or create a new one if needed.
- Navigate to the API section or follow the provided link for API access.
- Create a new API key by following the on-screen instructions. Ensure that the key has the necessary permissions for the models you plan to utilize.

- **GeminiAI API:**
- Visit the [Google Dev website](https://ai.google.dev/).
- Click on Get API key in Google AI Studio
- Log in to your account or register if you are a new user.
- Access the API section or use the provided link for API access.
- Generate a new API key by following the provided instructions. Make sure to select the appropriate models and permissions.

- **Stable Diffusion API:**
- Visit the [Stable Diffusion website](https://stablediffusionapi.com/).
- Log in to your account or register if you are a new user.
- Go to dashboard and then API Settings.
- Generate a new API key by following the provided instructions.

- **Hugging Face API:**
- Visit the [Hugging Face website](https://huggingface.co/).
- Log in to your account or register if you are a new user.
- Go to profile section and navigate to Access Tokens option.
- Generate a new API Token and use it.
- Note: You need to buy Hugging Face Pro Key to use premium models like Llama 2 7B.

- **Stability AI API:**
- Visit the [Stability AI website](https://platform.stability.ai/).
- Log in to your account or register if you are a new user.
- Go to profile section and navigate to API Keys option.
- Create a new API Token and use it.

Once you have obtained the API keys, you can seamlessly integrate them into the Ideaverse Library to use the AI Models.

### Models We Offer
There are multiple models from multiple platforms that we are providing, you just need to call them and provide your API KEY to use them. List of such models are:
- 1. Stable Diffusion: Voice Cloning
- 2. Stable Diffusion: Text to Voice
- 3. Stable Diffusion: Image to Image
- 4. OpenAI: GPT-3
- 5. OpenAI: GPT-4
- 6. OpenAI: Whisper
- 7. OpenAI: Dalle 2
- 8. OpenAI: Text to Speech ("TTS")
- 9. OpenAI: Vision
- 10. Hugging Face: Llama 2 7B (Requires Subscription)
- 11. Hugging Face: Stable-diffusion-v1-5
- 12. Hugging Face: MidJourney
- 13. Hugging Face: Mistral
- 14. Hugging Face: Zephyr
- 15. Hugging Face: BlenderBot
- 16. Stability AI: Text to Text
- 17. Stability AI: Image to Image
- 18. Stability AI: Image Upscale
- 19. Stability AI: Image Masking

### Creating Models With Ideaverse
Below is a comprehensive guide outlining the procedures for invoking and generating models. Please proceed to the following section for insights on effectively managing the received responses.

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


### Handling Models Using Ideaverse
Ideaverse simplifies the process of instantiating different AI models. Users can create a model instance by simply calling the model function. Here is the code snippet demonstrating how can you call different functions and handle the responses.

```
import Ideaverse from "ideaverse-lib";
import fs from "fs";
import path from "path";


const testOpenAIGPT3 = async() => {
    try{
        const model = Ideaverse.create('OpenAI-GPT-3', process.env.OPENAI_KEY);
        const prompt = "C++ program to implement bubble sort";

        // It will accept prompt and stream arguments. Stream can be true and by default it is false.
        const response = await model.generateResponse(prompt, true);
        for await (const chunk of response) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
    }   
    catch(e){
        console.log(e.message);
    }
}

// testOpenAIGPT3();


const testOpenAIGPT4 = async() => {
    try{
        const model = Ideaverse.create('OpenAI-GPT-4', process.env.OPENAI_PRO_KEY);
        const prompt = "c++ program of bubble sort";

        // It will accept prompt and stream arguments. Stream can be true and by default it is false.
        const response = await model.generateResponse(prompt, true);
        for await (const chunk of response) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
    }   
    catch(e){
        console.log(e.message);
    }
}

testOpenAIGPT4();

async function testOpenAiTTS() {
    
    const text = "Hi, I am from TensorBlue. My name is Udit!";
    try {
        const model = Ideaverse.create("OpenAI-TTS", process.env.OPENAI_KEY);
        const response = await model.generateResponse(text);

        const speechFile = path.resolve("./speech.mp3");
        const buffer = Buffer.from(response);
        await fs.promises.writeFile(speechFile, buffer);
        if(response)
            console.log("Audio Generated successfully!");
        else    
            console.log("Something went wrong!");
    }
    catch (e) {
        console.log(e);
    }
}

// testOpenAiTTS();

const testOpenAiDalle = async() => {
    const prompt = "Man dancing on sand";
    try{
        const model = Ideaverse.create('OpenAI-Dalle', process.env.OPENAI_KEY);
        const response = await model.generateResponse(prompt, 2, "1024x1024");
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}

// testOpenAiDalle();

async function testOpenAiWhisper() {
    try {
        const model = Ideaverse.create('OpenAI-Whisper', process.env.OPENAI_KEY);
        const audioFilePath = "./Demo.mp3";
        const audio = fs.createReadStream(audioFilePath);
        const response = await model.generateResponse(audio);
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}

// testOpenAiWhisper();

const testOpenAiVision = async() => {
    const prompt = "Make a list of all the items in the basket";
    const urlOfImage = "https://assets.flowersnfruits.com/uploads/product-pics/1632301485_3.jpg";
    try{
        const model = Ideaverse.create('OpenAI-gpt-4-vision-preview', process.env.OPENAI_PRO_KEY);

        const response = await model.generateResponse(prompt, urlOfImage);
        console.log(response.message.content);
    }
    catch(e){
        console.log(e);
    }
}

// testOpenAiVision()


const testGemini = async() => {
    const prompt = "Write a c++ program to print table of 10";
    try {

        // You can Generate both streamed and unstreamed responses from the API!
        const model = Ideaverse.create('Gemini', process.env.GEMINI_KEY);
        const response = await model.generateResponse(prompt, true);
        let text = '';
        for await (const chunk of response) {
            const chunkText = chunk.text();
            console.log(chunkText);
            text += chunkText;
        }

        // const response = await model.generateResponse(prompt);
        // console.log(response.text());

    } catch (error) {
        console.log(error);
    }
}

// testGemini();

const testSDTextToAudio = async() => {
    const prompt = "Hi, TensorBlue is going to revolutionize AI Market!"
    try{
        const model = Ideaverse.create("Sd-Voice-Clone", process.env.STABLE_DIFF_KEY);
        const init_audio = "https://pub-f3505056e06f40d6990886c8e14102b2.r2.dev/audio/tom_hanks_1.wav";
        const response = await model.generateResponse(prompt, init_audio);
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}

// testSDTextToAudio();

async function testSdTextToVoice() {
    const prompt = "Hi My name is Udit";
    const voice_id = "jack_sparrow";
    try {
        const model = Ideaverse.create("Sd-Text-To-Voice", process.env.STABLE_DIFF_KEY);
        const response = await model.generateResponse(prompt, voice_id);
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}

// testSdTextToVoice();

const testSdImg2Img = async() => {
    const prompt = "Cat on dog";
    const noOfImages = "2";
    const init_image = "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png";
    try{
        const model = Ideaverse.create("Sd-Img2Img", process.env.STABLE_DIFF_KEY);
        const response = await model.generateResponse(prompt, init_image , noOfImages);
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}

// testSdImg2Img();

const testStabilityT2I = async() => {
    const prompt = "A sunny day";
    const negativePrompt = "bad, blurred";
    const noOfImages = 2;
    try {
        const model = Ideaverse.create("Stability-Text2Img", process.env.STABILITY_KEY);
        const response = await model.generateResponse(prompt, negativePrompt, noOfImages);

        response.artifacts.forEach((image, index) => {
            fs.writeFileSync(
              `./txt2img_${image.seed}.png`,
              Buffer.from(image.base64, 'base64')
            )
          })
        
        console.log("Image generated Successfully!");
        
    } catch (error) {
        console.log(error);
    }
}

// testStabilityT2I();

const testStabilityI2I = async() => {
    const prompt = "Galactic dog wearing a cape";
    const negativePrompt = "bad, grass, blurred";
    const noOfImages = 2;
    try {
        const model = Ideaverse.create("Stability-Img2Img", process.env.STABILITY_KEY);
        const init_image =  fs.readFileSync('./init_image.webp');
        const response = await model.generateResponse(prompt, init_image, negativePrompt, noOfImages);
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

// testStabilityI2I();


const testStabilityUpscaling = async() => {
    try {
        const model = Ideaverse.create("Stability-Upscaling", process.env.STABILITY_KEY);
        const init_image =  fs.readFileSync('./init_image.webp');
        const height = "1024";
        const response = await model.generateResponse(init_image, height);
        response.artifacts.forEach((image, index) => {
            fs.writeFileSync(
              `./img2img_${image.seed}.webp`,
              Buffer.from(image.base64, 'base64')
            )
          });
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

// testStabilityUpscaling();

const testStabilityMasking = async() => {
    try {
        const prompt = "A colorful dog";
        const noOfImages = 1;
        const init_image =  fs.readFileSync('./init_image.webp');
        const mask_image = fs.readFileSync('./mask_image.webp');

        const model = Ideaverse.create("Stability-Masking", process.env.STABILITY_KEY);
        const response = await model.generateResponse(prompt, init_image, mask_image, noOfImages);
        response.artifacts.forEach((image, index) => {
            fs.writeFileSync(
              `./img2img_${image.seed}.webp`,
              Buffer.from(image.base64, 'base64')
            )
          });
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

// testStabilityMasking();

const testHfText2Text = async() => {
    const prompt = "What is 5+5 in mathematics?";
    try {
        const model = Ideaverse.create('Hf-Mistral', process.env.HUGGING_FACE_KEY);
        const response = await model.generateResponse({"inputs": prompt});
        console.log(response[0].generated_text);
    } catch (error) {
        console.log(error);
    }
}
// testHfText2Text();


const testHfBlunderBot = async() => {
    try {
        const model = Ideaverse.create('Hf-BlunderBot', process.env.HUGGING_FACE_KEY);
        const response = await model.generateResponse({"inputs": {
            "past_user_inputs": ["Which movie is the best ?"],
            "generated_responses": ["It is Die Hard for sure."],
            "text": "Can you explain why ?"
        }});
        console.log(response.generated_text);
    } catch (error) {
        console.log(error);
    }
}

// testHfBlunderBot();

const testHfText2Image = async() => {
    try {
        const prompt = "Astronaut riding a horse";
        const model = Ideaverse.create('Hf-Text2Img', process.env.HUGGING_FACE_KEY);
        const response = await model.generateResponse({"inputs": prompt});
        
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// testHfText2Image();

const testHfZephyrl = async() => {
    const prompt = "What is 5+5 in mathematics?";
    try {
        const model = Ideaverse.create('Hf-Zephyrl', process.env.HUGGING_FACE_KEY);
        const response = await model.generateResponse({"inputs": prompt});
        console.log(response[0].generated_text);
    } catch (error) {
        console.log(error);
    }
}
// testHfZephyrl();

const testHfStableDiffusion = async() => {
    try {
        const prompt = "Astronaut riding a horse";
        const model = Ideaverse.create('Hf-stable-diffusion-v1-5', process.env.HUGGING_FACE_KEY);
        const response = await model.generateResponse({"inputs": prompt});
        
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// testHfStableDiffusion();

```

Moreover, you can add error-handling methods to handle the errors according to your requirements.
