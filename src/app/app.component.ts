import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

	title = 'Dynamic title';
	number = 42;
	arr = [1, 2, 3, 4, 5, 6, 7];
	obj = { a: 1, b: {c: 2} };

	inputValue = ''

	// img = 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png'

	constructor() {
		// setTimeout(() => {
		// 	this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJZtKZfOGqyRGXIPT6fZxf7zSnL1FgS0Kl5_WCEVS9Yom_JfCAA'
		// 	console.log('Timeout is over')
		// }, 5000)
	}

	onBlur(str: string) {
		this.inputValue = str;
	}

	onInput(event: KeyboardEvent) {
		this.inputValue = (<HTMLInputElement>event.target).value;
	}

	onClick() {
		console.log('Click!')
	}


}
