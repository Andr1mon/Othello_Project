import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userImage: string = 'https://i.pinimg.com/564x/31/db/bc/31dbbce0809a684c590774a85c73dde5.jpg';
  userInfo: any;

  constructor(private camera: Camera, private platform: Platform, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.http.post<any>('http://localhost/reversia_db/getUserInfoFromSession.php', { token: authToken })
      .subscribe((data: { token: string; }) => {
        localStorage.setItem('authToken', data.token);
          this.userInfo = data;
        });
    }
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  changeProfileImage() {
    if (this.platform.is('cordova')) {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then((imageData: any) => {
        this.userImage = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      }, (err: any) => {
        console.log('Error taking picture:', err);
      });
    } else {
      console.log('Cordova not available. Cannot take picture.');
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
