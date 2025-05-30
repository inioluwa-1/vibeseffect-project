import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portrait',
  imports: [RouterLink],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.css'
})
export class PortraitComponent {
   ngOnInit () {
    window.scrollTo(0, 0);
  }
}
