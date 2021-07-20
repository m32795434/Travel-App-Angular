import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  saludar () {
    alert('Hola');
  }
  title = 'Estas en Nosotros';
  subtitle = 'Esto es quines somos';
  mostrar = true;

  toggleInformation () {
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
  }

}
