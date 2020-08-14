import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

 cityName:string;

 rainWeatherUrl='../../assets/moon.png';
 sunWithRainUrl:'../../assets/raining.png';
 moonWeatherUrl:'../../sunwith-raining.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  
   
  myfunction(){
    alert(this.cityName);
  
 }


}
