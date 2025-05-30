import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { EventpageComponent } from './component/eventpage/eventpage.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PortraitComponent } from './component/portrait/portrait.component';
import { WeddingComponent } from './component/wedding/wedding.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { ContactsComponent } from './component/contacts/contacts.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'eventpage', component: EventpageComponent, title: 'Event'},
    {path: 'portfolio', component: PortfolioComponent, title: 'Portfolio'},
    {path: 'portrait', component: PortraitComponent, title: 'Portrait'},
    {path: 'wedding', component: WeddingComponent, title: 'Wedding'},
    {path: 'services', component: ServicepageComponent, title: 'Services'},
    {path: 'contact', component: ContactsComponent, title: 'Contact'},
    {path: '**', component: PageNotFoundComponent, title:'404 | Page Not Found'}

];
