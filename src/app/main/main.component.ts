import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkilsComponent } from '../skils/skils.component';

@Component({
  imports: [
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkilsComponent,
    ContactsComponent,
  ],
  selector: 'app-main',
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
})
export class MainComponent {}
