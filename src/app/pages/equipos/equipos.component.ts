import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: any[] = []; // Almacena los equipos aquí

  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {
    this.equiposService.getEquipos().subscribe({
      next: (response: any) => {
        this.equipos = response.teams; // Accede a la propiedad "teams" de la respuesta
      },
      error: (err) => {
        console.error('Error al obtener los equipos:', err);
      }
    });
  }
}