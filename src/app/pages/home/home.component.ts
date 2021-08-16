import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationModel } from '../../store/pagination.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  navigate(routeName: string) {
      const paginationReducer : PaginationModel = {
          pageNumber: 0,
          offset: 0
      }
      this.store.dispatch({ type: 'CHANGE_PAGE', payload: paginationReducer })
      this.router.navigateByUrl(routeName)
      window.scroll(0,0)
  }

}
