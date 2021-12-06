import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { DataActionsType, GetDataSuccess } from '../actions/data.actions';
import { of, switchMap } from 'rxjs';
import { DataService } from '../../services/data.service';

@Injectable()
export class DataEffects {
  @Effect()
  getData$ = this.actions.pipe(
    ofType(DataActionsType.GetData),
    switchMap(() => this.dataService.getData()),
    switchMap((dataHttp) => of(new GetDataSuccess(dataHttp)))
  );

  constructor(
    private readonly actions: Actions,
    private readonly dataService: DataService
  ) {}
}
