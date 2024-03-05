import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: `./lazy-image.component.html`,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public urlImage!: string;

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if (!this.urlImage) throw new Error('not found image');
  }

  onLoad() {
    console.log('image loaded');
    this.hasLoader = true;

  }
}
