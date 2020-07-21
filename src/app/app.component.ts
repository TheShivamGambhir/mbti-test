import { Component } from '@angular/core';
import { FormBuilder ,FormGroup , Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import data from 'db.json';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mbti-test';
  rForm: FormGroup;
  post:any;                     
  favSuperHero:string = '';
  name:string = '';
  constructor(private fb: FormBuilder , private http:HttpClient ) { 
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'favSuperHero' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(500)])],
      'validate' : [null,Validators.required]
    });
    
  }

  addPost(post) {
    let url = "http://localhost:3000/users";
    this.favSuperHero = post.favSuperHero;
    this.name = post.name;
    var entry = {
       "name" : this.name,
       "code" : this.favSuperHero 
    }
    this.http.post(url,entry).toPromise().then((data)=>{
      console.log(data);
    });
  }

}
