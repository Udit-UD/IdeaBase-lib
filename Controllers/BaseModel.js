class BaseModel {
    constructor(model){
        this.model = model;
    }
    async generateResponse(prompt){
        throw new Error("Method 'generateResponse()' must be implemented.");
    }
}

export default BaseModel;