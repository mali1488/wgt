import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
// Modules
import { UiModule } from './ui/ui.module';
import { ScenesComponent } from './scenes/scenes.component';

import { ScenesService } from './services/scenes.service';
import { DashboardService } from './services/dashboard.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scenes', component: ScenesComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScenesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScenesService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
