import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IWeatherData } from '../../models/interfaces/IWeatherData';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-weather-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './weather-card.html',
  standalone: true,
})
export class WeatherCard {
  @Input() cardData!: IWeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
