import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-upload',
  templateUrl: './certificate-upload.component.html',
  styleUrls: ['./certificate-upload.component.css']
})
export class CertificateUploadComponent implements OnInit {


  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  selectedFiles: any;

  selectFile(event : any) {
    this.selectedFiles = event.target.files;
}
  

  constructor() { }

  ngOnInit(): void {
    
    
  }

  

}
