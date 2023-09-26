import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { Provider } from 'react-redux';
import store from './app/store.js';

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend";
import { BrowserRouter } from "react-router-dom"
import MainLoading from './components/shared/MainLoading.jsx';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en' , 'ar'],
  fallbackLng: "ar",
  detction:{
    order: ['path','cookie', 'htmlTag', 'localStorage', 'subdomain'],
    caches: ['cookie'],
  },
  backend:{
    loadPath: '/assets/locales/{{lng}}/translation.json',
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<MainLoading />}>
  {/* <React.StrictMode> */}
    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  {/* </React.StrictMode> */}
  </Suspense>,
)

//607909dcF5cb3c627f4c51e9ec