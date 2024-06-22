import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Ensure RouterModule is imported
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GroupComponent } from './components/group/group.component';
import { CourseComponent } from './components/course/course.component';
import { LectureComponent } from './components/lecture/lecture.component';

const appRoutes: Routes = [
  { path: 'courses', component: CourseComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'lectures', component: LectureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', loadChildren: () => import('./components/register/register.component').then(m => m.RegisterComponent) },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupComponent,
    CourseComponent,
    LectureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Ensure RouterModule.forRoot is correctly used here
  ],
  providers: [
    // Any providers you might have
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
