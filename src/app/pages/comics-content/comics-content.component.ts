import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-comics-content',
  templateUrl: './comics-content.component.html',
  styleUrls: ['./comics-content.component.scss']
})
export class ComicsContentComponent implements OnInit {

  url: string = 'comics'
  comics: Array<any> = []
  isLoading: boolean = false

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  getTitle (event: any) {
      const title = event.target.value
      if (title.trim() !== '') {
          this.isLoading = true
          this.heroService.getComicByTitle(this.url, title)
              .subscribe(data => {
                  this.comics = data.data.results
                  this.isLoading = false
              })
      }

  }

}
