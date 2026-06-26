import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CdkDrag],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
