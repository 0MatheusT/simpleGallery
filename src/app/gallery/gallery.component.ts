import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() title: String ='';
  @Input() images: String[] = [];
  imgPosition: number = 0;

  nextPic(){
    this.imgPosition++;
  }

  beforePic(){
    this.imgPosition--;
  }

  firstPic(){
    this.imgPosition = 0;
  }

  lastPic(){
    this.imgPosition = this.images.length - 1;
  }

}
