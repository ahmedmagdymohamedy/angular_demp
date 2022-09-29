import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponantComponent } from './data-componant.component';

describe('DataComponantComponent', () => {
  let component: DataComponantComponent;
  let fixture: ComponentFixture<DataComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComponantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
