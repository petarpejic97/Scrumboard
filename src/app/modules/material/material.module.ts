import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

const matModules = [
    MatMomentDateModule,
    MatButtonModule,
    MatIconModule,
];


@NgModule({
    declarations: [],
    imports: [...matModules],
    exports: [...matModules],
})
export class MaterialModule {}
