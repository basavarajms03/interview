import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register = false;
  registerForm: FormGroup;
  loginForm: FormGroup;
  success = false;
  successMsg = {
    message: '',
    class: ''
  };
  usersData: {
    username: string,
    password: string
  }[] = [];
  constructor(private router: Router) {

    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confPassword: new FormControl(null, [Validators.required]),
    });

    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  registerLink() {
    this.register = true;
    this.successMsg.message = '';
  }

  loginLink() {
    this.register = false;
    this.successMsg.message = '';
  }

  registerUser() {
    let formValue = this.registerForm.value;
    let filterData = this.usersData.find(x => x.username === formValue.username);
    this.registerForm.reset();
    if (filterData) {
      this.successMsg.message = 'User is already exist!';
      this.successMsg.class = 'alert-danger';
    } else {
      this.usersData.push(formValue);
      this.successMsg.message = 'User has been created!';
      this.successMsg.class = 'alert-success';
      setTimeout(() => {
        this.register = false;
        this.successMsg.message = '';
      }, 1000);
    }
  }

  login() {
    let formData = this.loginForm.value;
    let filterData = this.usersData.find(x=> x.username === formData.username && x.password === formData.password);
    this.loginForm.reset();
    if(filterData) {
      this.successMsg.message = 'Login success!';
      this.successMsg.class = 'alert-success';
      this.router.navigate(['/tasks-list']);
    } else {
      this.successMsg.message = 'Please enter correct username and password';
      this.successMsg.class = 'alert-danger';
    }
  }

}
