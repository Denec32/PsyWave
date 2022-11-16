import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  @Input() qText: string = "";
  @Input() qScore: number = 0;
  @Input() min: number = -2;
  @Input() max: number = 2;

  @Output() scoreChangedEvent = new EventEmitter<number>();

  changeScore(value: number) {
    this.scoreChangedEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {

  }

}