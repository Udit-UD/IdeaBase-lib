class BaseModel {
    constructor(apiKey, model){
        this.apiKey = apiKey;
        this.model = model;
    }
    async generateResponse(prompt){
        throw new Error("Method 'generateResponse()' must be implemented.");
    }
}

export default BaseModel;