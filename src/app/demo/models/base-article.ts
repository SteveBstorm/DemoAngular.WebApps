export class BaseArticle {
    public title : string;
    public subtitle? : string;
    public content : string;
    public img? : string;

    constructor(title : string, content : string, subtitle? : string, img? : string){
        this.title = title;
        this.content = content;
        this.subtitle = subtitle;
        this.img = img;
    }
}
