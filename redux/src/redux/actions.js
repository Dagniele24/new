export const setCity = (city) => ({
    type: 'SET_CITY',
    payload: city,
  });
  // questa azione è utilizzata per aggiornare lo stato dell'applicazione con il nome della città selezionata.

  export const setWeatherData = (data) => ({
    type: 'SET_WEATHER_DATA',
    payload: data,
  });
  // questa azione aggiorna lo stato con i dati meteorologici della città selezionata.