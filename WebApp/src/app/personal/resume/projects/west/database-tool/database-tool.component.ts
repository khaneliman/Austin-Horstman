import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-database-tool',
  templateUrl: './database-tool.component.html',
  styleUrls: ['./database-tool.component.scss'],
  imports: [RouterLink],
})
export class DatabaseToolComponent {}
