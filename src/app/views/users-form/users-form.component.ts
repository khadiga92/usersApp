import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  constructor() { }
  log(x:any){
    console.log(x)
  }
  onSubmit(x:any){
    console.log(x)
  }

  ngOnInit(): void {
  }

}
