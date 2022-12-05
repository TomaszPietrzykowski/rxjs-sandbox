import { Component, Injectable } from '@angular/core';
import { GetPhotoService } from '../get-photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  photo: string = '';

  constructor(private getPhoto: GetPhotoService) {}

  ngOnInit() {
    this.onClick();
  }

  onClick() {
    this.photo = '';
    this.getPhoto.getPhoto().subscribe((res) => {
      this.photo = res;
    });
  }
}
