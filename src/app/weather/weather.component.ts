import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityName: string;
  weatherStausIcon = `http://openweathermap.org/img/wn/50d@2x.png`;
  weatherData = null;
  editWeather = true;
  invalidCity = false;

  constructor( private svc: WeatherService) { }

  ngOnInit(): void {
  }

  fetchWeatherInfo(): void {
    this.invalidCity = false;
    this.svc.getCityId(this.cityName).subscribe((res) => {
      if (res.count > 0 && res.list.length > 0) {
        this.svc.getWeathernfo(res.list[0].id).subscribe((weatherData: any) => {
          this.editWeather = false;
          this.weatherData = weatherData;
          this.weatherStausIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        });
      } else {
          this.invalidCity = true;
      }
    }, (error) => {
      this.invalidCity = true;
    });
 }

 toggle(): void {
   this.editWeather = !this.editWeather;
 }
}
