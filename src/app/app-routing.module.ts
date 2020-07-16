import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountriesItemComponent } from './countries/countries-list/countries-item/countries-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: 'countries', component: CountriesListComponent},
  {path: 'country-item/:id', component: CountryDetailComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
