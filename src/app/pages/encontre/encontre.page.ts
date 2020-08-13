import { Component, OnInit,  } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tareas, Datos } from '../../interfaces/tareas';
import { AlertController } from '@ionic/angular';
import { CssSelector } from '@angular/compiler';



@Component({ selector: 'app-encontre', templateUrl: './encontre.page.html', styleUrls: ['./encontre.page.scss'] })
export class EncontrePage implements OnInit {

  mostrar = true;
  NumDocumento: number;
  NumTelefono: number;
  TipoDocumento: number;

  TipoDato = [
    {
      nombre: 'RC',
      tipo: 1,
      selected: false
    }, {
      nombre: 'TI',
      tipo: 2,
      selected: false
    }, {
      nombre: 'CC',
      tipo: 3,
      selected: false
    }, {
      nombre: 'CE',
      tipo: 4,
      selected: false
    },
  ]

  constructor(private tareasService: TareasService, private alertCtrl: AlertController) { 

  }

  mensaje: string;

  ngOnInit() { 
   this.mensaje = this.getMensajes().bvEncontro;
  }

  GuardarDatos(tipo, contacto, numero) {
    const Datos = {
      tipo: this.TipoDocumento.toString(),
      contacto: this.NumTelefono.toString(),
      numero: this.NumDocumento.toString()
    };
    // console.log(Datos);
    // console.log( JSON.stringify(Datos));
    this.mostrar = false;
    this.tareasService.crearDato(Datos).subscribe((NuevoDato) => {
      this.mostrar = true;
      this.mensaje = this.getMensajes().graciasAyuda;
      console.log(NuevoDato);
      // this.presentAlert();
    });
  }
  

  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Gracias!!!', message: `El documento ${
  //       this.NumDocumento
  //       } quedó registrado en mi base de datos, la persona que lo extravió se pondrá en contacto al numero ${
  //       this.NumTelefono
  //       } para acordar la entrega. ¡Muchas gracias por ayudar! `,
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
