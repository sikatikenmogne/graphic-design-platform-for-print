import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import {User} from "../Models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public users: any;
  public contributeurs: any;
  public meme: any;
  public currentUser !: User;
  public currentPage:number=0;
  public size:number=5;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetContributeurs();
    this.onGetModeles();
  }

  onGetUsers(){
    this.userService.getUsers(this.currentPage, this.size)
      .subscribe(data=>{
        this.users = data;
      }, err=>{
        console.log(err);
      });
  }
  onGetContributeurs(){
    this.userService.getContributeurs(this.currentPage, this.size)
      .subscribe(data=>{
        this.contributeurs = data;
      }, err=>{
        console.log(err);
      });
  }
  onGetModeles(){
    this.userService.getModeles(this.currentPage, this.size)
      .subscribe(data=>{
        this.meme = data;
      }, err=>{
        console.log(err);
      });
  }

}
