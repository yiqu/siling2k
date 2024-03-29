// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from "./environment.model";

export const environment: Environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAYP8Izgp9xETqzSDMByUoVsK1D34_9vLk",
    authDomain: "siling1k.firebaseapp.com",
    databaseURL: "https://siling1k.firebaseio.com",
    projectId: "siling1k",
    storageBucket: "siling1k.appspot.com",
    messagingSenderId: "976277853968",
    appId: "1:976277853968:web:0072d044a8b7197ef07795"
  },
  showGraph: true,
  appTitle: 'Siling1k'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
