import { Injectable } from '@angular/core';
import { Pet } from '../../shared/model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets: Pet []=[];

  constructor() { }

  addPet(pet:Pet):void{
    this.pets.push(pet);
  }

  getPets(): Pet[]{
    return this.pets;
  }

  getPetsByType(type: string): Pet[]{
    return this.pets.filter(pet=> pet.type === type);

  }

  getTotalPets(): number{
    return this.pets.length;
  }

  getAverageAge(): number {
    const totalAge =this.pets.reduce((sum,pet)=>sum+pet.age,0);
    return this.pets.length ? totalAge / this.pets.length : 0 ;
  }

  getPetsCountByType():{[key:string]: number} {
    return this.pets.reduce((count,pet) => {
    count [pet.type]=(count[pet.type] || 0  ) + 1 ;
    return count;
    }, {} as {[key: string]: number})

    }


  

  }

