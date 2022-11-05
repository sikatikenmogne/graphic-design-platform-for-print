import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../Pages/Models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public host: string = "http://localhost:8082";

  constructor(private httpClient : HttpClient) { }
  public roleRessources(url:any, data: any):Observable<Role> {
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
}
