import { Component, OnInit, Input } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { Mensaje } from '../../../../../../Proyectos github/QuieroJugar/src/app/interfaces/interfaces';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  mostrar: boolean;
  NumDocumento: number;
  TipoDocumento: string;
  NumTelefono: string;

  TipoDato = [{
    nombre: 'RC',
    tipo: '1',
    selected: false
  },
  {
    nombre: 'TI',
    tipo: '2',
    selected: false
  },
  {
    nombre: 'CC',
    tipo: '3',
    selected: true
  },
  {
    nombre: 'CE',
    tipo: '4',
    selected: false
  },
  ] 

  mensaje: string;

  constructor(private tareasService: TareasService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.mensaje = this.getMensajes().bvBuscar;
  }

  seleccionMensaje(){
    
  }

  getDocumento(TipoDocumento, NumDocumento) {
    this.mostrar = false;
    // this.mensaje = "buscando....";
      this.tareasService.getDato(TipoDocumento, NumDocumento).subscribe(todos => {
      if (!todos.estado_error) {

        
        this.NumTelefono = todos[0].contacto
        // console.log(todos[0].estado_error); 
        // console.log(this.mensaje = this.getMensajes().buscarSi);
        this.mostrar = true;
        this.mensaje = this.getMensajes().buscarSi;


         
      // this.presentAlert();
      }
      else{
        
        this.mensaje = todos.mensaje;
      }
      // if (!todos.mensaje) {
      //   this.mensaje = "no hay internet";        
      // }

      
    });
  }
  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Gracias!!!',
  //     message: ` ${this.mensaje = this.getMensajes().buscarSi} `,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

  getMensajes(){
    return  {    
      bvEncontro: "Hey, has encontrado el documento de otra persona, ayúdalo registrándolo en mi base de datos, así esa persona podrá ponerse en contacto para recuperarlos.",
      graciasAyuda: "El documento quedó registrado en mi base de datos, la persona que lo extravió se pondrá en contacto para acordar la entrega. ¡Muchas gracias por ayudar!",
      bvBuscar: " ¡ hola ! Puedo ayudarte a buscar tu documento. Selecciona el tipo de documento e ingresa el número.",
      buscarSi: `La persona con el número de telefono ${this.NumTelefono} encontró tu documento, ¡ponte en contacto para acordar la entrega!`,
      buscarNo: "Lo siento, tu documento no ha sido registrado en mi base de datos. Intene de nuevo mas tarde",
      notificacionSi: "Te notificaremos cuando registren el documento en mi base de datos. ¡Muchas gracias por usar PERDIDOCS!",
      notificacionNo: "Espero que puedas encontrar los documentos perdidos, no dejes de consultarme, en cualquier momento alguien los registrará."      
    };
  }
}
