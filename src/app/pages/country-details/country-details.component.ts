import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Country } from '../../utils/country.interface';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {
  readonly country$= inject(ActivatedRoute).data as Observable<Country>;
}
