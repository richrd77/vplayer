import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'

const MatModulesIncluded: any[] = [MatDialogModule, MatIconModule];

@NgModule({
    imports: [MatModulesIncluded],
    exports: [MatModulesIncluded]
})
export class MatModule { }