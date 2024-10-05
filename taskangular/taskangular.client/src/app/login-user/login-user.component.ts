import { Component } from '@angular/core';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  constructor(private _ser: UrlService, private _router: Router) { }

  checkIfUserLogin(data: any) {
    var formdata = new FormData();
    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.UserLogin(formdata).subscribe((response: any) => {
      if (response.email == "admin@gmail.com") {
        this._router.navigate(['/dashboard']);

      } else {
        this._router.navigate(['/']);
      }
    }, (error) => {
      alert(error.error)
    })
  }
}
