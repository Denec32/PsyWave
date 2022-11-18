import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-selector',
  templateUrl: './radio-selector.component.html',
  styleUrls: ['./radio-selector.component.scss']
})
export class RadioSelectorComponent implements OnInit {

  @Input() qText: string = "";
  @Input() qScore: number = 0;
  @Input() variants: string[] = [];

  @Output() scoreChangedEvent = new EventEmitter<number>();


  changeScore(value: number) {
    this.scoreChangedEvent.emit(value);
  }

  constructor() { 
    console.log(this.qScore);

  }

  ngOnInit(): void {
  }

}