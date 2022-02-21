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
import sanjeev from './assets/people/sanjeev.jpeg';
import shivam from './assets/people/shivam.jpg';
import nancy from './assets/people/nancy.jpg';
import sudharshana from './assets/people/sudharshana.jpg';
import saakshi from './assets/people/saakshi.jpg';
import isha from './assets/people/isha.png';
import vishal from './assets/people/vishal.jpg';
import diksha from './assets/people/diksha.jpg';

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
      },
      {
        name: "Sanjeev Sharma",
        dept: "Xebia Global Services",
        title: "Chief Delivery Officer",
        img: sanjeev
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
        img: vipul,
        sub: [
          {
            name: "Sudarshana Mukherjee",
            title: "HRBP",
            img: sudharshana
          }
        ]
      }
    ]
  },
  xuk: {
    people: [
      {
        name: "Vijit Ghatge",
        dept: "Xebia UK",
        title: "Director - UK Head",
        img: vijit,
        sub: [
          {
            name: "Nancy Sawhney",
            title: "HRBP",
            img: nancy
          }
        ]
      }
    ]
  },
  xme: {
    people: [
      {
        name: "Shankar Garg",
        dept: "Xebia Middle East",
        title: "Associate Director - Sales",
        img: shankar,
        sub: [
          {
            name: "Vishal Yadav",
            title: "HRBP",
            img: vishal
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
        title: "Head Of Operations and Chief Information Security Officer",
        img: madhur
      }
    ]
  },
  xs: {
    people: [
      {
        name: "Vikas Agarwal",
        dept: "Xebia South",
        title: "Director - Delivery",
        img: vikas,
        sub: [
          {
            name: "Diksha Thakuri",
            title: "HRBP",
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
        title: "Director - Delivery",
        img: anurag,
        sub: [
          {
            name: "Shivam Sharma",
            title: "HRBP",
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
            title: "HRBP",
            img: isha
          }
        ]
      }
    ]
  },
  apac: {
    people: [
      {
        name: "Ashish Proothi",
        dept: "Xebia APAC",
        title: "Director - APAC",
        img: ashish,
        sub: [
          {
            name: "Saakshi Gupta",
            title: "HRBP",
            img: saakshi
          }
        ]
      }
    ]
  }
}