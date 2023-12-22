import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{
  private weatherService = inject(WeatherService);

  public initialCityName = 'São Paulo';
  public weatherDatas!: any;

  public ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName)
  }

  public getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        console.log('Retorno de response: ', response)
      },
      error: (error) => {
        console.log('Retorno de error', error);

      }
    })
  }

}
