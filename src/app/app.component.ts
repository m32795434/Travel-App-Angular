import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gatitos';
  subtitle = 'Todo lo que necesitas saber';

  cards = [
    {
      imagen: "/assets/images/imagen-placeholder.jpg",
      categoria: "Vuelos",
      titulo: "Australia",
      precio: 635
    },
    {
      imagen: "/assets/images/austin.jpg",
      titulo: "Austin",
      precio: 55
    },
    {
      imagen: "/assets/images/melbourne.jpg",
      categoria: "Alojamiento",
      titulo: "Melbourne",
      precio: 245
    },
    {
      imagen: "/assets/images/medellin.jpg",
      categoria: "Vuelos",
      titulo: "Colombia",
      precio: 103
    }
  ]
}
