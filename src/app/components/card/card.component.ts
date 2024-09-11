import { Component, Input } from '@angular/core';
import { Country } from '../../utils/country.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() country!: Country;

}
