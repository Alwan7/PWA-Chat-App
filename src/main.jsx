  import { mountAndImport } from 'react-easier';

// mongoosy models and make global
import mongoosy from 'mongoosy/frontend';
const { Message, Photo, User, Login } = mongoosy;
Object.assign(globalThis, { Message, Photo, User, Login });

if('serviceWorker' in navigator){

  navigator.serviceWorker.register('./serviceWorker.js')

    .then(reg => console.log('service worker registered', reg))

    .catch(err => console.log('service worker not registered', err));

}

Notification.requestPermission(function(status) {
  if (Notification.permission == 'granted') {
    console.log('Notification permission status:', status);
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Welcome to Aptr! Enjoy your stay.');
    });
  }
});


mountAndImport({
  // the module that starts your app
  component: () => import('./App'),
  // a selector for the html element to mount it in
  rootSelector: '#root',
  // import all modules you want to be global
  globalImports: [
    'React', import('react'),
    'ReactDOM', import('react-dom'),
    import('react-easier'),
    import('react-router-dom'),
    'BrowserRouter as Router',
    'NavLink as MenuLink',
    import('react-bootstrap'),
    // our own components/modules
    'MainNav', import('./components/MainNav'),
    'Routes', import('./components/Routes'),
    'Footer', import('./components/Footer'),
    'LoginForm', import('./components/LoginForm'),
    'SignupForm', import('./components/SignupForm'),
    'Start', import('./views/Start'),
    'Photos', import('./views/Photos'),
    'MyPhotos', import('./views/MyPhotos'),
    'PhotoUpload', import('./views/PhotoUpload'),
    'Chat', import('./views/Chat'),
    import('./utilities/photo-upload'),
    import('./utilities/updateHandler')
  ]
});