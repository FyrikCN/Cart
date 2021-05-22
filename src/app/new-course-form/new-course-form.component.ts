import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  Submit(f) {
    console.log(f);
  }

  categories = [
    { id: 1, name: "Technology"},
    { id: 2, name: "Art"},
    { id: 3, name: "Language"}
  ]
}
