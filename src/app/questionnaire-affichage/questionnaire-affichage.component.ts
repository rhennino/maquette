import { Component, OnInit } from '@angular/core';
import { VariablesCommunesService } from '../variables-communes.service';

@Component({
  selector: 'app-questionnaire-affichage',
  templateUrl: './questionnaire-affichage.component.html',
  styleUrls: ['./questionnaire-affichage.component.scss']
})
export class QuestionnaireAffichageComponent implements OnInit {

  constructor(public VC: VariablesCommunesService) { }

  ngOnInit(): void {
  }

}
