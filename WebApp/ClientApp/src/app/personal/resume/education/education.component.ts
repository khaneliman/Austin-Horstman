import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public childActivated: Promise<string> | null = null;
  private resolve: Function | null = null;
  subscriptions: Subscription[] = []

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
  
  ngOnInit(): void {
    var jobs: string[] = [];
    if (this.route.routeConfig) this.route.routeConfig.children.forEach(x => jobs.push(x.path));
    

    this.childActivated = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });

    if (this.route.snapshot.firstChild) this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
