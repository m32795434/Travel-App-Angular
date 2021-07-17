import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() imagen = "/assets/images/img1.jpeg";
  @Input() categoria?: string;
  @Input() titulo = "Esta es la aventura";
  @Input() precio = 123;

  ngOnInit(): void {
  }

}
