import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatsappdemo } from './whatsappdemo';

describe('Whatsappdemo', () => {
  let component: Whatsappdemo;
  let fixture: ComponentFixture<Whatsappdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatsappdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whatsappdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
