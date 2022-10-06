import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';
import { LayoutComponent } from './layout/layout.component';
import { SectionUnComponent } from './section-un/section-un.component';
import { SectionDeuxComponent } from './section-deux/section-deux.component';
import { SectionTroisComponent } from './section-trois/section-trois.component';
import { SectionQuatreComponent } from './section-quatre/section-quatre.component';
import { SectionCinqComponent } from './section-cinq/section-cinq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAreWe1Component,
    WhoAreWe2Component,
    LayoutComponent,
    SectionUnComponent,
    SectionDeuxComponent,
    SectionTroisComponent,
    SectionQuatreComponent,
    SectionCinqComponent,
    NavbarComponent,
    FooterComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
