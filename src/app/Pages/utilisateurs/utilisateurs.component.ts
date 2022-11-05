import { Component, OnInit } from '@angular/core';
import {User} from "../Models/user.model";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  public users:any;
  public size:number=20;
  public currentPage:number=0;
  public totalPages!:number;
  public pages!:Array<number>;
  private currentKeyword: string="";
  public currentUser!:User;
  public url: any;

  constructor(private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.onGetUsers();
    this.userService.getRessources(this.url)
      .subscribe(data=>{
        this.currentUser=data;
      },err=>{
        console.log(err);
      })
  }

  onGetUsers() {
    this.userService.getUsers(this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.users=data;
      },err=>{
        console.log(err);
      });
  }

  onPageUser(p: any) {
    this.currentPage=p;
    // @ts-ignore
    this.chercherUsers();
  }

  onChercher(form: any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    // @ts-ignore
    this.chercherUsers();
  }

  chercherUsers(keyword: string) {

    this.userService.getUsersByKeyword(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.users=data;
      },err=>{
        console.log(err);
      });
  }

  onDeleteUser(i:any) {
    Swal.fire({
      title:'Voulez-vous supprimer cet intérim ?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#ea4336',
      cancelButtonColor:'#6f0023',
      confirmButtonText:'Oui',
      cancelButtonText:'Non'
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire(
          'Supprimé',
          'Intérim supprimé',
          'success'
        )
        this.userService.deleteRessources(i._links.self.href)
          .subscribe(data=>{
            // @ts-ignore
            this.chercherUsers();
          },err=>{
            console.log(err);
          })
      }
    })

  }

  onEditUser(i:any) {
    let url = i._links.self.href;
    this.router.navigateByUrl("side/updateUser/"+btoa(url));
  }

  onRoleUser(i:any) {
    let url = i._links.self.href;
    this.router.navigateByUrl("/Role_utilisateur/"+btoa(url));
  }

  open(i: any) {
    let url = i._links.self.href;
    this.router.navigateByUrl("side/detailsUser/"+btoa(url));
  }
}
