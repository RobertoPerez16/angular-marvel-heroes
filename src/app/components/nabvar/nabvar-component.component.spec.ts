import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarComponentComponent } from './nabvar-component.component';

describe('NabvarComponentComponent', () => {
  let component: NabvarComponentComponent;
  let fixture: ComponentFixture<NabvarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
