import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatitoService {


  constructor(
    // http se crea como privado
    private http: HttpClient
  ) { }
 fetchUrl = "https://catfact.ninja/fact";

 getKittens () {
  //  o puedo poner dentro del parentesis la url con comillas
   return this.http.get<any>(this.fetchUrl);
 }
}
