import { Component, OnInit } from '@angular/core';
import { HeroService} from '../../services/hero.service';
import { Store } from '@ngrx/store';
import { PaginationModel } from '../../store/pagination.model';

@Component({
  selector: 'app-character-content',
  templateUrl: './character-content.component.html',
  styleUrls: ['./character-content.component.scss']
})
export class CharacterContentComponent implements OnInit {

  heroes: any = [];
  url = 'characters'
  loading : boolean = true
  page: number = 0
  totalPages: number = 1521
  offset: number = 0

  constructor(private heroService: HeroService, private store: Store) {
      this.loading = true
      this.store.subscribe(state => {
          // @ts-ignore
          const { pageNumber, offset } = state.paginationReducer;
          this.page = pageNumber
          this.offset = offset
      })
  }

  ngOnInit(): void {
     this.chargeHeroes(this.offset)
  }

  chargeHeroes (offset?: number) : void {
      this.heroService.getHeroes(this.url, offset).subscribe(
          data => {
              this.heroes = data.data.results
              this.totalPages = data.data.total
              this.loading = false
          }
      )
  }

  changePage (page : number) : void {
      this.offset = (page - 1) * 20
      const paginationReducer : PaginationModel = {
          pageNumber: page,
          offset: this.offset
      }
      this.store.dispatch({ type: 'CHANGE_PAGE', payload: paginationReducer })
      this.loading = true
      this.chargeHeroes(this.offset)
      window.scroll(0,0)
  }

}
