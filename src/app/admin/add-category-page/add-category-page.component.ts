import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../shared/interfaces';

@Component({
  selector: 'app-add-category-page',
  templateUrl: './add-category-page.component.html',
  styleUrls: ['./add-category-page.component.scss']
})
export class AddCategoryPageComponent implements OnInit {

    formCategory: FormGroup

  constructor() { }

  ngOnInit(): void {
      this.formCategory = new FormGroup({
          category: new FormControl(null, Validators.required),
          weight: new FormControl(null, Validators.required)
      })
  }

  submitCategory() {
      if (this.formCategory.invalid) {
        return
      }

      const category: Category = {
        category: this.formCategory.value.category,
        weight: this.formCategory.value.weight
      }
  }

}
