import madhur from "./assets/people/madhur.jpg";
import brijesh from "./assets/people/brijesh.jpg";
import anurag from "./assets/people/anurag.png";
import vipul from "./assets/people/vipul.png";
import anand from "./assets/people/anand.png";
import ashok from "./assets/people/ashok.png";
import praval from "./assets/people/praval.png";
import glory from "./assets/people/glory.jpg";
import amitk from "./assets/people/amitkatkar.png";
import arvind from "./assets/people/arvind.jpg";
import rajat from "./assets/people/rajat.jpg";
import runki from "./assets/people/runki.jpg";
import ajay from "./assets/people/ajay.jpg";
import ashish from "./assets/people/ashish.jpg";
import shivam from "./assets/people/shivam.jpg";
import seema from "./assets/people/seema.png";
import david from "./assets/people/david.jpg";
import nirali from "./assets/people/nirali.jpg";
import isha from "./assets/people/isha.png";
import diksha from "./assets/people/diksha.jpg";
import meghas from "./assets/people/meghas.jpg";
import lokesh from "./assets/people/lokeshc.jpg";
import sanjeev from "./assets/people/sanjeevbora.jpg";
import manu from "./assets/people/manugoel.jpg";
import shankard from "./assets/people/shankardastidar.jpg";
import bartosz from "./assets/people/bartosz.jpg";
import jyotendra from "./assets/people/jyotendra.jpg";
import taha from "./assets/people/taha.jpg";
import abhishek from "./assets/people/abhishek.jpg";
import sachin from "./assets/people/sachin.jpg";
import gaurav from "./assets/people/gaurav.png";

import binx from "./assets/logo/binx.png";
import dataDriven from "./assets/logo/data-driven.svg";
import stackState from "./assets/logo/stack-state.svg";
import xccelerated from "./assets/logo/xccelerated.png";
import xebia from "./assets/logo/xebia.png";
import xspirit from "./assets/logo/xspirit.svg";

export const treeData = {
  title: "Xebia Group",
  logo: xebia,
  hasRight: true,
  children: [
    {
      title: "Xebia Netherlands",
      logo: xebia,
    },
    {
      title: "Xspirit",
      logo: xspirit,
      bgSize: "50%",
    },
    {
      title: "Binx.io",
      logo: binx,
      bgSize: "60%",
    },
    {
      title: "Xebia Global Services",
      logo: xebia,
      hasRight: true,
    },
    {
      title: "Go DataDriven",
      logo: dataDriven,
      bgSize: "40%",
    },
    {
      title: "Xccelerated",
      logo: xccelerated,
      bgSize: "80%",
    },
    {
      title: "Stack State",
      logo: stackState,
      bgSize: "80%",
    },
  ],
};

export const globalData = [
  {
    title: "Xebia India",
    logoText: "XI",
    hasRight: true,
  },
  {
    title: "Xebia Middle East",
    logoText: "XMEA",
  },
  {
    title: "Xebia US",
    logoText: "XUS",
  },
  {
    title: "Xebia UK/Europe",
    logoText: "XUK",
  },
  {
    title: "Xebia Academy",
    logoText: "XA",
  },
  {
    title: "Xebia APAC",
    logoText: "APAC",
  },
];

export const indiaData = [
  {
    title: "Xebia North",
    logoText: "XN",
  },
  {
    title: "Xebia South",
    logoText: "XS",
  },
  {
    title: "Xebia West",
    logoText: "XW",
  },
];

export const groupData = {
  global: {
    people: [
      {
        name: "Anand Sahay",
        dept: "Xebia Global Services",
        title: "CEO",
        img: anand,
      },
      {
        name: "Ashok Fenn",
        dept: "Xebia Global Services",
        title: "Head Strategic Growth",
        img: ashok,
      },
      {
        name: "Madhur Arya",
        dept: "Xebia Global Services",
        title: "Chief People Officer & Innovation",
        img: madhur,
      },
      {
        name: "Glory Nelson",
        dept: "Xebia Global Services",
        title: "Chief People Officer & Innovation",
        img: glory,
      },
      {
        name: "Runki Goswami",
        dept: "Xebia Global Services",
        title: "Chief Marketing Officer",
        img: runki,
      },
      {
        name: "Arvind Sharma",
        dept: "Xebia Global Services",
        title: "Chief Financial Officer",
        img: arvind,
      },
      {
        name: "Rajat Gupta",
        dept: "Xebia Global Services",
        title: "Chief Digital Officer",
        img: rajat,
      },
      {
        name: "Sachin Gambhir",
        dept: "Xebia Global Services",
        title: "Global Head Presales",
        img: sachin,
      },
    ],
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
            img: lokesh,
          },
        ],
      },
    ],
  },
  xus: {
    people: [
      {
        name: "Vipul Baijal",
        dept: "Xebia US",
        title: "Head-Americas",
        img: vipul,
        sub: [
          {
            name: "Nirali Sutaria",
            title: "PBP",
            img: nirali,
          },
        ],
      },
      {
        name: "Manu Goel",
        dept: "Xebia US",
        title: "Chief Operations Officer",
        img: manu,
      },
      {
        name: "David Richards",
        dept: "Xebia US",
        title: "David Richards",
        img: david,
      },
    ],
  },
  xuk: {
    people: [
      {
        name: "Bartosz Jabłoński",
        dept: "Xebia UK/Europe",
        title: "Chief Growth Officer",
        img: bartosz,
      },
      {
        name: "Madhur Arya",
        dept: "Xebia UK/Europe",
        title: "Chief Operations Officer",
        img: madhur,
        sub: [
          {
            name: "Seema Bhatia",
            title: "PBP",
            img: seema,
          },
        ],
      },
      {
        name: "Jyotendra Thockhom",
        dept: "Xebia UK/Europe",
        title: "Country Sales Head",
        img: jyotendra,
      },
      {
        name: "Ajay John",
        dept: "Xebia UK/Europe",
        title: "Account Manager",
        img: ajay,
      },
    ],
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
            img: meghas,
          },
        ],
      },
      {
        name: "Mohamed Taha",
        dept: "Xebia Middle East",
        title: "Sales Head",
        subtitle: "XMEA",
        img: taha,
        sub: [
          {
            name: "Megha S",
            title: "PBP",
            img: meghas,
          },
        ],
      },
    ],
  },
  xi: {
    people: [
      {
        name: "Gaurav Kundra",
        dept: "Xebia India",
        title: "Head Of Operations",
        subtitle: null,
        img: gaurav,
      },
      {
        name: "Praval Sharma",
        dept: "Xebia India",
        title: "Country Head Sales",
        img: praval,
      },
    ],
  },
  xs: {
    people: [
      {
        name: "Abhishek Kulshreshtha",
        dept: "Xebia South",
        title: "Regional Sales Head",
        img: abhishek,
        sub: [
          {
            name: "Diksha Singh",
            title: "PBP",
            img: diksha,
          },
        ],
      },
    ],
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
            img: shivam,
          },
        ],
      },
    ],
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
            img: isha,
          },
        ],
      },
    ],
  },
  apac: {
    people: [
      {
        name: "Shankar Dastidar",
        dept: "Xebia UK/Europe",
        title: "Chief Operations Officer",
        subtitle: "Regional Ops Head: APAC",
        img: shankard,
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
            img: nirali,
          },
        ],
      },
    ],
  },
};
