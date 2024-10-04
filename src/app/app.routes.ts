import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DevicesComponent } from './devices/devices.component';
import { RoofSignsComponent } from './roof-signs/roof-signs.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
  { path: 'news', component: NewsComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'roof-signs', component: RoofSignsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];