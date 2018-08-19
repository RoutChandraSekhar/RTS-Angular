import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import { HeaderComponent } from './header/header.component';
import { GlobalSearchComponent } from './header/global-search/global-search.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { JobsModule } from '../jobs/jobs.module';


@NgModule({
  imports: [
    DashboardModule,
    JobsModule,
    AppRoutingModule
  ],
  declarations: [
    MasterComponent,
    HeaderComponent,
    GlobalSearchComponent,
    NotificationsComponent,
    SidebarRightComponent,
    NavMenuComponent,
    FooterComponent
  ],
  exports:[MasterComponent, HeaderComponent, NotificationsComponent]
})
export class MasterModule { }
