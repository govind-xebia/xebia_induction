import worldwide from './assets/worldwide.svg';
import hourglass from './assets/hourglass.svg';
import connection from './assets/connection.svg';

const currentYear = new Date();

const locationContent = [
  {
    title: '2000+',
    desc: 'People Worldwide',
    icon: connection,
  },
  {
    title: `${currentYear.getFullYear() - 2001}+`,
    desc: 'Glorious Years and Counting',
    icon: hourglass,
  },
  {
    title: 18,
    desc: 'Global Presence',
    icon: worldwide,
  }
];

export default locationContent;
