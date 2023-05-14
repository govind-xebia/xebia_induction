import hourglass from "./assets/hourglass.svg";
import connection from "./assets/connection.svg";

const currentYear = new Date();

const locationContent = [
  {
    title: "6000+",
    desc: "People Worldwide",
    icon: connection,
  },
  {
    title: `${currentYear.getFullYear() - 2001}+`,
    desc: "Glorious Years and Counting",
    icon: hourglass,
  },
];

export default locationContent;
