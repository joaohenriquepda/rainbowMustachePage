import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeadlineComponent } from './headline/headline.component';
import { HeadlineSupportComponent } from './headline-support/headline-support.component';
import { TeamComponent } from './team/team.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MissionComponent } from './mission/mission.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { BenefitsPart2Component } from './benefits-part2/benefits-part2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    HeadlineComponent,
    HeadlineSupportComponent,
    TeamComponent,
    FormContactComponent,
    BenefitsComponent,
    MissionComponent,
    BannerComponent,
    SkillsComponent,
    BenefitsPart2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
