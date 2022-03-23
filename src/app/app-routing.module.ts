import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: 'questionnaire', component: QuestionnaireComponent },
  {path: 'question', component: QuestionComponent },
  {path: 'accueil', component: AccueilComponent },
  {path: 'questionnaire/:id', component: QuestionnaireComponent },
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: '**', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
