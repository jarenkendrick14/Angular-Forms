import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // REQUIRED for Reactive

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemoComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      // Base validators from your screenshot
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      
      // Additional Fields requested in screenshot text
      gender: ['Male'], // Radio button default
      status: ['Permanent'], // Select/Radio default
      comments: [''] // Textarea
    });
  }

  // Helper to access controls easily in HTML
  get f() { return this.reactiveForm.controls; }

  onSubmit() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched(); // Triggers error messages
      return;
    }
    console.log(this.reactiveForm.value);
    alert('Reactive Form Submitted!\n' + JSON.stringify(this.reactiveForm.value, null, 2));
  }
}