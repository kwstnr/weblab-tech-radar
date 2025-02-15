import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TechnologiesService } from '../services/technologies/technologies.service';
import { Technology } from '../types/technology.type';
import { TechnologyCategory } from '../types/technology-category.enum';
import { TechnologyStatus } from '../types/technology-status.enum';
import { TechnologyCircle } from '../types/technology-circle.enum';

@Component({
  selector: 'app-edit-technology-dialog',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-technology-dialog.component.html',
  styleUrl: './edit-technology-dialog.component.scss'
})
export class EditTechnologyDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<EditTechnologyDialogComponent>);
  private readonly technologiesService = inject(TechnologiesService);

  data: { technology?: Technology, currentCategory: TechnologyCategory } = inject(MAT_DIALOG_DATA);

  isEditMode: boolean = !!this.data.technology

  technologyCategories = Object.values(TechnologyCategory);
  technologyCircles = Object.values(TechnologyCircle);
  technologyStatuses = Object.values(TechnologyStatus);

  technologyForm: FormGroup = this.fb.group({
    id: [this.data.technology?.id || ''],
    name: [this.data.technology?.name || '', Validators.required],
    description: [this.data.technology?.description || '', Validators.required],
    category: [this.data.technology?.category || this.data.currentCategory, Validators.required],
    circle: [this.data.technology?.circle || ''],
    circleDescription: [this.data.technology?.circleDescription || ''],
    status: [this.data.technology?.status || TechnologyStatus.DRAFTED, Validators.required],
  })

  save(): void {
    if (this.technologyForm.invalid) return;

    const technologyData = this.technologyForm.value;

    if (this.isEditMode) {
      console.log('edit existing technology with id: ', this.data.technology!.id);
      console.log('technologyData: ', technologyData);
      this.dialogRef.close(true);
    } else {
      console.log('create new technology');
      console.log('technologyData: ', technologyData);
      this.dialogRef.close(true);
    }
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
