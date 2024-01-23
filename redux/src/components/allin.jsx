import { Navbar, Form, Row, Col, Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeatherData } from "../redux/actions";
import "../index.css";

function Navbars() {
  const dispatch = useDispatch();
  const { city, weatherData } = useSelector((state) => state);

  const getTempo = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6456f55a7fc7d2a8b93df59f813b4693`
      );
      if (res.ok) {
        let data = await res.json();
        dispatch(setWeatherData(data)); // dispatch chiama la pagina actions.js
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CambiaCity = (e) => {
    dispatch(setCity(e.target.value)); // aggiorna lo store mandando setCity
  };

  const Submitto = async (e) => {
    e.preventDefault();
    dispatch(setCity(e.target.value));

    await getTempo();
     dispatch(setCity('')); // Resetta il campo città dopo l'invio
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary custom-center" expand="md">
      <Navbar.Collapse id="basic-navbar-nav">
        <Form onSubmit={Submitto} className="mx-auto">
          <Row className="flex-wrap">
            <Col xs="12" md="auto">
              <Form.Control
                type="text"
                name="citta"
                placeholder="Digita la città da cercare"
                className="mr-sm-2 custom-form button"
                id="citta"
                value={city}
                onChange={CambiaCity}
              />
            </Col>
            <Col xs="12" md="auto" className="custom-colbutton">
              <Button type="submit" className="custom-button">
                <b>Cerca</b>
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
      </Navbar>
      <div className="custom-city">
        <h1>{weatherData?.name || "-"}</h1> {/* fa apparire a schermo il nome della città oppure se quel campo non è stato ancora caricato mette un semplice trattino finchè non viene scelta la città */}       
      </div>
      <div className='custom-cn'>
        <div className='card1' /*! SEZIONE PER LA LONGITUDINE */>
            {weatherData && (<p><b>Long,:</b> <br /> {weatherData.coord.lon} <b>°</b></p>)}
        </div>
        <div className='card1' /*! SEZIONE PER LA LATITUDINE! */>
            {weatherData && (<p><b>Lat.:</b> <br /> {weatherData.coord.lat} <b>°</b> </p>)}
        </div>
        <div className='card1' /*! SEZIONE PER LE NUVOLE! */>
            {weatherData && (<p><b>Nuvole:</b> {weatherData.clouds.all}<b>%</b></p>) }
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clouds" viewBox="0 0 16 16">
            <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
            <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
            </svg>
        </div>
        <div className='card1' /*! SEZIONE PER IL VENTO! */>
            {weatherData && (<p><b>Vento:</b>  {weatherData.wind.speed} <b>km/h</b></p>)}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>
        <div className='card1' /*! SEZIONE PER LA PIOGGIA CHE NON FUNZIONA PERCHE' L'API FA SCHIFO! */>
            {weatherData && (<p><b>Pioggia:</b> {weatherData.weather[0].icon} <b></b></p>)}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cloud-rain" viewBox="0 0 16 16">
            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
            </svg>
        </div>
        <div className='card1' /*! SEZIONE PER LA TEMPERATURA! */>
            {weatherData && (<p><b>Temp.:</b> {weatherData.main.temp} <b>°</b></p>)}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
            </svg>
        </div>
    </div>
    </div>
  );
}

export default Navbars;