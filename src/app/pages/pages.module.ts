import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WeatherComponent } from './weather/weather.component';
import { DataManipulationModule } from './data-manipulation/data-manipulation.module';

@NgModule({
    declarations: [HomeComponent, AnimalsComponent, DirectivesDemoComponent, PipesDemoComponent, WeatherComponent],
    imports: [DataManipulationModule, CommonModule],
    exports: [],
})
export class PagesModule {}
