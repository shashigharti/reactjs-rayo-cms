import React, { createContext, useReducer, useEffect } from 'react';
import { BannerReducer } from '../reducers/BannerReducer';

export const BannerContext = createContext();
const initialState = {
  banners: [],
};
const BannerContextProvider = props => {
  const [banners, dispatch] = useReducer(BannerReducer, initialState, () => {
    const localData = localStorage.getItem('banners');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('banners', JSON.stringify(banners));
  }, [banners]);
  return (
    <BannerContext.Provider value={{ banners, dispatch }}>{props.children}</BannerContext.Provider>
  );
};

export default BannerContextProvider;
