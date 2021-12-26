import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:Users[] = []

  constructor(private userService:UserService) { }

  getUsers(){
    this.userService.getUsers().subscribe(
      {
        next:(res:any) =>{
          console.log(res)
          this.users = res
        },
        error:(httpError:any)=>{
          console.log(httpError)
        }
      }
    )
  }

  addUsers(user:any){
    this.userService.addUsers(user).subscribe({
      next:()=>{
        console.log(user)
        this.users.splice(0,0,user)
      }
    })
  }

  deleteUsers(user:any,i:number){
    this.userService.deleteUsers(user).subscribe({
      next:()=>{
        this.users.splice(i,1)
      }
    })
  }

  log(x:any){
    console.log(x)
  }
  // onSubmit(x:any){
  //   console.log(x)
  // }

  ngOnInit(): void {
    this.getUsers()
  }

}
