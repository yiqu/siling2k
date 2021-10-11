import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'firebase/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/global/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private store: Store<AppState>) {

  }

  onSignUp(email: string, pw: string) {
  }


}
