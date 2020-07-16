import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICountry } from 'src/app/modals/countries.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-item',
  templateUrl: './countries-item.component.html',
  styleUrls: ['./countries-item.component.css']
})
export class CountriesItemComponent implements OnInit {
// receving data from parent component
  @Input() countryRec: ICountry;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }



}
