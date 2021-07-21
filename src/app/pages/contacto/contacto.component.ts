import { Component, OnInit } from '@angular/core';
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
  title= 'Sección Contacto';
  subtitle= 'Contactanos!';
datita: any;

  showKittens () {
    this.gatitoService.getKittens()
    .subscribe((data: any)=>{
      console.log(data);
      this.datita = data;
    });
  }

  ngOnInit(): void {
    this.showKittens();
  }
  


}
