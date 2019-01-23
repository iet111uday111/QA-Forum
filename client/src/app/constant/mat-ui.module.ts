import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatStepperModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule,
        MatOptionModule,
        MatSelectModule,
        MatExpansionModule,
        MatInputModule,
        MatStepperModule,
        MatTooltipModule
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule,
        MatOptionModule,
        MatSelectModule,
        MatExpansionModule,
        MatInputModule,
        MatStepperModule,
        MatTooltipModule
    ]
})
export class MatUIModule {

}