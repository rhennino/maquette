import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { QuestionnaireCreationComponent } from './questionnaire-creation/questionnaire-creation.component';
import { QuestionCreationComponent } from './question-creation/question-creation.component';
import { QuestionnaireAffichageComponent } from './questionnaire-affichage/questionnaire-affichage.component';
import { QuestionnaireSyntheseComponent } from './questionnaire-synthese/questionnaire-synthese.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuestionnaireComponent,
    QuestionComponent,
    AdministrationComponent,
    QuestionnaireCreationComponent,
    QuestionCreationComponent,
    QuestionnaireAffichageComponent,
    QuestionnaireSyntheseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
