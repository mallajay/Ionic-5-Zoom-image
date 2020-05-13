import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ModalController, IonSlides } from "@ionic/angular";

@Component({
  selector: "app-image-modal",
  templateUrl: "./image-modal.page.html",
  styleUrls: ["./image-modal.page.scss"]
})
export class ImageModalPage implements OnInit {
  imgURL: any = [];

  @ViewChild("slider", { read: ElementRef, static: false }) slider: ElementRef;
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  sliderOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 15,
    loopedSlides: 5,
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.slides.update();
    // console.log("this.imgURL", this.imgURL);
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  slideTo(index) {
    this.slider.nativeElement.slideTo(index);
  }

  close() {
    this.modalController.dismiss();
  }
}
