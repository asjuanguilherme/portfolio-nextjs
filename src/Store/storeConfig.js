import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
   darkTheme: (state, action) => false,
   menuActive:  (state, action) => {
      switch(action.type) {
         case 'CHANGE_MENU_STATE':
            return action.payload
         default:
            return false
      }
   }
})

const storeConfig = () => {
   return createStore(reducers)
}

export default storeConfig