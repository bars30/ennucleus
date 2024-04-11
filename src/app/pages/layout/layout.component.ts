import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
