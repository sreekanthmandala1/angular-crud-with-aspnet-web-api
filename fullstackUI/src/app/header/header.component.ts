import { Component } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[]
})
export class HeaderComponent {

  constructor(private headerService : HeaderService){

  }
}
