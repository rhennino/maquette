import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  questionnaires: string[] = environment.questionnaires
  professeur: string = environment.professeur
  constructor() { 
    // console.log(this.questionnaires)
  }

  ngOnInit(): void { 

  }

}
