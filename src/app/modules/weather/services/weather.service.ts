import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'd9c875157ce29908cab7e11dc74dd454';
  private http = inject(HttpClient);

  constructor() { }

  public getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metrics&mode=json&appid=${this.apiKey}`, {})
  }
}
