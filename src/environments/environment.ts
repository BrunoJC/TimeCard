// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAkndPHbmKLmzYXU-3ur75FJbeeJhxCbTQ',
    authDomain: 'timecard-7e99f.firebaseapp.com',
    databaseURL: 'https://timecard-7e99f.firebaseio.com',
    projectId: 'timecard-7e99f',
    storageBucket: 'timecard-7e99f.appspot.com',
    messagingSenderId: '1045802693157'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import * as firebase from 'firebase/app';
