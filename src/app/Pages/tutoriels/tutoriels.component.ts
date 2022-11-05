import { Component, OnInit } from '@angular/core';
import {FileService} from "./file.service";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import {TutorielService} from "../../Services/tutoriel.service";
import {AuthService} from "../../Services/auth.service";


@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {

  filenames : string[] = [];
  fileStatus = { status: '', requestType:'', percent:0};

  constructor(private fileService: FileService, public tutorielService : TutorielService, public authService : AuthService) {}

  //Define upload function
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name);
    }
    this.fileService.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  onSaveUser(data: any) {
    this.fileService.saveRessources(this.fileService.server+"/uploads",data)
      .subscribe(res=>{
        // @ts-ignore
        this.currentUser = res;
        Swal.fire({
          text:'Enregistré avec succès',
          icon:'success',
          confirmButtonText : 'OK'
        })
      },err=>{
        console.log(err);
      })
  }

  //Define download function
  onDownloadFiles(filename: string): void {
    this.fileService.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Téléversement... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Téléchargement... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array){
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body){
            this.filenames.unshift(filename);
          }
        }
        else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
            {type:`${httpEvent.headers.get('Content-Type')};charset=utf-8`}));

          // saveAs(new Blob([httpEvent.body!], { type:`${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //     httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
        break;
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.dialog.open(DialogtutorielComponent,{
  //     width:'30%'
  //   });
  // }
}
