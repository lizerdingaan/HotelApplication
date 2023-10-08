import { Injectable } from '@angular/core';
import {Resevation} from "../models/resevation";
import {findIndex} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResevationService {

  private resevations: Resevation[] = [];

  // CRUD

  getResevations(): Resevation[] {
    return this.resevations;
  }

  getResevation(id: string): Resevation | undefined{
    return this.resevations.find(res => res.id === id);
  }

  addResevation(resevation: Resevation) {
    this.resevations.push(resevation)
  }

  deleteResevation(id: string) {
    let index = this.resevations.findIndex(res => res.id === id);
    this.resevations.splice(index, 1);
  }

  updateResevation(updatedResevation: Resevation) {
    let index = this.resevations.findIndex(res => res.id === updatedResevation.id);
    this.resevations[index] = updatedResevation;
  }
}
