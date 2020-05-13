import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ImageModalPage } from "../image-modal/image-modal.page";
import { ModalController, Platform } from "@ionic/angular";

@Component({
  selector: "app-image",
  templateUrl: "./image.page.html",
  styleUrls: ["./image.page.scss"]
})
export class ImagePage implements OnInit {
  public devWidth = this.platform.width();
  private data = [
    {
      imgs: [
        "https://images.pexels.com/photos/1485630/pexels-photo-1485630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1583571/pexels-photo-1583571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ]
    }
  ];

  @ViewChild("slider", { read: ElementRef, static: false }) slider: ElementRef;

  sliderOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loopedSlides: 5
  };

  sliderOpts2 = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true
  };

  constructor(
    private modalController: ModalController,
    private platform: Platform
  ) {
    // console.log(this.data[0].imgs);
  }

  ngOnInit() {}

  slideNext(slideView) {
    slideView.slideNext(500);
  }

  slidePrev(slideView) {
    slideView.slidePrev(500);
  }

  slideTo(index) {
    this.slider.nativeElement.slideTo(index);
  }

  openPreview(img) {
    this.modalController
      .create({
        component: ImageModalPage,
        componentProps: {
          imgURL: this.data[0].imgs
        },
        cssClass: "my-custom-modal-css"
      })
      .then(modal => modal.present());

    if (!window.history.state.modal) {
      const modalState = { modal: true };
      history.pushState(modalState, null);
    }
  }

  openPreviewMobile(img) {
    this.modalController
      .create({
        component: ImageModalPage,
        componentProps: {
          imgURL: this.data[0].imgs
        }
      })
      .then(modal => modal.present());
    if (!window.history.state.modal) {
      const modalState = { modal: true };
      history.pushState(modalState, null);
    }
  }
}
