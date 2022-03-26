import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAffichageComponent } from './questionnaire-affichage.component';

describe('QuestionnaireAffichageComponent', () => {
  let component: QuestionnaireAffichageComponent;
  let fixture: ComponentFixture<QuestionnaireAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAffichageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
