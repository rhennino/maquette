import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { QuestionnaireCreationComponent } from './questionnaire-creation/questionnaire-creation.component';
import { QuestionnaireAffichageComponent } from './questionnaire-affichage/questionnaire-affichage.component';
import { QuestionnaireSyntheseComponent } from './questionnaire-synthese/questionnaire-synthese.component';

const routes: Routes = [
  {path: 'questionnairesynthese', component: QuestionnaireSyntheseComponent},
  {path: 'questionnairecreation', component: QuestionnaireCreationComponent },
  {path: 'questionnaireaffichage', component : QuestionnaireAffichageComponent},
  {path: 'question', component: QuestionComponent },
  {path: 'accueil', component: AccueilComponent },
  {path: 'administration', component: AdministrationComponent },
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: '**', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
