import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Register } from 'app/models/register';
import { RegisterService } from 'app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = new Register();
  isPhoneNumberShow = true;
  isOtpShow = false;
  isCutomerRestration = false;
  constructor(private registerService: RegisterService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  onPhoneNumberSubmit(form){
    console.log(form);
    if (form.valid) {
      console.log(this.model) ;
      this.registerService.sendOTP(this.model).subscribe((res) => {
        console.log(res);
        this.isPhoneNumberShow = false;
        this.isOtpShow = true;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.error('Error submitting data:', error);
        this.isPhoneNumberShow = false;
        this.isOtpShow = true;
        this.changeDetectorRef.detectChanges();
      })
    }
  }
  onOTPSubmit(form){
    console.log(this.model);
    this.isCutomerRestration = true;
  }

}
