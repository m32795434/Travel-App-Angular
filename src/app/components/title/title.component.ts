import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',//asi lo vamos a llamar para usar en html
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }
// propiedades de la clase
//title = "titulo del h1";
//subtitle = "subtitle del h1";
// valor predeterminado o indicador de opcional, sino se rompe en el @input!
@Input() title="Contenido";
@Input() subtitle?: string;

  ngOnInit(): void {
  }

}
