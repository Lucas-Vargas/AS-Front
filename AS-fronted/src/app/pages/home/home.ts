import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [CdkDrag],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
