import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  rubrics = ['HTML', 'CSS', 'JavaScript', 'Angular', 'PHP'];

  constructor(
      private postsService: PostsService,
      private alert: AlertService,
      public formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
        title: new FormControl(null, Validators.required),
        text: new FormControl(null, Validators.required),
        author: new FormControl(null, Validators.required),
        rubric: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
      rubric: this.form.controls.rubric.value
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      this.alert.success('Пост был создан');
    });

    // console.log(post);
  }

}
