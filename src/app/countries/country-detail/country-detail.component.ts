import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from 'src/app/modals/countries.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: ICountry;
  id: number;

  showBorders: boolean = true;

  borders = [];

  constructor(private route: ActivatedRoute, 
        private countryService: CountriesService, 
        private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.country = this.countryService.countryDetail[this.id]
    this.borders = this.country.borders;

    console.log(this.borders);

    if(this.country.borders.length > 0){
      this.showBorders = true;
    }
    else{
      this.showBorders = false;
    }    
  }

  goBack(){
    this.location.back();
  }

}
