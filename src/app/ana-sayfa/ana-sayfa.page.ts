
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ana-sayfa',
  templateUrl: './ana-sayfa.page.html',
  styleUrls: ['./ana-sayfa.page.scss'],
})
export class AnaSayfaPage implements OnInit {

  constructor(
    private router: Router,
    private platform: Platform,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  goToXoxGame() {
    this.router.navigateByUrl('/tabs/xox-game');
  }

  goToGame2048() {
    this.router.navigateByUrl('/tabs/game2048');
  }

  goToMemoryGame() {
    this.router.navigateByUrl('/tabs/memory-game');
  }

  goToScientificCalculator() {
    this.router.navigateByUrl('/tabs/scientific-calculator');
  }

  goToTodoList() {
    this.router.navigateByUrl('/tabs/todo-list');
  }

  goToSocialMediaInstagram() {
    this.platform.ready().then(() => {
      window.open("https://www.instagram.com/yahyaemint/", "_system");
    });
  }

  returnToHomePage() {
    this.modalController.dismiss();
  }

  
  goToInformationAboutMaker() {
    const videoUrl = 'assets/aboutvideo.mp4';
    const videoPlayer = document.createElement('video');
    videoPlayer.src = videoUrl;
    videoPlayer.controls = false;
    videoPlayer.autoplay = true;
    videoPlayer.style.position = 'fixed';
    videoPlayer.style.top = '0';
    videoPlayer.style.left = '0';
    videoPlayer.style.width = '100%';
    videoPlayer.style.height = '100%';
    videoPlayer.style.zIndex = '9999';

    const modal = document.createElement("ion-modal");
    modal.component = "ion-page";
    modal.componentProps = {
      content: videoPlayer.outerHTML,
  };

    modal.cssClass = "video-modal";

    modal.onDidDismiss().then(() => {
      document.body.removeChild(videoPlayer);
    });

    document.body.appendChild(videoPlayer);
    document.body.appendChild(modal);

    modal.present().then(() => {
      videoPlayer.play();
    });

    videoPlayer.onended = () => {
      modal.dismiss();
    };
  }


}