const initialState = {
    city: '',
    weatherData: null,
  }; // inizializza lo stato della city e watherData
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return { ...state, city: action.payload }; // se il tipo è set_city, aggiorna city con il valore contenuto in action.payload
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload }; // se il tipo è set_weather_data, aggiorna weatherData con il valore contenuto in action.payload
      default: // se lo stato è vuoto, non modifica niente
        return state;
    }
  };
  
  export default rootReducer;