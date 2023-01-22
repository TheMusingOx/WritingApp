import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptHomeComponent } from './manuscript-home.component';

describe('ManuscriptHomeComponent', () => {
  let component: ManuscriptHomeComponent;
  let fixture: ComponentFixture<ManuscriptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuscriptHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuscriptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
