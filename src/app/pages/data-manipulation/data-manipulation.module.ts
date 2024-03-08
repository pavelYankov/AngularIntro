import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

import { DataBindingComponent } from './data-bindings/data-bindings.component';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { CustomInputComponent } from './data-bindings/custom-input/custom-input.component';
import { DataManipulationComponent } from './data-manipulation.component';

@NgModule({
    declarations: [
        DataBindingComponent,
        DisplayingDataComponent,
        UserEventsComponent,
        CustomInputComponent,
        DataManipulationComponent,
    ],
    imports: [FormsModule, MatInputModule, MatButton],
    exports: [DataManipulationComponent],
})
export class DataManipulationModule {}
