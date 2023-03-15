import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PictureComponent }   from './picture.component';
import { PictureRoutingModule } from './picture-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:      
    [ FormsModule, PictureRoutingModule, CommonModule ],
    declarations: [ PictureComponent],
    exports: [ PictureComponent]
})
export class PictureModule { }