import { Container } from 'react-bootstrap';
import { Provider } from './countryContext';
import Welcome from './Sections/Welcome';
import Origins from './Sections/Origins';
import Pillars from './Sections/Pillars';
import Chapters from './Sections/Chapters';
import Locations from './Sections/Locations';
import XebiaGroup from './Sections/XebiaGroup';
import COE from './Sections/COE';
import RecentAcquisitions from './Sections/RecentAcquisitions';
import Awards from './Sections/Awards';
import Clients from './Sections/Clients';
import Policy from './Sections/Policy';
import ThingsToRemember from './Sections/ToRemember';
import DosAndDonts from './Sections/DosAndDonts';
import LifeAtXebia from "./Sections/LifeAtXebia";
import Tools from './Sections/Tools';
import Events from './Sections/Events';
import ThankYou from './Sections/ThankYou';

import './App.scss';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const contractorMode = queryParams.get('contractor')
  return (
    <Provider value={{
      country: queryParams.get('country') || 'in',
      contractorMode
    }}>
      <Container fluid>
        <Welcome />
        <Origins />
        <Pillars />
        <Chapters />
        <Locations />
        <XebiaGroup />
        <COE />
        {
          !contractorMode &&
          <>
            <Clients />
            <Awards />
          </>
        }
      </Container>
      <RecentAcquisitions />
      {
        !contractorMode && <Policy />
      }
      <ThingsToRemember />
      {
        !contractorMode && <DosAndDonts />
      }
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
