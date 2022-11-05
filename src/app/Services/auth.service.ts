import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../Pages/Models/login.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // @ts-ignore
  users : User[] = [{"username":"DRH","password":"admin","roles":['ADMIN']}, {"nomUser":"Guest","password":"mmm","roles":['USER']}];
  // users : User[];
  host: string = 'http://localhost:8082/users';

  username!:string;
  role!:Array<string>;

  public loggedUser!:string;
  public isloggedIn:Boolean = false;
  public roles!:string[];

  constructor(private router: Router, private http : HttpClient) { }

  getUser(username: string):Observable<User>
  {
    const url = `${this.host}/search/findByUsername?username=${username}`;
    return this.http.get<User>(url);
  }

  signIn(user : User):Boolean {

    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        // @ts-ignore
        this.roles = curUser.roles;
        localStorage.setItem('Utilisateur connecté', this.loggedUser);
        localStorage.setItem('Est connecté', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin() : Boolean {

    if (!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }
  isUser() : Boolean {

    if (!this.roles)
      return false;
    return (this.roles.indexOf('USER') > -1);
  }

  logout() {
    this.isloggedIn = false;
    // @ts-ignore
    this.loggedUser = undefined;
    // @ts-ignore
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login : string){
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username : string) {

    this.users.forEach((curUser) => {
      if (curUser.username = username) {
        // @ts-ignore
        this.roles = curUser.roles;
      }
    });
  }
}
