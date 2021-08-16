import { Component, OnInit } from '@angular/core';
import { PaginationModel } from '../../store/pagination.model';
import { Store } from '@ngrx/store';

interface Menu {
    name: string,
    route: string,
    exact: boolean
}

@Component({
  selector: 'app-nabvar-component',
  templateUrl: './nabvar-component.component.html',
  styleUrls: ['./nabvar-component.component.scss'],
})
export class NabvarComponentComponent implements OnInit {
  menu : Array<Menu> = [
     { name: 'Cómics', route: 'comics', exact: true },
     { name: 'Personajes' , route: 'characters', exact: true },
  ]

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  resetState () {
      const paginationReducer : PaginationModel = {
          pageNumber: 0,
          offset: 0
      }
      this.store.dispatch({ type: 'CHANGE_PAGE', payload: paginationReducer })
  }

}
