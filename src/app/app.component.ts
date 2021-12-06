import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetData } from './store/actions/data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-exercise';

  constructor(private readonly store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetData());
  }
}
