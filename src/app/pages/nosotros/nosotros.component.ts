import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  // aqui un metodo de la clase!aunque parece una funcion no?
  saludar () {
    alert('Hola');
  }
  // aqui las propiedades de la clase. Por eso no lleva Var. No son variables.
  title = 'Estas en Nosotros';
  subtitle = 'Esto es quines somos';
  mostrar = true;

  // aqui vamos a cambair el valor de la prop de arriba
  toggleInformation () {
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
  }

}
