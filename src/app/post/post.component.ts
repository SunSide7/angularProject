import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements 
	OnInit, 
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
	{

	@Input() post: Post
	@Output() onRemove = new EventEmitter<number>()	
	@ContentChild('info', {static: true}) infoRef: ElementRef

	removePost() {
		this.onRemove.emit(this.post.id)
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes)
	}

	ngOnInit() {
		// console.log(this.infoRef.nativeElement)
		console.log('ngOnInit')
	}

	ngDoCheck(): void {
		console.log('ngDoCheck')
	}

	ngAfterContentInit(): void {
		console.log('ngAfterContentInit')
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked')
	}

	ngAfterViewInit(): void {
		console.log('ngAftarViewInit')
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked')
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy')
	}

}
