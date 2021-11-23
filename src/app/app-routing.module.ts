import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from '../app/projects/projects.component';
import {DiagramsComponent} from './projects/diagrams/diagrams.component';
import {SkillsComponent} from '../app/skills/skills.component';
import {CurriculumComponent} from '../app/curriculum/curriculum.component';
import {ContactComponent} from '../app/contact/contact.component';
import {MainNavComponent} from '../app/navigation/mainnav.component';

const routes: Routes = [
  {path: '', component: MainNavComponent,
    children: [
      {path: 'projects', component: ProjectsComponent},
      {path: '', redirectTo: '/projects', pathMatch: 'full'},
      {path: 'skills', component: SkillsComponent},
      {path: 'cv', component: CurriculumComponent},
      {path: 'contact', component: ContactComponent},
    ]
  },
  
  {path: 'diagrams', component: DiagramsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
