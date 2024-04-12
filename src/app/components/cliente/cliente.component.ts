import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  constructor(private ClienteService: ClienteService) {
    ClienteService.listar;
  }

  listar(): void {
    this.clientes = this.ClienteService.listar();
  }

  ngOnInit():void{
    this.listar()
  }



}
