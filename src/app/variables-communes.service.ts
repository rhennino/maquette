import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesCommunesService {
  connecte = false;
  admin = true;
  constructor() { }

  login() {
    this.connecte = true
    console.log('this.connecte = ', this.connecte)
  }
  logout() {
    this.connecte = false
    console.log('this.connecte = ', this.connecte)
  }

}
