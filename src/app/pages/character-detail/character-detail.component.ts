import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  heroId : number = 0
  url : string = 'characters'
  heroInfo : any = {}
  loading : boolean = true

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) {
      this.loading = true
  }

  ngOnInit(): void {
     this.getHeroParams()
  }

  getHeroParams () {
     this.heroId  = Number(this.activatedRoute.snapshot.paramMap.get('id'))
     this.heroService.getHeroById(this.url, this.heroId).subscribe(
        data => {
            if (data.data.results[0].thumbnail.path) {
                this.heroInfo = data.data.results[0]
            }
            this.loading = false
        }
     )
  }
}
