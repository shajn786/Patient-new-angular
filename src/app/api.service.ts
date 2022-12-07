import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  FetchPatients =()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }

  AdPatients =(datatosend : any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
}
