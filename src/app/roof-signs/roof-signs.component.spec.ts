import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofSignsComponent } from './roof-signs.component';

describe('RoofSignsComponent', () => {
  let component: RoofSignsComponent;
  let fixture: ComponentFixture<RoofSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoofSignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoofSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
