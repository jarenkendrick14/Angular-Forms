import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Crucial for Reactive Forms
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomFormComponent {
  proposalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.proposalForm = this.fb.group({
      // 1. Project Title (Required, Min 10 characters)
      projectTitle: ['', [Validators.required, Validators.minLength(10)]],
      
      // 2. Department (Select)
      department: ['', Validators.required],
      
      // 3. Priority Level (Radio Buttons)
      priority: ['Medium', Validators.required],
      
      // 4. Budget Allocation (Number, must be between 1000 and 50000)
      budget: [null, [Validators.required, Validators.min(1000), Validators.max(50000)]],
      
      // 5. Project Pitch (Textarea, Min 30 characters)
      pitch: ['', [Validators.required, Validators.minLength(30)]],
      
      // 6. Confirmation (Checkbox)
      confirmAccuracy: [false, Validators.requiredTrue]
    });
  }

  // Easy access for HTML
  get f() { return this.proposalForm.controls; }

  onSubmit() {
    if (this.proposalForm.valid) {
      console.log('Proposal Submitted:', this.proposalForm.value);
      alert('Project Proposal successfully submitted for review!');
    } else {
      this.proposalForm.markAllAsTouched();
    }
  }
}