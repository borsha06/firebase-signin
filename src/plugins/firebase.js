// import something here
import * as firebase from 'firebase'
// leave the export, even if you don't use it
// export default ({ app, router, Vue }) => {
//   // something to do
// }
var config = {
  apiKey: 'AIzaSyAU7it1Wlg4yK30y4RAZNrfpGDY-ahdaNM',
  authDomain: 'studentdanceapp.firebaseapp.com',
  databaseURL: 'https://studentdanceapp.firebaseio.com',
  projectId: 'studentdanceapp',
  storageBucket: 'studentdanceapp.appspot.com',
  messagingSenderId: '356039691494'
}
const fireApp = firebase.initializeApp(config)
export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  // something to do
}
