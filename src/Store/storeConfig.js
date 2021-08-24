import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
   currentTheme: (state, action) => {
      switch(action.type) {
         case 'CHANGE_THEME_STATE':
            return action.payload
         default:
            return localStorage.getItem('THEME') || 'light'
      }
   },
   menuActive:  (state, action) => {
      switch(action.type) {
         case 'CHANGE_MENU_STATE':
            return action.payload
         default:
            return state || false
      }
   },
})

const storeConfig = () => {
   return createStore(reducers)
}

export default storeConfig