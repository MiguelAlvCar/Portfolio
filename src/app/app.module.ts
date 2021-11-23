import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowErrorComponent } from './genericComponentsAndDirectives/show-error-component-template-driven';
import { HttpClientModule } from '@angular/common/http';
import { DiagramsComponent } from './projects/diagrams/diagrams.component';
import { MainNavComponent } from '../app/navigation/mainnav.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    CurriculumComponent,
    ShowErrorComponent,
    DiagramsComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
