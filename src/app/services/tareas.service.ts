import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tareas, Datos } from '../interfaces/tareas';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }


  getDatos(){
    const path ='http://perdidcosapi.atspace.cc/todosdocumentos';
    return this.http.get<Tareas[]>(path);
  }

  getDato(tipo: string, documento: number){
    const path = `http://perdidcosapi.atspace.cc/documentos?t='${tipo}'&d=${documento}`; 
    return this.http.get<Tareas>(path);
  }

  crearDato(dato){
    const path = 'http://perdidcosapi.atspace.cc/documentos';
    return this.http.post(path, JSON.stringify(dato) );
  }
}
