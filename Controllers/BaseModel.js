class BaseModel {
    constructor(apiKey, model){
        this.model = model;
        this.apiKey = apiKey;
    }
    async generateResponse(prompt){
        throw new Error("Method 'generateResponse()' must be implemented.");
    }
}

export default BaseModel;