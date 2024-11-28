import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PetService } from '../../core/services/pet.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pet-reports',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pet-reports.component.html',
  styleUrl: './pet-reports.component.css'
})
export class PetReportsComponent {


  chart: any;

  private petService = inject(PetService);

  constructor(){
    Chart.register(...registerables)
  }

  generateChart(): void{
    const data =this.petService.getPetsCountByType();
    const labels= Object.keys(data);
    const values=Object.values(data);
    

  }

}
