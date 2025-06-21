import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather-service';
import { IWeatherData } from '../../models/interfaces/IWeatherData';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCard } from '../weather-card/weather-card';

@Component({
  selector: 'app-weather-home',
  imports: [FormsModule, FontAwesomeModule, WeatherCard],
  templateUrl: './weather-home.html',
})
export class WeatherHome implements OnInit, OnDestroy {
  private readonly weatherService = inject(WeatherService);
  private readonly destroy$ = new Subject<void>();

  initialCityName = 'Fortaleza';
  weatherDatas!: IWeatherData;
  searchIcon = faMagnifyingGlass;

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response) {
            this.weatherDatas = response;
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
