import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'khaneliman-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imgSrc: string | undefined;
  @Input() imgDark: boolean | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() superText: string | undefined;
  @Input() link: string | undefined;
  @Input() linkText: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

