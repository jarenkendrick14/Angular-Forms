/* src/app/app.component.ts */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // <--- MUST BE HERE

@Component({
  selector: 'app-root',
  standalone: true,
  // 👇 THIS ARRAY MAKES THE HTML routerLink CLICKABLE 👇
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Angular_Forms';
}