import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from '../../shared/api/weather-api.constants';
import { IWeatherData } from '../../models/interfaces/IWeatherData';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  getWeatherDatas(cityName: string): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(
      `${WEATHER_API_BASE_URL}/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${WEATHER_API_KEY}`,
      {},
    );
  }
}
