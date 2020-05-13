import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageModalPage } from './image-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ImageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageModalPageRoutingModule {}
