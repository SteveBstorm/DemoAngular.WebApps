export class Message {
    public receiver : string;
    public from : string;
    public sendDate : Date;
    public text : string;

    constructor(receiver : string, from : string, text: string, sendDate : Date = new Date()){
        this.receiver = receiver;
        this.from = from;
        this.text = text;
        this.sendDate = sendDate;
    }
}
