import { Component, Input } from '@angular/core';

@Component({
    selector: 'intro-custom-input',
    templateUrl: './custom-input.component.html',
})
export class CustomInputComponent {
    @Input()
    public inputValue: string | undefined;
}
