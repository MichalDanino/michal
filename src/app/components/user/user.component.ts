import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private UserService:UserService, private MainService:MainService) { }
NewUser:User= new User();
NamesArea:string[]=[];

  ngOnInit(): void {
  }
  GetNameArea()
  {
    this.MainService.GetNameArea().subscribe(a=>{(this.NamesArea)=a});
  }
}
