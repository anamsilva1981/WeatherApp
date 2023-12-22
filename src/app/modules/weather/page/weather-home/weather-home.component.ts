import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private weatherService = inject(WeatherService);
  private readonly destroy$: Subject<void> = new Subject();

  public initialCityName = 'São Paulo';
  public weatherDatas!: any;
  public searchIcon = faMagnifyingGlass;


  public ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName)
  }

  public getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        console.log('Retorno de response: ', response)
      },
      error: (error) => {
        console.log('Retorno de error', error);

      }
    })
  };

  public onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
