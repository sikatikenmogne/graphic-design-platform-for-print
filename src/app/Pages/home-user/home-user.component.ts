import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    Swal.fire({
      title:'Voulez-vous quitter votre session?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#f00020',
      cancelButtonColor:'#3085d6',
      confirmButtonText:'Oui',
      cancelButtonText:'Non'
    }).then((result)=> {
      if (result.isConfirmed) {
        this.authService.logout();
      }
    })
  }

}
