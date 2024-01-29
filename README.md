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

### Creating Models with Ideaverse
Ideaverse simplifies the process of instantiating different AI models. Users can create a model instance by simply calling the model function. Here is the code snippet demonstrating how can you call different functions.

```
import Models from "ideabase";
import fs from "fs";

const API_KEY="***************************************************";


const openAIGPT3 = new Models.OpenAiGPT3(API_KEY);
const openAiTTS = new Models.OpenAiTTS(API_KEY);
const openAiDalle = new Models.OpenAiDalle(API_KEY, 3, "512x512");  
const openAiWhisper = new Models.OpenAiWhisper(API_KEY);


// The will model respond to your queries 
async function testOpenAIGPT(){

    try{
        const prompt = "Write a c++ program to find nth element in fibonacci sequence";        
        const response = await openAIGPT3.generateResponse(prompt);
        console.log(response);

    }catch(error){
        console.log(error.message);
    }
}

// The model will generate speech from the text 
async function testOpenAiTTS(){
    const text = "Hi, I am from TensorBlue!";
    try{
        const response = await openAiTTS.generateResponse(text);
        console.log("Audio Generated successfully!");                 
    }
    catch(e){
        console.log(e);
    }
}

// The model will generate Images based on the prompt 
async function testOpenAiDalle(){
    const prompt = "Man dancing on sand";                                      
    try{
        const response = await openAiDalle.generateResponse(prompt);
        <!-- generateResponse(prompt, 3, 1024x1024), you can modify the parameters like this -->
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}


//The model will convert speech to text 
async function testOpenAiWhisper(){
    try{
        const audioFilePath = "./Demo.mp3";                                
        
        const audio = fs.createReadStream(audioFilePath);
        const response = await openAiWhisper.generateResponse(audio);
        console.log(response);

    }catch(e){
        console.log(e);
    }
}


const GeminiKey = "****************************************";
const gemini = new Models.Gemini(GeminiKey);

// This model uses Gemini API to respond the queries 
async function testGemini(){
    const prompt = "Write a c++ program to print table of 10";
    try {

        // You can Generate both stream and unstreamed response from the API!

        const response = await gemini.generateResponse(prompt, true);
        let text = '';
        for await (const chunk of response) {
            const chunkText = chunk.text();
            console.log(chunkText);
            text += chunkText;
        }

        // const response = await gemini.generateResponse(prompt);
        // console.log(response.text());

    } catch (error) {
        console.log(error);
    }
}



// testOpenAIGPT();
// testOpenAiTTS();
// testOpenAiDalle();
// testOpenAiWhisper();
// testGemini();

```

Moreover, you can add error-handling methods to handle the errors according to your requirements.
