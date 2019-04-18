import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { ServicesComponent } from './page/services/services.component';
import { BlogComponent } from './page/blog/blog.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'blog', component: BlogComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
