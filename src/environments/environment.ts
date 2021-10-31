// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
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
  defaultSilingInsToLoad: [
    {
      dateAdded: 0,
      id: 'ascensus',
      name: 'ascensus'
    },
    {
      dateAdded: 0,
      id: 'fidelity',
      name: 'fidelity'
    },
    {
      dateAdded: 0,
      id: 'empower',
      name: 'empower'
    },
    {
      dateAdded: 0,
      id: 'csg',
      name: 'csg'
    },
    {
      dateAdded: 0,
      id: 'kqpro2',
      name: 'Kqpro2'
    },
    {
      dateAdded: 0,
      id: 'kqpro3',
      name: 'Kqpro3'
    },
    {
      dateAdded: 0,
      id: 'test',
      name: 'Test'
    }
  ],

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
