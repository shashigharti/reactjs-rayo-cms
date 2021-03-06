import React, { createContext, useReducer, useEffect } from 'react';
import { AgentReducer } from '../reducers/AgentReducer';

export const AgentContext = createContext();
const initialState = {
  agents: [],
};
const AgentContextProvider = props => {
  const [agents, dispatch] = useReducer(AgentReducer, initialState, () => {
    const localData = localStorage.getItem('agents');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('agents', JSON.stringify(agents));
  }, [agents]);
  return (
    <AgentContext.Provider value={{ agents, dispatch }}>{props.children}</AgentContext.Provider>
  );
};

export default AgentContextProvider;
