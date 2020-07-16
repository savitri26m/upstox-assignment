import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICountry } from '../modals/countries.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countryDetail: ICountry[] = [];

  constructor(private http: HttpClient) { }

  configUrl = 'https://restcountries.eu/rest/v2/all';

  getCountries(){
    return this.http.get<ICountry[]>('https://restcountries.eu/rest/v2/all');
  }

}
