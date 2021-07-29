import { Component, OnInit } from '@angular/core';
// importamos el servicio
import { GatitoService } from 'src/app/gatito.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private gatitoService: GatitoService
  
  ) { }
  // estas propiedades las puedo llamar desde el html
  title= 'Sección Contacto';
  subtitle= 'Contactanos!';
  datita: any;

  showKittens () {
    // consultamos al metodo getKittens() de gatitos.service.ts
    this.gatitoService.getKittens()
    //como una promesa
    .subscribe((data: any)=>{
      console.log(data);
      this.datita = data;
    });
  }
// llamamos la funcion apenas carga el componente. no esperamos un evento click en un boton
  ngOnInit(): void {
    this.showKittens();
  }
  


}
