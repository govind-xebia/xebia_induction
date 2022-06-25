import outlook from './assets/outlook.png';
import zoho from './assets/zoho.png';
import teams from './assets/teams.png';
import dkm from './assets/dkm.png';
import github from './assets/github.png';
import jira from './assets/jira.png';
import xenie from './assets/xenie.png';
import zohopeople from './assets/zohopeoples.png';
import sharepoint from './assets/sharepoint.png';
import adp from './assets/adp.png';
import tallie from './assets/tallie.jpg';
import advantageclub from './assets/advantageclub.jpg';
import greenhouse from './assets/greenhouse.png';

const toolsData = {
  in: [
    {
      toolId: 'outlook',
      logo: outlook,
      desc: 'Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.',
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-outlook/id951937596',
        android: 'https://play.google.com/store/apps/details?id=com.microsoft.office.outlook'
      }
    },
    {
      toolId: 'zoho',
      logo: zoho,
      desc: 'A one stop shop for all our employees. Zoho is our complete HR solution. Automate and simplify operations like Leave, company policies & attendance.',
      appLinks: null
    },
    {
      toolId: 'zohopeople',
      logo: zohopeople,
      desc: 'Zoho People take care of your HR processes. From onboarding and attendance management to time tracking and appraisals.',
      appLinks: {
        ios: 'https://apps.apple.com/app/hr-management-zoho-people/id680525956',
        android: 'https://play.google.com/store/apps/details?id=com.zoho.people'
      }
    },
    {
      toolId: 'xenie',
      logo: xenie,
      desc: "Xenie Desk- Xebia’s Internal HelpDesk - All HR, Admin, Finance and ISMS related queries can be asked at Xenie - a mobile app for Xebia employees.",
      appLinks: {
        ios: 'https://apps.apple.com/in/app/xenie/id1518385987',
        android: 'https://play.google.com/store/apps/details?id=com.xebia.xebia_desk'
      }
    },
    {
      toolId: 'teams',
      logo: teams,
      desc: "Microsoft Teams is Xebia's internal chat application. You are always connected with Xebians through this easy and user friendly app.",
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-teams/id1113153706',
        android: 'https://play.google.com/store/apps/dev?id=6720847872553662727&hl=en_US'
      }
    },
    {
      toolId: 'dkm',
      logo: dkm,
      desc: "Struggling with queries related to payroll? DKM is the place to go! It is our payroll management system. Access your salary slips, investment details and FBP details.",
      appLinks: null
    },
    {
      toolId: 'github',
      logo: github,
      desc: "GitHub is a Git repository hosting service which is used by Xebia as an official code repository.",
      appLinks: {
        ios: 'https://apps.apple.com/app/github/id1477376905',
        android: 'https://play.google.com/store/apps/details?id=com.github.android'
      }
    },
    {
      toolId: 'jira',
      logo: jira,
      desc: "Jira is our offical tool for bug tracking, issue tracking, and project management.",
      appLinks: {
        ios: 'https://apps.apple.com/app/jira-cloud-by-atlassian/id1006972087',
        android: 'https://play.google.com/store/apps/details?id=com.atlassian.android.jira.core'
      }
    },
    {
      toolId: 'sharepoint',
      logo: sharepoint,
      desc: "SharePoint is a web-based platform that integrates with Microsoft Office. SharePoint is primarily sold as a document management and storage system.",
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-sharepoint/id1091505266',
        android: 'https://play.google.com/store/apps/details?id=com.microsoft.sharepoint'
      }
    },
    {
      toolId: 'advantageclub',
      logo: advantageclub,
      desc: 'Advantage Club is a platform for Xebians to get discounts on numerous brand and to redeem Xebia points. You can avail benefits and redeem your points on more than 10,000 brands across 12+ categories such as Dining, Shopping, Wellness, Travel & more.',
      appLinks: {
        ios: 'https://apps.apple.com/in/app/advantage-club/id1003770310',
        android: 'https://play.google.com/store/apps/details?id=activity.workadvantage.com.workadvantage'
      }
    },
    {
      toolId: 'greenhouse',
      logo: greenhouse,
      desc: 'Recruitment tool which be the common platform for all employees to post their referrals, apply for Internal Job Postings and know about the open positions in Xebia.',
      appLinks: null
    }
  ],
  us: [
    {
      toolId: 'outlook',
      logo: outlook,
      desc: 'Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.',
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-outlook/id951937596',
        android: 'https://play.google.com/store/apps/details?id=com.microsoft.office.outlook'
      }
    },
    {
      toolId: 'zoho',
      logo: zoho,
      desc: 'A one stop shop for all our employees. Zoho is our complete HR solution. Automate and simplify operations like Leave, company policies & attendance.',
      appLinks: null
    },
    {
      toolId: 'zohopeople',
      logo: zohopeople,
      desc: 'Zoho People take care of your HR processes. From onboarding and attendance management to time tracking and appraisals.',
      appLinks: {
        ios: 'https://apps.apple.com/app/hr-management-zoho-people/id680525956',
        android: 'https://play.google.com/store/apps/details?id=com.zoho.people'
      }
    },
    {
      toolId: 'adp',
      logo: adp,
      desc: "ADP is the place to  enroll for Health Benefits, look at your Pay stubs. It is our payroll management system.",
      appLinks: {
        ios: 'https://apps.apple.com/app/zoho-desk/id692742510',
        android: 'https://apps.apple.com/in/app/adp-mobile-solutions/id444553167'
      }
    },
    {
      toolId: 'teams',
      logo: teams,
      desc: "Microsoft Teams is Xebia's internal chat application. You are always connected with Xebians through this easy and user friendly app.",
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-teams/id1113153706',
        android: 'https://play.google.com/store/apps/dev?id=6720847872553662727&hl=en_US'
      }
    },
    {
      toolId: 'tallie',
      logo: tallie,
      desc: "Have any reimbursements to be filled. Go to Tallie and raise the same.",
      appLinks: {
        ios: 'https://apps.apple.com/in/app/tallie/id570070764',
        android: 'https://play.google.com/store/apps/details?id=com.springahead.mobile.android'
      }
    },
    {
      toolId: 'github',
      logo: github,
      desc: "GitHub is a Git repository hosting service which is used by Xebia as an official code repository.",
      appLinks: {
        ios: 'https://apps.apple.com/app/github/id1477376905',
        android: 'https://play.google.com/store/apps/details?id=com.github.android'
      }
    },
    {
      toolId: 'jira',
      logo: jira,
      desc: "Jira is our offical tool for bug tracking, issue tracking, and project management.",
      appLinks: {
        ios: 'https://apps.apple.com/app/jira-cloud-by-atlassian/id1006972087',
        android: 'https://play.google.com/store/apps/details?id=com.atlassian.android.jira.core'
      }
    },
    {
      toolId: 'sharepoint',
      logo: sharepoint,
      desc: 'SharePoint is a web-based platform that integrates with Microsoft Office. SharePoint is primarily sold as a document management and storage system.',
      appLinks: {
        ios: 'https://apps.apple.com/app/microsoft-sharepoint/id1091505266',
        android: 'https://play.google.com/store/apps/details?id=com.microsoft.sharepoint'
      }
    },
    {
      toolId: 'greenhouse',
      logo: greenhouse,
      desc: 'Recruitment tool which be the common platform for all employees to post their referrals, apply for Internal Job Postings and know about the open positions in Xebia.',
      appLinks: null
    }
  ]
};

export default toolsData;
