import React, { useReducer } from 'react';
import SidebarContext from './sidebar-context';

const sidebarReducer = (state, action) => {
  if (action.type === 'EXP_ACT') {
    return { ...state, isActivitiesExpanded: true };
  }

  if (action.type === 'COL_ACT') {
    return { ...state, isActivitiesExpanded: false };
  }

  if (action.type === 'EXP_HEA') {
    return { ...state, isHealthStatsExpanded: true };
  }

  if (action.type === 'COL_HEA') {
    return { ...state, isHealthStatsExpanded: false };
  }

  return state;
};

const SidebarProvider = ({ children }) => {
  const [sidebarState, dispatchSidebar] = useReducer(sidebarReducer, {
    isActivitiesExpanded: false,
    isHealthStatsExpanded: false,
  });

  const expandActivitiesHandler = () => {
    dispatchSidebar({ type: 'EXP_ACT' });
  };

  const collapseActivitiesHandler = () => {
    dispatchSidebar({ type: 'COL_ACT' });
  };

  const expandHealthStatsHandler = () => {
    dispatchSidebar({ type: 'EXP_HEA' });
  };

  const collapseHealthStatsHandler = () => {
    dispatchSidebar({ type: 'COL_HEA' });
  };

  const sidebarContext = {
    isActivitiesExpanded: sidebarState.isActivitiesExpanded,
    isHealthStatsExpanded: sidebarState.isHealthStatsExpanded,
    expandActivities: expandActivitiesHandler,
    collapseActivities: collapseActivitiesHandler,
    expandHealthStats: expandHealthStatsHandler,
    collapseHealthStats: collapseHealthStatsHandler,
  };

  return (
    <SidebarContext.Provider value={sidebarContext}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
