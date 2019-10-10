import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

	arr = [1, 1, 2, 3, 5, 8]

	objs = [
		{title: 'Post1', author: 'Alex', comments: [
			{name: 'Arnold', text: 'You are the best!'},
			{name: 'Denis', text: 'You can do everything you want with your life!'},
		]},
		{title: 'Post2', author: 'Alex', comments: [
			{name: 'Frank', text: 'You are winner!'},
		]},
		
	]

}
