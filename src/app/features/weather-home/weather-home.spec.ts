import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHome } from './weather-home';

describe('WeatherHome', () => {
  let component: WeatherHome;
  let fixture: ComponentFixture<WeatherHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherHome],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
