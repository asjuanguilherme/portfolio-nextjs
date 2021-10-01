export const light = {
   name: 'light',
   
   colors: {
      primary: '#6556DF',

      background: '#FFFFFF',
      secondaryBackground: '#FFFFFF',

      gradient: 'linear-gradient(20deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%)',
      
      text: '#686868',
      empty: '#EEEEEE',

      nav: {
         neutral: {
            color: '#686868',
            background: 'transparent',
         },
         hover: {
            color: '#6556DF',
            background: '#EEEEEE',
         },
         selected: {
            color: '#FFFFFF',
            background: '#6556DF',
         }
      },
   }
}

export const dark = {
   name: 'dark',
   
   colors: {
      primary: '#FFFFFF',

      background: '#1B1C27',
      secondaryBackground: '#28293D',

      gradient: 'linear-gradient(200deg, #1B1C27 0%, #28293D 50%, #1B1C27 100%)',
      text: '#FFFFFF',
      empty: '#3E3F51',

      nav: {
         neutral: {
            color: 'white',
            background: 'transparent',
         },
         hover: {
            color: '#FFFFFF',
            background: '#3E3F51',
         },
         selected: {
            color: '#28293D',
            background: '#FFFFFF',
         }
      },
   }
}