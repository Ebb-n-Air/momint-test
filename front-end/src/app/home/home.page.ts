import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  public onFileSelected(event) {
    event.preventDefault();
    const file:File = event.target.files[0];
    if (file)
    {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (event:any) => {
        console.log('file selected');
        console.log(event.target.result);
        this.http.post("http://localhost:3000/api/files/uploadFile", {
          media_data: event.target.result,
          file_name: file.name,
          extension: file.type
        })
        .subscribe(data => this.downloadFile(data, "application/gzip"));
      }
    }
  }

  private downloadFile(data:any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
  }
  }
}
