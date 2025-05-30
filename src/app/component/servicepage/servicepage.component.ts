import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicepage',
  imports: [RouterLink],
  templateUrl: './servicepage.component.html',
  styleUrl: './servicepage.component.css'
})
export class ServicepageComponent {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
