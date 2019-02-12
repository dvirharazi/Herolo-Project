

export class Movie {
    public Id:number;
    public Title:string;
    public Year:string;
    public Runtime:string;
    public Genre:string;
    public Director:string;

    constructor( Id:number , Title:string , Year:string , Runtime:string , Genre:string , Director:string){
        this.Id = Id;
        this.Title = Title;
        this.Year = Year;
        this.Runtime = Runtime;
        this.Genre = Genre;
        this.Director = Director
    }
}