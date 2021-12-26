import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  users:Users = {}
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  getSingleUser(){
    this.userService.getSingleuser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users = res
      }
    })
  }

  updateUser(user:Users){
    this.userService.editUsers(this.id,user).subscribe({
      next:()=>{
        console.log(user)
        this.router.navigateByUrl('/users')
      }
    })
  }
  ngOnInit(): void {
    this.getSingleUser
  }

}
