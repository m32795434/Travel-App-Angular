import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  title = 'Estas en Nosotros';
  subtitle = 'Esto es quines somos';

  ngOnInit(): void {
  }

}
