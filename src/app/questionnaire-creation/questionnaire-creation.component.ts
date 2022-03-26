import { Component, OnInit } from '@angular/core';
import { VariablesCommunesService } from '../variables-communes.service';

@Component({
  selector: 'app-questionnaire-creation',
  templateUrl: './questionnaire-creation.component.html',
  styleUrls: ['./questionnaire-creation.component.scss']
})
export class QuestionnaireCreationComponent implements OnInit {
  Questions = [1,2];
  constructor(public VC: VariablesCommunesService) { }

  ngOnInit(): void {
  }


  ajoutQuestion() {
    console.log("ajout d'une qustion")
    this.Questions.push(this.Questions.length+1);
  }
}
