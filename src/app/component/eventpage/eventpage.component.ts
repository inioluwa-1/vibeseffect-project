import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eventpage',
  imports: [RouterLink],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css'
})
export class EventpageComponent {
   ngOnInit () {
    window.scrollTo(0, 0);
  }
}
