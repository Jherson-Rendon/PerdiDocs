import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  indexActual = -1;

  constructor(  private tareasServices: TareasService ) {     
  }

  ngOnInit() {
  }

  getDatos(){
    this.tareasServices.getDatos().subscribe( todos => {console.log(todos);
    });
  }

  cambioColor(){
    let tempIndex = this.indexActual+1;
    const colores = ['verde', 'morado', 'azul'];
    const toggle = document.querySelector('body');
    if (colores.length > tempIndex) {      
      toggle.className = colores[tempIndex];
    }else{
      tempIndex = 0;      
      toggle.className = colores[tempIndex];
    }
    this.indexActual = tempIndex;    
  }

  
  
  
  


}
