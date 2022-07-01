const data = [
  // Dashboard group
  [
    {
      name: 'dashboard',
      link: '/dashboard',
      icon: 'analytics-sharp',
      color: '#adb5bd',
      group: 'dashboard',
    },
    {
      name: 'daily summary',
      link: '/daily-summary',
      icon: 'layers-sharp',
      color: '#adb5bd',
      group: 'dashboard',
    },
    {
      name: 'calendar',
      link: '/calendar',
      icon: 'calendar-sharp',
      color: '#adb5bd',
      group: 'dashboard',
    },
  ],
  // Activities group
  [
    {
      name: 'activities',
      link: '/activities',
      icon: 'accessibility-sharp',
      subGroup: ['all activities', 'running', 'cycling'],
      subGroups: [
        {
          name: 'all activities',
          link: '/activities/all-activities',
        },
        {
          name: 'running',
          link: '/activities/running',
        },
        {
          name: 'cycling',
          link: '/activities/cycling',
        },
        {
          name: 'favorites',
          link: '/activities/favorites',
        },
      ],
      group: 'activities',
    },
    {
      name: 'health stats',
      link: '/health-stats',
      icon: 'heart-sharp',
      subGroup: [
        'sleep',
        'weight',
        'hydration',
        'calories',
        'heart rate',
        'stress',
      ],
      subGroups: [
        {
          name: 'sleep',
          link: '/health-stats/sleep',
        },
        {
          name: 'weight',
          link: '/health-stats/weight',
        },
        {
          name: 'hydration',
          link: '/health-stats/hydration',
        },
        {
          name: 'calories',
          link: '/health-stats/calories',
        },
        {
          name: 'heart rate',
          link: '/health-stats/heart-rate',
        },
        {
          name: 'stress',
          link: '/health-stats/stress',
        },
      ],
      group: 'activities',
    },
    {
      name: 'workouts',
      icon: 'barbell-sharp',
      group: 'activities',
      link: '/workouts',
    },
    {
      name: 'training',
      icon: 'stopwatch-sharp',
      group: 'activities',
      link: '/training',
    },
    {
      name: 'gears',
      icon: 'cog-sharp',
      group: 'activities',
      link: '/gears',
    },
    {
      name: 'insights',
      icon: 'bulb-sharp',
      group: 'activities',
      link: '/insights',
    },
    {
      name: 'reports',
      icon: 'bar-chart-sharp',
      group: 'activities',
      link: '/reports',
    },
  ],
  // Connections group
  [
    {
      name: 'connections',
      icon: 'person-sharp',
      group: 'connections',
      link: '/connections',
    },
    {
      name: 'groups',
      icon: 'people-sharp',
      group: 'connections',
      link: '/groups',
    },
  ],
  // Records group
  [
    {
      name: 'records',
      icon: 'trophy-sharp',
      group: 'records',
      link: '/records',
    },
    {
      name: 'goals',
      icon: 'rocket-sharp',
      group: 'records',
      link: '/goals',
    },
  ],
];

export default data;
