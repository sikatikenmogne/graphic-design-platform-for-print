import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorielsComponent } from './tutoriels.component';

describe('TutorielsComponent', () => {
  let component: TutorielsComponent;
  let fixture: ComponentFixture<TutorielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorielsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
