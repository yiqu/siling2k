import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects } from './store/global/app.effects';
import { appReducers } from './store/global/app.reducer';
import { metaReducers } from './store/global/meta-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NotFoundComponentModule } from './404/404.module';
import { MaterialModuleBundle } from './shared/material-bundle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedBudleModule } from './shared/shared.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { FooterModule } from './footer/footer.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TopNavModule,
    FooterModule,
    SideNavModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 45,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'myRouter',
      routerState: RouterState.Minimal
    }),
    BrowserAnimationsModule,
    NotFoundComponentModule,
    MaterialModuleBundle,
    ToastrModule.forRoot({
      timeOut: 6000,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      newestOnTop: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
      return getFirestore();
    }),
    SharedBudleModule,
    AdminModule,
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    providePerformance(() => getPerformance()),
    NgbModule,

    AppRoutingModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
