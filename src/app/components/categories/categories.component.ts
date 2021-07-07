import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Allergy } from 'src/app/shared/models/allergy.model';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {
  categories: Category[] = []
  baseCategories: Category[] = []
  form: FormGroup
  selected: string;
  checked: boolean = false;
  selectedCategories: Category[] = []
  categoriesToSelect: Category[][] = [];
  allergies: Allergy[] = []
  selectedAllergies: number[] = []
  searchText: string;

  SearchForm: any;
  color: any;

  constructor(private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  

  ngOnInit(): void {
    
}


}

