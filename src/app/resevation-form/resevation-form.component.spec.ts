import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResevationFormComponent } from './resevation-form.component';

describe('ResevationFormComponent', () => {
  let component: ResevationFormComponent;
  let fixture: ComponentFixture<ResevationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResevationFormComponent]
    });
    fixture = TestBed.createComponent(ResevationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
