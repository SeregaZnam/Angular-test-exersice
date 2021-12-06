import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectDataList } from '../../store/selectors/data.selector';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent {
  data$ = this.store.pipe(select(selectDataList));

  constructor(private readonly store: Store) {}
}
