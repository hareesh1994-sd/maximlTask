import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient: HttpClient) {

  }

  getCityId(cityName): any {
    const url = `https://openweathermap.org/data/2.5/find?q=${cityName}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;
    return this.httpClient.get(url);
  }


  getWeathernfo(cityId): Observable<any> {
    const url = `https://openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`;
    return this.httpClient.get(url);
  }
}
