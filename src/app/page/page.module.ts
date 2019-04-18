import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import{SharedModule} from'../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent, ContactUsComponent, AboutUsComponent, ServicesComponent, BlogComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule
,  ],
  exports:[HomeComponent, ContactUsComponent, AboutUsComponent, ServicesComponent, BlogComponent],
})
export class PageModule { }
