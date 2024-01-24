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
            return response.data.choices[0].message.content;
        }
        catch(e){
            throw new Error(e);
        }
    }


}

export default OpenAiGPT3;