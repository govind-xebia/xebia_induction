import madhur from './assets/people/madhur.png';
import brijesh from './assets/people/brijesh.jpg';
import anurag from './assets/people/anurag.png';
import shankar from './assets/people/shankar.jpg';
import vipul from './assets/people/vipul.png';
import anand from './assets/people/anand.png';
import ashok from './assets/people/ashok.png';
import praval from './assets/people/praval.png';
import glory from './assets/people/glory.jpg';
import amitk from './assets/people/amitkatkar.png';
import vikas from './assets/people/vikasa.png';
import arvind from './assets/people/arvind.jpg'
import rajat from './assets/people/rajat.jpg';
import bharat from './assets/people/bharath.jpg';

import binx from './assets/logo/binx.png';
import dataDriven from './assets/logo/data-driven.svg';
import stackState from './assets/logo/stack-state.svg';
import xccelerated from './assets/logo/xccelerated.png';
import xebia from './assets/logo/xebia.png';
import xspirit from './assets/logo/xspirit.svg';

export const treeData = {
  title: 'Xebia Group',
  logo: xebia,
  hasRight: true,
  children: [
    {
      title: 'Xebia Netherlands',
      logo: xebia,
    },
    {
      title: 'Xspirit',
      logo: xspirit,
      bgSize: '50%'
    },
    {
      title: 'Binx.io',
      logo: binx,
      bgSize: '60%'
    },
    {
      title: 'Xebia Global Services',
      logo: xebia,
      hasRight: true,
    },
    {
      title: 'Go DataDriven',
      logo: dataDriven,
      bgSize: '40%'
    },
    {
      title: 'Xccelerated',
      logo: xccelerated,
      bgSize: '80%'
    },
    {
      title: 'Stack State',
      logo: stackState,
      bgSize: '80%'
    }
  ]
}

export const globalData = [
  {
    title: 'Xebia India',
    logoText: 'XI',
    hasRight: true,
  },
  {
    title: 'Xebia Middle East',
    logoText: 'XME'
  },
  {
    title: 'Xebia US',
    logoText: 'XUS'
  },
  {
    title: 'Xebia UK',
    logoText: 'XUK'
  },
  {
    title: 'Xebia Academy',
    logoText: 'XA'
  }
]

export const indiaData = [
  {
    title: 'Xebia Gurugram',
    logoText: 'XG',
  },
  {
    title: 'Xebia Bengaluru',
    logoText: 'XB'
  },
  {
    title: 'Xebia Pune',
    logoText: 'XP'
  }
];

export const groupData = {
  global: {
    people: [
      {
        name: "Anand Sahay",
        dept: "Xebia Global Services",
        title: "CEO",
        img: anand
      },
      {
        name: "Ashok Fenn",
        dept: "Xebia Global Services",
        title: "Executive Director - Sales",
        img: ashok,
        sub: [
          {
            name: "Praval Sharma",
            title: "Sales Head",
            img: praval
          }
        ]
      },
      {
        name: "Madhur Arya",
        dept: "Xebia Global Services",
        title: "Head Of Operations and Chief Information Security Officer",
        img: madhur
      },
      {
        name: "Glory Nelson",
        dept: "Xebia Global Services",
        title: "Chief People and Stratergy Officer",
        img: glory
      },
      {
        name: "Arvind Sharma",
        dept: "Xebia Global Services",
        title: "Chief Financial Officer",
        img: arvind
      },
      {
        name: "Rajat Gupta",
        dept: "Xebia Global Services",
        title: "Chief Digital Officer",
        img: rajat
      },
      {
        name: "Bharat Srivastava",
        dept: "Xebia Global Services",
        title: "Senior Director- Sales & Alliance",
        img: bharat
      }
    ]
  },
  xa: {
    people: [
      {
        name: "Brijesh Kohli",
        dept: "Xebia Academy",
        title: "Director - Academy",
        img: brijesh
      }
    ]
  },
  xus: {
    people: [
      {
        name: "Vipul Baijal",
        dept: "Xebia US",
        title: "Managing Director - Delivery",
        img: vipul
      }
    ]
  },
  xuk: {
    people: []
  },
  xme: {
    people: [
      {
        name: "Shankar Garg",
        dept: "Xebia Middle East",
        title: "Associate Director - Sales",
        img: shankar
      }
    ]
  },
  xi: {
    people: [
      {
        name: "Madhur Arya",
        dept: "Xebia Gurugram",
        title: "Head Of Operations and Chief Information Security Officer",
        img: madhur
      }
    ]
  },
  xb: {
    people: [
      {
        name: "Vikas Agarwal",
        dept: "Xebia Bengaluru",
        title: "Director - Delivery",
        img: vikas
      }
    ]
  },
  xg: {
    people: [
      {
        name: "Anurag Agar",
        dept: "Xebia Middle East",
        title: "Director - Delivery",
        img: anurag
      }
    ]
  },
  xp: {
    people: [
      {
        name: "Amit Katkar",
        dept: "Xebia Pune",
        title: "Director - Delivery",
        img: amitk
      }
    ]
  }
}