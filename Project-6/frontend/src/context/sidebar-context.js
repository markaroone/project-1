import React from 'react';

const SidebarContext = React.createContext({
  isActivitiesExpanded: false,
  isHealthStatsExpanded: false,
  expandActivities: () => {},
  collapseActivities: () => {},
  expandHealthStats: () => {},
  collapseHealthStats: () => {},
});

export default SidebarContext;
