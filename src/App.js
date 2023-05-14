import { Container } from "react-bootstrap";
import { Provider } from "./countryContext";
import Welcome from "./Sections/Welcome";
import Origins from "./Sections/Origins";
import Pillars from "./Sections/Pillars";
import Chapters from "./Sections/Chapters";
import Locations from "./Sections/Locations";
import XebiaGroup from "./Sections/XebiaGroup";
import COE from "./Sections/COE";
import RecentAcquisitions from "./Sections/RecentAcquisitions";
import Policy from "./Sections/Policy";
import ThingsToRemember from "./Sections/ToRemember";
import DosAndDonts from "./Sections/DosAndDonts";
import LifeAtXebia from "./Sections/LifeAtXebia";
import ThankYou from "./Sections/ThankYou";

import "./App.scss";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const contractorMode = queryParams.get("contractor");
  const region = queryParams.get("region") || "in";
  return (
    <Provider
      value={{
        region,
        contractorMode
      }}
    >
      <Container fluid>
        <Welcome />
        <Origins />
        <Pillars />
        <Chapters />
        <Locations />
        <XebiaGroup />
        <COE />
      </Container>
      <RecentAcquisitions />
      {!contractorMode && <Policy />}
      {(region === "in" || region === "apac") && <ThingsToRemember />}
      {!contractorMode && <DosAndDonts />}
      <LifeAtXebia />
      <Container fluid>
        <ThankYou />
      </Container>
    </Provider>
  );
}

export default App;
