import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Viajes!';
  subtitle = 'Todo lo que necesitas saber';

  cards = [
    {
      imagen: "/assets/australia.jpg",
      categoria: "Vuelos",
      titulo: "Australia",
      precio: 635
    },
    {
      imagen: "/assets/austin.jpg",
      titulo: "Austin",
      precio: 55
    },
    {
      imagen: "/assets/melbourne.jpg",
      categoria: "Alojamiento",
      titulo: "Melbourne",
      precio: 245
    },
    {
      imagen: "/assets/colombia.jpg",
      categoria: "Vuelos",
      titulo: "Colombia",
      precio: 103
    }
  ]
}
