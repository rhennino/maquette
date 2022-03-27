import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSyntheseComponent } from './questionnaire-synthese.component';

describe('QuestionnaireSyntheseComponent', () => {
  let component: QuestionnaireSyntheseComponent;
  let fixture: ComponentFixture<QuestionnaireSyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireSyntheseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
