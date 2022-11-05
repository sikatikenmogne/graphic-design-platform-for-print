import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Pages/Models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host: string = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }

  public getUsers(page: number, size: number) {
    return this.httpClient.get(this.host + "/users?page=" + page + "&size=" + size);
  }
  public getContributeurs(page: number, size: number) {
    return this.httpClient.get(this.host + "/contributeurs?page=" + page + "&size=" + size);
  }
  public getModeles(page: number, size: number) {
    return this.httpClient.get(this.host + "/api/meme?page=" + page + "&size=" + size);
  }

  public getUsersByKeyword(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + "/users/search/byMatriculePage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteRessources(url:any) {
    return this.httpClient.delete(url);
  }


  public saveRessources(url:any, data: any):Observable<User> {
    // @ts-ignore
    return this.httpClient.post(url,data);
  }

  public getRessources(url:any):Observable<User> {
    // @ts-ignore
    return this.httpClient.get(url);
  }

  public updateRessources(url:any, data:any){
    // @ts-ignore
    return this.httpClient.put(url, data);
  }

  public roleRessources(url:any, data: any){
    // @ts-ignore
    return this.httpClient.put(url,data);
  }
}
