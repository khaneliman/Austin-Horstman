import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'khaneliman-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss']
})
export class FloatingCardComponent implements OnInit {
  
  @Input() icon: string | undefined;
  @Input() status: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() superText: string | undefined;
  @Input() link: string | undefined;
  @Input() linkText: string | undefined;
  @Input() tags: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
