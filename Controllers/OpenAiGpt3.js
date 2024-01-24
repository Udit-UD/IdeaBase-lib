import axios from "axios";
import BaseModel from "./BaseModel.js";


class OpenAiGPT3 extends BaseModel{
    constructor(apiKey){
        super(apiKey, 'gpt-3.5-turbo');
    }

    async generateResponse(prompt){
        try{
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",{
                    model: this.model,
                    messages: [{role:'user' , content: prompt }],
                    temperature: 0.6,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                },
            );

            if (!response.data || !response.data.choices || response.data.choices.length === 0) {
                throw new Error("Invalid response format from OpenAI API");
            }

            return response.data.choices[0].message.content;
        }
        catch(error){
            throw new Error(`OpenAI API Error: ${error.response.status}`);
        }
    }


}

export default OpenAiGPT3;