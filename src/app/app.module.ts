import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntroAppRoutingModule } from './app-routing.module';
import { IntroAppComponent } from './app.component';

@NgModule({
    declarations: [IntroAppComponent],
    imports: [BrowserModule, IntroAppRoutingModule],
    providers: [],
    bootstrap: [IntroAppComponent],
})
export class AppModule {}
