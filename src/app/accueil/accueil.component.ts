import { Component, OnInit } from '@angular/core';
import { VariablesCommunesService } from '../variables-communes.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  constructor(public VC: VariablesCommunesService) {
  }

  ngOnInit(): void {
  }

}
