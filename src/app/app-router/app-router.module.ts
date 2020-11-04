import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AppComponent } from '../app.component'
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: IntroPageComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'aboutMe',
      component: AboutMeComponent,
    },
    {
      path: 'contactMe',
      component: ContactMeComponent
    },
    {
      path: 'home',
      component: IntroPageComponent
    },
    {
      path: '**',
      component: AppComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRouterModule { }