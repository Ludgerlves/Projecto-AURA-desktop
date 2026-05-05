export class ActionError extends Error{
    code: string;
    constructor(message: string, code: string = "ACTION_ERROR",){
        super(message);
        this.code= code;
        this.name= "ActionEror";
    }
}