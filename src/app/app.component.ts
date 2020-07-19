import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormWithngForm';
  Name;  Email;  Number;

  Submitdata(profileForm){
      // console.log(profileForm);
      // this.Name=profileForm.controls.name.value;
      // this.Email=profileForm.controls.email.value;
      // this.Number=profileForm.controls.mobile.value;
      this.Name=profileForm.name;
      this.Email=profileForm.email;
      this.Number=profileForm.mobile;
      profileForm.reset();
  }

}
