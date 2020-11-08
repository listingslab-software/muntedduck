import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"
import {
  path,
  themeChoice,
  navOpen,
  locale,
  localing,
  localed,
  language,
  langChanged,
  seed,
} from "./actions"

export const appSlice = {
  pJSON,
  navOpen: false,
  seed: null,
  themeChoice: 'dark',
  path: null,
  locale: null,
  localing: false,
  localed: false,
  langChanged: false,
  language: `en`,
  languageChoices: [
      { 
        code: "en", 
        translation: "In English", 
        title: `Welcome to The Munted Duck`,
        subheader: `The world's first Cannabis Mobile App`,
      },
      { 
        code: "nl", 
        translation: "In het Nederlands", 
        title: `Welkom bij The Munted Duck`,
        subheader: `De eerste mobiele Cannabis-app ter wereld`,
      },
      { 
        code: "fr", 
        translation: "En français", 
        title: `Bienvenue chez The Munted Duck`,
        subheader: `La première application mobile de cannabis au monde`,
      },
      { 
        code: "es", 
        translation: "En español", 
        title: `Bienvenido a The Munted Duck`,
        subheader: `La primera aplicación móvil de cannabis del mundo`,
      },
      { 
        code: "de", 
        translation: "Auf Deutsch", 
        title: `Willkommen im The Munted Duck`,
        subheader: `Die weltweit erste Cannabis Mobile App`,
      },
      { 
        code: "cn", 
        translation: "用中文（表达", 
        title: `欢迎来到蒙德鸭`,
        subheader: `世界上第一个大麻移动应用`,
      },
  ]
}

const appReducer = createReducer(appSlice, {

  [seed]: (state, action) => {
    state.seed = action.seed
    return state
  },

  [language]: (state, action) => {
    state.language = action.language
    return state
  },

  [langChanged]: (state, action) => {
    state.langChanged = action.langChanged
    return state
  },

  [locale]: (state, action) => {
    state.locale = action.locale
    return state
  },

  [localing]: (state, action) => {
    state.localing = action.localing
    return state
  },

  [localed]: (state, action) => {
    state.localed = action.localed
    return state
  },

  [navOpen]: (state, action) => {
    state.navOpen = action.navOpen
    return state
  },

  [themeChoice]: (state, action) => {
    state.themeChoice = action.themeChoice
    return state
  },
  
  [path]: (state, action) => {
    state.path = action.path
    return state
  },

})

export { appReducer }