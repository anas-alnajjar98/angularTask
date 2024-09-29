import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupServiceComponent } from './sup-service.component';

describe('SupServiceComponent', () => {
  let component: SupServiceComponent;
  let fixture: ComponentFixture<SupServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
