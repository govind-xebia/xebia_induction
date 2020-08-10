
import leaves from './assets/sun-umbrella.svg'
import awards from './assets/trophy.svg';
import performance from './assets/diamond.svg';

export const contentData = {
  in: {
    leave: {
      title: 'Leave',
      data: [
        {
          title: 'Earned Leaves',
          content: [
            '15 in a year',
            'Max 30 accumulated'
          ]
        },
        {
          title: 'Casual/Sick Leaves',
          content: [
            '11 in a year',
            'Lapse at the end of the year'
          ]
        },
        {
          title: 'Xebia Holidays',
          content: [
            '10 Festive Holidays',
            '2 Optional Holidays'
          ]
        },
        {
          title: 'Birthday/Anniversary',
          content: [
            '1 in a year',
            'For Birthday or Anniversary'
          ]
        },
        {
          title: 'Gift a leave',
          content: [
            'Employees can gift max 3 EL to other employee'
          ]
        },
        {
          title: 'Paternity Leave',
          content: [
            '5 days within 1 month of child birth',
            'Applicable for the first 2 children'
          ]
        },
        {
          title: 'Maternity Leave',
          content: [
            '26 weeks'
          ]
        },
        {
          title: 'Weekly Hours',
          content: [
            '45 hours'
          ]
        },
        {
          title: 'Attendance Regularisation',
          content: [
            '4 per month'
          ]
        }
      ]
    },
    rewards: {
      title: 'Rewards & Recognition',
      data: [
        {
          title: 'GEM (Go the Extra Mile)',
          content: [
            'Monthly R&R to recognise the outstanding efforts of our employees as individual contributor or in a team setting',
            'Managers across all regions nominate Xebians who have met the criteria',
            'Winners will announced and published across different platforms'
          ]
        }
      ]
    },
    performance: {
      title: 'Performance Management',
      data: [
        {
          title: null,
          content: [
            'Performance cycle is July - June for all confirmed employees',
            'An Employee should have been in continuous employment for past six months to become eligible for increment. Should join on/before December 31st',
            'Is dependent on the Performance ratings and recommendations by the Head of Department.'
          ]
        }
      ]
    },
    longterm: {
      title: 'Longterm Service Awards',
      data: [
        {
          title: 'Hattrick Hero',
          content: [
            '3 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 3 gm. With Xebia imprinted',
            '15 days of Basic Pay',
            'Experience worth INR 10,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Fabulous Five',
          content: [
            '5 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 5 gm. With Xebia imprinted',
            'One month of Basic Pay',
            'Experience worth INR 30,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Terrific Ten',
          content: [
            '10 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 10 gm. With Xebia imprinted',
            'One month of Basic Pay',
            'Experience worth INR 50,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Flawless Fifteen',
          content: [
            '15 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 15 gm. With Xebia imprinted',
            'One month of Basic Pay',
            'Experience worth INR 100,000/- from **Assorted Benefits Basket'
          ]
        }
      ]
    }
  },
  us: {
    leave: {
      title: 'Leave',
      data: [
        {
          title: null,
          content: [
            'Annual Leave - 10 in an year (FTE’s)',
            '10 Fixed Holiday'
          ]
        }
      ]
    },
    longterm: {
      title: 'Longterm Service Awards',
      data: [
        {
          title: 'Hattrick Hero',
          content: [
            '3 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 3 gm. With Xebia imprinted',
            '50,000/- INR equivalent in USD',
            'Experience worth INR 10,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Fabulous Five',
          content: [
            '5 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 5 gm. With Xebia imprinted',
            '80,000/- INR equivalent in USD',
            'Experience worth INR 30,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Terrific Ten',
          content: [
            '10 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 10 gm. With Xebia imprinted',
            '100,000/- INR equivalent in USD',
            'Experience worth INR 50,000/- from **Assorted Benefits Basket'
          ]
        },
        {
          title: 'Flawless Fifteen',
          content: [
            '15 years of service',
            'Certificate signed by CEO',
            'Gold Coin weight 15 gm. With Xebia imprinted',
            '150,000/- INR equivalent in USD',
            'Experience worth INR 100,000/- from **Assorted Benefits Basket'
          ]
        }
      ]
    }
  }
};

export const policyData = {
  in: [
    {
      icon: leaves,
      title: 'Leave'
    },
    {
      icon: awards,
      title: 'Rewards & Recognition'
    },
    {
      icon: performance,
      title: 'Performance Management'
    },
    {
      icon: awards,
      title: 'Longterm Service Awards'
    }
  ],
  us: [
    {
      icon: leaves,
      title: 'Leave'
    },
    {
      icon: awards,
      title: 'Longterm Service Awards'
    }
  ]
}