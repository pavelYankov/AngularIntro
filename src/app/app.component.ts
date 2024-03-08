import { Component } from '@angular/core';
import { RouterLinksEnum } from './router-links.enum';

@Component({
    selector: 'intro-app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public routerLinks = RouterLinksEnum;
}
