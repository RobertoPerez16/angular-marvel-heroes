import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDescriptionComponent } from './content-description.component';

describe('HeroDescriptionComponent', () => {
  let component: ContentDescriptionComponent;
  let fixture: ComponentFixture<ContentDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
