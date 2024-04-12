import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  clientes:Cliente[] = [
    {id:"1234",nome:"Renato Cariani",telefone:"11988865475"},
    {id:"666",nome:"Fortune Tiger"}
  ]

  listar():Cliente[]{
    return this.clientes
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id)

    if(cliente){
      var index = this.clientes.indexOf(cliente)
      this.clientes.splice(index,1)
    }
  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente)
  }

}
