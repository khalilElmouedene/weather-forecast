import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";





@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _httpClient = inject(HttpClient);


  getWeather(lon: any, lat: any): Observable<any> {
    return this._httpClient.get<any>(`https://www.7timer.info/bin/civillight.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`)
      .pipe(map(p => p));
  }
}
