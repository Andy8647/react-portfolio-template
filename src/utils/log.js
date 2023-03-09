import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD14VvacYQUCyK7a64pM9vZU_0sAZ01LPA',
  authDomain: 'andyportfolio-e8337.firebaseapp.com',
  projectId: 'andyportfolio-e8337',
  storageBucket: 'andyportfolio-e8337.appspot.com',
  messagingSenderId: '211239085803',
  appId: '1:211239085803:web:c5a46db2f933b4c3e840ae',
  measurementId: 'G-Y8DKTXXYL5',
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
