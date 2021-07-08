import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
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
  selectedAllergies: number[] = []
  searchText: string;

  SearchForm: any;
  color: any;
  listOfNemesRenoSelected:string;
  listOfCategory:string[]=[]

  constructor(private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.GetAllCategory();
  }


  

  ngOnInit(): void {
    
}
Select(event:any)
{
  
  this.selected = event.target.id;
 this.listOfNemesRenoSelected =this.listOfNemesRenoSelected+','+this.selected;
}
GetAllCategory(){
  this.categoryService.GetNameCategory().subscribe(a=> 
    {
    (this.listOfCategory)=a;
})
}
Continue(){
  debugger
  sessionStorage.setItem('CategorySelected',this.listOfNemesRenoSelected);
  this.router.navigate(['/app-scraping']);

}


}

