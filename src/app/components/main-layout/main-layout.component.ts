import { Component } from '@angular/core';
import { PersonalInfoComponent } from "../personal-info/personal-info.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [PersonalInfoComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
