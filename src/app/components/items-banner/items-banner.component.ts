import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
