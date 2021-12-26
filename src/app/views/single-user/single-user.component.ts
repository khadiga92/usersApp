import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute) { }
  id:string = this.route.snapshot.params['id']
  users:Users = {}
  getSingleUser(){
    console.log(this.id)
    this.userService.getSingleuser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users = res
      }
    })
  }
  ngOnInit(): void {
    this.getSingleUser()
  }

}

