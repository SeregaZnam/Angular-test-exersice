import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { DataService } from './services/data.service';
import { DataEffects } from './store/effects/data.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([DataEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
