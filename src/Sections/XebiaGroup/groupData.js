import madhur from './assets/people/madhur.png';
import brijesh from './assets/people/brijesh.jpg';
import vigit from './assets/people/vigit.jpg';
import anurag from './assets/people/anurag.png';
import shankar from './assets/people/shankar.jpg';
import deepak from './assets/people/deepak.jpg';
import vipul from './assets/people/vipul.png';
import anand from './assets/people/anand.png';
import ashok from './assets/people/ashok.png';
import glory from './assets/people/glory.jpg';

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
        img: ashok
      },
      {
        name: "Madhur Arya",
        dept: "Xebia Global Services",
        title: "Head of Operations",
        img: madhur
      },
      {
        name: "Glory Nelson",
        dept: "Xebia Global Services",
        title: "Chief People and Stratergy Officer",
        img: glory
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
  xuk: {},
  xme: {
    people: [
      {
        name: "Anurag Agar",
        dept: "Xebia Middle East",
        title: "Director - Delivery",
        img: anurag
      },
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
        title: "Head of Operations",
        img: madhur
      }
    ]
  },
  xb: {
    people: [
      {
        name: "Madhur Arya",
        dept: "Xebia Bengaluru",
        title: "Head of Operations",
        img: madhur
      }
    ],
    hr: {
      name: "Sahil Bhatnagar",
      contact: "99533 50705",
      email: "sahil.bhatnagar@xebia.com"
    }
  },
  xg: {
    people: [
      {
        name: "Madhur Arya",
        dept: "Xebia Gurugram",
        title: "Head of Operations",
        img: madhur
      }
    ]
  },
  xp: {
    people: [
      {
        name: "Vigit Ghatge",
        dept: "Xebia Pune",
        title: "Director - Sales",
        img: vigit
      },
      {
        name: "Deepak Sharma",
        dept: "Xebia Pune",
        title: "Associate Director - Delivery",
        img: deepak
      }
    ]
  }
}