import worldwide from "./assets/worldwide.svg";
import hourglass from "./assets/hourglass.svg";
import connection from "./assets/connection.svg";

const currentYear = new Date();

const locationContent = [
  {
    title: "5500+",
    desc: "People Worldwide",
    icon: connection,
  },
  {
    title: `${currentYear.getFullYear() - 2001}+`,
    desc: "Glorious Years and Counting",
    icon: hourglass,
  },
  {
    title: "400+",
    desc: "Clients",
    icon: worldwide,
  },
];

export default locationContent;
