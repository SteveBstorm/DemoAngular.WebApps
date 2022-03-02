export class Link {
    public title : string;
    public url? : string;
    public children? : Link[];
    public isVisible? : boolean;

    constructor(title : string, url? : string, isVisible : boolean = false, ...children : Link[]){
        this.title = title;
        this.url = url;
        this.isVisible = isVisible;
        this.children = children;
    }

}
