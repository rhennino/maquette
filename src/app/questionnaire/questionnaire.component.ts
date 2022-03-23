import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: any;
  professeur: string = environment.professeur
  questions: any;
  eleves: any = environment.eleves
  ii_eleve: any;

  lundi = false;
  mardi = false;
  mercredi = false;
  jeudi = false;
  vendredi = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;


  constructor(private route: ActivatedRoute) { 
    this.ii_eleve = 0
    this.questionnaire = this.route.snapshot.paramMap.get('id')
    this.questions = environment[this.questionnaire as keyof typeof environment]
   }

   forward(): void {
     if (this.ii_eleve < this.eleves.length-1) this.ii_eleve++
   }

   back():void {
    if (this.ii_eleve > 0) this.ii_eleve--
   }

  ngOnInit(): void {
  }

}
