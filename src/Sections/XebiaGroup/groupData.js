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
import runki from './assets/people/runki.jpg';
import vijit from './assets/people/vijit.png'
import ashish from './assets/people/ashish.jpg';
import shivam from './assets/people/shivam.jpg';
import seema from './assets/people/seema.png';
import sudharshana from './assets/people/sudharshana.jpg';
import nirali from './assets/people/nirali.jpg';
import archna from './assets/people/archna.jpg';
import isha from './assets/people/isha.png';
import diksha from './assets/people/diksha.jpg';
import meghas from './assets/people/meghas.jpg';
import lokesh from './assets/people/lokeshc.jpg';
import sanjeev from "./assets/people/sanjeevbora.jpg";
import manu from "./assets/people/manugoel.jpg";
import shankard from "./assets/people/shankardastidar.jpg";

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
    logoText: 'XMEA'
  },
  {
    title: 'Xebia US',
    logoText: 'XUS'
  },
  {
    title: 'Xebia UK/Europe',
    logoText: 'XUK'
  },
  {
    title: 'Xebia Academy',
    logoText: 'XA'
  },
  {
    title: 'Xebia APAC',
    logoText: 'APAC'
  }
]

export const indiaData = [
  {
    title: 'Xebia North',
    logoText: 'XN',
  },
  {
    title: 'Xebia South',
    logoText: 'XS'
  },
  {
    title: 'Xebia West',
    logoText: 'XW'
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
        name: "Runki Goswami",
        dept: "Xebia Global Services",
        title: "Chief Marketing Officer",
        img: runki
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
        title: "Senior Director- Strategy & Alliance",
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
        img: brijesh,
        sub: [
          {
            name: "Lokesh Chauhan",
            title: "PBP",
            img: lokesh
          }
        ]
      }
    ]
  },
  xus: {
    people: [
      {
        name: "Vipul Baijal",
        dept: "Xebia US",
        title: "Managing Director - Delivery",
        img: vipul,
        sub: [
          {
            name: "Sudarshana Mukherjee",
            title: "PBP",
            img: sudharshana
          }
        ]
      },
      {
        name: "Manu Goel",
        dept: "Xebia US",
        title: "Chief Operations Officer",
        subtitle: "Regional Ops Head - US",
        img: manu,
      }
    ]
  },
  xuk: {
    people: [
      {
        name: "Shankar Dastidar",
        dept: "Xebia UK/Europe",
        title: "Chief Operations Officer",
        subtitle: "Regional Ops Head: UK / Europe",
        img: shankard
      },
      {
        name: "Vijit Ghatge",
        dept: "Xebia UK/Europe",
        title: "Director - UK Head",
        img: vijit,
        sub: [
          {
            name: "Seema Bhatia",
            title: "PBP",
            img: seema
          }
        ]
      }
    ]
  },
  xmea: {
    people: [
      {
        name: "Anurag Agar",
        dept: "Xebia Middle East",
        title: "Senior Vice President",
        subtitle: "Regional Ops Head- XMEA",
        img: anurag,
        sub: [
          {
            name: "Megha S",
            title: "PBP",
            img: meghas
          }
        ]
      }
    ]
  },
  xi: {
    people: [
      {
        name: "Madhur Arya",
        dept: "Xebia India",
        title: "Head Of Operations",
        subtitle: "Chief Information Security Officer",
        img: madhur
      }
    ]
  },
  xs: {
    people: [
      {
        name: "Madhur Arya",
        dept: "Xebia South",
        title: "Director - Delivery",
        img: madhur,
        sub: [
          {
            name: "Diksha Singh",
            title: "PBP",
            img: diksha
          }
        ]
      }
    ]
  },
  xn: {
    people: [
      {
        name: "Anurag Agar",
        dept: "Xebia North",
        title: "Senior Vice President",
        img: anurag,
      },
      {
        name: "Sanjeev Bora",
        dept: "Xebia North",
        title: "Senior Vice President",
        subtitle: "Regional Ops Head- North",
        img: sanjeev,
        sub: [
          {
            name: "Shivam Sharma",
            title: "PBP",
            img: shivam
          }
        ]
      }
    ]
  },
  xw: {
    people: [
      {
        name: "Amit Katkar",
        dept: "Xebia West",
        title: "Director - Delivery",
        img: amitk,
        sub: [
          {
            name: "Isha Deshmukh",
            title: "PBP",
            img: isha
          }
        ]
      }
    ]
  },
  apac: {
    people: [
      {
        name: "Shankar Dastidar",
        dept: "Xebia UK/Europe",
        title: "Chief Operations Officer",
        subtitle: "Regional Ops Head: APAC",
        img: shankard
      },
      {
        name: "Ashish Proothi",
        dept: "Xebia APAC",
        title: "Director - APAC",
        img: ashish,
        sub: [
          {
            name: "Nirali Sutaria",
            title: "PBP",
            img: nirali
          }
        ]
      }
    ]
  }
}