import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageModalPageRoutingModule } from './image-modal-routing.module';

import { ImageModalPage } from './image-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageModalPageRoutingModule
  ],
  declarations: [ImageModalPage]
})
export class ImageModalPageModule {}
