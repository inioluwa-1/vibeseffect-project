import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding',
  imports: [RouterLink],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.css'
})
export class WeddingComponent {
   ngOnInit () {
    window.scrollTo(0, 0);
  }
}
