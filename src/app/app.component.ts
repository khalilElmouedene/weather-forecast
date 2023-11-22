import { Component, inject } from '@angular/core';
import { sivenData } from './country';
import { WeatherService } from './core/services/weather.service';
import { IDataseries, IResponseModel } from './core/models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Forecast';
  year =  (new Date()).getFullYear();
  data: any[] = sivenData;
  response: IDataseries[] = [];
  private readonly _weatherService = inject(WeatherService);




  // Handle Change Events

  handleCityChange(event: any): void {
    const city = this.data.find(p => p.city === event.value);

    this._weatherService.getWeather(city?.lon, city?.lat).subscribe({
      next: e => this.response = e['dataseries']
    });
  }

}
