import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatitoService {

//pre-setea 
  constructor(
    // http se crea como privado
    private http: HttpClient
  ) { }
  // una propiedad. AQUI PUEDO DEFINIR UNA RUTA RELATIVA: /assets/archivo.json
  //o una llamada al servidor en express:https://127.0.0.1:3000/libros ante un res.send() en express
 fetchUrl = "https://catfact.ninja/fact";
//metodo, aqui SOLEMOS METER VARIAS FUNCIONES Y CONSULTAS A LA API
 getKittens () {
  //  o puedo poner dentro del parentesis la url con comillas
   return this.http.get<any>(this.fetchUrl);
 }
}
