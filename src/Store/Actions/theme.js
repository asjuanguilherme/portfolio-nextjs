export const changeThemeState = (newState) => {
   localStorage.setItem('THEME', newState)

   return {
      type: 'CHANGE_THEME_STATE',
      payload: newState
   }
}