import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsContentComponent } from './comics-content.component';

describe('ComicsContentComponent', () => {
  let component: ComicsContentComponent;
  let fixture: ComponentFixture<ComicsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
