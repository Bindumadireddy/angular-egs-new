import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
