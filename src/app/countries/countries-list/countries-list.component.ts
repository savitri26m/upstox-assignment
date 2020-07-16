import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from 'src/app/modals/countries.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: ICountry[];
  searchTerm: string;
  loaderProp: boolean = true;

  filterCountriesData: ICountry[] = [];

  filterByString: string = 'all';

  get searchingTerm(): string {
    return this.filterByString;
  }

  set searchingTerm(value: string){
    this.filterByString = value;
    this.filterCountriesData = this.filterCountries(value);
  }

  constructor(private countryService: CountriesService,
          private router: Router) {}
  
  filterCountries(filter: string){
    return  this.filterCountriesData = this.countries.filter(
      data => {
        console.log(data);
        return data.region.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1;  
      }
    )
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      
      allCountryData => {
        this.loaderProp = false;
        this.countries = allCountryData;
        this.filterCountriesData = this.countries.slice();
        this.countryService.countryDetail = this.filterCountriesData; 
      },
      errorResponse => {
        console.log(errorResponse);
      }
    )
  }
 
  displayCountry(id: number){
    this.router.navigate(['country-item', id]);
  }

}
