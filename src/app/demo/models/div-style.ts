export class DivStyle {
    public 'bg-green': boolean;
    public 'bg-red': boolean;
    public 'bg-blue': boolean;

    constructor(className : string){
        this.chooseColor(className);
    }

    private chooseColor(className: string) {
        switch (className) {
            case 'bg-green':
                this["bg-green"] = true;
                this["bg-blue"] = this["bg-red"] = false;
                break;
            case 'bg-red':
                this["bg-red"] = true;
                this["bg-blue"] = this["bg-green"] = false;
                break;
            case 'bg-blue':
                this["bg-blue"] = true;
                this["bg-green"] = this["bg-red"] = false;
                break;

            default:
                this["bg-blue"] = this["bg-green"] = this["bg-red"] = false;
                break;
        }
    }
}
