import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { GrassComponent } from './grass/grass.component';
import { WebcamModule } from 'ngx-webcam';
import { WebcamNewComponent } from './webcam-new/webcam-new.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent,
        GrassComponent,
        WebcamNewComponent
    ],
    imports: [BrowserModule, WebcamModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
