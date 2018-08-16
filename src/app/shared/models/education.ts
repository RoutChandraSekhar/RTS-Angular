import { Marks } from "./marks";

export class Education
{
    Year : String;
    College : String;
    Course: String;
    Marks : Marks[];
constructor(Year:String, College:string, Course:String, Marks:Marks[]){
    this.Year=Year;
    this.College=College;
    this.Course=Course;
    this.Marks=Marks;
}
}