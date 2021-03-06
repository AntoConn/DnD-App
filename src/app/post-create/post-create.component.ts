import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content, form.value.level, form.value.background, form.value.Cclass, form.value.allignment).subscribe();
    
    console.log(form.value);
    console.log(form.value.title);
    form.resetForm();
  }


  ngOnInit() {



  }

}
