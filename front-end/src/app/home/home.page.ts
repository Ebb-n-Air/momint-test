import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}
  private media_file:any;
  private downloadedFile:any;
  public onFileSelected(event) {
    event.preventDefault();
    const file:File = event.target.files[0];
    if (file)
    {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (event:any) => {
        console.log('file selected');
        this.http.post("http://localhost:3000/api/files/uploadFile", {
          media_data: event.target.result,
          file_name: file.name,
          extension: file.type
        })
        .subscribe(data => {
          console.log(data);    
        });
      }
    }
  }
}
