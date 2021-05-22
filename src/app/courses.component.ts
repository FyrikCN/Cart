import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses; even as isEven">
                {{ course }} - <span *ngIf = "isEven">Even</span>
            </li>
        </ul>
        <button [class] = "className"
                (click) = "onSave($event)">{{ buttonText }}
        </button><br>
        <br>
        <input (keyup.enter) = "onEnterPressed($event)" />
        <div>{{ theInputField }}</div>
        <br>
        <input #secondInput (keyup.enter) = "onSecondEnter(secondInput.value)" /><br>
        <br>
        <input [(ngModel)] = "dynamicInput" (keyup.enter) = "onDynamicEnter()"/>
        `
})

export class CoursesComponent {
    title = "A list of courses";
    courses;
    className = "btn btn-primary";
    buttonText = "OK.";
    theInputField;
    dynamicInput = "this is dynamic";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log($event);
    }

    onEnterPressed($event) {
        console.log("This is only called when Enter is pressed.\n" + 
                    "Which saves memory.");
        this.theInputField = $event.target.value;
    }

    onSecondEnter(secondInput) {
        console.log(secondInput);
    }

    onDynamicEnter() {
        console.log(this.dynamicInput);
    }
}