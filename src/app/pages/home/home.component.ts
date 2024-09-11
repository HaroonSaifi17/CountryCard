import { Component, inject } from '@angular/core';
import { CountriesService } from '../../utils/countries.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    AsyncPipe,
    CommonModule,
    RouterLink,
    CardComponent,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  search = '';
  region = 'All';
  countriesService = inject(CountriesService);
  countries$ = this.countriesService.getCountries(this.search, 'All');
  getCountries() {
    this.countries$ = this.countriesService.getCountries(
      this.search,
      this.region,
    );
  }
}
