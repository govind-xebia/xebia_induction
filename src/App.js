import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from './countryContext';
import Welcome from './Sections/Welcome';
import Origins from './Sections/Origins';
import Pillars from './Sections/Pillars';
import Locations from './Sections/Locations';
import XebiaGroup from './Sections/XebiaGroup';
import COE from './Sections/COE';
import Awards from './Sections/Awards';
import Clients from './Sections/Clients';
import Policy from './Sections/Policy';
import ThingsToRemember from './Sections/ToRemember';
import LifeAtXebia from "./Sections/LifeAtXebia";
import Tools from './Sections/Tools';
import Events from './Sections/Events';
import ThankYou from './Sections/ThankYou';

import './App.scss';

function getCountry() {
  const { search } = window.location;
  return search 
    ? search.split('?').join('').trim().split('=')[1].toLowerCase()
    : '';
}

function App() {
  const country = getCountry().length === 0 
    ? 'in'
    : getCountry();

  return (
    <Provider value={{ country }}>
      <Container fluid>
        <Welcome />
        <Origins />
        <Pillars />
        <Locations />
        <XebiaGroup />
        <COE />
        <Clients />
        <Awards />
      </Container>
      <Policy />
      <ThingsToRemember />
      <Container fluid>
        <Tools />
      </Container>
      <LifeAtXebia />
      <Container fluid>
        <Events />
        <ThankYou />
      </Container>
    </Provider>
  );
}

export default App;
