import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "image",
    pathMatch: "full",
  },
  {
    path: "image",
    loadChildren: () =>
      import("./pages/zoom-image/image/image.module").then(
        (m) => m.ImagePageModule
      ),
  },
  {
    path: "image-modal",
    loadChildren: () =>
      import("./pages/zoom-image/image-modal/image-modal.module").then(
        (m) => m.ImageModalPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
