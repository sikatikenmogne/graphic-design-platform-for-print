import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user.model";
import {Tutoriel} from "../Models/tutoriel.model";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public server = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  //Define function upload
  upload(formData : FormData): Observable<HttpEvent<string[]>>{
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  //Define function download
  download(filename : string): Observable<HttpEvent<Blob>>{
    return this.http.get(`${this.server}/file/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType:'blob'
    });
  }



  public getTutoriels(page: number, size: number) {
    return this.http.get(this.server + "/tutoriels?page=" + page + "&size=" + size);
  }

  public getTutorielsByKeyword(mc: string, page: number, size: number) {
    return this.http.get(this.server + "/tutoriels/search/byTitrePage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteRessources(url:any) {
    return this.http.delete(url);
  }


  public saveRessources(url:any, data: any):Observable<Tutoriel> {
    // @ts-ignore
    return this.http.post(url,data);
  }

  public getRessources(url:any):Observable<Tutoriel> {
    // @ts-ignore
    return this.http.get(url);
  }

  public updateRessources(url:any, data:any){
    // @ts-ignore
    return this.http.put(url, data);
  }
}
