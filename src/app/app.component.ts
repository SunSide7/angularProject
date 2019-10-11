import { Component, OnInit } from '@angular/core';
import { AppCounterService } from './services/app-counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

	constructor(private appCounterService: AppCounterService) {

	}

}
