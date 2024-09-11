import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { COUNTRIES } from './country.data';
import { Country } from './country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountries(search: string, region: string): Observable<Country[]> {
    return of(COUNTRIES).pipe(
      map((countries) =>
        countries.filter(
          (country) =>
            this.matchesSearch(country, search) &&
            this.matchesRegion(country, region),
        ),
      ),
    );
  }

  private matchesSearch(country: Country, search: string): boolean {
    if (!search) return true;
    const lowercasedSearch = search.toLowerCase();
    return (
      country.name.toLowerCase().includes(lowercasedSearch)
    );
  }

  private matchesRegion(country: Country, region: string): boolean {
    return region === 'All' || country.region === region;
  }
}
