import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      // 1-4. Base Requirements from Screenshot (with specific Regex)
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      
      // Additional Field to fix the "dept" error
      dept: ['Engineering', Validators.required],
      
      // 5-7. Additional Task Requirements
      gender: ['Male'],
      status: ['Permanent'],
      comments: ['']
    });
  }

  // Helper getter to access controls in the HTML easily
  get f() { return this.reactiveForm.controls; }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log('Reactive Form Data:', this.reactiveForm.value);
      alert('User successfully provisioned in the system!');
    } else {
      // Highlights all errors if the user clicks submit while invalid
      this.reactiveForm.markAllAsTouched();
    }
  }
}