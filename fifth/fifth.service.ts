import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Student} from "./Student";

@Injectable({
    providedIn: 'root'
})
export class FifthService{
    constructor(private http: HttpClient){
    }
    url: string = "http://localhost:3000/students/";

    getUsers(){
        return this.http.get<Student[]>(this.url);
    }
}
 