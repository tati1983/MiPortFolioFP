// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  URL: 'http://localhost:8080/', 
  firebase: {
    apiKey: "AIzaSyD7R9fJwImnVJDMS3nph0-oyZhR1g5jhuQ",
    authDomain: "frontportfoliofp.firebaseapp.com",
    projectId: "frontportfoliofp",
    storageBucket: "frontportfoliofp.appspot.com",
    messagingSenderId: "438990088405",
    appId: "1:438990088405:web:840f534c4338973f399a5c",
    measurementId: "G-HG0DTS1EKQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
