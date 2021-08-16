import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-description',
  templateUrl: './content-description.component.html',
  styleUrls: ['./content-description.component.scss']
})
export class ContentDescriptionComponent implements OnInit {
  @Input() hero?: any
  @Input() comic?: any

  constructor() { }

  ngOnInit(): void {
  }

  moveTop () {
      window.scroll(0,0)
  }

}
