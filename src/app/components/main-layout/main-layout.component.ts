import { Component } from '@angular/core';
import { PersonalInfoComponent } from "../personal-info/personal-info.component";
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { GuardianInfoComponent } from "../guardian-info/guardian-info.component";
import { EducationBackgroundComponent } from "../education-background/education-background.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [PersonalInfoComponent,
    ContactInfoComponent, GuardianInfoComponent, EducationBackgroundComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
