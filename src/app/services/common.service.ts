import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = "https://swapi.dev/api/";

  constructor(
    private httpc   : HttpClient,
  ) { }


  getAllFilmService(){
    return this.httpc.get(this.baseUrl + 'films');
  }

  getAllPeopleService(){
    return this.httpc.get(this.baseUrl + 'people')
  }

  getPeopleByUrl(param : string){
    return this.httpc.get(param);
  }

}
