import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for Template-Driven Forms

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';

  // This object MUST contain every property used in [(ngModel)] in the HTML
  formData = {
    username: '',
    email: '',
    password: '',
    role: '',
    phone: '',
    birthdate: '',
    newsletter: false,
    website: '',    // Added to fix TS2339 error
    region: '',     // Added to fix TS2339 error
    terms: false    // Added to fix TS2339 error
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Form Data Submitted:', this.formData);
    
    // Simple feedback for the user
    alert('Form Submitted Successfully!\nCheck the console for the JSON output.');
  }
}